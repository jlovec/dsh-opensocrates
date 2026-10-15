OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 证据层级 (`evidence-hierarchy`@5)

行动前须自行理清的问题：
- 这属于哪一类主张，什么类型的来源才能实际支持它?
- 这个来源与当前人群、时间和问题的关系有多直接?
- 如果去掉最令人印象深刻的引文，剩余的证据状态是什么?

## 证据层级

## Teacher questions

- 这属于哪一类主张，什么类型的来源才能实际支持它?
- 这个来源与当前人群、时间和问题的关系有多直接?
- 如果去掉最令人印象深刻的引文，剩余的证据状态是什么?

## Purpose

根据支持来源的质量、直接性、适用性及偏倚风险，调整主张的结论强度。对主张分类，比较研究或证据设计，不将固定的证据层级视为通用标准，并说明最终证据状态和结论强度。较低层级的来源若直接适合问题，而更强的设计不适合，仍可能有用。

## Use when

研究、政策、产品实验、专家意见、用户报告或其他证据混杂，而回答需要有依据的强度标签时使用。适用于判断来源是否支持主张、研究是否适合目标情境，以及证据质量不同时如何调整措辞。

## Do not use when

主要争议是价值偏好而非事实支持，或形式规则、因果模型、来源冲突方法更有针对性时，不使用。不得仅凭声望排名，不得自动丢弃相关的低层级证据，也不得未经直接性与局限检查就称来源很强。

## Inputs to establish

明确主张、目标人群或情境、主张类型（效果、预测、机制或体验）、决策阈值、来源、研究设计、样本、测量和已知冲突。标明各来源是直接证据、间接证据，还是仅提供背景。只有目标情境影响适用性时，最多提出1个决定性问题。

## Procedure

1. 公开主张、目标情境和决策阈值。说明主张涉及效果、预测、机制还是体验，建立可见的证据审查状态。
2. 公开主张与来源对应表，包括来源类型、设计、样本或依据、直接性、范围。逐一标为已核查、用户提供、推断或不可用。
3. 公开质量维度：设计严谨性、偏倚风险、测量有效性、完整性和适用性，使用带出处的定性或顺序等级。不得编造精确的综合分数。
4. 公开各来源在证据层级中的位置及其局限。解释该来源为何对当前主张较强或较弱，不将层级位置当作普遍权威。
5. 公开来源间的一致、不一致及缺失证据。保留可信的冲突；没有合理的综合规则时，不把互不相容的结果平均为一个数字。
6. 公开最终证据状态及校准后的结论措辞：强支持、支持、暂定、未验证、冲突或保留。说明限制措辞的最小来源或适用性缺口。
7. 公开下一项验证行动与可观察的结论改变条件。缺少决定性支持时，保留或降低主张强度，不将高风险结论当作已确立事实。

## Public output contract

返回 `claim`、`claim_type`、`claim_to_source_table`、`quality_limits`、`quality_dimensions`、`hierarchy_position_and_limits`、`agreement_and_conflicts`、`missing_evidence`、`resulting_evidence_state`、`calibrated_conclusion` 和 `flip_condition`。卡片须显示证据状态，并在适用时提供安全的来源链接或用户提供的来源标签。依据使用 **verified**、**computed**、**inferred**、**assumed**、**unverified** 或 **conflicted** 标签。

## Evidence and uncertainty rules

设计层级只是指导，不能代替与问题的契合度。检查直接性、人群、结果、时间、测量、选择、流失和报告偏倚。专家意见可能说明机制，却不能估算效应大小；用户报告可能揭示体验，却不能确立普遍程度。来源有实质分歧，或最佳来源是间接证据时，降低或暂缓给出结果并说明局限。

## Stop conditions

目标情境或主张未定义，且适用性将改变决策时，提出1个阻断问题后停止。没有来源直接支持重要主张、冲突无法解决，或质量局限妨碍安全地标注强度时，暂缓判断。问题属于价值选择、形式蕴涵或生成解释，而非证据校准时，停止本程序。

## Complement handoff

独立的证据流可相互印证或揭示重要冲突时，转交 `triangulation`。传递主张与来源对应表、质量局限和未解决的分歧；补充程序应检查独立性与趋同，不重新建立来源排名。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"evidence-hierarchy-positive-01","decisive_features":["source_quality","reconcile_evidence","conflicting_sources"],"expected_behavior":"route","expected_route":"evidence-hierarchy","kind":"positive","rationale":"任务需要主张与来源对应、质量局限和校准后的证据强度。","schema":"opensocrates.template-example/1.0.0","template_prompt":"这些研究中，哪项直接支持效果主张？我们的措辞应有多强？"},{"case_id":"evidence-hierarchy-positive-02","decisive_features":["source_quality","reconcile_evidence"],"expected_behavior":"route","expected_route":"evidence-hierarchy","kind":"positive","rationale":"须按直接性、偏倚及情境适合度衡量不同证据设计。","schema":"opensocrates.template-example/1.0.0","template_prompt":"比较专家意见、用户调查和对照实验对这项政策决策的适用性。"},{"case_id":"evidence-hierarchy-positive-03","decisive_features":["source_quality","conflicting_sources","reconcile_evidence"],"expected_behavior":"route","expected_route":"evidence-hierarchy","kind":"positive","rationale":"重要的来源冲突需要校准证据状态，不能简单投票。","schema":"opensocrates.template-example/1.0.0","template_prompt":"各来源对机制存在分歧；识别质量局限，并判断是否应暂缓对该主张作出结论。"},{"case_id":"evidence-hierarchy-negative-01","decisive_features":["reconcile_evidence","conflicting_sources","source_quality"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"主要任务是检查证据流的独立性和趋同，属于三角互证。","schema":"opensocrates.template-example/1.0.0","template_prompt":"用独立的数据和方法检查相互冲突的来源是否趋向同一主张。"},{"case_id":"evidence-hierarchy-negative-02","decisive_features":["value_conflict","choose"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"不能只因存在来源，就把价值偏好变成证据层级问题。","schema":"opensocrates.template-example/1.0.0","template_prompt":"根据哪种结果最符合我们声明的价值观，在这些方案之间选择。"},{"case_id":"evidence-hierarchy-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"排序引用是机械操作，不评估质量或适用性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"按出版日期排列所提供的引用，保留标题。"},{"case_id":"evidence-hierarchy-explicit-01","decisive_features":["explicit_method","source_quality"],"expected_behavior":"explicit_primary","expected_route":"evidence-hierarchy","kind":"explicit","rationale":"用户明确调用混合来源的证据强度校准。","schema":"opensocrates.template-example/1.0.0","template_prompt":"明确使用 evidence-hierarchy，根据可用的研究设计校准这项医学类主张。"},{"case_id":"evidence-hierarchy-insufficiency-01","decisive_features":["source_quality","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"缺少主张与来源输入及适用情境时，强度标签将是任意的。","schema":"opensocrates.template-example/1.0.0","template_prompt":"说明主张是否得到强支持，但不提供主张范围、来源、设计或目标情境。"}]
```
