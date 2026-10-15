OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 苏格拉底式提问 (`socratic-questioning`@5)

行动前须自行理清的问题：
- 哪项尚未得到的答案会实际改变下一步行动，而非仅增添细节?
- 若向用户提问，所问事项是否本可以先安全地作出假设、以后再撤回?
- 如果用户无法回答，是暂缓、采用可撤回的假设，还是继续追问?

## 苏格拉底式提问

## Teacher questions

- 哪项尚未得到的答案会实际改变下一步行动，而非仅增添细节?
- 若向用户提问，所问事项是否本可以先安全地作出假设、以后再撤回?
- 如果用户无法回答，是暂缓、采用可撤回的假设，还是继续追问?

## Purpose

当用户的少量回答能显著改变问题、证据标准或建议时，使用本程序。通过提问揭示假设、含义、依据、替代方案和影响，同时仍承担给出有界答案的责任。问题是决策辅助工具，不是逃避回答或将用户引向预设结论的手段。

## Use when

当用户的主张、用语、范围、证据或期望后果不明确，而少量澄清会改变处理路径时使用。适用于辅导、教学、商议、自我审视及共同界定问题。只有缺失的回答确实具有决定性时，才用于判断；否则说明合理假设并继续。

## Do not use when

不用于机械任务、可以在安全的限定假设下回答的请求，或反复提问只会拖延行动的情形。不索取私密推理、决策不需要的个人信息，不开展无止境访谈。不使用预设所需答案的诱导性问题。

## Inputs to establish

确定用户的主张或决定、需澄清的用语、当前范围、可用证据、已考虑的替代方案及用户关心的后果。选择不超过三个决定性问题。逐一说明回答将改变什么：问题框架、证据状态、方案排序或完成状态。如果用户不回答，确定安全的替代处理方式。

## Procedure

1. 公开对主张或决定的中性重述及未解决的要点。形成共同的问题状态，但不暗示认同。
2. 公开最多三个有界问题，每个问题附其决策影响及简短回答格式或允许范围。仅以这组可见问题请求澄清，不另设隐藏问卷。
3. 将每个回答记录为用户提供、未回答或含糊，并公开其对范围、用语、证据或替代方案的即时影响，让判断状态的变化可见。
4. 公开回答带出的最强支持依据，以及一个可信反例或替代方案。区分回答本身与关于现实世界的证据。
5. 公开暂定结论或下一项有界行动，包括无需再提问就能做的事。若回答改变了路径，用平实语言说明新路径，不隐瞒变化。
6. 公开剩余不确定性及会推翻结论的可观察条件。只有假设安全且可逆时，才将未回答问题标为假设。
7. 公开当前答案、它如何由已回答的输入得出，以及任务是已完成、暂定还是暂缓。决定性问题仍未获答时，不制造确定性。

## Public output contract

返回 `no_more_than_three_decisive_questions`、`decisive_questions`（最多三个）、`why_each_matters`、`answers_and_status`、`decision_effects`、`provisional_conclusion`、`remaining_uncertainty`、`next_action` 及 `flip_condition`。问题必须可见且有界；最终卡片不得暴露私密思考的对话记录。卡片中最多保留两项未解决的不确定性。依据使用证据状态标签 **verified**（已核实）、**computed**（已计算）、**inferred**（推断）、**assumed**（假设）、**unverified**（未核实）或 **conflicted**（存在冲突）。

## Evidence and uncertainty rules

用户的回答确定偏好、范围或背景，除非其中还提供了可核查证据。没有可识别的支持来源，不得将回答升级为 **verified**。决定性问题未获答时，受影响的主张依重要程度保持 **assumed**、**unverified** 或 **held**（暂缓）。回答相互冲突时，公开冲突；只有一个简短问题能安全解决冲突时，才追加提问。

## Stop conditions

不提问就继续会显著改变行动时，停下来提出选定的问题。最多三个；用户无法回答时，以可逆假设继续，或暂缓判断。路径和结论已足够稳定、可以行动时，或任务是机械操作、不再需要判断时，停止提问。

## Complement handoff

仅当回答揭示多个需要排序和检验的重要假设时，交接给 `assumption-mapping`。传递已回答及未回答的问题集、假设状态及当前结论反转条件。补充方法不得重复苏格拉底式问题，也不得将其变成无界访谈。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"socratic-questioning-positive-01","decisive_features":["decisive_input_missing","ambiguous_terms"],"expected_behavior":"route","expected_route":"socratic-questioning","kind":"positive","rationale":"用户要求一组有界、会改变决定的问题，而非开放式访谈。","schema":"opensocrates.template-example/1.0.0","template_prompt":"只问我会改变本季度是否应推出这项服务的那些问题。"},{"case_id":"socratic-questioning-positive-02","decisive_features":["decisive_input_missing","ambiguous_terms"],"expected_behavior":"route","expected_route":"socratic-questioning","kind":"positive","rationale":"任务明确需要一小组与后果相连的问题来澄清判断。","schema":"opensocrates.template-example/1.0.0","template_prompt":"帮我审视主张背后的假设，但最多问三个问题，并解释每个问题为何重要。"},{"case_id":"socratic-questioning-positive-03","decisive_features":["decisive_input_missing","ambiguous_terms"],"expected_behavior":"route","expected_route":"socratic-questioning","kind":"positive","rationale":"缺失的回答能改变证据标准，应提出这些问题而不造成提问过载。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我不确定这里“好的证据”指什么；请问少数几个会改变评审标准的问题。"},{"case_id":"socratic-questioning-negative-01","decisive_features":["review_completion","explicit_rules"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"任务有固定规则，要求直接检查完成情况，而非通过澄清引导判断。","schema":"opensocrates.template-example/1.0.0","template_prompt":"根据所给要求检查实现是否完整，并列出缺失字段。"},{"case_id":"socratic-questioning-negative-02","decisive_features":["ambiguous_terms"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"用户要的是概念分析本身，而非有界的提问序列。","schema":"opensocrates.template-example/1.0.0","template_prompt":"通过比较正例、反例和边界案例，定义这个有争议的用语。"},{"case_id":"socratic-questioning-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"对已有问题排版是机械操作，不应触发更多提问。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将这五个问题转成 Markdown 编号列表。"},{"case_id":"socratic-questioning-explicit-01","decisive_features":["explicit_method","hidden_assumptions"],"expected_behavior":"explicit_primary","expected_route":"socratic-questioning","kind":"explicit","rationale":"用户明确指定该方法，要求用问题检验前提。","schema":"opensocrates.template-example/1.0.0","template_prompt":"明确调用 socratic-questioning，检验我的决定是否依赖隐藏前提。"},{"case_id":"socratic-questioning-insufficiency-01","decisive_features":["decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"没有目标决定或后果，方法无法限定问题，也无法知道什么具有决定性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"问决定性问题，但不要披露这些问题应影响的决定、主张、范围或后果。"}]
```
