OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 权衡分析 (`trade-off-analysis`@5)

行动前须自行理清的问题：
- 哪些标准无法同时改善，谁决定了它们都具有重要性?
- 按利益受损一方关注的单位衡量，所选方案放弃了什么?
- 哪些属于硬性约束，哪些只是以坚定语气表述的偏好?

## 权衡分析

## Teacher questions

- 哪些标准无法同时改善，谁决定了它们都具有重要性?
- 按利益受损一方关注的单位衡量，所选方案放弃了什么?
- 哪些属于硬性约束，哪些只是以坚定语气表述的偏好?

## Purpose

当可行方案在无法同时改善的各项标准上表现不同时，用本程序使选择透明。区分硬约束与偏好，记录标准或权重为何重要，说明选定方案牺牲什么。结果是建议或暂缓的比较，不是声称一个分数能解决安全、公平、质量、成本、速度或其他价值间的冲突。

## Use when

两个或更多方案在明确目标、相关方优先事项、可测与不可测标准间竞争时使用。适用于采购、设计、政策、人员配置、排序及产品决策，选择取决于权衡而非单一权威事实。参与者对权重有分歧，需要了解分歧会改变建议还是仅改变次要偏好时，尤其有用。

## Do not use when

仅有一个可行方案、约束性规则不留裁量空间，或真正问题是是否值得收集更多信息时，不用。不得将未满足的安全、法律、权利或最低性能要求，变成可由其他利益抵消的低分。不得看到结果后才设权重以让偏爱方案胜出，也不得把无支持的评级当作测量。

## Inputs to establish

说明决定、方案、相关方、标准、硬约束、最低可接受水平、时间范围及实施依赖。每个评级或权重记录来源、负责人、尺度、日期，及观察、计算、推断、假设、未核实或存在冲突的状态。区分序位判断与有依据的基数测量。最多问两个决定性问题，例如“哪项是禁止条件而非偏好？”及“这个权重来自谁明确表达的优先事项？”

## Procedure

1. **界定选择。** 定义决定、可行方案集、时间边界及满意决策须提供的结果。**可见输出或状态变化：**公开选择框架；未知方案或边界标为 **unverified**（未核实）。
2. **区分约束与标准。** 列出否决条件、最低阈值、偏好及可作权衡的结果。排除违反真实硬约束的方案，或解释该约束为何不具约束力。**可见输出或状态变化：**分别公开有独立状态字段的约束与标准清单。
3. **确定来源。** 定义每个标准的含义和方向、评级尺度、每项性能主张的来源及各权重来历。不能为数值尺度提供合理依据时，使用序位标签。**可见输出或状态变化：**公开标准与权重来源图；有争议输入标为 **conflicted** 或 **assumed**（假设）。
4. **比较方案。** 在每项重要标准下展示各方案，包括缺失证据、分配影响及依赖。仅在标准与约束相同的比较中，识别被支配方案。**可见输出或状态变化：**公开附支持状态的方案比较，以及被支配或不可比的权衡列表。
5. **检验建议。** 应用约定权重或透明定性比较，在可辩护范围内改变有争议权重及重要评级。不可补偿标准置于加总分数之外，记录各情景代表谁的偏好。**可见输出或状态变化：**公开建议表，包含选定方案、被否决替代方案、让步及切换条件。
6. **给出暂缓或获支持的结论。** 说明建议依赖什么、接受什么风险、什么观察会推翻它。方案、标准或影响决定的偏好仍缺失时，暂缓比较并指出最小必要澄清。**可见输出或状态变化：**公开标准与权重来源、方案比较、被支配的权衡、建议、不确定性及结论卡片反转条件。

## Public output contract

返回标准、硬约束、方案比较、评级及权重来源、被支配或不可比的权衡、选定方案、让步、接受的风险及反转条件。计算分数须展示尺度、权重、运算输入及单位；序位判断须标明其性质。卡片包含简明建议、附证据状态的依据、剩余不确定性、可观察反转条件及替代方案摘要。详细矩阵及相关方分歧保留在追溯记录中。

## Evidence and uncertainty rules

**verified** 表示可识别来源直接支持性能主张；**computed** 表示从所列评级可复现的转换；**inferred** 表示由已标注比较得出的结论；**assumed** 表示明确偏好或规划前提；**unverified** 表示未核查主张；**conflicted** 表示可信输入不一致。不得将相关方偏好变成客观事实。不得无合理映射就平均不同尺度、把未过阈值藏在总分中，或用权重掩盖缺失事实。有争议权重改变方案选择时，展示两种结果并降低结论强度。

## Stop conditions

可行方案集、硬约束、决定性标准，或改变决定的评级来源缺失时，暂缓。相关方未给出重要偏好且无正当默认值时，暂缓。约束条件被拿来与利益交换，或仅一个可行方案使比较多余时，停止。

## Complement handoff

方案比较已完整，但建议可能在有依据的权重或性能范围内反转时，交接给 `sensitivity-analysis`。仅传递公开标准、方案矩阵、来源、约束及切换变量；不传递隐藏的偏好协商或无依据分数。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"trade-off-analysis-positive-1","decisive_features":["judgment","choose","multiple_options","multiple_objectives","stakeholder_conflict"],"expected_behavior":"route","expected_route":"trade-off-analysis","kind":"positive","rationale":"多个方案在明确标准上竞争，约束与权重来源已分开。比较能揭示让步，而不假装所有价值可互换。","schema":"opensocrates.template-example/1.0.0","template_prompt":"以交付速度、可靠性、无障碍及总成本选择三家供应商之一。采购组记录了哪项要求是硬性否决条件，每个相关方也为其余标准提供了带日期的偏好。"},{"case_id":"trade-off-analysis-positive-2","decisive_features":["judgment","choose","multiple_options","multiple_objectives","source_quality"],"expected_behavior":"route","expected_route":"trade-off-analysis","kind":"positive","rationale":"任务需要关注来源的竞争标准比较，及不可补偿的隐私约束。混合证据可以标注，不必被拉平成同一种。","schema":"opensocrates.template-example/1.0.0","template_prompt":"产品团队须选择平衡性能、可维护性、隐私及用户投入的设计。有些评级由测试数据支持，有些由用户访谈支持；隐私是最低要求而非分数。"},{"case_id":"trade-off-analysis-positive-3","decisive_features":["judgment","choose","multiple_options","multiple_objectives","sensitive_inputs"],"expected_behavior":"route","expected_route":"trade-off-analysis","kind":"positive","rationale":"请求明确要求序位权衡，反转条件很重要。方法可避免虚假精度，同时让选择可见。","schema":"opensocrates.template-example/1.0.0","template_prompt":"两个人员配置计划在覆盖、连续性、成本及工作负荷上效果不同。团队已同意偏好的序位顺序，但未确定精确数值尺度；说明按此顺序哪个计划胜出，以及什么变化会逆转结果。"},{"case_id":"trade-off-analysis-negative-1","decisive_features":["judgment","explicit_rules","single_feasible_option","binding_rule_without_discretion"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"约束性要求被当成可补偿标准。可能适用的是 deontic-reasoning 或合格的合规审查，而非权衡分析。","schema":"opensocrates.template-example/1.0.0","template_prompt":"建筑规范要求特定消防标准。只剩一个合规设计；请求者问能否偏爱较便宜的不合规设计，因为它在便利性上分数更高。"},{"case_id":"trade-off-analysis-negative-2","decisive_features":["judgment","information_purchase","new_evidence","sensitive_inputs"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"可能混淆的同类方法是 value-of-information：当前任务是评估额外信息价值，不是给现有方案加权。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们不确定选择设计前是否要做客户研究。问题是研究能多大程度改变决定，以及其延迟是否值得，而非今天如何比较设计。"},{"case_id":"trade-off-analysis-mechanical-1","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"固定排序是机械操作，没有裁量性的权衡。","schema":"opensocrates.template-example/1.0.0","template_prompt":"按给定单列分数给这些已核实记录排序，返回顺序列表。不要求选择标准、处理偏好冲突或解释建议。"},{"case_id":"trade-off-analysis-explicit-1","decisive_features":["explicit_method","choose","multiple_options","multiple_objectives"],"expected_behavior":"explicit_primary","expected_route":"trade-off-analysis","kind":"explicit","rationale":"用户明确指定方法并要求其公开比较契约。无支持的评级仍为假设或未核实。","schema":"opensocrates.template-example/1.0.0","template_prompt":"对这项选址决定使用 trade-off-analysis。区分硬性否决约束与偏好，保留每项评级来源，展示建议牺牲了什么。"},{"case_id":"trade-off-analysis-insufficiency-1","decisive_features":["judgment","choose","multiple_options","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"可行方案集、决定性标准及偏好来源缺失。建议会变成事后评分，因此必须暂缓比较。","schema":"opensocrates.template-example/1.0.0","template_prompt":"从这些未命名的替代方案中选最佳。我们尚未同意标准、最低可接受条件或应考虑谁的优先事项。"}]
```
