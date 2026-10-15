OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 贝叶斯更新 (`bayesian-updating`@5)

行动前须自行理清的问题：
- 除了当前偏好的说法，先验概率还依据哪些理由?
- 这份证据使各项待考虑假设的可信度向哪个方向变化，理由是什么?
- 基准发生率在合理范围内变化，会使决策改变多少?

## 贝叶斯更新

## Teacher questions

- 除了当前偏好的说法，先验概率还依据哪些理由?
- 这份证据使各项待考虑假设的可信度向哪个方向变化，理由是什么?
- 基准发生率在合理范围内变化，会使决策改变多少?

## Purpose

当新证据出现，且能够有依据地说明先验基础和似然方向时，使用本程序更新对竞争假设的置信程度。它展示基础率、证据方向、后验变化和敏感性。精确概率不是必需的；数值输入缺少来源时，有序的定性更新更诚实，但精确后验必须展示输入和归一化。

## Use when

适用于诊断信号、检验解释、顺序证据、风险估计，以及新观察应改变对竞争假设置信程度的决策。适合询问得到证据后假设可能性的问题，尤其存在忽略基础率的风险时。

## Do not use when

当没有可辩护的先验基础，或连证据在不同假设下的有序方向都无法说明，或任务是严格规则应用时，不要使用。不要混淆 `P(E|H)` 与 `P(H|E)`，不要把同一证据重复作为独立更新，也不要编造精确百分比制造虚假确定性。

## Inputs to establish

明确互斥且覆盖足够充分的假设、当前决策、先验或基础率依据、新证据、各假设下的似然方向或数值、证据项之间的依赖关系及行动阈值。只有缺失的先验或证据定义会改变更新时，才最多提出两个决定性问题；否则使用注明性质的有序先验。

## Procedure

1. 公开竞争假设集合和决策阈值。说明更新对象，并将假设标为用户提供、有来源支持或暂定，形成可见的更新状态。
2. 公开各假设的先验依据，包括基础率来源、参照总体或有界的有序先验。若先验未知，展示不确定性，不要选用方便的数字。
3. 公开每项证据及其在各假设下的方向：支持、削弱或大体中立。检查各项是否独立，还是部分重复使用同一信号。
4. 只有输入有充分依据时，才以精确算术公开后验变化；否则说明定性更新或范围。展示竞争假设的归一化，保留从先验到后验的变化方向。
5. 公开对先验和似然假设的敏感性。指出会逆转排序或使结果越过行动阈值的数值或方向变化。
6. 公开当前领先假设、后验状态及最能改善决策的下一项证据。如果较低排序但合理的假设仍重要，继续展示它。
7. 公开更新后的结论和可观察的转变条件。若先验或似然方向缺失，暂缓判断或保持暂定，不要报告编造的后验。

## Public output contract

返回 `hypotheses`、`prior_basis`、`evidence_direction`、`posterior_change`、`normalization_or_update_range`、`sensitivity`、`decision_threshold` 和 `flip_condition`。卡片必须区分计算出的后验与有序或推断式更新。依据使用 **verified**（已核验）、**computed**（已计算）、**inferred**（推断）、**assumed**（假定）、**unverified**（未核验）或 **conflicted**（存在冲突）标签；基础率不会仅因是数字就自动成为已核验。

## Evidence and uncertainty rules

先验必须来自可辩护的基础率、有来源的专家估计或先前的后验。似然是 `P(E|H)`，不是得到证据后的假设概率。不要对相互依赖的证据更新两次。可信输入不一致时，展示冲突并降低结论强度或暂缓判断。若敏感性变化使结果跨越行动阈值，应说明决策脆弱。

## Stop conditions

当假设集合或证据定义缺失，且不同选择会逆转行动时，停止并提出一个阻塞性问题。没有可辩护的先验或似然方向，或依赖关系妨碍可靠更新时，暂缓判断。实际任务是严格规则应用、寻找解释或来源质量排序时，停止本程序。

## Complement handoff

若主要未解决任务是生成和比较解释，而不是更新已经定义的假设集合，交给 `abduction`。传递观察证据、候选假设和区分性检验。补充方法不应重复后验计算。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"bayesian-updating-positive-01","decisive_features":["new_evidence","unknown_probability","competing_explanations"],"expected_behavior":"route","expected_route":"bayesian-updating","kind":"positive","rationale":"任务需要先验、证据方向、后验变化及对基础率的敏感性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"考虑竞争诊断各自不同的基础率，这个阳性检验应如何改变它们的几率（odds）？"},{"case_id":"bayesian-updating-positive-02","decisive_features":["new_evidence","unknown_probability","competing_explanations"],"expected_behavior":"route","expected_route":"bayesian-updating","kind":"positive","rationale":"顺序证据应更新竞争假设，不要重复计算信号。","schema":"opensocrates.template-example/1.0.0","template_prompt":"随着这些信号依次到达，更新我们对两个发布假设的置信程度。"},{"case_id":"bayesian-updating-positive-03","decisive_features":["new_evidence","unknown_probability"],"expected_behavior":"route","expected_route":"bayesian-updating","kind":"positive","rationale":"请求的证据判断是后验与行动阈值的敏感性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"在可信范围内改变先验发生率和似然假设时，展示建议是否会逆转。"},{"case_id":"bayesian-updating-negative-01","decisive_features":["source_quality","reconcile_evidence"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"任务是校准来源质量，而不是更新已定义的假设集合。","schema":"opensocrates.template-example/1.0.0","template_prompt":"先按直接性和研究质量排列来源，再决定主张可以表述得多强。"},{"case_id":"bayesian-updating-negative-02","decisive_features":["competing_explanations","diagnose"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"未要求先验更新时，生成解释和区分性检验属于 abduction。","schema":"opensocrates.template-example/1.0.0","template_prompt":"列出这个异常的竞争解释，并提出区分它们的检验。"},{"case_id":"bayesian-updating-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"复制数值是机械性任务，不得触发概率推理。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将提供的先验值复制到分析工作表中。"},{"case_id":"bayesian-updating-explicit-01","decisive_features":["explicit_method","new_evidence"],"expected_behavior":"explicit_primary","expected_route":"bayesian-updating","kind":"explicit","rationale":"用户明确选择基于证据的置信程度更新。","schema":"opensocrates.template-example/1.0.0","template_prompt":"明确使用 bayesian-updating，在这个新欺诈信号出现后调整置信程度。"},{"case_id":"bayesian-updating-insufficiency-01","decisive_features":["new_evidence","unknown_probability","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"没有假设与输入来源的数值后验会是编造的精度。","schema":"opensocrates.template-example/1.0.0","template_prompt":"给出后验概率，但不提供竞争假设、先验依据或似然信息。"}]
```
