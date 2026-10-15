OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 参照类别预测 (`reference-class-forecasting`@5)

行动前须自行理清的问题：
- 在查看结果之前先定义类别，这件事实际上与哪类已完成案例相似?
- 当前的哪项事实足以支持偏离该类案例的基准发生率，幅度是多少?
- 如果只采用外部视角，还会提出相同的日期、成本或需求判断吗?

## 参照类别预测

## Teacher questions

- 在查看结果之前先定义类别，这件事实际上与哪类已完成案例相似?
- 当前的哪项事实足以支持偏离该类案例的基准发生率，幅度是多少?
- 如果只采用外部视角，还会提出相同的日期、成本或需求判断吗?

## Purpose

用本程序把内部视角预测替换为外部视角比较，依据是一个可辩护的、已完成且可比的案例类别。根据观察结果估计目标，并明确当前哪些事实可以支持调整。它辅助校准，不是保证，也不允许编造总体、分布或概率。

## Use when

有相似历史案例，而内部计划可能过于乐观时，用于工期、成本、需求、采用、可靠性或交付预测。提案声称“本案例不同”却未说明差异如何改变预期范围时尤其有用。适合需要有依据的范围而非单点估计的决定。

## Do not use when

找不到可辩护的已完成案例参照类别、目标或单位不清，或任务独一无二且无可比结果时，不使用。不要把少数轶事当作基准分布、只挑成功案例，或把内部预测当成证据。决定纯属机械操作，或用户需要因果诊断而非校准时，停止并转交。

## Inputs to establish

明确目标结果、单位、时间跨度、截止日期及可接受边界。在查看结果之前定义参照类别的纳入及排除规则。收集观察案例、结果定义、覆盖范围、缺失情况及来源状态。记录当前项目的已知差异及内部视角预测。仅当答案会改变类别或目标时，最多问两个决定性问题。每项输入标为 verified（已核实）、computed（计算所得）、inferred（推断）、assumed（假设）、unverified（未核实）或 conflicted（有冲突）。

## Procedure

1. 用一句话公开目标、单位、时限及决策边界。**可见输出/状态变化：**建立预测基线；目标有歧义时标为 held（暂缓），不要默默缩窄。
2. 公开参照类别规则，包括纳入、排除、相似性维度和已知覆盖缺口。**可见输出/状态变化：**比较集合从直觉转为可审计的类别定义。
3. 仅用可获得案例公开观察结果的分布：可计算时给出数量、中心、离散程度、范围及尾部。**可见输出/状态变化：**每项统计都说明输入及来源/证据标签；不可获得的统计保留为 unverified。
4. 将外部视角基线与内部计划并列公开，解释差异方向。**可见输出/状态变化：**记录内部计划在观察分布内、之上或之下，不把位置视为概率。
5. 对当前案例的重要差异逐项公开调整。**可见输出/状态变化：**每项调整附方向、理由和证据状态；只有调整尺度有依据时才用数值。
6. 公开有界范围及让其两端可信的条件。**可见输出/状态变化：**覆盖、选择或尾部证据薄弱时，扩大范围或暂缓作出结论，不用编造的基准率填空。
7. 公开 supported（有支持）、provisional（暂定）或 held 状态，附结论转变条件及一项下一步核查。**可见输出/状态变化：**缺少决定性的类别或结果输入时，明确暂缓作出结论，不给武断建议。

## Public output contract

返回 `target`、`reference_class`、`base_distribution`、`adjustments`、`range`、`inside_view_comparison`、`flip_condition` 及 supported、provisional 或 held 状态。结论应说明观察到的类别支持什么，不宣称当前案例必将与它一致。卡片依据使用 **verified**、**computed**、**inferred**、**assumed**、**unverified** 或 **conflicted**；不确定性部分说明覆盖缺失或选择风险，结论转变条件须可观察，而非“出现新信息时”。

## Evidence and uncertainty rules

类别只能由目标、单位和纳入状态已定义的已完成案例支持。来源可以核实观察结果，却不一定能核实当前项目的可比性；没有直接支持时，把比较标为 inferred。计算须说明使用的案例或引用及舍入规则。不得编造中位数、尾部、样本量、基准率或概率。保留选择偏差、缺失案例、相互冲突的定义及小样本限制。“本案例不同”在方向和影响有证据之前，只是调整假设。

## Stop conditions

目标、单位或决策边界存在实质不同的解释时，问一个阻断性问题并停止。无法建立可辩护的类别、结果定义或决定性比较输入时，暂缓作出结论。剩余工作是因果解释、选项选择或机械计算时，停止本方法并转交，不要强行开展外部视角预测。

## Complement handoff

决策取决于参照分布或当前案例调整如何改变选择时，交给 `sensitivity-analysis`。传递目标、观察基线、已测试的调整范围、覆盖限制及切换条件。补充方法应扰动这些输入，不重建参照类别，也不把结果当作新的基准率。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"reference-class-forecasting-positive-1","decisive_features":["forecast","reference_cases","source_quality"],"expected_behavior":"route","expected_route":"reference-class-forecasting","kind":"positive","rationale":"预测目标和单位已说明，有可辩护的参照类别，请求外部视角范围。来源记录支持观察结果，不允许编造概率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们正在估计区域铁路项目的交付日期。我们有许多范围、采购方式和地形可比的已完成项目记录，并附来源链接。请将内部工期与观察到的完工分布比较，解释调整，不编造概率。"},{"case_id":"reference-class-forecasting-positive-2","decisive_features":["forecast","reference_cases","hidden_assumptions"],"expected_behavior":"route","expected_route":"reference-class-forecasting","kind":"positive","rationale":"任务是依据已完成的可比案例校准，不是因果诊断或偏好情景。请求注意来源的调整及结论转变条件，不是编造基准率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"产品团队对客户迁移到新平台所需的时间和成本估计较乐观。我们能找到其他团队已完成的可比迁移，并有实际结果。用这些案例检验内部视角是否可信，说明哪些证据会改变范围。"},{"case_id":"reference-class-forecasting-positive-3","decisive_features":["forecast","reference_cases","weak_sample"],"expected_behavior":"route","expected_route":"reference-class-forecasting","kind":"positive","rationale":"有目标和已完成案例，覆盖不均是应保留的明确不确定性。方法应使用观察分布；缺失情况决定结果时，保留或降低结论强度。","schema":"opensocrates.template-example/1.0.0","template_prompt":"一家非营利机构正在预测项目第一年参与人数。几个既往启动项目记录了参与结果、目标人群和启动条件，但覆盖不均。建立外部视角范围，显示覆盖限制，并与我们的计划比较。"},{"case_id":"reference-class-forecasting-negative-1","decisive_features":["no_defensible_reference_class","diagnose"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"明确缺少可辩护的参照类别，且请求因果解释。此处路由将只是重复内部视角，没有外部分布。","schema":"opensocrates.template-example/1.0.0","template_prompt":"这台独一无二的科学仪器没有已完成的可比案例。请解释哪个工程选择导致延期，并提出纠正实验。"},{"case_id":"reference-class-forecasting-negative-2","decisive_features":["deep_uncertainty","macro_environment","plan"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"容易与情景规划的同族方法混淆：任务要分支未来和信号指标，而非预测的参照分布。","schema":"opensocrates.template-example/1.0.0","template_prompt":"请为我们的五年战略构建四个不同的外部未来，分别命名并识别早期信号及行动。不要用历史案例估计交付或成本目标。"},{"case_id":"reference-class-forecasting-mechanical-1","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"任务是有界计算。没有不确定预测目标或参照类别判断，方法必须保持不参与。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将这五笔已核实的发票金额相加，以指定币种返回总额。无需预测、比较类别或决策。"},{"case_id":"reference-class-forecasting-explicit-1","decisive_features":["explicit_method","forecast","reference_cases"],"expected_behavior":"explicit_primary","expected_route":"reference-class-forecasting","kind":"explicit","rationale":"用户明确命名方法，并提供方法所需的目标、可比结果及保留规则。明确调用仍需证据标签，不允许编造概率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将参照类别预测作为软件发布日期的主要方法。我们有附来源链接的可比发布结果；将其分布与内部计划比较，类别无依据时保留结论。"},{"case_id":"reference-class-forecasting-insufficiency-1","decisive_features":["no_defensible_reference_class","boundary_sensitive","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"决定性的参照类别、目标定义及决策边界缺失。诚实的结果是保留结论并有限地请求缺失输入，不是编造分布。","schema":"opensocrates.template-example/1.0.0","template_prompt":"告诉我项目何时完成。我只有内部目标日期，没有已完成的可比案例、约定的结果定义或明确的截止日期决策。"}]
```
