OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 博弈论 (`game-theory`@5)

行动前须自行理清的问题：
- 哪些人的收益取决于己方行动，又有哪些人的行动会改变己方选择?
- 对方知道而己方不知道的信息是什么，反过来又是什么?
- 哪些承诺具有可信度，哪些只是希望能够兑现的许诺?

## 博弈论

## Teacher questions

- 哪些人的收益取决于己方行动，又有哪些人的行动会改变己方选择?
- 对方知道而己方不知道的信息是什么，反过来又是什么?
- 哪些承诺具有可信度，哪些只是希望能够兑现的许诺?

## Purpose

一项决策的结果取决于另一行动者的回应，而对方的结果又取决于这项决策时，使用本程序。在推荐行动前，公开参与者、可用行动、激励、信息、时序及可信承诺。证据不支持时，不得编造收益表、赋予概率，或把结果称作均衡。

## Use when

适用于竞争行动、谈判、竞标、定价、进入或威慑、合同设计、共同标准，以及对方可作战略调整的其他选择。当缺失问题是“我们这样做，对方会怎样回应？”，或承诺、威胁、声誉、信息优势可能改变结果时尤其有用。重复互动和合作可能性应明确说明，不能直接假定。

## Do not use when

环境没有有意义的战略回应的单一行动者优化问题，不使用。无裁量空间的约束规则、纯机械选择，或所谓对手无法影响结果的情境也不使用。没有证据时，不将协商关系简化成零和竞争。不得仅因行动看似方便就推断理性、隐藏动机或数值收益。

## Inputs to establish

明确核心决策、参与者及其决策权、各方可行行动、各自看重的结果、可获取的信息、行动顺序，以及互动是一次性还是重复。可信承诺、约束、既往行为仅在有来源或已提供时记录。缺少有依据的尺度时，收益可保留为顺序或定性比较。仅当遗漏的参与者、行动、激励、信息条件或时序事实会改变建议时，最多提出2个简短问题。

## Procedure

1. 公开核心决策与参与者名册，说明谁能行动、谁受影响、谁能否决或拖延。角色标为已观察、用户提供、推断或假定，建立可见的博弈边界。可见输出/状态变化：博弈边界已公开。
2. 公开各参与者的行动和信息记录，包括可行行动、各方可观察的内容、同步或序贯行动，以及是否重复互动。把模糊竞争变成明确结构。可见输出/状态变化：结构记录已公开。
3. 公开重要结果的激励清单。使用有来源或用户提供的后果，逐项标为 `verified`、`computed`、`inferred`、`assumed`、`unverified` 或 `conflicted`；精确收益无依据时保留顺序比较。可见输出/状态变化：激励清单已公开。
4. 公开回应检查。同步选择时比较可信的最优回应，序贯选择时从最终决策向前倒推。优势行动有证据支持时说明理由；否则只显示相关的回应组合，不假装知道所有动机。可见输出/状态变化：回应检查已公开。
5. 公开稳定结果候选，以及有一个、多个或没有得到支持的候选。只有行动、激励、信息、时序假设均有充分证据时才使用“均衡”；否则称为条件性结果并说明缺失条件。可见输出/状态变化：结果状态已公开。
6. 公开干预手段与推荐行动。说明行动改变激励、信息、时序、可用行动或承诺可信度中的哪一项，附上一个可观察的回应信号，使策略可执行。可见输出/状态变化：行动和信号已公开。
7. 公开结论、最大不确定性及可使行动改变的观察条件。决定性收益、参与者或时序事实缺失时，公开暂缓给出结果及解除暂缓状态的最小检查，不选出虚构赢家。可见输出/状态变化：暂缓状态已公开。

## Public output contract

以简明结果返回 `players`、`actions`、`incentives`、`information`、`timing`、`response_analysis`、`candidate_outcome`、`equilibrium_caveat`、`move` 和 `flip_condition`。候选结果不自动意味着理想、公平、高效或必然。说明其是获支持、条件性、冲突还是保留。依据使用卡片的证据标签，备选项概括具有实质差异的行动或承诺设计。不得公开私有思考记录。

## Evidence and uncertainty rules

区分观察行为与动机理论。收益主张需要来源、用户提供的记录、可重复计算或明确假设，并标注来源和范围。不得编造概率、折现率、隐藏信息或理性。稳定回应模式仅表示：在已声明假设下，没有得到支持的单方改变能改善所述结果；它不证明社会可取性。威胁或承诺只有在相关决策时点，行动者仍有执行理由时才算可信。缺失、冲突或陈旧的激励标为 `unverified` 或 `conflicted`，相应降低结论强度。

## Stop conditions

两个合理的参与者集合、行动集合或时序会导致实质不同的行动，而用户目的不能帮助选择时，提出1个阻断问题后停止。缺少决定性激励、信息条件或顺序时，暂缓判断。没有有意义的战略相互依赖时，不路由并停止。结构、条件性回应、行动、证据状态和结论改变信号已公开即结束，不为制造虚假精度继续计算。

## Complement handoff

仅当博弈结构揭示重要的权力、同意、正当性、实施支持，或受影响却未被代表的群体时，转交 `stakeholder-analysis`。传递参与者名册、激励、冲突、承诺和未解决的不确定性。补充程序应梳理行动者及参与需求，不重复回应分析或编造缺失收益。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"game-theory-positive-1","decisive_features":["interacting_actors","choose"],"expected_behavior":"route","expected_route":"game-theory","kind":"positive","rationale":"请求明确了相互依赖的定价行动并要求回应分析。路由应显示利润率与留存的证据，而非编造收益表或概率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"如果我们降低订阅价格，主要竞争者可跟进降价或保持价格，其回应会改变我们的留存与利润率。推荐行动前比较可信的回应。"},{"case_id":"game-theory-positive-2","decisive_features":["interacting_actors","choose"],"expected_behavior":"route","expected_route":"game-theory","kind":"positive","rationale":"双方均可调整，收益取决于对方承诺。请求提供的是结构假设而非已验证成本，须标记假设与不确定性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们正在谈判多年供应合同。我们的采购量承诺可能降低供应商成本，但若预测薄弱，供应商可优先其他买家。梳理激励、信息和可信承诺。"},{"case_id":"game-theory-positive-3","decisive_features":["interacting_actors","choose"],"expected_behavior":"route","expected_route":"game-theory","kind":"positive","rationale":"决策依赖双方采用和先行成本。条件性稳定结果可能有用，但激励未获支持前不得称为均衡。","schema":"opensocrates.template-example/1.0.0","template_prompt":"两家平台考虑共同的互操作标准。采用能为双方创造价值，但任一平台可能等另一方先承担整合成本。分析可能回应，以及使合作可信的设计行动。"},{"case_id":"game-theory-negative-1","decisive_features":["no_meaningful_interdependence"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"环境固定，没有参与者的回应影响结果。没有战略相互依赖，因此不应路由到此方法。","schema":"opensocrates.template-example/1.0.0","template_prompt":"通过比较延迟、存储成本和工程能力，选择内部数据库。没有其他行动者能改变结果。"},{"case_id":"game-theory-negative-2","decisive_features":["macro_environment","forecast"],"expected_behavior":"route","expected_route":"pestel-analysis","kind":"negative","rationale":"请求可能影响战略，但决定性输出是外部因素扫描，而非参与者回应或激励。这是易混淆的方法类别，不得编造博弈均衡。","schema":"opensocrates.template-example/1.0.0","template_prompt":"评估可能影响我们进入该市场的政治、经济、社会、技术、环境和法律力量。"},{"case_id":"game-theory-mechanical-1","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"输入已提供，结果是机械计算，不需要建模其他行动者的回应。","schema":"opensocrates.template-example/1.0.0","template_prompt":"用所提供的采购量计算这4项合同价格的加权平均值。"},{"case_id":"game-theory-explicit-1","decisive_features":["explicit_method","interacting_actors"],"expected_behavior":"explicit_primary","expected_route":"game-theory","kind":"explicit","rationale":"用户明确命名方法并要求其公开结构。方法保持主要地位，同时保留收益信息的缺失，不编造概率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"用博弈论分析这次采购拍卖。显示参与者、行动、信息、时序及任何条件性稳定结果，但不编造缺失收益。"},{"case_id":"game-theory-insufficiency-1","decisive_features":["decisive_input_missing","interacting_actors"],"expected_behavior":"hold","expected_route":"game-theory","kind":"insufficiency","rationale":"问题存在战略相互依赖，但缺失结构决定威胁是否可信。方法应保留，只询问决定性事实，不预测回应。","schema":"opensocrates.template-example/1.0.0","template_prompt":"是否应以价格回应威胁竞争者？我尚未明确竞争者可行行动、我方后果、双方信息或关系是否重复。"}]
```
