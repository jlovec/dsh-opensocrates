OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 演绎推理 (`deduction`@5)

行动前须自行理清的问题：
- 正在把哪项结论视为必然结论，其依据是哪条明确规则?
- 要使这一步推导成立，哪项隐藏前提必须为真?
- 如果某项前提为假，是整个论证失效，还是只有这次应用失效?

## 演绎推理

## Teacher questions

- 正在把哪项结论视为必然结论，其依据是哪条明确规则?
- 要使这一步推导成立，哪项隐藏前提必须为真?
- 如果某项前提为假，是整个论证失效，还是只有这次应用失效?

## Purpose

用此程序判断结论是否必然由明确前提和规则推出，并将有效性与前提真伪分开。规范化论证、揭示隐藏前提、检查形式，并找出哪个前提失效会使结论不再成立。有效形式本身并不使现实论证成为健全论证。

## Use when

用于规则应用、形式论证检验、合同或政策解释，以及声称结果必须由所述条件推出的主张。相关前提能够明确，且问题是逻辑蕴涵而不是经验概括时适用。

## Do not use when

前提不确定，而真正任务是估计、诊断、概括或更新置信度时，不使用。不要将可能的前提当成已证明前提，不要混淆 `P(E|H)` 与蕴涵，也不要因结论恰好真实而将无效形式称为有效。不要编造用户或适用来源未提供的规则。

## Inputs to establish

明确拟议结论、前提、适用规则或蕴涵关系、范围、定义及各前提的来源。明确标注隐藏前提，并指出任务需要有效性、健全性还是仅条件性结果。只有缺失规则或前提会改变形式时才问一个决定性问题；否则说明条件性假设。

## Procedure

1. 公布结论，将论证规范化为带编号的前提、规则和结论。隐藏前提标为 `[implicit]`，形成可见的形式化状态。
2. 公布论证形式，如肯定前件、否定后件、有效三段论、肯定后件或否定前件。没有已知形式适用时，展示相关结构关系，不强行贴标签。
3. 公布有效性判定：假设前提为真，结论是否必须为真？形式无效时说明反例模式。
4. 公布前提状态表，为每项前提和规则列出来源、范围与证据状态。区分有效形式与健全论证，形成可见的判断更新。
5. 公布使蕴涵失效的前提或规则条件。准确说明什么会破坏蕴涵，区分规则例外与错误前提。
6. 公布结论为健全、有效但不健全、无效或条件性，并说明最小的缺失核查。不要因结论看似合理就提升状态。
7. 公布当前结论及可观察的转变条件。缺少决定性前提或规则时，保留条件蕴涵，但暂缓现实主张。

## Public output contract

返回 `premises`、`hidden_premises`、`rule`、`rule_or_form`、`conclusion`、`validity_verdict`、`premise_status`、`invalidating_premise`、`soundness_verdict` 和 `flip_condition`。结果必须分别说明形式是否有效、前提是否有支持，不能将两者合为一个置信标签。依据使用 **verified**、**computed**、**inferred**、**assumed**、**unverified** 或 **conflicted** 标签。

## Evidence and uncertainty rules

有效性是结构关系，不会核实前提。来源可以支持前提，却不证明规则适用于此范围。隐藏前提在获得支持前仍是假设。前提有争议时，保留条件性结果并降低应用结论的强度或暂缓。不要用单个真实结论证明无效推论有效。

## Stop conditions

缺少适用规则或结论，且可能的形式导致不同结果时，停止并问一个阻塞问题。重要前提无法核查时暂缓现实判断，但若有效的条件性结论存在，应予以报告。任务是概率、因果或比较问题而非蕴涵时，结束此程序。

## Complement handoff

形式争议取决于含糊术语或范围定义时，转交 `conceptual-analysis`。传递规范化前提、争议术语和受影响的规则。补充方法应澄清概念，不重做有效性判定。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"deduction-positive-01","decisive_features":["explicit_rules","explain"],"expected_behavior":"route","expected_route":"deduction","kind":"positive","rationale":"用户要求从明确前提和规则推出形式后果。","schema":"opensocrates.template-example/1.0.0","template_prompt":"该结论是否必然由这些政策前提和所述例外规则推出？"},{"case_id":"deduction-positive-02","decisive_features":["explicit_rules","explain"],"expected_behavior":"route","expected_route":"deduction","kind":"positive","rationale":"明确的规则论证必须区分有效性和健全性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"检查这个合同论证是否有效，以及其前提是否实际获得支持。"},{"case_id":"deduction-positive-03","decisive_features":["explicit_rules","explain"],"expected_behavior":"route","expected_route":"deduction","kind":"positive","rationale":"任务要求规范化论证、揭示隐藏前提并检查形式有效性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"找出使这个合规结论看似可推出的隐藏前提。"},{"case_id":"deduction-negative-01","decisive_features":["competing_explanations","diagnose"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"竞争原因与区分性证据需要溯因推理，而非蕴涵。","schema":"opensocrates.template-example/1.0.0","template_prompt":"几个解释都符合中断情况；选择最佳解释并说明下一项有区分力的测试。"},{"case_id":"deduction-negative-02","decisive_features":["repeated_observations","weak_sample"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"所要求的扩展是归纳性的，取决于样本代表性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"估计这些观察在多大范围内支持关于未来用户的一般主张。"},{"case_id":"deduction-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"为提供列表编号是机械任务。","schema":"opensocrates.template-example/1.0.0","template_prompt":"为提供的前提编号，保留措辞。"},{"case_id":"deduction-explicit-01","decisive_features":["explicit_method","explicit_rules"],"expected_behavior":"explicit_primary","expected_route":"deduction","kind":"explicit","rationale":"用户明确调用形式规则应用与蕴涵检验。","schema":"opensocrates.template-example/1.0.0","template_prompt":"明确使用 deduction，检验所述资格规则是否蕴涵此案例结果。"},{"case_id":"deduction-insufficiency-01","decisive_features":["explicit_rules","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"没有论证形式和重要前提就无法评估有效性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"判断结论是否有效，但不提供前提、规则、范围或结论文本。"}]
```
