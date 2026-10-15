# dsh-opensocrates

[OpenSocrates](https://github.com/ParkerHwang/OpenSocrates) 的 48 种推理方法，作为
DeepSeek Harness 的**预设（agent preset）**提供。

选择 `OpenSocrates` 预设的会话即可使用 `opensocrates` 技能；其他预设的会话完全看不到它。

## 这是什么

OpenSocrates 上游是一个**方法内容包**，不是运行时工具。它自带四种宿主集成：

| 宿主 | 交付物 | hook | 可执行运行时 |
|---|---|---|---|
| Codex | 原生插件 | 7 个 | 冻结 Python 二进制 |
| Claude Code | 原生插件 | 4 个 | 冻结 Python 二进制 |
| Claude Chat / Cowork | **纯内容 ZIP** | 无 | 无 |
| Antigravity | 规则 + skill | 无 | 无 |

上游**没有 DSH 目标**，且 `--host dsh` 会被直接拒绝：

```console
$ npx opensocrates@1.5.2 install --host dsh
error: --host must be one of: all, codex, claude, antigravity, claude-chat
```

本包因此**不移植上游的 hook 链路**，而是取上游自己发布的**内容型产物**
（`opensocrates-<v>-claude-chat-skills.zip`，官方描述为 host-neutral、无 hook、
无可执行文件、无遥测），把它挂成 DSH 的一个 **作用域技能提供者（scoped skill provider）**。

### 为什么不是字节级移植

上游 hook 是「每次事件 fork 一个进程 → 跑冻结运行时 → 发起一次 LLM 路由调用」：

```
原生事件 → ${PLUGIN_ROOT}/bin/launch.sh hook <host> <event>
        → runtime/<platform>/opensocrates-runtime
        → Python adapter → selector（一次 LLM 路由）→ 拼装指令注入
```

但它的 `packaging/platforms.json` 只发布 **`darwin-arm64` 与 `windows-x64`**，
`linux-x64` 明确列在 `unvalidated_platforms`；`launch.sh` 里也是对非 Darwin/arm64
直接 `pass_through unsupported_platform`。本机是 Linux x86_64，release 资产中
**没有任何 linux 包**。所以「原样移植 hook」等于自行交叉编译官方未验证的冻结运行时。

DSH 侧有更干净的等价物（`system-prompt/assemble`、`agent/pre-step` 等进程内
waterfall 事件），但本包**刻意不用**：OpenSocrates 的主流程是「技能按需加载 + 按指引
读取方法正文」，技能路径已完整满足，且零 fork、零额外 LLM 调用、零常驻提示词开销。

## 单一语言：仅简体中文

按项目要求只保留 `zh`。上游 SKILL.md 同时链接十种语言的 guide，
**单纯删文件会留下死链**，因此 `tools/build-payload.mjs` 在裁剪的同时：

- 把全部 `guide.<locale>.md` / `catalog.<locale>.json` 链接重写为 `zh`
- 删除其余九种语言的控制器段落与指南段落
- 合并重复链接（上游同一 guide 以两种语言标签各列一次）
- 构建后自检：**零死链**，否则退出码非 0

裁剪结果：**7.0 MiB → 0.65 MiB**，48 篇 zh 方法的 SHA-256 与上游 manifest
**48/48 全部一致**（内容未被改动，只是去掉了其他语言）。

## 目录结构

| 路径 | 作用 |
| --- | --- |
| `package.json` | DSH bundle 清单（`dsh.bundle.patch`） |
| `cordis.patch.yml` | **生成物**：声明 `opensocrates` 预设 |
| `index.js` | 作用域技能提供者（约 25 行） |
| `tools/gen-preset.mjs` | 从本机 DSH 的 `standard` 预设生成 `cordis.patch.yml` |
| `tools/build-payload.mjs` | 从官方 ZIP 生成 `skills/`（裁剪 + 链接重写 + 自检） |
| `skills/opensocrates/` | 载荷（zh，57 个文件） |

### 为什么 `cordis.patch.yml` 是生成的

**预设的 `plugins` 是完整子列表，不是叠加层**——预设之间不继承。所以
`opensocrates` 预设必须把主机的整套工具面**原文重述**一遍。手抄会腐烂；
`gen-preset.mjs` 从当前安装的 DSH 重新推导，并逐字保留 `!!js` 表达式与注释：

```sh
node tools/gen-preset.mjs          # 重新生成
node tools/gen-preset.mjs --check  # 检查是否漂移（CI 用）
```

DSH 升级后重新生成即可拿到新的主机插件行。

## 安装

```sh
export PATH=/home/joey/.local/share/pnpm/bin:$PATH
dsh plugin --profile <profile> add link:/home/joey/dsh/dsh-opensocrates
dsh --profile <profile> --dump-config | grep -A3 preset-opensocrates
```

卸载：

```sh
dsh plugin --profile <profile> remove dsh-opensocrates
```

> 预设声明由 `@deepseek-ai/dsh-web-app` bundle 提供（`agent-preset-registry`）。
> `headless` profile 没有预设注册表，且其 one-shot runner 明确拒绝编排预设会话
> （`dsh-headless/lib/index.js`：*"runs under agent preset … which the one-shot runner
> does not compose"*），因此**验证必须用 web profile**。

## 使用

在 Web UI 新建会话时选择 `OpenSocrates` 预设，然后正常描述任务：

> 我们原本打算购买一个托管工具，但现在工作流程必须离线运行。
> 应该购买、自己开发，还是暂时用手工处理？

技能会指引模型读取 `references/decision/guide.zh.md`，按 `features.json` +
`catalog.zh.json` 打分选出 0–2 个方法，再读取方法**完整正文**后才作答。

## 重建载荷

```sh
# 1. 取官方内容型产物（无 hook、无运行时、无遥测）
curl -sL -o /tmp/chat.zip \
  https://github.com/ParkerHwang/OpenSocrates/releases/download/v1.5.2/opensocrates-1.5.2-claude-chat-skills.zip

# 2. 生成 skills/（内置死链与完整性自检）
node tools/build-payload.mjs --zip /tmp/chat.zip --locale zh
```

## 验证状态

已实测（web profile + 临时 profile，真实 GUI 会话）：

- ✅ 预设出现在预设选择器中，描述正确
- ✅ 选 `OpenSocrates` 的会话技能目录含 `opensocrates`
- ✅ **反证**：切到 `Standard` 预设后同一目录**不含** `opensocrates` —— 作用域生效
- ✅ 主流程：agent 加载技能 → 读取 zh guide / features / catalog → 读取
  `trade_methods/zh/trade-off-analysis.md` 等 4 篇方法完整正文
- ✅ 48/48 zh 方法与上游 manifest 哈希一致
- ✅ 零死链

未验证 / 已知边界：

- 未在 DSH 宿主重启后复验（本包只改 profile 级 bundle，重启后由 bundles 列表装配）
- 未移植上游 hook 的「每次用户消息自动预选方法」行为（见上文设计取舍）
- 仅 zh；`--locale` 其他值需自行扩展（脚本支持）

## 许可与归属

载荷来自 OpenSocrates（MIT）。见 `skills/opensocrates/LICENSE` 与
`skills/opensocrates/THIRD_PARTY_NOTICES.md`。本适配层同为 MIT。
