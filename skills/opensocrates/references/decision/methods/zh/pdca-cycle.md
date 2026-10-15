OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- PDCA 循环 (`pdca-cycle`@5)

行动前须自行理清的问题：
- 计划的变化、衡量方式以及可视为获得认识的比较分别是什么?
- Do步骤最小可以做到什么程度，仍能产生可信赖的Check结果?
- 如果Check未达标，哪些内容将标准化，哪些将再次进入循环?

## PDCA 循环

## Teacher questions

- 计划的变化、衡量方式以及可视为获得认识的比较分别是什么?
- Do步骤最小可以做到什么程度，仍能产生可信赖的Check结果?
- 如果Check未达标，哪些内容将标准化，哪些将再次进入循环?

## Purpose

使用本程序，为运营改进假设开展范围受限的 Plan–Do–Check–Act 循环。公开目标、衡量方式、小规模执行范围、比较规则与标准化决策，使改进积累为证据与组织记忆。这是受控学习循环，不能代替对未知根本条件的诊断，也不能代替对正在发生的安全事件的响应。

## Use when

流程或服务可在小规模、可逆范围内变更，预期改进可测量，且重复循环能够提升标准时使用。适合通过较短观察窗口检验改进假设，并明确决定标准化、修订或放弃。团队希望从执行中学习，而不把整个运营押在未经测试的变更上时使用。

## Do not use when

根本条件未知且实验可能掩盖或加重伤害、约束性规则不允许裁量，或需要紧急安全、信息安全、法律或事件响应时，不使用。不要开展没有检查规则、只制造活动的循环。不要把机械请求变为改进计划，也不要因变更被宣布或完成一次就将其标准化。

## Inputs to establish

确定改进目标、观察基线或流程状态、假设、范围、负责人及预期变化方向。在 Do 前定义指标、单位、来源、观察窗口、防护边界、停止条件与比较规则。说明标准化、修订或放弃所需证据，以及下一循环或版本化标准的记录位置。只有缺失答案会改变安全边界、测量或 Act 决策时才提出不超过两个简短问题；否则将缺口标为未验证，缺口具有决定性时暂缓。

## Procedure

1. **公开 Plan 卡。** 说明目标、基线、改进假设、预期方向、范围、负责人及时间边界。将基线标为 verified、computed、user-provided、inferred、assumed 或 unverified。**可见输出／状态变化：**计划状态。
2. **公开 Check 规范。** 明确指标、单位、来源、采集方法、观察窗口、比较规则、防护边界与停止条件。预先声明标准化、修订或放弃所需证据。**可见输出／状态变化：**检查规则。
3. **公开 Do 记录。** 仅在获批准的小范围内执行，记录实际变更、偏差、排除项、事件与观察。保持回滚路径，不因初步信号良好就扩大暴露。**可见输出／状态变化：**可审计的执行记录。
4. **公开 Check 结果。** 按预先声明的规则比较预期与观察值或描述。识别缺失数据、混杂因素、来源限制与矛盾。**可见输出／状态变化：**附证据状态的结果差距。
5. **公开 Act 决策。** 根据证据与防护边界，选择标准化、修订、放弃或暂缓。结果不一致或决定性测量缺失时，保持变更暂定并记录未解决条件。**可见输出／状态变化：**Act 决策或暂缓。
6. **公开下一循环。** 记录版本化标准或修订假设、负责人、下一观察，以及一至两个可观察的结论转变条件。传承已学内容与仍未验证事项。**可见输出／状态变化：**下一循环计划或暂缓结果。

## Public output contract

返回可放入卡片的字段 `plan_objective_measure`、`do_scope`、`check_rule` 与 `act_standardize_decision`，为每项重要依据标示证据状态。`plan_objective_measure` 须包含基线或其缺失；`do_scope` 展示有限暴露；`check_rule` 展示比较与停止规则；`act_standardize_decision` 区分标准化、修订、放弃与暂缓。包含下一循环假设，或说明不应继续循环的明确理由。决定性测量缺失时，结果为暂缓。

## Evidence and uncertainty rules

将直接观察、关联来源、可复现计算、用户提供记录、推论与采用的工作前提视为不同证据状态。对 `computed` 展示输入、表达式、单位及适用的舍入。没有可辩护基线或采集方法改变时，将比较标为未验证。不得编造概率、效应量、样本数或因果确定性。一次循环可支持局部学习主张，但很少能证明永久标准；可信观察相互冲突时，Act 决策保持冲突或暂缓。保留偏差与负面信号，不仅报告改进。

## Stop conditions

目标、基线、测量、比较规则、负责人或安全范围缺失，且会改变 Act 决策时，暂缓。循环造成持续伤害、削弱必要控制、超出授权或失去安全回滚能力时，立即停止。根本条件未知且循环可能掩盖它时，移交给 `root-cause-analysis`。检查失败或无定论后，若没有修订假设或安全的下一观察则停止，不要在没有学习的情况下重复 Do。

## Complement handoff

Check 结果揭示重复故障、相互竞争的因果路径，或下一轮改进前须先诊断的控制弱点时，移交给 `root-cause-analysis`。传递已公开计划、有限 Do 范围、检查结果、偏差、证据状态与剩余控制问题。不要传递无支持的归责主张，也不要仅因首轮无定论就启动第二套完整方法。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"pdca-cycle-positive-1","decisive_features":["repeat_iteration","plan","testable_hypothesis","chosen_plan"],"expected_behavior":"route","expected_route":"pdca-cycle","kind":"positive","rationale":"这是有基线、可衡量目标、安全范围与标准化或修订决策的受控运营迭代。循环应保留已验证基线，另行标明新比较证据。","schema":"opensocrates.template-example/1.0.0","template_prompt":"客服队列有已验证基线，以及小规模分流变更可降低等待时间而不降低解决质量的假设。为一次可逆循环定义 Plan、范围有限的 Do、Check 规则与 Act 决策。"},{"case_id":"pdca-cycle-positive-2","decisive_features":["repeat_iteration","plan","testable_hypothesis","chosen_plan"],"expected_behavior":"route","expected_route":"pdca-cycle","kind":"positive","rationale":"单一区域与一周窗口适合有限 PDCA 循环。结果须限制比较在局部，不将一次循环当作永久标准的证明。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们拟在一个仓库区域开展一周包装标签变更。设定目标与指标，定义防护边界与停止条件，比较预期和观察结果，并决定标准化还是修订。"},{"case_id":"pdca-cycle-positive-3","decisive_features":["repeat_iteration","plan","testable_hypothesis","practical_consequence"],"expected_behavior":"route","expected_route":"pdca-cycle","kind":"positive","rationale":"工作流条件与测量已确立，任务是迭代改进而非发现根因。所要求的下一循环状态使学习与标准修订可见。","schema":"opensocrates.template-example/1.0.0","template_prompt":"已知工作流瓶颈有拟议变更、负责人及可复现测量。给出 Plan–Do–Check–Act 提纲，记录偏差，并形成带版本的下一改进假设。"},{"case_id":"pdca-cycle-negative-1","decisive_features":["diagnose","causal_question","confounding","decisive_input_missing"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"未知根本条件与缺失证据可能让改进循环掩盖故障。测试另一变更前，应由 root-cause-analysis 明确因果边界。","schema":"opensocrates.template-example/1.0.0","template_prompt":"生产缺陷有多个可能原因，且没有可靠时间线。立即试验新的审批步骤，看看缺陷是否消失。"},{"case_id":"pdca-cycle-negative-2","decisive_features":["safety_critical_validation","recurring_failure"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"持续伤害与紧急安全响应排除了临时拼凑的 PDCA 循环。控制事件及合格事件程序优先于迭代学习。","schema":"opensocrates.template-example/1.0.0","template_prompt":"化学品泄漏仍在持续。先现场改变处理标准，从下一次暴露学习，再联系事件响应团队。"},{"case_id":"pdca-cycle-mechanical-1","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"给定计数求和是确定性计算，不是 Plan–Do–Check–Act 改进决策。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将给定四个每日计数相加并返回总数，不解释流程或推荐变更。"},{"case_id":"pdca-cycle-explicit-1","decisive_features":["explicit_method","repeat_iteration","plan","testable_hypothesis"],"expected_behavior":"explicit_primary","expected_route":"pdca-cycle","kind":"explicit","rationale":"用户明确指定方法与必需公开输出。决定性测量或安全范围缺失时，程序应暂缓。","schema":"opensocrates.template-example/1.0.0","template_prompt":"对此运营改进使用 PDCA 循环。展示目标与测量、有限 Do 范围、Check 规则、Act 决策、证据状态及下一循环假设。"},{"case_id":"pdca-cycle-insufficiency-1","decisive_features":["decisive_input_missing","repeat_iteration","plan","testable_hypothesis"],"expected_behavior":"hold","expected_route":"pdca-cycle","kind":"insufficiency","rationale":"明确要求 PDCA，但全部决定性输入缺失。应暂缓，而非开展无边界变更或标准化未经测量的结果。","schema":"opensocrates.template-example/1.0.0","template_prompt":"用 PDCA 改善我们的流程。我们没有目标、基线、拟议变更、测量、安全范围、负责人或结果标准化规则。"}]
```
