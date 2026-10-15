OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 逻辑树 (`logic-tree`@5)

行动前须自行理清的问题：
- 在这一层级依据哪个单一维度拆分，为什么不用其他维度?
- 哪个叶节点既无检查也无后续行动，为什么仍留在逻辑树中?
- 是否在同一条分支上混用了原因树与行动方法树?

## 逻辑树

## Teacher questions

- 在这一层级依据哪个单一维度拆分，为什么不用其他维度?
- 哪个叶节点既无检查也无后续行动，为什么仍留在逻辑树中?
- 是否在同一条分支上混用了原因树与行动方法树?

## Purpose

使用本程序，将宽泛的诊断、规划或覆盖范围问题分解成分支彼此清晰、总体足够、末端可行动的层次结构。每层选择一个分解轴，区分原因树与方法树，并为每个末端分支附上验证方式或下一行动。树结构用于组织搜索，并不证明每个分支都为真。

## Use when

问题宽泛、原因不明、计划需要覆盖检查，或“为什么”“如何”“由什么构成”的问题需要完整结构时使用。适合诊断、风险覆盖、需求与解决方案探索，尤其是分支重叠会造成责任重复或工作遗漏的情形。

## Do not use when

如果问题是紧密耦合的反馈环，无法负责任地用层次结构表示，或简单列表／直接计算已足够，则不要使用。不要在同层混合原因与方案，不要用“其他”掩盖重要缺口，也不要在下一行动已明确后继续拆分分支。

## Inputs to establish

确定根问题、树类型（`why`、`how` 或 `what`）、成功衡量标准、范围、已知事实与可用检查。选择第一层的分解轴并记录适用理由。仅当根问题或树类型会改变分析时，最多提出一个决定性问题；否则说明有边界的根问题。

## Procedure

1. 公开可衡量的根问题与选定树类型。说明范围与成功衡量标准，建立可见的树结构基线。
2. 使用一个分解轴公开第一层分支，并标明该轴。记录每个分支是观察、推论还是待验证候选。
3. 只有更细的拆分会改变行动或测试时，才公开下一层。每层都以状态更新形式展示互斥性与覆盖检查。
4. 公开末端节点，为每个节点附上一个验证方法、数据请求、负责人或下一行动。仍抽象的节点不是末端；保持树未完成，或缩小根问题。
5. 公开剪除的分支与各自理由，如矛盾证据、超出范围或重复覆盖。不得仅因分支不方便就删除。
6. 根据重要性、证据与可行动性公开优先顺序，不编造数值精度。标出需要独立因果或证据方法的分支。
7. 公开完成的树、覆盖缺口与可观察的结论转变条件。如果关键分支既不能测试也不能限定，暂缓判断或提出一个阻塞性问题。

## Public output contract

返回 `root_question`、`tree_type`、`decomposition_axis`、`mutually_clear_branches`、`branches`、`leaf_tests`、`leaves_with_tests`、`pruned_branches_and_reasons`、`coverage_gaps`、`priority_order` 与 `flip_condition`。公开结果必须展示彼此清晰的分支、总体相关的覆盖范围与可执行末端。卡片依据使用 **verified**、**computed**、**inferred**、**assumed**、**unverified** 或 **conflicted** 标签。不得把树结构本身当作因果主张的证明。

## Evidence and uncertainty rules

ME 与 CE 是独立检查：无重叠不代表覆盖充分，覆盖充分也不代表无重叠。常见公式在其假设与领域相符前，只是候选结构。每个末端的证据或测试必须可识别；没有支持的分支仍是假设。如果分支冲突或遗漏分支会改变决策，披露缺口，并暂缓或降低结论强度。

## Stop conditions

根问题或树类型无法限定，且不同选择会导向不同工作时，停止并提出一个阻塞性问题。重要覆盖缺口没有测试，或分支相互依赖到层次结构会误导时，暂缓。末端行动已明确，剩余工作属于因果、证据或决策方法时，停止本程序。

## Complement handoff

树中选定分支涉及重复故障，且需要因果链而非进一步分解时，移交给 `root-cause-analysis`。传递根问题、选定分支、证据缺口与末端测试。补充方法不应重建无关分支。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"logic-tree-positive-01","decisive_features":["tangled_hierarchy","diagnose","plan"],"expected_behavior":"route","expected_route":"logic-tree","kind":"positive","rationale":"宽泛诊断需要明确分解轴、MECE 检查与末端测试的原因树。","schema":"opensocrates.template-example/1.0.0","template_prompt":"客户流失为什么增加？如何将原因分解成不重叠、可测试的分支？"},{"case_id":"logic-tree-positive-02","decisive_features":["tangled_hierarchy","plan"],"expected_behavior":"route","expected_route":"logic-tree","kind":"positive","rationale":"所请求输出是覆盖充分、可行动的分解。","schema":"opensocrates.template-example/1.0.0","template_prompt":"构建完整的问题树以减少入门流程失败，每个末端都附上验证步骤。"},{"case_id":"logic-tree-positive-03","decisive_features":["tangled_hierarchy","diagnose"],"expected_behavior":"route","expected_route":"logic-tree","kind":"positive","rationale":"任务需要层次分支、覆盖检查与可执行末端。","schema":"opensocrates.template-example/1.0.0","template_prompt":"把这个宽泛风险问题拆成不重叠的分支，让运营团队可分配责任并测试。"},{"case_id":"logic-tree-negative-01","decisive_features":["category_overlap","tangled_hierarchy"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"这是狭窄的分类审查，属于 MECE，不是递归构建树。","schema":"opensocrates.template-example/1.0.0","template_prompt":"检查已有类别是否重叠，以及是否遗漏任何案例。"},{"case_id":"logic-tree-negative-02","decisive_features":["feedback_delay","causal_question"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"相互依赖的反馈环不适合层次结构，需要系统方法。","schema":"opensocrates.template-example/1.0.0","template_prompt":"画出这些变量之间的反馈环，识别强化与平衡动态。"},{"case_id":"logic-tree-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"按给定方式缩进是机械格式任务。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将给定标题缩进成示例所示的相同树结构。"},{"case_id":"logic-tree-explicit-01","decisive_features":["explicit_method","tangled_hierarchy"],"expected_behavior":"explicit_primary","expected_route":"logic-tree","kind":"explicit","rationale":"用户明确选择了层次化诊断结构。","schema":"opensocrates.template-example/1.0.0","template_prompt":"明确使用 logic-tree 组织我们发布延迟的原因。"},{"case_id":"logic-tree-insufficiency-01","decisive_features":["tangled_hierarchy","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"没有有边界的根问题，就不能安全判断覆盖与末端可行动性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"创建完整问题树，但不要说明根问题、范围或成功衡量标准。"}]
```
