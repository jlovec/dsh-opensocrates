OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 假设映射 (`assumption-mapping`@5)

行动前须自行理清的问题：
- 哪项信念若为假，会改变实际决策，而非仅改变叙述?
- 这项假设涉及可取性、可持续运作性还是实现可行性，该如何检验这一类假设?
- 对于最重要且尚不确定的信念，最小而安全的检验是什么?

## 假设映射

## Teacher questions

- 哪项信念若为假，会改变实际决策，而非仅改变叙述?
- 这项假设涉及可取性、可持续运作性还是实现可行性，该如何检验这一类假设?
- 对于最重要且尚不确定的信念，最小而安全的检验是什么?

## Purpose

使用本程序展示支撑想法的信念，将重要程度与证据分开，并为可能改变决策的假设选择最小的安全检验。它生成按优先级排列的学习对象，而不是对真假的判定。

## Use when

在投入产品想法、运营变更、研究方向或依赖不确定信念的判断之前使用。当团队无法就哪些条件必须为真达成一致、证据强弱不均或需要明确排列检验顺序时有用。在决策仍可安全改变的阶段，尤其适合可逆实验或资源投入之前使用。

## Do not use when

不要用于机械性请求、无裁量空间的约束性规则或不可逆决策。不要为了完成图而公开私密或敏感假设；结果应限于获授权的信息。若没有可观察结果能够区分假设，或检验会造成法律、安全、隐私或重大运营风险，不要编造检验。如果工作是市场实验，向 `lean-startup` 交接已选假设，而不要把这张图扩成完整报告。

## Inputs to establish

明确决策问题、期望结果、拟采取的行动及会实质改变决策的条件。将候选假设收集为可检验陈述，并分别归入需求吸引力、经营可持续性、技术可行性或其他明确领域。记录每项的来源、用户观察、计算或推断。定义最小安全检验选项、约束、负责人、观察期和决策规则。仅在缺失答案会改变最高风险集合或检验安全性时，提出不超过两个简短问题；否则将其标为假定。

## Procedure

1. **公开框架。** 用一份简明记录说明决策问题、预期结果、范围和决策边界。将各边界项标为用户提供、来源已核验、推断或假定。**可见输出／状态变化：** 框架状态。
2. **公开假设清单。** 将每项信念改写为可由观察支持、削弱或仍未解决的陈述。附上所属领域和不成立的后果。**可见输出／状态变化：** 带标签的假设清单。
3. **公开两个轴。** 将每项假设放在有序的重要程度轴和证据状态轴上。只有说明依据时才用高、中、低等标签；支持状态使用 `verified`、`computed`、`inferred`、`assumed`、`unverified` 或 `conflicted`。**可见输出／状态变化：** 重要程度／证据图。
4. **公开最高风险集合。** 选择不成立时会实质改变结果，且支持最弱或存在冲突的假设。解释每项选择，保留无法区分的并列项，并记录未解决的不确定性。**可见输出／状态变化：** 最高风险集合及不确定性。
5. **公开安全检验卡。** 对各项已选假设，说明成本最低的可逆检验、可观察信号、观察期、负责人及决策规则。包含停止或回滚边界。**可见输出／状态变化：** 安全检验卡或暂缓状态。
6. **公开决策图。** 说明支持、削弱、冲突或缺失的信号会如何改变行动：继续、修订、寻找证据或暂缓判断。**可见输出／状态变化：** 暂定结论和转变条件。

## Public output contract

返回可直接放入卡片的字段 `assumptions`、`importance_evidence_axes`、`riskiest_set`、`next_test` 和 `flip_condition`。每项假设必须保留领域、后果及证据状态。`next_test` 必须包含可观察信号、安全边界和决策规则，不得承诺检验证明整个想法。折叠结果最多包含三个重要假设和两个未解决的不确定性，其余分支留在追溯记录中。若缺少决定性假设或检验边界，说明结果为保留或暂定。

## Evidence and uncertainty rules

假设不会因为被重复、重要或看似合理就成为事实。可用时，将 `verified` 主张连接到支持来源；展示 `computed` 主张的输入；把从其他依据得出的判断标为 `inferred`，采用的前提标为 `assumed`，缺少核查的项目标为 `unverified`，分歧标为 `conflicted`。只有明确后果或决策依赖关系时，才使用有序的重要程度。不要编造概率、样本量或检验结果。检验信号只更新已检验情境中的假设，未经进一步支持不能推广。

## Stop conditions

若缺少决策问题、重要后果或公开假设的授权，暂缓给出结果。若两项假设仍并列，而缺少的证据可能改变检验顺序，暂缓给出结果。若检验风险不安全、不合法、不可逆或无法形成有意义的观察，在提出检验之前停止。如果任务是机械性的或决策没有裁量空间，停止本方法并转为适用的直接答复或政策答复。不要把空图变成建议。

## Complement handoff

当已公开的最高风险假设是市场、产品、价值、增长或收入假设，且需要最小学习实验时，交给 `lean-startup`。仅传递假设陈述、领域、后果、证据状态、已选安全信号和决策规则。不要重复完整图，也不要暗示补充程序已经开展了检验。若开放问题主要是额外研究是否值得其成本，单独使用 `value-of-information`。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"assumption-mapping-positive-1","decisive_features":["hidden_assumptions","prioritized_assumptions","testable_claim","plan"],"expected_behavior":"route","expected_route":"assumption-mapping","kind":"positive","rationale":"请求明确需要假设清单、重要程度／证据轴、最高风险集合及下一次检验。访谈笔记是用户提供而非已核验的资料，因此路由必须展示不确定性，不能赋予概率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们正在考虑共享膳食规划服务。列出必须成立的假设，将重要程度与证据分开，并找出第一个安全检验。访谈笔记由用户提供，尚未经独立核查。"},{"case_id":"assumption-mapping-positive-2","decisive_features":["hidden_assumptions","prioritized_assumptions","irreversible_choice","testable_claim"],"expected_behavior":"route","expected_route":"assumption-mapping","kind":"positive","rationale":"存在多个假设领域和作出承诺前的决策。要求的验证仍是优先级问题；结果应标记有来源支持的事实、假设及任何缺失的合规证据。","schema":"opensocrates.template-example/1.0.0","template_prompt":"团队希望自动化发票审核，但不清楚瓶颈在客户需求吸引力、数据技术可行性还是合规经营可持续性。绘制假设，并在采购之前选择风险暴露低的验证步骤。"},{"case_id":"assumption-mapping-positive-3","decisive_features":["prioritized_assumptions","testable_claim","chosen_plan"],"expected_behavior":"route","expected_route":"assumption-mapping","kind":"positive","rationale":"用户要求方法的核心优先级整理，而非已完成的实验。输出可使用有序标签，将证据标为 verified、unverified、assumed 或 conflicted，不得编造分数。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们有五个志愿者排班变更实验提案。按对决策的重要程度和证据强度排列假设，再附上安全观察及会改变计划的规则。"},{"case_id":"assumption-mapping-negative-1","decisive_features":["recurring_failure","causal_question","diagnose"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"这是根本原因分析请求，容易与假设映射的类别混淆。所需结果是因果诊断及控制行动，而非按优先级排列的可检验信念。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们的结账服务本周失败了三次。追踪因果链，识别控制弱点并指定预防负责人；不要提出产品假设图。"},{"case_id":"assumption-mapping-negative-2","decisive_features":["testable_hypothesis","chosen_plan","plan"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"假设已选定，用户要求把市场实验具体化。这属于 lean-startup；路由到此方法会重复映射，而不是定义检验和指标。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们已选定目标客户和落地页实验。定义可指导行动的指标、观察期，以及转向或坚持的检验规则。"},{"case_id":"assumption-mapping-mechanical-1","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"排序标签不涉及判断、不确定性或实验优先级，应直接给出机械性结果。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将这六个假设标签按字母顺序排列，并以编号列表返回。"},{"case_id":"assumption-mapping-explicit-1","decisive_features":["explicit_method","hidden_assumptions","prioritized_assumptions","testable_claim"],"expected_behavior":"explicit_primary","expected_route":"assumption-mapping","kind":"explicit","rationale":"用户明确指定方法和公开结果。显式调用为主要方法，而所需证据标签保留来源边界。","schema":"opensocrates.template-example/1.0.0","template_prompt":"为这个想法使用 assumption-mapping。展示假设、重要程度／证据轴、最高风险集合及下一次安全检验；让无支持的主张明确保持未核验。"},{"case_id":"assumption-mapping-insufficiency-1","decisive_features":["decisive_input_missing","hidden_assumptions","prioritized_assumptions","no_testable_implication"],"expected_behavior":"hold","expected_route":"assumption-mapping","kind":"insufficiency","rationale":"方法适用，但决定性输入缺失。必须保留判断，不要编造假设或检验；下一步请求应明确决策及获授权的安全边界。","schema":"opensocrates.template-example/1.0.0","template_prompt":"排列提案背后假设的优先级，并告诉我们先检验哪项。目前尚无决策问题、期望结果、候选假设或检验约束。"}]
```
