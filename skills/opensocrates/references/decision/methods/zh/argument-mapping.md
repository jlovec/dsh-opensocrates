OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 论证映射 (`argument-mapping`@5)

行动前须自行理清的问题：
- 实际结论究竟是什么，哪些句子只是在烘托气氛?
- 撤去哪一项前提会使结论不再成立，而非仅仅削弱语气?
- 哪项反对意见仍待解决，怎样才算真正回应了它?

## 论证映射

## Teacher questions

- 实际结论究竟是什么，哪些句子只是在烘托气氛?
- 撤去哪一项前提会使结论不再成立，而非仅仅削弱语气?
- 哪项反对意见仍待解决，怎样才算真正回应了它?

## Purpose

使用本程序揭示主张、依据、反驳与回应如何支持或削弱结论。它生成可审查的论证图，而不是自由联想式思维导图，让共同前提、无支持的连接及未解决的反驳保持可见。本程序可以在决策前澄清争议，但不能仅因把前提放入整齐的结构中就认定其为真。

## Use when

当政策、法律、战略、研究或产品论证包含多层嵌套主张，且不清楚哪些证据支持哪些结论时使用。适用于有多个反驳、回应或共同假设的争议。当核心任务是理清支持和攻击关系，然后说明结论强度或保留条件时使用。

## Do not use when

不要用于简单列表、直接计算或唯一问题是来源质量的任务。不要把关联、时间顺序或主题相似性画成逻辑支持。不要因为图已完整就推断结论可靠，也不要把价值选择隐藏在看似中立的前提中。

## Inputs to establish

明确目标结论、决策或问题、相关范围、直接依据、共同前提、反驳、回应及可用来源。标明每项是事实、规则、推断、偏好还是假设。只有缺失的主张或范围会改变论证图时，才最多提出两个决定性问题；否则标记缺口并继续。

## Procedure

1. 公开顶层结论及其意在支持的决策。将当前状态标为得到支持、暂定、存在冲突或保留，形成可见的论证状态。
2. 公开直接支持前提，并与必须共同成立的前提区分。只绘制明确的支持连接，将每个连接标为已陈述、推断或未核验。
3. 公开每个前提下的次级依据，保留主张到依据的层级关系。有来源或计算参考时附上，并将无支持的连接记录为缺口。
4. 将反驳公开为独立的攻击分支，仅在回应确实回答反驳的实际主张时公开回应。若回应没有改变反驳的证据或范围，将反驳标为未解决。
5. 公开隐藏或共同前提，检验移除每个前提是否改变结论。通过这一状态变化识别最小的重要弱点，而不是把每句话等量计数。
6. 公开论证图判定：最强的支持连接、最弱连接、未解决的反驳，以及冗余或无关分支。区分图的完整性、前提的真实性和推理的有效性。
7. 公开结论的当前证据状态和可观察的转变条件。若缺少重要前提或决定性反驳仍未解决，应降低结论强度或暂缓判断，不要悄悄修补论证。

## Public output contract

返回 `claim_ground_objection_map`、`top_level_conclusion`、`direct_grounds`、`shared_premises`、`subgrounds`、`objections`、`rebuttals`、`unsupported_links`、`map_verdict` 和 `flip_condition`。公开结果应展示简洁的主张—依据—反驳图，而不是私有推理记录。依据使用 **verified**（已核验）、**computed**（已计算）、**inferred**（推断）、**assumed**（假定）、**unverified**（未核验）或 **conflicted**（存在冲突）标签。卡片只包含重要分支，需要时将细节放入追溯记录。

## Evidence and uncertainty rules

来源可以支持某个主张，却未必支持该主张到结论的连接。分别评估直接性、相关性和范围。不要把共同前提重复算作独立支持。质疑证人或测量的回应可能削弱支持连接，但未必证明相反结论。可信依据之间发生冲突时，必须明确展示冲突，并暂缓判断或降低结论强度，除非有明确的优先规则解决冲突。

## Stop conditions

若目标结论或决策范围缺失，且不同解读会产生不同论证图，停止并提出一个阻塞性问题。若重要前提无法得到支持，或决定性反驳无法解决，暂缓判断。若任务只剩来源排序、简单计算或稳定定义，停止并转交更具体的方法。

## Complement handoff

当论证图表明剩余瓶颈是来源质量、研究设计或直接性，而非论证结构时，交给 `evidence-hierarchy`。仅传递主张到来源的连接、无支持的连接及重要冲突。补充方法不应重建完整论证图。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"argument-mapping-positive-01","decisive_features":["argument_dispute","critique","tangled_hierarchy"],"expected_behavior":"route","expected_route":"argument-mapping","kind":"positive","rationale":"任务明确需要主张—依据—反驳结构及无支持连接检测。","schema":"opensocrates.template-example/1.0.0","template_prompt":"绘制这份政策论证的主张、依据、反驳和回应，让我们看到哪些连接缺少支持。"},{"case_id":"argument-mapping-positive-02","decisive_features":["argument_dispute","critique"],"expected_behavior":"route","expected_route":"argument-mapping","kind":"positive","rationale":"必须先理清多个支持和攻击关系，才能判断建议。","schema":"opensocrates.template-example/1.0.0","template_prompt":"究竟哪个前提支持建议，哪些反驳仍未得到回答？"},{"case_id":"argument-mapping-positive-03","decisive_features":["argument_dispute","tangled_hierarchy"],"expected_behavior":"route","expected_route":"argument-mapping","kind":"positive","rationale":"要求的公开结果是由主张、共同前提和反驳组成的结构化图。","schema":"opensocrates.template-example/1.0.0","template_prompt":"为合同立场建立论证图，包括共同假设及最强回应。"},{"case_id":"argument-mapping-negative-01","decisive_features":["source_quality","reconcile_evidence"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"核心瓶颈是来源设计及适用性，属于证据核查。","schema":"opensocrates.template-example/1.0.0","template_prompt":"比较两项研究的证据质量，并说明哪项适用于我们的人群。"},{"case_id":"argument-mapping-negative-02","decisive_features":["explain","tangled_hierarchy"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"请求是自上而下的沟通结构，而非检验支持连接。","schema":"opensocrates.template-example/1.0.0","template_prompt":"先写面向管理层的建议，再写分成三组的理由与支持细节。"},{"case_id":"argument-mapping-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"对提供的列表调整格式不需要论证分析。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将提供的前提列表转为 Markdown 项目符号。"},{"case_id":"argument-mapping-explicit-01","decisive_features":["explicit_method","argument_dispute"],"expected_behavior":"explicit_primary","expected_route":"argument-mapping","kind":"explicit","rationale":"用户明确调用方法以审查反驳及支持结构。","schema":"opensocrates.template-example/1.0.0","template_prompt":"明确使用 argument-mapping，审查这份投资备忘录最强的反驳。"},{"case_id":"argument-mapping-insufficiency-01","decisive_features":["argument_dispute","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"没有可绘图的论证材料，因此方法必须保留判断，而不是编造前提。","schema":"opensocrates.template-example/1.0.0","template_prompt":"绘制论证并判断最弱连接，但不提供结论、前提或来源文本。"}]
```
