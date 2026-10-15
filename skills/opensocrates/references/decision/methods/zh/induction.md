OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 归纳法 (`induction`@5)

行动前须自行理清的问题：
- 这实际上是哪类对象的样本，正在把结论推及哪个总体?
- 与这一概括不符的反例，最有可能隐藏在什么地方?
- 如果接下来的3次观察都出现相反结果，这项一般化结论还能保留多少?

## 归纳法

## Teacher questions

- 这实际上是哪类对象的样本，正在把结论推及哪个总体?
- 与这一概括不符的反例，最有可能隐藏在什么地方?
- 如果接下来的3次观察都出现相反结果，这项一般化结论还能保留多少?

## Purpose

从观察推导一般化结论，同时保持结论的概率性，并限定于样本支持的范围。识别归纳类型，检查样本大小、多样性、代表性，主动寻找反例，说明一般化的范围和强度。只有抽样和测量依据足以支持扩展时，重复观察才会增强支持。

## Use when

用于数据模式、调查、用户反馈、重复事件，以及从已观察案例推向更广人群或未来行为的主张。适用于统计、枚举、因果或类比归纳，帮助用户了解观察究竟能支持主张到什么程度。

## Do not use when

无代表性的便利样本、严格规则的应用，或需要因果设计而非模式扩展的因果主张，不使用。不得把重复很多次的同一观察当作多样性，不得从小样本推断“全部”，也不得把合理趋势变为必然结论。

## Inputs to establish

明确观察、目标人群或未来范围、抽样过程、测量定义、比较组、时间窗口和受影响决策。识别归纳类型及已知的选择、幸存者、无回应或测量偏倚。只有总体或样本依据未知且会改变范围时，最多提出1个决定性问题。

## Procedure

1. 分别公开观察前提与拟议的一般化结论。标明每项观察的出处和证据状态，建立可见的归纳基线。
2. 公开归纳类型——枚举、统计、因果或类比——及从样本到目标范围的连接。说明使该连接合理的假设。
3. 公开样本依据：大小、多样性、选择方式、缺失案例、测量质量和时间覆盖。区分有来源的描述与推断出的代表性主张。
4. 公开最有力的反例搜索及结果。在可获得时，纳入未被选中的案例、负面结果、子群差异及合理的未来例外。
5. 公开有限的一般化结论，附范围限制和强、中、弱等定性强度标签。只有范围有可靠出处时，才将普遍措辞改为总体或比例区间。
6. 公开对决策的影响，以及最能改进或挑战该结论的下一项观察。说明结果支持行动、监测还是追加抽样。
7. 公开当前结论及可观察的结论改变条件。样本过于偏倚、稀少或与目标不匹配时，保留或维持暂定结果，不外推。

## Public output contract

返回 `observations`、`induction_type`、`sample_basis`、`generalization`、`scope_limit`、`counterexample_risk`、`counterexample_search`、`strength`、`decision_consequence` 和 `flip_condition`。区分观察案例与更广的主张。依据使用 **verified**、**computed**、**inferred**、**assumed**、**unverified** 或 **conflicted** 标签；一般化通常是推断，不是直接验证。

## Evidence and uncertainty rules

样本大小本身不能确立代表性。检查选择、覆盖、流失、测量、子群平衡和时间相关性。反例可限制普遍主张，却不证明相反趋势。不得把同一观察既当独立支持又当反例检验。缺少样本依据或目标范围时，降低或暂缓作出结论。

## Stop conditions

目标人群或抽样过程不可知，且不同范围会改变行动时，提出1个阻断问题后停止。样本的代表性存在实质缺陷、因果主张超出设计，或决定性反例风险未解决时，暂缓判断。任务属于严格规则、竞争假设诊断或来源质量比较时，停止本程序。

## Complement handoff

剩余问题是样本或研究设计是否足以支撑主张时，转交 `evidence-hierarchy`。传递样本依据、一般化结论、范围限制和主要反例风险。补充程序不得重复归纳步骤。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"induction-positive-01","decisive_features":["repeated_observations","weak_sample"],"expected_behavior":"route","expected_route":"induction","kind":"positive","rationale":"任务从观察案例推向限定的总体主张，需要样本与反例检查。","schema":"opensocrates.template-example/1.0.0","template_prompt":"这些重复观察是否支持针对大多数用户的一般主张？一般化有多强？"},{"case_id":"induction-positive-02","decisive_features":["repeated_observations","weak_sample"],"expected_behavior":"route","expected_route":"induction","kind":"positive","rationale":"代表性、选择偏倚和一般化强度是核心。","schema":"opensocrates.template-example/1.0.0","template_prompt":"评估这项调查样本是否足以支持客户偏好新工作流程的主张。"},{"case_id":"induction-positive-03","decisive_features":["repeated_observations","weak_sample"],"expected_behavior":"route","expected_route":"induction","kind":"positive","rationale":"所需预测扩展了重复案例，须说明范围和反例风险。","schema":"opensocrates.template-example/1.0.0","template_prompt":"根据这些过去事件，考虑合理反例，我们能对下季度作出什么合理推断？"},{"case_id":"induction-negative-01","decisive_features":["explicit_rules","explain"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"任务是演绎式规则应用，不是基于样本的一般化。","schema":"opensocrates.template-example/1.0.0","template_prompt":"严格规则规定每条符合条件的记录均获批准；判断本案例是否遵循规则。"},{"case_id":"induction-negative-02","decisive_features":["competing_explanations","diagnose"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"这是溯因诊断，而非从样本扩展到总体。","schema":"opensocrates.template-example/1.0.0","template_prompt":"多种解释符合故障；比较它们并识别能加以区分的观察。"},{"case_id":"induction-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"追加已提供的数据是机械操作。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将这些新观察追加到现有数据集，不改变任何数值。"},{"case_id":"induction-explicit-01","decisive_features":["explicit_method","repeated_observations"],"expected_behavior":"explicit_primary","expected_route":"induction","kind":"explicit","rationale":"用户明确选择从样本到一般化的分析。","schema":"opensocrates.template-example/1.0.0","template_prompt":"明确使用归纳法，评估这个小型实验是否支持更广的产品主张。"},{"case_id":"induction-insufficiency-01","decisive_features":["repeated_observations","weak_sample","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"缺少样本依据与目标范围时，无法限定一般化。","schema":"opensocrates.template-example/1.0.0","template_prompt":"从样本推广，但不提供目标总体、抽样过程、观察或测量定义。"}]
```
