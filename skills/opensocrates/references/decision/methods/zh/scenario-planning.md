OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 情景规划 (`scenario-planning`@5)

行动前须自行理清的问题：
- 究竟哪2个相互独立的不确定因素会区分那些重要的未来情境?
- 哪些行动在这些未来情境中都不会后悔，哪些是在押注单一情境?
- 什么早期信号能表明，当前正在进入哪种未来情境?

## 情景规划

## Teacher questions

- 究竟哪2个相互独立的不确定因素会区分那些重要的未来情境?
- 哪些行动在这些未来情境中都不会后悔，哪些是在押注单一情境?
- 什么早期信号能表明，当前正在进入哪种未来情境?

## Purpose

用本程序构建多个一致的外部未来，并准备相应选择。目标不是预测一个未来，而是揭示重要且不确定的力量分化时，决定会如何表现。区分无悔行动与条件性行动，并保留供后续复查的信号指标。

## Use when

用于长期战略、投资、政策、基础设施或产品选择，尤其是五年或更长的时间跨度，或预测反复失效的情形。当多个外部条件可能影响结果，问题是“应为哪些情况作准备”时适用。在不可逆承诺之前就有用，不必等选定预测后才使用。

## Do not use when

不用于短期单点预测、简单的乐观/基准/悲观数字变化，或没有显著外部不确定性的决定。不要选择两个相关的轴、写四个版本的同一好/坏未来、分配概率，或以没有行动的故事结束。实际任务是在一个模型内比较数值输入时，改用敏感性分析。

## Inputs to establish

明确焦点问题、时间跨度、系统边界、当前决定，以及足够可预测、可跨未来保持不变的共同前提。列出候选驱动因素及其影响和不确定性的证据，识别两个独立的关键不确定性。记录约束、利益相关者、现有承诺及可成为信号指标的观察。仅当答案改变焦点问题或轴的配对时，最多问两个决定性问题。前提和驱动因素标为 verified（已核实）、computed（计算所得）、inferred（推断）、assumed（假设）、unverified（未核实）或 conflicted（有冲突）。

## Procedure

1. 公开焦点问题、时限、边界、当前决定及共同前提。**可见输出/状态变化：**开放的未来问题转为有界的准备问题。
2. 公开两个关键不确定性轴，解释各自为何影响大且难预测。**可见输出/状态变化：**相关、影响小或可预测的候选因素被排除，或移至共同前提。
3. 公开 2×2 矩阵，包含四个有名称、内部一致的情景，以及各自可能形成的简短路径。**可见输出/状态变化：**形成四个不同的合理测试环境；任何一个都不贴概率或偏好标签。
4. 公开当前决定在每个情景中的有效性和脆弱性。**可见输出/状态变化：**风洞测试记录区分无悔行动、依情景而定的行动，以及在整个矩阵中均失败的选择。
5. 公开随条件演变区分情景的信号指标、触发响应及复查频率。**可见输出/状态变化：**情景集合成为动态监测计划，而非静态叙述。
6. 公开稳健性结论及可观察的结论转变条件。**可见输出/状态变化：**轴、前提或行动含义缺乏依据时，结论为 provisional（暂定）或 held（暂缓），不伪装成预测。

## Public output contract

返回 `driving_uncertainties`、`scenarios`、`signposts`、`no_regret_actions`、`contingent_actions`、`decision_check`、`flip_condition`，附 supported（有支持）、provisional 或 held 状态。`scenarios` 包含四个具名称的摘要，各有形成路径及决策含义。卡片说明准备结论、重要不确定性、改变计划的可观察条件及简洁的备选方案摘要。完整矩阵及复查频率放在追溯记录或辅助成果中。

## Evidence and uncertainty rules

共同前提须有来源支持，或明确标为 assumed。轴是关于影响和不确定性的框架假设，除非证据表明，否则不是测量事实。情景须内部一致且合理，但不是预测；绝不附加百分比、排名或隐含可能性。区分观察到的信号与推断的解读。不得编造趋势、触发日期或外部驱动因素。两个轴相互依赖时，修改配对或暂缓给出结果。

## Stop conditions

焦点问题、时限或决策边界有实质不同的含义时，问一个阻断性问题并停止。没有独立且影响大的不确定性、有依据的前提或可行动的决定时，暂缓作出结论。任务是短期预测、模型扰动或已确定的运营选择时，停止本方法并转交，不强凑四个情景。

## Complement handoff

情景驱动因素需要按政治、经济、社会、技术、环境或法律因素进行结构化审查时，交给 `pestel-analysis`。传递焦点问题、时限、共同前提、候选驱动因素、选定轴及证据状态。补充方法应检验外部驱动因素，不把情景压成一个预测未来。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"scenario-planning-positive-1","decisive_features":["deep_uncertainty","macro_environment","forecast"],"expected_behavior":"route","expected_route":"scenario-planning","kind":"positive","rationale":"长期跨度与外部驱动因素需要结构化分支，而非一个预测。明确请求独立轴、四个情景、行动和信号指标，排除概率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"城市需要准备十年住房战略，人口迁移与建筑技术可能独立变化。定义两个关键不确定性，建立四个一致的未来，不加概率，识别无悔行动、条件性行动及信号指标。"},{"case_id":"scenario-planning-positive-2","decisive_features":["deep_uncertainty","macro_environment","new_evidence"],"expected_behavior":"route","expected_route":"scenario-planning","kind":"positive","rationale":"用户要求一致的外部未来、矩阵、当前计划的风洞测试及信号指标，不要求按可能性排名的预测。","schema":"opensocrates.template-example/1.0.0","template_prompt":"五年公共卫生项目可能面临机构信任与病原体流动性的不同组合。构建 2×2 情景矩阵，解释每个世界可能如何形成，测试当前计划，并定义用于复查的可观察信号。"},{"case_id":"scenario-planning-positive-3","decisive_features":["deep_uncertainty","macro_environment","irreversible_choice","plan"],"expected_behavior":"route","expected_route":"scenario-planning","kind":"positive","rationale":"这是长期准备决策，有影响大的外部不确定性，且要求区分共同和条件性行动。方法应避免分配概率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们正在决定如何为十年教育平台投资作准备。监管及学习者行为影响很大，却难以预测。把可预测前提设为共同前提，选择独立轴，区分稳健准备与未来信号触发的行动。"},{"case_id":"scenario-planning-negative-1","decisive_features":["sensitive_inputs"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"容易与敏感性分析的同族方法混淆：有模型、输入范围及切换阈值，而非独立的外部轴与一致未来。","schema":"opensocrates.template-example/1.0.0","template_prompt":"季度收入模型有一个基准公式。在可辩护范围内改变转化率和价格假设，展示选择转变的阈值，并排序哪些输入值得进一步研究。"},{"case_id":"scenario-planning-negative-2","decisive_features":["forecast","reference_cases"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"任务要求从已完成参照案例得到外部视角预测，应归属参照类别预测，而非分支情景。","schema":"opensocrates.template-example/1.0.0","template_prompt":"用定义明确的已完成产品发布参照类别，估计下一次发布可能的交付范围，并与内部日期比较。"},{"case_id":"scenario-planning-mechanical-1","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"请求是确定性的排序。没有外部不确定性或可由情景规划组织的战略选择。","schema":"opensocrates.template-example/1.0.0","template_prompt":"把这十二个有日期的里程碑按时间排序，返回有序列表。不涉及未来不确定性或准备决策。"},{"case_id":"scenario-planning-explicit-1","decisive_features":["explicit_method","deep_uncertainty","macro_environment"],"expected_behavior":"explicit_primary","expected_route":"scenario-planning","kind":"explicit","rationale":"方法被明确命名，所需的非概率情景输出也已给出。路由仍受证据、范围及保留规则约束。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将 scenario-planning 作为十年能源转型战略的主要方法。不加概率，用两个独立的关键不确定性描述四个具名称的未来，附无悔行动及信号指标。"},{"case_id":"scenario-planning-insufficiency-1","decisive_features":["decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"没有焦点问题、时限、边界和决定，四段叙述会只是装饰且不受约束。方法应保留并仅请求缺失框架。","schema":"opensocrates.template-example/1.0.0","template_prompt":"给我四个未来情景。我还没说明它们应支持什么决定、时间跨度、系统边界或哪些外部不确定性重要。"}]
```
