OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 利益相关方分析 (`stakeholder-analysis`@5)

行动前须自行理清的问题：
- 谁能阻止这件事，谁会受损，还有谁没有参加当前讨论?
- 每位重要利益相关者想要什么，实际拥有多大权力?
- 谁负责下一次沟通，如果这次对话始终没有发生，会有什么后果?

## 利益相关方分析

## Teacher questions

- 谁能阻止这件事，谁会受损，还有谁没有参加当前讨论?
- 每位重要利益相关者想要什么，实际拥有多大权力?
- 谁负责下一次沟通，如果这次对话始终没有发生，会有什么后果?

## Purpose

用本程序明确能够影响决策或受决策影响的人和组织。将每个重要利益相关方的利益、权力、影响、同意、冲突及执行角色，与参与负责人和下一步行动相连。目标不是冗长名单或装饰性矩阵，而是说明谁的反应能改变决定，以及决定是否能够实施。

## Use when

当实施依赖合作、同意、采用、抵制、监督或非正式影响时使用。适用于决策权或否决环节不明确、正式团队之外的人受到影响，或沟通参与计划应依据利益而非人数的情况。纳入当前决策过程中没有代表、但会受影响的人。

## Do not use when

若相关方已达成一致、未受实质影响，剩余工作只是比较方案或核查证据，则不用。不用于纯粹宏观环境扫描、局部流程诊断或机械整理联系人名单。不得将正式权限等同于正当性、关注程度等同于权力，或声音响亮等同于实质影响。不得无依据地推定反对或支持。

## Inputs to establish

确定决策问题、预期结果、决策负责人、实施边界、时间范围、受影响群体、正式权限、约束，以及关于利益或可能影响的可用证据。区分参与行动者与受影响但未参与的群体。仅当决策负责人、受影响人口或权限路径会改变参与建议时，问最多两个简短问题。仅被推测存在的行动者标为假设。

## Procedure

1. 公开决定、预期结果、实施边界及负责的人。将边界标为用户提供或假设，建立可见的参与状态。可见输出或状态变化：参与状态已公开。
2. 公开行动者名册，包含决策者、实施者、阻碍者、受益者、成本承担者、监督机构及受影响但未参与的群体。写明各方利益及纳入的证据或理由。可见输出或状态变化：行动者名册已公开。
3. 公开每个重要行动者的权力、关注程度、影响及同意立场。区分正式权限与非正式影响、测得效果与推断忧虑；仅在依据可见时使用序位比较。可见输出或状态变化：权力与影响图已公开。
4. 公开重要的一致之处、冲突、依赖及缺失的声音。每项冲突注明议题、各方、证据状态，以及分歧能改变决定本身还是仅改变实施路径。可见输出或状态变化：冲突清单已公开。
5. 公开参与及责任计划。针对每个重要行动者，说明负责人、接触目的、所需参与或信息、决策权、时间及会改变计划的可观察反应。可见输出或状态变化：参与计划已公开。
6. 公开对正式图谱之外受影响者的遗漏及同意检查。只有决策或证据支持实质相关性时才添加群体；同意或伤害具有决定性时，记录异议或申诉途径，更新行动者图谱。可见输出或状态变化：行动者图谱已更新。
7. 公开当前建议、未解决冲突及反转条件。决定性行动者、影响或同意事实缺失时，公开暂缓或暂定结果及最小必要检查，不宣称实施已就绪。可见输出或状态变化：暂缓状态已公开。

## Public output contract

简明返回 `decision`、`stakeholders`、`stakes`、`power_impact`、`consent`、`conflicts`、`engagement_owner`、`observable_response` 及 `flip_condition`。实质相关时，包含受影响但无人代表的群体。依据使用 **verified**（已核实）、**computed**（已计算）、**inferred**（推断）、**assumed**（假设）、**unverified**（未核实）或 **conflicted**（存在冲突）；行动者在名单中出现，不是影响的证据。结论说明决定获支持、有条件支持，或正在等待参与或证据而暂缓。

## Evidence and uncertainty rules

每项重要的利益、权力、影响或同意主张，都应有来源、用户提供的记录、决策权、观察行为、可复现计算或明确标注的推断。保持正式权限、资源、正当性、关注程度与影响力这些属性各自独立。没有可辩护的尺度与来源，不赋予影响力或信心数值。不得将多数意见或决策负责人的偏好当作遗漏群体不重要的证明。有争议的利益、预测反应及未接触群体标为推断、未核实或存在冲突。

## Stop conditions

不同决策负责人或受影响人口会产生显著不同的参与计划，而没有授权规定应选择哪一个时，停止并问一个阻断性问题。无法识别或检查决定性行动者、伤害、同意要求或实施依赖时，暂缓。如果相关方图谱与决策无实质关系，停止并交接给处理实际比较或外部扫描的方法。图谱、冲突、负责人、下一步参与行动及反转条件均已公开时结束。

## Complement handoff

只有相关方冲突取决于策略反应、激励、信息或可信承诺时，才将 `game-theory` 作为有针对性的补充。传递行动者名册、利益、权力与影响证据、冲突、决策权及参与约束。不得重复发掘相关方，也不得让补充方法决定谁的利益算数。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"stakeholder-analysis-positive-1","decisive_features":["interacting_actors","stakeholder_conflict"],"expected_behavior":"route","expected_route":"stakeholder-analysis","kind":"positive","rationale":"请求需要与实施相连的行动者图谱，不是普通联系人名单。在有记录或对话支持前，忧虑与影响是待证假设，所选路径应揭示其不确定性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们要实施排班调整，影响一线员工、经理、客户及劳工代表。描绘各方利益、决策权、可能忧虑、同意需求及参与负责人。"},{"case_id":"stakeholder-analysis-positive-2","decisive_features":["interacting_actors","stakeholder_conflict"],"expected_behavior":"route","expected_route":"stakeholder-analysis","kind":"positive","rationale":"提示明确使代表性和实施成为重要事项。图谱应区分正式权限与影响力，不应无证据推定伤害或同意。","schema":"opensocrates.template-example/1.0.0","template_prompt":"一项公共政策将影响未加入正式决策群体的居民。识别决策者、受影响但未获代表的群体、权力与影响、冲突点及可问责的参与计划。"},{"case_id":"stakeholder-analysis-positive-3","decisive_features":["interacting_actors","stakeholder_conflict"],"expected_behavior":"route","expected_route":"stakeholder-analysis","kind":"positive","rationale":"采用依赖分散的权限与实施支持。所选路径应公开利益和影响的证据状态，不能把组织角色当成达成共识的证明。","schema":"opensocrates.template-example/1.0.0","template_prompt":"几个组织必须采用共享的数据标准。分析谁能批准、阻止、受益或承担成本，再指定参与负责人及会改变推广计划的反应。"},{"case_id":"stakeholder-analysis-negative-1","decisive_features":["multiple_options","multiple_objectives"],"expected_behavior":"route","expected_route":"trade-off-analysis","kind":"negative","rationale":"人员问题已解决；剩下的是权衡比较。相关方分析只会添加装饰性图谱，不能解决选择。","schema":"opensocrates.template-example/1.0.0","template_prompt":"所有决策参与者已对目标一致，受影响群体并不重要。按成本、可靠性及交付时间比较两家可行供应商。"},{"case_id":"stakeholder-analysis-negative-2","decisive_features":["macro_environment","forecast"],"expected_behavior":"route","expected_route":"pestel-analysis","kind":"negative","rationale":"请求可能涉及策略，但决定性输出是外部因素清单。这容易与 PESTEL 分析混淆，而非相关方图谱。","schema":"opensocrates.template-example/1.0.0","template_prompt":"扫描可能影响产品策略的政治、经济、社会、技术、环境及法律变化。"},{"case_id":"stakeholder-analysis-mechanical-1","decisive_features":["mechanical","mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"任务仅转换给定文本，不要求评估利益、权力、同意或实施。","schema":"opensocrates.template-example/1.0.0","template_prompt":"删除联系人名单中的重复姓名，并按字母顺序排序剩余姓名。"},{"case_id":"stakeholder-analysis-explicit-1","decisive_features":["explicit_method","stakeholder_conflict"],"expected_behavior":"explicit_primary","expected_route":"stakeholder-analysis","kind":"explicit","rationale":"用户直接指定方法及公开字段，因此它仍是主方法。回应仍须标明推断忧虑与未核实影响，不得将其视为已确定事实。","schema":"opensocrates.template-example/1.0.0","template_prompt":"对这项医院工作流程调整使用利益相关方分析。展示决策权、受影响群体、权力与影响证据、冲突、参与负责人及反转条件。"},{"case_id":"stakeholder-analysis-insufficiency-1","decisive_features":["decisive_input_missing","interacting_actors"],"expected_behavior":"hold","expected_route":"stakeholder-analysis","kind":"insufficiency","rationale":"实施支持可能具有决定性，但行动者边界与权限缺失。方法应暂缓并请求最少的缺失事实，不得宣称同意或反对。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们应推进新的出勤政策吗？我尚未识别决策负责人、受影响群体、权限路径、时间范围或政策影响的证据。"}]
```
