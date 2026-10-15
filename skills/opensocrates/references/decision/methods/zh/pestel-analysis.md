OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- PESTEL 分析 (`pestel-analysis`@5)

行动前须自行理清的问题：
- 哪些外部变化实际会改变这组方案，哪些只是背景噪声?
- 对于重要因素，具体证据和时间范围是什么，而不仅是类别标签?
- 如果只能保留2项PESTEL因素，哪2项仍会改变决策?

## PESTEL 分析

## Teacher questions

- 哪些外部变化实际会改变这组方案，哪些只是背景噪声?
- 对于重要因素，具体证据和时间范围是什么，而不仅是类别标签?
- 如果只能保留2项PESTEL因素，哪2项仍会改变决策?

## Purpose

使用本程序，识别外部政治、经济、社会、技术、环境与法律情境中的重要变化，并将其连接到战略决策。这是有范围的证据扫描，不是要求填满六个空格的清单。结果应说明哪些因素可改变某个选项、在什么时期、通过什么机制，以及什么信号需要重新评估。

## Use when

市场、政策、行业、人口、技术、环境或法律条件可能改变战略的可行性或时机时使用。适用于市场进入、产品方向、投资、政策响应或外部风险审查之前，也适用于更广泛战略中外部情境部分需要证据而非泛泛趋势时。仅扫描对所声明决策重要的因素。

## Do not use when

不适用于原因在流程内部的局部运营故障、内部能力审查，或复制／概括已知事实的机械请求。不要把宽泛的新闻标题列表当作 PESTEL 结论。不要暗示六个维度同等重要、因某因素与决策相邻就具有因果关系，或将未经验证的现行法律当作确定的建议。

## Inputs to establish

确定决策问题、组织或产品、地域与司法管辖区、行业、基线、时间跨度、重要依赖及可能受影响的选项。为有关现行政策、市场、人口、技术、环境或法律的主张识别来源日期与状态。仅在地域、时间跨度或决策范围可能改变推荐时，提出最多两个简短问题。若缺少范围但可安全设立暂定范围，说明该范围，并将结果标为 assumed。

## Procedure

1. 公开决策问题、地域与行业边界、基线及时间跨度。区分用户提供与假定内容，建立可见分析范围。可见输出／状态变化：范围状态已公开。
2. 公开六类因素清单，只包含重要的政治、经济、社会、技术、环境与法律因素。每项附来源或出处、日期、证据状态及受影响选项或依赖。可见输出／状态变化：因素清单已公开。
3. 公开每个保留因素的机制与方向：解释变化如何影响需求、成本、准入、合规、能力、时机或正当性。用可检查的因果连接替代泛泛的“正面／负面”标签。可见输出／状态变化：机制连接已公开。
4. 公开方向、速度、暴露与不确定性的有序定性判断，为每项附简短依据。低、中、高等标签只用于透明比较，不转成无支持的百分比或预测。可见输出／状态变化：有序定性评估已公开。
5. 公开每项重要因素的机会、威胁或监测状态，并为少量可改变决策的因素排序。说明状态为 verified、inferred、assumed、unverified 或 conflicted。可见输出／状态变化：重要性状态已公开。
6. 公开一至三个战略影响，适当时包含无悔行动、条件行动或有针对性的研究检查。因素相互作用时，说明作用与证据，不将相关性当作证明。可见输出／状态变化：战略影响集已公开。
7. 公开当前判断、决定性依据、剩余不确定性与会改变战略影响的可观察信号。如果缺失因素、来源、管辖区或时间跨度具有决定性，公开暂缓结果，以及选择前所需的最小检查。可见输出／状态变化：判断状态已公开。

## Public output contract

返回简洁、可放入卡片的结果，包含 `scope`、`horizon`、`material_factors`、`evidence_status`、`mechanisms`、`opportunity_threat_monitoring`、`strategic_implications`、`signals` 与 `flip_condition`。仅包含能改变所声明决策的因素；将关联项归组，而非列出所有趋势。依据使用 **verified**、**computed**、**inferred**、**assumed**、**unverified** 或 **conflicted**。说明当前战略影响，以及仍待考虑的替代方案或检查。

## Evidence and uncertainty rules

对可检查的主张使用当前、可识别来源，并保留来源日期与管辖区。描述趋势的来源本身不能确定幅度、局部效应或战略后果。区分观察、解释与推荐。不要声称扫描穷尽一切、编造概率，或没有可辩护模型与出处就把有序定性暴露转成数值预测。可信来源不一致时，显示冲突并降低或暂缓相关战略影响。未验证的法律或监管信息不得支持无条件合规结论。

## Stop conditions

两个合理的地域、管辖区或时间跨度会产生显著不同的战略影响，而用户目的无法选择时，停止并提出一个阻塞性问题。现行规则、外部依赖或因素具有决定性但无法检查时，暂缓。任务只是局部运营诊断或内部比较时，停止本程序并转交更合适的方法。重要因素、机制、战略影响、信号与结论转变条件公开后结束。

## Complement handoff

重要外部不确定性构成需要不同准备的若干连贯未来时，移交给 `scenario-planning`。传递有范围的因素清单、证据状态、相互作用、战略影响与观察标志。不要要求补充方法重复扫描或填入没有支持的 PESTEL 类别；它应利用已公开的不确定性构建未来与条件行动。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"pestel-analysis-positive-1","decisive_features":["macro_environment","forecast"],"expected_behavior":"route","expected_route":"pestel-analysis","kind":"positive","rationale":"提示明确限定外部扫描与战略决策。应保留来源日期与管辖区，不能声称未经验证的政策或预测已确定。","schema":"opensocrates.template-example/1.0.0","template_prompt":"进入这个国家前，扫描可能改变发布计划的现行选举议程、通胀与汇率状况、人口变化、平台技术、排放规则与许可要求。"},{"case_id":"pestel-analysis-positive-2","decisive_features":["macro_environment","forecast"],"expected_behavior":"route","expected_route":"pestel-analysis","kind":"positive","rationale":"请求的是重要外部因素及战略影响，不是一般趋势列表。提示提供的是假设，因此分析须标为已检查、推论或未验证。","schema":"opensocrates.template-example/1.0.0","template_prompt":"产品扩展依赖客户老龄化、数据保护规则、云成本及可能的能源价格冲击。识别应改变投资选择的重要因素、机制与信号。"},{"case_id":"pestel-analysis-positive-3","decisive_features":["macro_environment","forecast"],"expected_behavior":"route","expected_route":"pestel-analysis","kind":"positive","rationale":"所要求输出是与战略时期关联的重要因素清单。需要证据状态与可观察标志，而非编造预测或概率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"为我们的五年战略建立有证据支持的外部情境，展示哪些变化属于机会、威胁或监测信号，以及什么会改变每项战略影响。"},{"case_id":"pestel-analysis-negative-1","decisive_features":["recurring_failure","diagnose"],"expected_behavior":"route","expected_route":"root-cause-analysis","kind":"negative","rationale":"问题在局部流程内部，不是宏观环境。因果故障分析更适合，不应为填满分类而添加外部因素。","schema":"opensocrates.template-example/1.0.0","template_prompt":"仓库存在重复拣货错误。追踪局部流程、识别故障原因并提出纠正行动。"},{"case_id":"pestel-analysis-negative-2","decisive_features":["interacting_actors","stakeholder_conflict"],"expected_behavior":"route","expected_route":"stakeholder-analysis","kind":"negative","rationale":"政策背景虽是外部，决定性输出却是参与者与沟通图。这容易与利益相关者分析混淆，并非请求六类环境因素。","schema":"opensocrates.template-example/1.0.0","template_prompt":"新政策会影响员工、承包商、客户与一个没有代表的社区。梳理其权力、利益、可能担忧与沟通负责人。"},{"case_id":"pestel-analysis-mechanical-1","decisive_features":["mechanical","mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"用户只要求格式化已有内容，不需要判断重要性、证据或战略。","schema":"opensocrates.template-example/1.0.0","template_prompt":"不改变措辞，将给定六项因素描述放入 P、E、S、T、E、L 各列。"},{"case_id":"pestel-analysis-explicit-1","decisive_features":["explicit_method","macro_environment"],"expected_behavior":"explicit_primary","expected_route":"pestel-analysis","kind":"explicit","rationale":"用户明确要求方法及其公开输出契约。分析须注意来源，依赖未经检查的现行规则的战略影响应暂缓。","schema":"opensocrates.template-example/1.0.0","template_prompt":"使用 PESTEL 分析审查市场进入决策。只保留重要因素，标明证据状态与时间跨度，并说明机会或威胁影响。"},{"case_id":"pestel-analysis-insufficiency-1","decisive_features":["boundary_sensitive","decisive_input_missing"],"expected_behavior":"hold","expected_route":"pestel-analysis","kind":"insufficiency","rationale":"问题适合外部扫描，但缺失边界与来源日期可能改变战略影响。方法应暂缓，只询问决定性范围事实，不编造市场情境。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们该进入市场吗？我尚未提供国家或管辖区、决策时期、产品范围、基线或当前外部条件的来源。"}]
```
