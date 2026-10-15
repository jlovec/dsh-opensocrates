OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 决策树分析 (`decision-tree-analysis`@5)

行动前须自行理清的问题：
- 哪些选择现在作出，哪些信息稍后得知，哪些选择只能到那时才作出?
- 哪些概率有来源依据，哪些只是建议所依赖的暂定值?
- 如果第一次观察出现与预期相反的结果，下一步应如何行动?

## 决策树分析

## Teacher questions

- 哪些选择现在作出，哪些信息稍后得知，哪些选择只能到那时才作出?
- 哪些概率有来源依据，哪些只是建议所依赖的暂定值?
- 如果第一次观察出现与预期相反的结果，下一步应如何行动?

## Purpose

用此程序表示随时间展开的决策，其中行动会改变后续可能性，不确定事件会带来后续选择。区分决策节点、机会节点和结果节点，使建议可追溯到信息。数值与概率可界定时可以进行逆向计算；分支无支持时必须暂缓，不制造精确性。

## Use when

用于分阶段上线、试点与扩大实施之间的选择、维护或更换时机、等待检测的选项，以及其他有条件分支的决策。行动顺序重要、后续选择取决于观察结果、后果可以用有来源的数值或明确标注的定性描述表示时适用。当问题不是哪个选项现在得分更高，而是新信息出现后仍能采用哪种策略时，决策树有用。

## Do not use when

不用于无实质顺序或机会分支的静态比较、纯机械流程图，或没有裁量空间的约束规则。共享原因或依赖较早结果的事件不能画成独立分支。概率、结果值或条件行动无法界定时，不计算期望值。若不确定性很深，一致的外部未来比分支算术更重要，转交 scenario-planning。

## Inputs to establish

说明决策点、可能行动、观察时点、机会事件、终端结果、回退点和各节点可行动的人或系统。记录概率来源、结果单位、时点、成本、效益和分支依赖。概率标为 verified、由已说明数据集计算的 computed、inferred、assumed、unverified 或 conflicted。决定性问题最多两个，例如“哪项观察会改变下一步可用行动？”和“哪个来源界定这个分支？”

## Procedure

1. **确定顺序。** 说明决策、行动与观察顺序、时间跨度及可用回退或停止点。**可见输出/状态变化：** 公布树形框架，将每个已知节点标为决策、机会、观察或结果。
2. **列出条件分支。** 为每个决策节点列出仍可行的行动；为每个机会节点列出互斥结果及其允许的下一步行动。保留依赖，不将其展平成互不相关分支。**可见输出/状态变化：** 建立含父节点、子节点、条件、下一步行动字段的分支清单。
3. **描述终端结果。** 为每个终端分支给出后果、单位、时点、受影响群体和证据状态。不可比较的安全或权利约束留在合计值之外。**可见输出/状态变化：** 公布结果账目，缺失或冲突的数值标为暂缓或未解决。
4. **界定不确定性。** 每项概率附来源或可复现计算；检查条件分支完整且与较早事件相容。无法界定概率时，只在依据已说明的情况下使用可辩护范围或定性分支，不假装树已有数值答案。**可见输出/状态变化：** 公布概率来源图，或针对无法界定分支的暂缓说明。
5. **逆向计算并检验稳健性。** 从终端结果开始，用明示数值与单位计算或比较父分支。在可辩护范围内改变重要概率或结果，展示最坏风险暴露、遗憾或回退阈值，不只依赖一个期望值。**可见输出/状态变化：** 公布包含建议行动、切换条件和剩余风险的逆推表。
6. **确定策略。** 解释当前支持哪项行动、什么观察会触发另一行动、应在哪里暂停决策。未解决分支可能改变策略时，暂缓建议并说明最小的安全观察。**可见输出/状态变化：** 公布决策/机会/结果节点、结果摘要、概率来源、回退点、不确定性及结论卡转变条件。

## Public output contract

返回决策节点、机会节点、结果节点、条件分支、终端后果及回退点。展示每个数值分支的概率来源，计算值附单位和表达式。包含风险暴露、切换或停止条件；策略暂定时包含下一项观察。公开结论不得暗示树证明了结果，详细分支计算与依赖保留在追溯记录中。

## Evidence and uncertainty rules

仅当可识别来源支持分支或结果时用 verified。明示输入的透明算术用 computed，已标注依据推导的后果用 inferred，明确的规划前提用 assumed，未核查输入用 unverified，可信来源不一致时用 conflicted。不要编造基准率、概率、效用、独立性假设或终端值。分支不互斥时先修正结构再计算。没有来源的狭窄数值范围属于虚假精确性。

## Stop conditions

缺少的顺序、下一步行动、分支结果或概率依据可能改变策略时，暂缓。无法在避免重复计算的情况下表示依赖，或约束规则消除裁量时，暂缓。分支空间开放到无法界定时，说明缺失观察并转交 scenario-planning，不产生无依据的期望值。

## Complement handoff

决定准备工作的不是有限机会分支，而是几个一致的外部未来时，转交 scenario-planning。只传递决策框架、重要不确定性、分支信号及无悔或条件行动；不传递无依据概率和私密思考过程。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"decision-tree-analysis-positive-1","decisive_features":["judgment","choose","sequential_choice","unknown_probability"],"expected_behavior":"route","expected_route":"decision-tree-analysis","kind":"positive","rationale":"顺序和有条件的下一步行动重要，历史记录提供可核查的概率与结果来源。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们可现在启动试点或等待，测得的试点结果决定扩大、修订或停止。历史项目记录界定分支结果，决策负责人可在所述审查时点行动。"},{"case_id":"decision-tree-analysis-positive-2","decisive_features":["judgment","sequential_choice","multiple_options","sensitive_inputs"],"expected_behavior":"route","expected_route":"decision-tree-analysis","kind":"positive","rationale":"这是有机会结果和有意义回退点的顺序选择。请求要求来源和范围，不要求无依据的精确性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"分阶段上线时，在立即扩大与先收集测试结果之间选择。每个结果都有记录的结果范围，后续行动随观察而异；展示回退点及各分支来源。"},{"case_id":"decision-tree-analysis-positive-3","decisive_features":["judgment","sequential_choice","irreversible_choice","information_purchase"],"expected_behavior":"route","expected_route":"decision-tree-analysis","kind":"positive","rationale":"检查会在不可逆承诺前改变后续选项。决策树可展示条件行动和回退点，不编造分支概率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"可现在决定供应商，或在锁定合同前进行有记录的检查。检查发现将导向不同供应商或停止，合同负责人已说明结果值和审查日期。"},{"case_id":"decision-tree-analysis-negative-1","decisive_features":["judgment","choose","multiple_options","multiple_objectives"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"可能的同族混淆是 trade-off-analysis：这是静态多标准比较，不是顺序决策树。","schema":"opensocrates.template-example/1.0.0","template_prompt":"按价格、无障碍性、支持和可靠性为三个软件产品排名。没有后续观察或条件行动；请求者想要包含利益相关方权重的明确标准比较。"},{"case_id":"decision-tree-analysis-negative-2","decisive_features":["judgment","explicit_rules","single_feasible_option","binding_rule_without_discretion"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"约束规则决定行动，没有真正决策节点。不得用树规避规则。","schema":"opensocrates.template-example/1.0.0","template_prompt":"政策规定，每项合格请求在满足记录条件时都必须批准。判断团队可否改选更便宜方案；规则适用后没有裁量空间。"},{"case_id":"decision-tree-analysis-mechanical-1","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"这是确定性执行所提供程序，不是对顺序不确定性的判断。","schema":"opensocrates.template-example/1.0.0","template_prompt":"用已核实输入执行此固定 if-then 流程图，返回终端标签。没有机会节点、不确定结果或裁量选择。"},{"case_id":"decision-tree-analysis-explicit-1","decisive_features":["explicit_method","sequential_choice","multiple_options"],"expected_behavior":"explicit_primary","expected_route":"decision-tree-analysis","kind":"explicit","rationale":"用户明确调用方法并提供公开输出需求。无依据分支值必须保持 unverified，不能补入。","schema":"opensocrates.template-example/1.0.0","template_prompt":"使用 decision-tree-analysis 处理分阶段上线。展示决策和机会节点，只用有记录的分支范围，识别可回退的时点。"},{"case_id":"decision-tree-analysis-insufficiency-1","decisive_features":["judgment","sequential_choice","unknown_probability","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"顺序、分支依据和回退条件都是会改变决策的缺口。方法必须暂缓，不编造概率或策略。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们应现在上线还是等待？后续行动不清楚，没有来源界定可能结果，也无人说明什么观察会允许回退。"}]
```
