OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 根因分析 (`root-cause-analysis`@5)

行动前须自行理清的问题：
- 可观察到的失效是什么，哪些只是伴随出现的症状?
- 哪项条件若保留不变，即使换了人员也会让同样的失效再次发生?
- 哪些地方的归因止于个人，实际上却仍缺少控制措施或流程?

## 根因分析

## Teacher questions

- 可观察到的失效是什么，哪些只是伴随出现的症状?
- 哪项条件若保留不变，即使换了人员也会让同样的失效再次发生?
- 哪些地方的归因止于个人，实际上却仍缺少控制措施或流程?

## Purpose

失败反复发生，或其后果无法靠快速修补安全解决时，用本程序解释。区分可见症状、直接原因、促成条件及可控系统条件。目标不是归咎个人或找到唯一根因，而是形成因果链、有负责人的预防行动，以及显示复发风险是否改变的核实信号。

## Use when

用于反复事件、漏检的质量问题、服务退化、重复缺陷、交接遗漏或反复出现的临时补救。适合以可观察事件、涉及群体、期间和影响限定的运营或产品失败。团队把工具、工作量、激励、培训和控制的可预期相互作用归咎于个人时尤其有用。可用日志、时间线、访谈、样本或鱼骨分类，但主张须关联观察或明确标注的假设。

## Do not use when

不得用它裁定约束性法律或政策义务、从一次失误推断意图，或在没有具体失败目标时重设计系统。没有重复模式的单次事件，可能更适合 causal-reasoning 或事件复查。不要只因最近的触发因素容易命名就称其为根因。系统有多个独立路径，或缺少基础证据时，不承诺一次干预即可消除复发。

## Inputs to establish

编写问题陈述，包含可观察失败、受影响范围、时间窗、影响以及“复发”的含义。收集时间线、预期与实际流程、相关记录及已知控制措施。把人员或组件列为系统参与者，不预设其为原因。最多问两个可能改变诊断的问题，例如：“换了操作者也发生过同样的失败吗？”或“哪个控制措施本应检出它？”明确标注不可获得的日志、回忆性陈述及未测试假设。

## Procedure

1. **界定失败。** 描述何事、何地、何时、频率及影响，区分事件与解读。**可见输出/状态变化：**公开一句话问题陈述及预期与观察的边界；未知范围标为 unverified（未核实）。
2. **区分层次。** 将观察分为症状、直接原因、促成条件、控制弱点或系统条件。证据支持多个路径时保留多条分支。**可见输出/状态变化：**形成有标签的原因清单，而非归责陈述。
3. **构建因果链。** 用时间线、“为什么”提问、流程图或因果分组，把每个候选因素连接到下一个可观察条件。分支进入推测时停止，并记录缺少的核查。**可见输出/状态变化：**公开因果链，每条重要联系附支持状态。
4. **检验反事实可控性。** 对每个拟议根本条件，问在其余背景相似时，移除或改变它是否可合理预防失败。考虑独立路径及仍可能失效的控制。**可见输出/状态变化：**把候选因素标为 controllable（可控）、contributory（有贡献）、unresolved（未解决）或 contradicted（被反证）；不用编造数字排名。
5. **选择行动与负责人。** 区分限制当前伤害的控制行动、改变条件的预防行动，以及检出复发的检测行动。每项重要行动指定负责人、完成期限边界及测试信号。**可见输出/状态变化：**公开与因果链关联的行动登记表，包含未完成行动时的剩余风险。
6. **核实并修订。** 定义什么后续观察能显示复发减少或诊断错误。新证据反驳某条联系时重开因果链；不能只因宣布行动就结束分析。**可见输出/状态变化：**公开 held（暂缓）、provisional（暂定）或 supported（有支持）的诊断，附带日期的核实条件及下一项核查。

## Public output contract

给出有界问题陈述、因果链、可控根本条件及控制、预防、检测的区别。展示每条重要联系的证据状态、行动负责人、核实信号和剩余风险。结论卡可概括诊断及结论转变条件；详细分支放在追溯记录。根本条件尚未确立时，使用“目前最有支持的解释是”，保留暂定状态，不把单一责任者写成事实。

## Evidence and uncertainty rules

重复症状不证明重复原因。带时间戳的记录、可复现测试或直接观察，与事后回忆或合理故事应区别对待。工作量、界面设计、激励、培训、交接或缺失控制可能有贡献时，绝不把“人为错误”当作完整诊断。没有可辩护的尺度及来源时，不计算风险优先级或复发概率；只有说明依据时，才用重要、合理、未解决、后果轻微等定性标签。分支冲突时展示冲突，并暂缓作出根本条件结论。

## Stop conditions

失败边界未知、区分原因所需记录不可获得，或所有候选因素都依赖未测试的叙述时，停止并暂缓作出结论。只有直接证据支持且已检查系统条件时，才可把个人称为原因。伤害持续时，优先安全控制及合格的事件或安全程序，不追求精致的根因解释。

## Complement handoff

诊断需要转化为前瞻性清单，说明流程或设计可能如何失败及应指定哪些控制时，交给 failure-mode-effects-analysis。仅传递公开失败边界、因果分支及已知控制；补充方法不得重述无依据的归责或编造严重程度分数。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"root-cause-analysis-positive-01","decisive_features":["recurring_failure","diagnose"],"expected_behavior":"route","expected_route":"root-cause-analysis","kind":"positive","rationale":"重复的运营失败需要区分症状、原因、控制及复发核实。","schema":"opensocrates.template-example/1.0.0","template_prompt":"仓库采用新的拣货流程后，每隔几周就发错货，团队需要预防措施而非又一次道歉。"},{"case_id":"root-cause-analysis-positive-02","decisive_features":["recurring_failure","diagnose","failure_risk"],"expected_behavior":"route","expected_route":"root-cause-analysis","kind":"positive","rationale":"请求寻找可控的系统条件及预防负责人，不仅是直接触发因素。","schema":"opensocrates.template-example/1.0.0","template_prompt":"本地重启后服务中断仍反复出现；有日志、交接记录和告警负责人信息，可据此构建因果链。"},{"case_id":"root-cause-analysis-positive-03","decisive_features":["recurring_failure","diagnose"],"expected_behavior":"route","expected_route":"root-cause-analysis","kind":"positive","rationale":"重复复发及区分层次的请求，直接指向根因分析。","schema":"opensocrates.template-example/1.0.0","template_prompt":"多个班次反复出现质量漏检，管理者希望区分操作者行动与界面、工作量及缺失控制条件。"},{"case_id":"root-cause-analysis-negative-01","decisive_features":["causal_question","confounding"],"expected_behavior":"route","expected_route":"causal-reasoning","kind":"negative","rationale":"目标是干预效果和反事实比较，而非反复失败的因果链。","schema":"opensocrates.template-example/1.0.0","template_prompt":"新的定价邮件后注册增加，问题是与对照组相比，是否由邮件导致增加。"},{"case_id":"root-cause-analysis-negative-02","decisive_features":["feedback_delay","causal_question"],"expected_behavior":"route","expected_route":"systems-thinking","kind":"negative","rationale":"带延迟的反馈结构，比具体事件诊断更广泛。","schema":"opensocrates.template-example/1.0.0","template_prompt":"客户投诉、人员配置与积压在一年中相互强化；用户需要找到动态模式中的杠杆点。"},{"case_id":"root-cause-analysis-mechanical-01","decisive_features":[],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"即使原文描述反复事件，排版仍是机械任务。","schema":"opensocrates.template-example/1.0.0","template_prompt":"把事件时间线排成两列表格，不诊断失败原因。"},{"case_id":"root-cause-analysis-explicit-01","decisive_features":["explicit_method","recurring_failure","diagnose"],"expected_behavior":"explicit_primary","expected_route":"root-cause-analysis","kind":"explicit","rationale":"用户明确对反复的运营失败调用本方法。","schema":"opensocrates.template-example/1.0.0","template_prompt":"对反复失败的交接使用 root-cause-analysis，识别预防负责人，不归咎个人。"},{"case_id":"root-cause-analysis-insufficiency-01","decisive_features":["recurring_failure","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"事件边界和证据不足，归责主张既不安全也无依据。","schema":"opensocrates.template-example/1.0.0","template_prompt":"单份匿名报告称发布因某位工程师而失败；不要日志，直接将此人指认为根因。"}]
```
