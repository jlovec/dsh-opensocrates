OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 稳健决策 (`robust-decision-making`@5)

行动前须自行理清的问题：
- 在能够明确列出的合理未来情境中，哪项初始行动始终可以接受?
- 什么情况算失败，那个巧妙方案会在哪种未来情境中最先失败?
- 哪些事项应等待未来情境明朗后再定，而不是现在就锁定?

## 稳健决策

## Teacher questions

- 在能够明确列出的合理未来情境中，哪项初始行动始终可以接受?
- 什么情况算失败，那个巧妙方案会在哪种未来情境中最先失败?
- 哪些事项应等待未来情境明朗后再定，而不是现在就锁定?

## Purpose

没有单一预测足以主导决定时，用本程序选择在多个合理未来中仍可接受的行动。公开不确定性、失败标准及取舍，区分稳健的第一步与应等待信号再采取的行动。稳健不意味着在每个未来都最优，而是无须依赖编造的概率分布也能达到规定的最低要求。

## Use when

用于面临相互作用的不确定性的长期政策、基础设施、投资、产品或运营选择。适合失败代价大、撤回缓慢，或利益相关者无法就一个预测达成共识的决定。问题是“什么行动能适应多个合理条件”，而非“哪种结果最可能”时尤其有用。

## Do not use when

单一预期情形可靠，且选择成本低、完全可逆，或约束规则下只有一个可行行动时，不使用。不要罗列随意的最坏情形、声称行动在所有未来都最好，或隐瞒稳健性的成本。无法定义成功与失败时，先澄清决定，或用证据方法确立标准。

## Inputs to establish

明确决定、可行行动、时间跨度、利益相关者和最低可接受绩效。在测试前定义失败、不可接受的后悔及重要取舍。列出深度不确定性、依赖关系、已知约束及少量合理世界的描述；除非用户提供可辩护的来源，否则不分配概率。记录可逆性、成本、时机及当前承诺。仅当答案会改变行动集合或可接受底线时，最多问两个决定性问题。

## Procedure

1. 公开决策框架、候选行动及可接受标准。**可见输出/状态变化：**建立有界选项集合，明确可接受/失败底线。
2. 公开不确定性登记表及彼此不同、内部一致的合理世界集合。**可见输出/状态变化：**分析从单一预测转为可见的测试集合；世界描述包含假设和依赖，不含概率。
3. 按规定标准在每个世界中测试每项候选行动。**可见输出/状态变化：**策略与世界结果矩阵记录 acceptable（可接受）、fragile（脆弱）或 failed（失败）状态及证据标签。
4. 公开失败条件、后悔风险及对同一行动造成压力的世界群组。**可见输出/状态变化：**脆弱性和取舍被明确命名，不藏在综合分数里。
5. 公开在所测试世界中均达到可接受底线的稳健行动或最小行动集合。**可见输出/状态变化：**建议与成本、机会损失及剩余脆弱性分开呈现。
6. 公开保障措施、可逆的第一步、条件性行动、监测信号及各触发响应。**可见输出/状态变化：**决定可随情况调整，不再是对偏好世界的一次性押注。
7. 公开 supported（有支持）、provisional（暂定）或 held（暂缓）状态及可观察的结论转变条件。**可见输出/状态变化：**缺少决定性标准或世界时，暂缓作出结论，不声称稳健。

## Public output contract

返回 `uncertainties`、`plausible_worlds`、`regret_or_failure_criteria`、`robust_action`、`tradeoffs`、`monitoring_signals`、`flip_condition` 及 supported、provisional 或 held 状态。说明行动为何达到可接受底线，以及仍在哪些方面脆弱。卡片给出一个结论、标注重要依据、说明未解决不确定性，并提供会改变行动的可观察条件；详细矩阵放在追溯记录或辅助成果中。

## Evidence and uncertainty rules

合理世界是结构化测试案例，不是预测，也不是概率加权样本。每个重要世界须依据观察、可辩护的机制、用户约束或明确假设。不得编造世界频率、预期损失、效用分数或普遍稳健性。“可接受”必须对应已公开的标准。计算比较须标出输入和单位，保留冲突证据，不将其平均化抹去。稳健行动在成本或上行收益方面仍可能较差，须持续展示这种取舍。

## Stop conditions

行动集合或最低可接受绩效存在实质不同的解释时，问一个阻断性问题并停止。缺少决定性不确定性、失败阈值或可行行动时，暂缓作出结论。单一预测可靠、约束规则不留裁量余地，或剩余工作是构建情景、核实证据或普通选项比较时，停止本方法。

## Complement handoff

世界集合需要更有条理的外部未来结构或信号叙述时，交给 `scenario-planning`。传递决策框架、不确定性登记表、可接受底线、脆弱世界群组及当前世界描述。补充方法应丰富这些世界，不隐藏失败标准，也不把世界变成概率。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"robust-decision-making-positive-1","decisive_features":["deep_uncertainty","irreversible_choice","choose","failure_risk"],"expected_behavior":"route","expected_route":"robust-decision-making","kind":"positive","rationale":"决定影响重大且难逆转，多种不确定性相互作用，用户要求跨合理世界可接受的行动。无需概率加权最优解。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们必须为运营数十年的基础设施选择防洪设计。降雨、土地使用和资金条件有深度不确定性，需要在多个合理世界中均高于公开安全底线的选项，而非仅在单一预测下胜出的选项。"},{"case_id":"robust-decision-making-positive-2","decisive_features":["deep_uncertainty","irreversible_choice","failure_risk","feedback_delay"],"expected_behavior":"route","expected_route":"robust-decision-making","kind":"positive","rationale":"请求按情景和策略压力测试、明确失败标准及适应性触发条件。这些是深度不确定性下稳健决策的公开输出。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们的供应链战略必须在未来八年适应不确定的关税、需求及供应商可靠性。用失败与后悔标准比较可行策略，展示取舍，并加入用于适应性行动的监测触发条件。"},{"case_id":"robust-decision-making-positive-3","decisive_features":["deep_uncertainty","multiple_options","choose","new_evidence"],"expected_behavior":"route","expected_route":"robust-decision-making","kind":"positive","rationale":"用户有实际选择、深度不确定性，并要求可接受而非最可能获胜的策略。要求剩余弱点和结论转变条件，可防止夸大稳健性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"区域交通投资有三个选项，但远程办公、燃料价格及公共资金的未来组合尚不足以支持单一预测。找出仍可接受的第一步，说明剩余弱点及什么证据会改变它。"},{"case_id":"robust-decision-making-negative-1","decisive_features":["source_quality","sequential_choice","choose"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"明确指出单一预期情形可靠、撤回轻易，符合禁用条件。稳健性压力测试在这里不增加必需的决策价值。","schema":"opensocrates.template-example/1.0.0","template_prompt":"基准需求预测已充分验证，试点下月可撤回且成本几乎为零，管理层只想要在该情形下预期收益最高的行动。"},{"case_id":"robust-decision-making-negative-2","decisive_features":["deep_uncertainty","macro_environment","plan"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"容易与情景规划的同族方法混淆。请求未来构建和信号指标，却明确省略策略压力测试及可接受标准。","schema":"opensocrates.template-example/1.0.0","template_prompt":"为能源市场创建四个具名称的外部未来，描述各自如何形成并列早期信号。不要依据失败或后悔标准比较当前行动。"},{"case_id":"robust-decision-making-mechanical-1","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"这是公式已给定的有界计算，没有不确定决策集合。本方法不得把算术变成稳健性判断。","schema":"opensocrates.template-example/1.0.0","template_prompt":"用给定公式根据这些已核实现金流计算年化收益率，并展示算术过程。不选择策略。"},{"case_id":"robust-decision-making-explicit-1","decisive_features":["explicit_method","deep_uncertainty","irreversible_choice","failure_risk"],"expected_behavior":"explicit_primary","expected_route":"robust-decision-making","kind":"explicit","rationale":"用户明确调用方法并给出核心决策框架、世界测试、可接受底线及保留规则。明确调用不取消证据和不确定性限制。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将 robust-decision-making 作为海岸适应选择的主要方法。在合理气候和预算世界中测试选项，以最低服务水平作失败阈值，世界或阈值缺失时保留结论。"},{"case_id":"robust-decision-making-insufficiency-1","decisive_features":["decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"行动集合、可接受底线、时限和不确定性登记表是决定性输入。无法支持稳健建议，应保留并仅请求缺失的决策输入。","schema":"opensocrates.template-example/1.0.0","template_prompt":"告诉我哪种长期战略稳健。我没有列出可行行动、失败的含义、时间跨度或应测试的不确定性。"}]
```
