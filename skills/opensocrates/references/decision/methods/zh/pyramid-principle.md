OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 金字塔原理 (`pyramid-principle`@5)

行动前须自行理清的问题：
- 如果读者只记得第一句话，那句话是否就是统领全文的答案?
- 支撑要点是否处于同一层级，还是其中一点只是重述整体结论?
- 同级要点采用了什么排列顺序，这种顺序是否发挥了实际作用?

## 金字塔原理

## Teacher questions

- 如果读者只记得第一句话，那句话是否就是统领全文的答案?
- 支撑要点是否处于同一层级，还是其中一点只是重述整体结论?
- 同级要点采用了什么排列顺序，这种顺序是否发挥了实际作用?

## Purpose

用本程序把有充分依据的判断或分析整理成核心观点在前的管理层答复。把同一层级的理由归组，确认每条上层陈述概括其支撑细节，并为同级要点选择一致的顺序。它改善沟通结构，不得使未定的判断显得已经确定。

## Use when

用于报告、决策备忘录、管理层摘要、提案、演示或任何要求先给答案的任务。适合结论已有充分支持，但长篇分析难以快速浏览的情形。在检查基础判断和证据之后使用。

## Do not use when

不得用它跳过缺失证据、隐藏重要冲突，或选择分析尚未得出的结论。理由存在重叠或会遗漏与决策有关的要点时，不要强凑三组。有直接结论时不要把背景放在答案前，但要在卡片中保留必要范围及不确定性。

## Inputs to establish

明确核心问题、当前结论、重要依据、备选方案、读者要作出的决定、范围及证据状态。决定同级理由采用演绎、时间、结构或重要性顺序。仅当读者的决定或结论缺失时，最多问一个问题；否则说明目标读者并继续。

## Procedure

1. 在顶部公开核心问题及一句话的核心观点。将结论标为 supported（有支持）、provisional（暂定）、conflicted（有冲突）或 held（暂缓），形成可见的沟通状态。
2. 公开共同支持核心观点的三到四组理由。每组给出一句关键信息，把重叠或覆盖缺口记为结构缺口。
3. 公开各组的支撑细节，检查纵向关系：关键信息必须概括细节，不能引入新主张。
4. 公开同级组的横向顺序——演绎、时间、结构或重要性——并一致应用。若其他排序会显著改变理解，也记录下来。
5. 按自上而下的顺序公开首要答案、归组理由及支撑细节。保留必要假设、冲突和未核实依据，不要为润色而删去。
6. 公开最强的备选方案或反驳及未选择它的理由。基础判断未定时，将输出状态改为 provisional 或 held，不给出确定的管理层答复。
7. 公开可直接用于卡片的最终结构及可观察的结论转变条件。确认所请求的成果、明确限制、证据检查和不确定性披露都已包含。

## Public output contract

返回 `top_line_answer`、`governing_thought`、`grouped_reasons`、`reason_groups`、`supporting_detail_order`、`scope_and_assumptions`、`alternatives_considered`、`completion_check` 及 `flip_condition`。第一句是结论；背景仅作为后续支持。卡片依据限于重要主张，并标为 **verified**（已核实）、**computed**（计算所得）、**inferred**（推断）、**assumed**（假设）、**unverified**（未核实）或 **conflicted**（有冲突）。结构可嵌入备忘录，但必须保留结论在前的顺序。

## Evidence and uncertainty rules

良好的结构不会提高证据等级。每组理由必须有可见依据；推断的联系不得写成直接事实。同级组有冲突时，展示冲突，不要将其平均化成流畅叙述。缺失依据、备选方案或完成项可能改变答案时，采用暂定或暂缓作出结论，并说明缺失项。

## Stop conditions

没有稳定的核心问题或读者决定，且多个首要答案会有重大差异时，提出一个阻断性问题并停止。基础判断缺乏支持、有冲突或不完整时，暂缓作出结论。答案已经清楚，剩余任务仅为机械排版时，停止本方法，不添加方法说明。

## Complement handoff

理由分组揭示尚未解决的支持、反对或共同前提结构时，交给 `argument-mapping`。传递核心观点、重要理由组及那一条未解决的联系。补充方法不应重排已完成的管理层答复，也不应生成第二个完整金字塔。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"pyramid-principle-positive-01","decisive_features":["explain","tangled_hierarchy"],"expected_behavior":"route","expected_route":"pyramid-principle","kind":"positive","rationale":"基础判断已就绪，请求的瓶颈是结论在前的沟通。","schema":"opensocrates.template-example/1.0.0","template_prompt":"把这份已验证的分析改为管理层备忘录，先给建议，再列归组理由和细节。"},{"case_id":"pyramid-principle-positive-02","decisive_features":["explain","tangled_hierarchy"],"expected_behavior":"route","expected_route":"pyramid-principle","kind":"positive","rationale":"任务要求首要答案、归组理由、纵向概括和横向顺序。","schema":"opensocrates.template-example/1.0.0","template_prompt":"重组报告，将核心观点放在最上方，各部分无重叠地支持它。"},{"case_id":"pyramid-principle-positive-03","decisive_features":["explain","tangled_hierarchy"],"expected_behavior":"route","expected_route":"pyramid-principle","kind":"positive","rationale":"方法整理已形成判断的分析，同时保留重要不确定性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"让管理层能快速浏览这份长篇决策分析，不隐藏不确定性或备选方案。"},{"case_id":"pyramid-principle-negative-01","decisive_features":["argument_dispute","critique"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"任务是检查论证支持，而非重排已定答案。","schema":"opensocrates.template-example/1.0.0","template_prompt":"哪个前提支持建议，最强的未解决反对意见是什么？"},{"case_id":"pyramid-principle-negative-02","decisive_features":["source_quality","critique"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"沟通结构不得替代未解决的基础判断。","schema":"opensocrates.template-example/1.0.0","template_prompt":"判断此建议是否有支持，但证据及备选方案尚未审查。"},{"case_id":"pyramid-principle-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"应用固定排版要求属于机械任务。","schema":"opensocrates.template-example/1.0.0","template_prompt":"应用内部格式规范的标题，并保持所有句子的现有顺序。"},{"case_id":"pyramid-principle-explicit-01","decisive_features":["explicit_method","explain"],"expected_behavior":"explicit_primary","expected_route":"pyramid-principle","kind":"explicit","rationale":"用户明确要求用本方法进行结论在前的管理层沟通。","schema":"opensocrates.template-example/1.0.0","template_prompt":"明确使用 pyramid-principle 重写这份董事会更新，把结论放在前面。"},{"case_id":"pyramid-principle-insufficiency-01","decisive_features":["explain","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"没有稳定判断和读者决定，首要答案将是编造的。","schema":"opensocrates.template-example/1.0.0","template_prompt":"把结论放在前面，但不提供核心问题、结论、证据或读者要作出的决定。"}]
```
