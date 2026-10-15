OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 敏感性分析 (`sensitivity-analysis`@5)

行动前须自行理清的问题：
- 哪项输入在有依据的范围内变化，就会使原本的决策反转?
- 不确定输入彼此独立吗，还是只改变其中一个却固定了与它关联的输入?
- 除了基准结果，读者还应关注哪个会使决策切换的临界值?

## 敏感性分析

## Teacher questions

- 哪项输入在有依据的范围内变化，就会使原本的决策反转?
- 不确定输入彼此独立吗，还是只改变其中一个却固定了与它关联的输入?
- 除了基准结果，读者还应关注哪个会使决策切换的临界值?

## Purpose

用本程序测试重要输入或权重在可辩护范围内变化时，模型结果、比较或决定如何改变。识别影响大的变量、切换值、相互作用及脆弱假设。输出是透明的稳健性检查，不允许选择夸张范围或暗示模型证明了未来。

## Use when

已有计算、预测模型、商业论证、评分规则或选项比较，而不确定输入可能改变决定时使用。帮助确定数据收集优先级、揭示隐藏阈值，并区分经得起合理变化的结论与依赖狭窄假设的结论。尺度明确时可采用数值或有序等级变化。

## Do not use when

没有可扰动的模型、比较、决策规则或变量关系时，不使用。不得从纯事实问题、未定义基线或无来源范围中制造敏感性结果。不要独立改变相关变量、未经检查把非线性模型当作线性，或报告超出输入支持精度的精确切换值。

## Inputs to establish

明确基准模型或规则、输出指标、决策阈值、输入或权重、单位及当前结果。为每个不确定输入定义合理范围及来源，包括依赖和约束。说明扰动设计、舍入规则，以及测试是逐一变化、结构化组合还是有序比较。记录结果要服务的选项或政策。仅在答案会改变基线或范围时，最多问两个决定性问题。

## Procedure

1. 公开基准公式或决策规则、输入、单位及结果。**可见输出/状态变化：**建立可复现的起点及明确的决策阈值。
2. 公开测试范围、权重、依赖和各范围背后的证据。**可见输出/状态变化：**每个扰动边界标为 verified（已核实）、computed（计算所得）、inferred（推断）、assumed（假设）、unverified（未核实）或 conflicted（有冲突），而非为效果随意选择。
3. 先逐一测试，再仅运行有依据的结构化组合。**可见输出/状态变化：**结果记录包括每个变化输入、结果、方法、单位和舍入；需要时相关输入一起变化。
4. 公开响应方向、幅度或等级变化、相互作用，以及越过阈值时的切换值。**可见输出/状态变化：**变量分为 influential（有影响）、non-influential（无影响）、robust（稳健）或 fragile（脆弱），不假装仅凭排名能证明因果。
5. 公开决策含义及可能改变决定的变量的研究优先级。**可见输出/状态变化：**调查投入关联明确的结论转变条件，而非最大的原始变化。
6. 公开 robust、fragile、provisional（暂定）或 held（暂缓）的结论及下一项验证检查。**可见输出/状态变化：**缺少基线、范围或阈值时，明确暂缓作出结论，不编造敏感性主张。

## Public output contract

返回 `baseline`、`tested_ranges`、`perturbation_results`、`switching_values`、`robust_or_fragile_conclusion`、`research_priority`、`flip_condition`，附 supported（有支持）、provisional 或 held 状态。说明阈值及可越过它的输入。卡片依据标出计算值及其输入；不确定性指出范围或模型限制；结论转变条件须为可观察的输入或阈值变化。完整运行记录及公式放在追溯记录或辅助成果中。

## Evidence and uncertainty rules

范围须有来源、用户约束、历史观察或明确假设；方便选用的范围不是证据。计算结果须公开公式、操作数、单位及舍入。非线性、相关性、不连续性和模型形式的不确定性重要时，保留它们。只能支持有序权重时，报告方向或阈值顺序，不给伪精确百分比。不要根据测试案例被抽取的频次推断现实概率。阈值或目标错误时，稳健的模型结果仍可能是脆弱的决策。

## Stop conditions

基线、决策阈值或目标输出存在实质不同的解释时，问一个阻断性问题并停止。无法建立必需的输入范围、依赖或规则时，暂缓作出结论。在任何有依据的扰动下决定都不会改变，或剩余工作是证据核实、因果解释或更广泛的选项取舍时，停止本方法。

## Complement handoff

敏感性结果需要与跨选项的明确标准、权重和利益相关者偏好结合时，交给 `trade-off-analysis`。传递基线、切换值、稳健/脆弱发现、范围来源及研究优先级。补充方法应在这些边界内比较选择，不把敏感性排名当作偏好或概率。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"sensitivity-analysis-positive-1","decisive_features":["sensitive_inputs","multiple_objectives","choose"],"expected_behavior":"route","expected_route":"sensitivity-analysis","kind":"positive","rationale":"具备模型、比较、书面基线、输入范围和选择阈值。明确请求扰动输入以揭示决定转变，不是编造概率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"商业论证根据需求、人工成本及能源假设比较两个仓库设计。基准公式和决策阈值已有记录，但输入有可辩护范围。测试范围，展示切换值，并判断选择是稳健还是脆弱。"},{"case_id":"sensitivity-analysis-positive-2","decisive_features":["sensitive_inputs","unknown_probability","choose","information_purchase"],"expected_behavior":"route","expected_route":"sensitivity-analysis","kind":"positive","rationale":"有模型、阈值、不确定输入，明确需要保留依赖及确定信息优先级。敏感性分析可报告计算或有序变化，不编造概率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"服务中心有人力配置模型，响应时间目标已公开。在有来源支持的范围内测试到达量、处理时间及人员假设的影响，尊重依赖关系，并优先安排可能改变人力决定的研究。"},{"case_id":"sensitivity-analysis-positive-3","decisive_features":["sensitive_inputs","multiple_objectives","choose"],"expected_behavior":"route","expected_route":"sensitivity-analysis","kind":"positive","rationale":"这是带有不确定权重、可能转变建议的结构化比较。应先展示模型敏感性，避免取舍建议把权重当作已定。","schema":"opensocrates.template-example/1.0.0","template_prompt":"投资委员会按成本、影响及执行风险为三个项目评分。权重有记录但存在争议，建议可能转变。在有依据范围内改变权重和输入评分，记录切换值并说明脆弱假设。"},{"case_id":"sensitivity-analysis-negative-1","decisive_features":["conflicting_sources","source_quality","decisive_input_missing"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"容易与证据层级或证据协调混淆。没有模型、规则或阈值，就没有可扰动的输入关系。","schema":"opensocrates.template-example/1.0.0","template_prompt":"没有模型或决策阈值。审查相互冲突的研究，判断哪个来源可信，并协调它们关于安全主张的证据。"},{"case_id":"sensitivity-analysis-negative-2","decisive_features":["deep_uncertainty","macro_environment","decisive_input_missing"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"请求深度不确定性下的情景构建，明确缺少模型或关系。敏感性分析将制造无法测试的基线。","schema":"opensocrates.template-example/1.0.0","template_prompt":"探索组织十年后四个不同的外部未来，描述各自的准备。没有可变的定量模型、选项分数或变量关系。"},{"case_id":"sensitivity-analysis-mechanical-1","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"这是确定性的单位换算。没有不确定输入范围或可分析其脆弱性的决策结果。","schema":"opensocrates.template-example/1.0.0","template_prompt":"每个已核实数量乘以指定单位换算因子，返回换算列表。不涉及模型、比较或决策阈值。"},{"case_id":"sensitivity-analysis-explicit-1","decisive_features":["explicit_method","sensitive_inputs","choose"],"expected_behavior":"explicit_primary","expected_route":"sensitivity-analysis","kind":"explicit","rationale":"用户明确调用方法，并提供基线、不确定范围、阈值及来源不足时保留规则。输出须保持为计算结果或带状态标签，不作概率表述。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将 sensitivity-analysis 作为定价决定的主要方法。基准贡献模型、有争议的数量和利润率范围及最低可接受利润率均有记录；找出切换值，任何范围缺少来源时保留结论。"},{"case_id":"sensitivity-analysis-insufficiency-1","decisive_features":["decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"基线、可扰动输入、范围和阈值都是决定性输入。方法须保留并请求这些有界输入，不生成泛泛的敏感性主张。","schema":"opensocrates.template-example/1.0.0","template_prompt":"告诉我建议是否敏感。我没有提供基准模型、输入、范围、决策阈值或形成建议的公式。"}]
```
