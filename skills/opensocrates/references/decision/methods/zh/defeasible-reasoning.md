OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 可撤销推理 (`defeasible-reasoning`@5)

行动前须自行理清的问题：
- 默认规则是什么，认为哪项事实会触发这条规则?
- 哪项例外或更具体的规则会撤回默认结论，而不使默认规则普遍失效?
- 质疑是在反驳结论，还是在削弱将这条规则用于此处的理由?

## 可撤销推理

## Teacher questions

- 默认规则是什么，认为哪项事实会触发这条规则?
- 哪项例外或更具体的规则会撤回默认结论，而不使默认规则普遍失效?
- 质疑是在反驳结论，还是在削弱将这条规则用于此处的理由?

## Purpose

用此程序处理通常可推出、但例外或新证据出现时可撤回的结论。明确默认规则、暂定应用，区分反驳型与削弱依据型击败理由，并记录明确撤回条件。结果是受约束的暂定判断，不是把无条件规则说得较弱。

## Use when

用于法律、政策、医学、运营、常识规则等概括允许例外或证据随时间到来的领域。适合“通常”“除非”“初步看来”的推理，以及必须保持可修正而不任意的判断。

## Do not use when

严格规则和确定前提已经蕴涵结果，或问题仅是来源排序或统计更新时，不使用。不列举所有可想象例外，不将可信度问题当作直接矛盾，不仅因陈述最新就给予优先。不能声称没有已知击败理由就证明了结论。

## Inputs to establish

明确默认规则、触发事实、规则范围、已知例外、可能的反驳型和削弱依据型击败理由，以及受影响决策。识别可能优先的更具体规则。规则或触发事实不清楚时，决定性问题最多两个；否则将前提标为暂定。

## Procedure

1. 用“通常 P 蕴涵 Q”等限定形式公布默认规则，并附来源、范围和证据状态。形成可见规则状态。
2. 公布适用事实及初步结论。将结论标为暂定，说明应用默认规则的条件。
3. 分别公布支持非 Q 的反驳型击败理由，以及削弱 P 到 Q 连接的削弱依据型击败理由。每项记录为已核查、被声称或未知。
4. 公布竞争规则，当一条规则的适用范围确为另一条的子集时，运用特定性原则。若特定性不能解决冲突，将当前状态设为 conflicted 或暂缓，不按新近程度或确信语气选择。
5. 公布明确的撤回条件：会导致撤回 Q、削弱论证依据或要求重新判断的可观察事实。条件须比“出现新信息”更具体。
6. 公布考虑已知击败理由后的更新状态：暂定、有支持、已撤回、conflicted 或暂缓。说明结论是因反驳、依据削弱还是未解决冲突而变化。
7. 公布当前结论、适用击败理由和转变条件。决定性触发事实或例外缺失时，暂缓或保持暂定，不升级为确定。

## Public output contract

返回 `default_rule`、`applicable_facts`、`prima_facie_conclusion`、`exceptions_defeaters`、`rebutting_defeaters`、`undercutting_defeaters`、`specificity_resolution`、`withdrawal_conditions`、`current_status` 和 `flip_condition`。结论卡须让暂定性及重要击败理由可见。依据使用 **verified**、**computed**、**inferred**、**assumed**、**unverified** 或 **conflicted** 标签；绝不称默认结论为无条件结论。

## Evidence and uncertainty rules

反驳型击败理由与结论冲突；削弱依据型击败理由削弱事实支持结论的理由，却不证明反面结论。特定性是结构上的优先关系，不是新近性规则。新证据改变状态前须检查范围和独立性。重要击败理由未解决时，降低结果强度或暂缓，并说明所需核查。

## Stop conditions

无法识别默认规则或触发事实，且竞争规则导向不同行动时，停止并问一个阻塞问题。缺少决定性例外、来源或适用条件时，暂缓。规则严格且无例外，或剩余任务是概率性的证据更新时，结束此程序。

## Complement handoff

暂定规则支持已选择的计划，且剩余问题是计划如何失败时，转交 `premortem-analysis`。传递默认结论、已知击败理由和撤回条件。补充方法不得重新分类击败理由或重述规则清单。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"defeasible-reasoning-positive-01","decisive_features":["exception_prone_rule","explicit_rules"],"expected_behavior":"route","expected_route":"defeasible-reasoning","kind":"positive","rationale":"判断使用默认规则，需要明确击败理由与撤回条件。","schema":"opensocrates.template-example/1.0.0","template_prompt":"通常这项政策适用，但哪些例外或新事实会导致撤回当前建议？"},{"case_id":"defeasible-reasoning-positive-02","decisive_features":["exception_prone_rule","explicit_rules"],"expected_behavior":"route","expected_route":"defeasible-reasoning","kind":"positive","rationale":"用户要求在可修正判断中区分反驳型与削弱依据型击败理由。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将直接反驳结论的证据，与削弱支持结论的规则的证据分开。"},{"case_id":"defeasible-reasoning-positive-03","decisive_features":["exception_prone_rule","explicit_rules"],"expected_behavior":"route","expected_route":"defeasible-reasoning","kind":"positive","rationale":"须处理特定性与未解决例外，不假装结果无条件成立。","schema":"opensocrates.template-example/1.0.0","template_prompt":"一般规则和更具体例外同时适用；当前暂定状态是什么？"},{"case_id":"defeasible-reasoning-negative-01","decisive_features":["explicit_rules"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"无例外规则属于演绎或机械应用任务。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将严格的保留规则应用于每条记录，并报告确定性结果。"},{"case_id":"defeasible-reasoning-negative-02","decisive_features":["source_quality","reconcile_evidence"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"任务是证据层级，不是默认规则的击败管理。","schema":"opensocrates.template-example/1.0.0","template_prompt":"按设计质量为这些来源排序，并将主张强度调整到最强适用来源所支持的程度。"},{"case_id":"defeasible-reasoning-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"复制提供的政策文本是机械任务。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将默认规则和例外列表复制到政策模板。"},{"case_id":"defeasible-reasoning-explicit-01","decisive_features":["explicit_method","exception_prone_rule"],"expected_behavior":"explicit_primary","expected_route":"defeasible-reasoning","kind":"explicit","rationale":"用户明确请求默认规则、击败理由和撤回条件分析。","schema":"opensocrates.template-example/1.0.0","template_prompt":"明确使用 defeasible-reasoning 评估这项通常有效的批准规则及其例外。"},{"case_id":"defeasible-reasoning-insufficiency-01","decisive_features":["exception_prone_rule","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"没有默认规则和触发事实，暂定结论会是任意的。","schema":"opensocrates.template-example/1.0.0","template_prompt":"应用默认规则，但不提供规则来源、触发事实、范围或可能例外。"}]
```
