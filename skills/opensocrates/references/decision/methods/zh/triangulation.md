OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 三角互证 (`triangulation`@5)

行动前须自行理清的问题：
- 如果所有来源都来自同一个最初来源，实际上究竟知道了什么?
- 要提高可信度，还需要哪条独立的第二信息渠道得出一致结果?
- 这些信息渠道是在回应同一项主张，还是仅仅使用相似的措辞?

## 三角互证

## Teacher questions

- 如果所有来源都来自同一个最初来源，实际上究竟知道了什么?
- 要提高可信度，还需要哪条独立的第二信息渠道得出一致结果?
- 这些信息渠道是在回应同一项主张，还是仅仅使用相似的措辞?

## Purpose

用本程序比较独立证据流，防止对某一来源、方法、理论或调查者赋予超出其应得的信任。定义主张及所需证据，检查独立性而非数引文，报告一致、冲突及缺口。只有证据流存在实质差异并与同一主张相关时，一致才提供信息。

## Use when

单一来源或方法可能有偏差、定性与定量证据混合，或利益相关方给出相互竞争的解释时使用。适用于重要主张核查、项目评价、研究综合，以及佐证或冲突能改变行动的决策。

## Do not use when

所有来源重复同一个底层数据集、问题是价值偏好，或直接的形式规则决定案例时，不用。不得将同一报告的多个副本当成独立证据、用平均消除冲突，或不说明不匹配就汇集回答不同主张的证据流。

## Inputs to establish

确定焦点主张、决策、所需证据类型、候选证据流、共同上游来源、方法、调查者、时间窗口及相关偏差风险。选择多样性维度——数据、方法、理论或调查者——并说明它为何能检验主张。仅当主张或独立性边界不明确时，问最多一个决定性问题。

## Procedure

1. 公开焦点主张及它可能改变的决策。说明支持所需证据和主张范围，建立可见的佐证状态。
2. 公开每个证据流的数据来源、方法、调查者、总体、时间及预期偏差。标明用户提供、已检查、推断及不可用的输入。
3. 公开独立性检查：共享数据集、共享测量、共同机构、共同模型或真正独立来源。所有流均承袭同一原始数据时，不得以方法多样性冒充独立性。
4. 公开各流对同一主张的结果：一致、冲突或未涉及。说明每个结果的方向与重要性，不数票。
5. 公开缺口及冲突的合理解释，包括范围、时点、测量、选择和分析差异。在检查解决之前，保留竞争性解释可见。
6. 公开合并证据状态及适当调整的结论。一致可加强已获支持结果；重要冲突应降低结论或暂缓，除非有正当优先规则或范围规则解决争议。
7. 公开下一项独立检查及可观察的反转条件。证据流不独立或未涉及同一主张时，说明三角互证不足，不报告虚假佐证。

## Public output contract

返回 `focal_claim`、`evidence_needed`、`evidence_streams`、`independence_check`、`stream_results`、`agreement_conflict`、`agreement_conflict_gap`、`combined_evidence_state`、`calibrated_conclusion` 及 `flip_condition`。卡片必须概述一致或冲突，列出相关来源链接或安全的用户提供标签。依据使用 **verified**（已核实）、**computed**（已计算）、**inferred**（推断）、**assumed**（假设）、**unverified**（未核实）或 **conflicted**（存在冲突）。

## Evidence and uncertainty rules

独立性取决于共享的数据、测量、利益激励及分析脉络，不是引文数量。未涉及焦点主张的证据流是缺口，不是反面证据。依赖证据流的一致不足以支持强佐证。重要证据流冲突时，保留冲突，并暂缓或降低结果，直到范围、质量或优先依据得到合理说明。

## Stop conditions

不能定义焦点主张或独立性边界时，停止并问一个阻断性问题。所有证据流共享一个未核实来源、重要冲突无解，或回答不同问题时，暂缓。任务仅为来源排序、价值选择或形式蕴涵时，停止。

## Complement handoff

剩余争议是各证据流的质量、设计或适用性时，交接给 `evidence-hierarchy`。传递证据流清单、独立性判断、一致与冲突摘要及缺失检查。补充方法不得依据来源数量推断独立性。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"triangulation-positive-01","decisive_features":["reconcile_evidence","conflicting_sources","source_quality"],"expected_behavior":"route","expected_route":"triangulation","kind":"positive","rationale":"必须检查不同证据流的独立性、一致、冲突及缺口。","schema":"opensocrates.template-example/1.0.0","template_prompt":"独立的调查、行为及行政数据能否佐证这一留存率主张？"},{"case_id":"triangulation-positive-02","decisive_features":["reconcile_evidence","conflicting_sources"],"expected_behavior":"route","expected_route":"triangulation","kind":"positive","rationale":"任务是比较证据流，防止重复的上游数据冒充佐证。","schema":"opensocrates.template-example/1.0.0","template_prompt":"这些相关方引用不同方法；判断他们的证据是否确实指向同一结果。"},{"case_id":"triangulation-positive-03","decisive_features":["reconcile_evidence","conflicting_sources","source_quality"],"expected_behavior":"route","expected_route":"triangulation","kind":"positive","rationale":"重要分歧需要独立性检查及有针对性的下一项证据流。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们的定性访谈与实验不一致；增加哪项独立检查能解决重要冲突？"},{"case_id":"triangulation-negative-01","decisive_features":["source_quality","reconcile_evidence"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"任务评价个别来源质量，而非跨证据流的独立性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"按设计质量、直接性及对目标人口的适用性，给各来源排序。"},{"case_id":"triangulation-negative-02","decisive_features":["new_evidence","unknown_probability","competing_explanations"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"明确的先验到后验更新属于贝叶斯更新，而非三角互证。","schema":"opensocrates.template-example/1.0.0","template_prompt":"新测试结果出现后，更新对这些假说的先前信心。"},{"case_id":"triangulation-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"合并表格是机械操作，不评估独立性或一致性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将所给三张证据表合并为一张，保留所有行。"},{"case_id":"triangulation-explicit-01","decisive_features":["explicit_method","reconcile_evidence"],"expected_behavior":"explicit_primary","expected_route":"triangulation","kind":"explicit","rationale":"用户明确对重要主张调用跨证据流佐证。","schema":"opensocrates.template-example/1.0.0","template_prompt":"明确使用 triangulation，核实客户影响主张是否经得起独立检查。"},{"case_id":"triangulation-insufficiency-01","decisive_features":["reconcile_evidence","source_quality","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"相互依赖的重复来源不能建立三角互证，因此必须暂缓佐证结论。","schema":"opensocrates.template-example/1.0.0","template_prompt":"报告佐证结果，但所有来源都重复一个未知上游数据集，且没有可用独立证据流。"}]
```
