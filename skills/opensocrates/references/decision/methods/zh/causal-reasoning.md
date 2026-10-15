OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 因果推理 (`causal-reasoning`@5)

行动前须自行理清的问题：
- 假如这一因素不存在，同一结果原本会如何变化?
- 还有什么在同一时间发生变化，也能解释相同的变化结果?
- 正在主张的机制是什么，若它不正确，会观察到什么?

## 因果推理

## Teacher questions

- 假如这一因素不存在，同一结果原本会如何变化?
- 还有什么在同一时间发生变化，也能解释相同的变化结果?
- 正在主张的机制是什么，若它不正确，会观察到什么?

## Purpose

使用本程序判断某因素是否可能改变结果，而不只是与结果同时出现。它区分关联与因果，让机制可供检查，并识别在相关反事实条件下本会发生什么。结果是范围明确、措辞与证据相称的解释：已确立、起贡献作用、存在关联或暂缓判断。

## Use when

当用户询问 A 是否造成 B、干预是否产生效果，或政策、功能、行为、事件如何改变结果时使用。当前后变化看似诱人、多个解释符合结果或建议依赖预测改变一个因素会怎样时，尤其有用。可以使用定性观察、实验、行政记录或仔细描述的案例；不要求大型数据集。

## Do not use when

不要将其作为纯描述总结、简单计算或受约束性规则支配的选择的主要程序。不要把反复、自我增强的模式缩减为单次事件解释；交给 `systems-thinking` 或 `causal-loop-diagramming`。结果、暴露因素、时序或比较未定义时，不要断言因果关系。若安全、医疗、法律或财务决策依赖未核验的因果主张，应说明限制并寻求合格专业审查，而不是增强措辞。

## Inputs to establish

用一句话陈述因果主张：哪个因素，对谁，在什么时间窗口，被认为改变什么结果。尽可能记录结果的方向和单位、观察比较或反事实、暴露与结果的时序，以及支持每项重要事实的来源或观察。列出合理的混杂因素、逆向因果路径、选择效应和连接暴露与结果的机制。最多提出两个决定性问题，如“没有 A 时会存在什么比较？”或“A 相对 B 何时发生？”

## Procedure

1. **固定主张与比较。** 将问题改写为“对于[人群]，在[时期]，与[指定备选情况]相比，改变 A 是否会改变 B？”**可见输出／状态变化：** 公开一句话因果主张、人群、时间窗口与比较；任何项缺失时，将主张标为暂定。
2. **核查共同变化与时序。** 比较可用观察，不要把先后顺序或相关当作证明。确认相关案例中 A 与 B 共同变化，且 A 先于结果；记录不一致和缺失观察。**可见输出／状态变化：** 加入简短的关联／时序发现，标为 `verified`、`computed`、`inferred` 或 `unverified`。
3. **梳理替代解释。** 列出可信混杂因素、逆向因果路径、选择效应、测量变化和巧合。逐一说明什么证据可将其与拟议主张区分。**可见输出／状态变化：** 公开替代解释清单，将各路径标为已核查、未解决或不适用。
4. **检验机制。** 描述最短的合理 A 到 B 路径，并识别机制运作时应出现的中间观察。区分直接证据支持的机制与仅来自合理故事的机制。**可见输出／状态变化：** 公开带支持状态的机制链；必要连接缺失时，降低主张强度。
5. **审查反事实。** 有条件时，使用对照、被中断的趋势、自然比较、重复案例或明确的定性对比，判断没有 A 时 B 可能怎样。不要编造数值效应或概率。**可见输出／状态变化：** 记录反事实依据及限制；没有可辩护的比较时，将结果设为保留或暂定。
6. **确定结论与下一步核查。** 综合时序、共同变化、替代解释、机制与反事实；单项核查通过不能掩盖决定性缺口。**可见输出／状态变化：** 公开因果结论、强度措辞、剩余不确定性，以及一个可观察的转变条件或下一次检验。

## Public output contract

返回简洁的因果主张、观察比较和机制描述。展示主要混杂因素或替代解释、反事实依据，并使用 `verified`、`computed`、`inferred`、`assumed`、`unverified` 或 `conflicted` 等标签说明结论依据的状态与强度。包含什么会改变结论。强因果陈述要求重要连接得到支持，且没有未解决的决定性替代解释；否则使用“可能有贡献”“与……一致”或“观察到关联”。将依据映射到结论卡，细节留在追溯记录中。

## Evidence and uncertainty rules

仅有相关、时间先行或合理机制并不具有决定性。直接支持结果的来源，不会自动成为暴露造成结果的证据。用户报告、推断机制和未测量的比较应标为 `assumed` 或 `unverified`。可信来源不一致时，将相关依据标为 `conflicted`，降低结论强度或暂缓判断。不要编造效应量、置信区间、概率、样本质量或已通过的反事实检验。只有明确缺少的核查及其实务后果时，结论才能作为有用的暂定假说保留。

## Stop conditions

当无法定义因果目标或比较、时序未知而允许逆向因果，或可信替代解释仍同样能够产生结果时，停止并暂缓判断。决定性因果证据未核验时，在建议高风险干预之前停止。说明缺失输入和最小安全核查，不要用充满把握的措辞填补缺口。

## Complement handoff

当因果解释有明确、可能被反驳的预测，且可以说明决定性证伪检验时，交给 `falsificationism`。只传递公开主张、机制、关键替代解释和拟议证伪条件；不要重复完整程序或暴露隐藏推理。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"causal-reasoning-positive-01","decisive_features":["causal_question","confounding"],"expected_behavior":"route","expected_route":"causal-reasoning","kind":"positive","rationale":"问题询问干预是否改变结果，需要时序、比较和竞争解释。","schema":"opensocrates.template-example/1.0.0","template_prompt":"一项匹配试点比较两家诊所，其中一家采用提醒电话后，仅该诊所的失约减少。电话造成了变化吗？"},{"case_id":"causal-reasoning-positive-02","decisive_features":["causal_question","testable_claim","confounding"],"expected_behavior":"route","expected_route":"causal-reasoning","kind":"positive","rationale":"重复的干预与结果关系仍需核查机制、反事实及混杂因素。","schema":"opensocrates.template-example/1.0.0","template_prompt":"结账流程重新设计后，多个独立观察的队列完成率上升；团队希望知道，增长是否由重新设计而非季节性需求造成。"},{"case_id":"causal-reasoning-positive-03","decisive_features":["causal_question","confounding"],"expected_behavior":"route","expected_route":"causal-reasoning","kind":"positive","rationale":"因果目标、时序、比较及合理混杂因素已经明确，足以形成范围有限的因果解释。","schema":"opensocrates.template-example/1.0.0","template_prompt":"经理询问四天工作制是否提高留任率，并提供开始日期、对比团队及可能的工作量混杂因素。"},{"case_id":"causal-reasoning-negative-01","decisive_features":["feedback_delay","deep_uncertainty"],"expected_behavior":"route","expected_route":"systems-thinking","kind":"negative","rationale":"主要目标是带延迟的重复反馈模式，因此应以系统解释为主，而非单次因果比较。","schema":"opensocrates.template-example/1.0.0","template_prompt":"客服积压在六个月间持续增长，人员、需求和响应延迟互相影响；用户询问模式为何持续。"},{"case_id":"causal-reasoning-negative-02","decisive_features":["recurring_failure","diagnose"],"expected_behavior":"route","expected_route":"root-cause-analysis","kind":"negative","rationale":"这是运营复发诊断，结果是因果链及预防负责人，而不仅是暴露效应。","schema":"opensocrates.template-example/1.0.0","template_prompt":"工厂缺陷在多次交接后复发，请求区分症状、流程原因及缺失控制。"},{"case_id":"causal-reasoning-mechanical-01","decisive_features":[],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"翻译是机械性任务，即使文本含因果措辞，也必须保持方法不介入。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将描述政策变更及其结果的句子译成韩语，不评估政策是否造成任何结果。"},{"case_id":"causal-reasoning-explicit-01","decisive_features":["explicit_method","causal_question"],"expected_behavior":"explicit_primary","expected_route":"causal-reasoning","kind":"explicit","rationale":"用户为判断目标明确指定方法，因此在遵守证据约定的前提下作为主要方法。","schema":"opensocrates.template-example/1.0.0","template_prompt":"使用 causal-reasoning 评估新入门邮件是否改变激活率，并展示所需比较。"},{"case_id":"causal-reasoning-insufficiency-01","decisive_features":["causal_question","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"单个无对照轶事缺少可辩护比较，不能支持因果或高风险建议。","schema":"opensocrates.template-example/1.0.0","template_prompt":"一位员工服用补充剂后康复；认定补充剂造成康复，并向整个团队推荐。"}]
```
