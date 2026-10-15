OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 证伪主义 (`falsificationism`@5)

行动前须自行理清的问题：
- 什么观察会迫使放弃这项主张，而不是继续修补它?
- 预测中的哪一部分是主张本身，哪一部分只是测量假设?
- 如果这项检验不可能失败，实际上究竟是在检查什么?

## 证伪主义

## Teacher questions

- 什么观察会迫使放弃这项主张，而不是继续修补它?
- 预测中的哪一部分是主张本身，哪一部分只是测量假设?
- 如果这项检验不可能失败，实际上究竟是在检查什么?

## Purpose

把偏爱的主张、解释或计划变为可能失败且可检验的预测，并明确什么结果会构成反对证据。区分目标主张、辅助假设和测量失败，再说明观察到的检验能与不能确立什么。预测失败是对被检验设定的反对证据，不会自动驳倒所有相关观念。

## Use when

主张应作出可能失败的预测、用户询问什么能证明解释错误，或事后叙事被误当作预测时使用。适用于研究假设、产品计划、诊断解释，以及需要决定性反驳尝试的强主张。

## Do not use when

无法表述可检验的推论、任务是价值选择或纯机械执行，或主张只是定义时，不使用。不得把可检验性当作证明，不得用临时添加的辅助假设挽救每次失败的预测，也不得未经测量与辅助设定检查就因一次失败抛弃复杂理论。

## Inputs to establish

明确目标主张、范围、可能失败的预测、观察窗口、测量、辅助假设、反证阈值及受影响的决策。说明检验是已计划、已观察还是不可用。只有预测或阈值无法以其他方式限定时，最多提出1个决定性问题。

## Procedure

1. 公开主张与范围，将其改写为可能失败的预测，建立可见的检验目标，而不是事后解释。
2. 公开反证条件：可构成反对证据的观察结果、阈值或模式。排除“出乎意料的证据”等模糊条件。
3. 将辅助假设与测量条件和目标主张分别公开。标明何种失败涉及主张、设定或测量。
4. 公开计划或观察到的检验、出处和结果。检验不可用时，说明所需观察并保持 `unverified` 状态。
5. 公开解释：本次检验支持、已削弱、尚未检验或无法定论。未出现反证不等于强有力的确认。
6. 公开拟议修正，检查它是在结果之前提出，还是事后临时添加。没有独立支持、仅使主张不再可能被反驳的修正，仍是弱点。
7. 公开当前状态、下一项检验和可观察的结论改变条件。无法给出反证条件时，暂缓使用或拒绝使用本方法，不制造看似科学的措辞。

## Public output contract

返回 `claim`、`scope`、`risky_prediction`、`falsifier`、`auxiliary_assumptions`、`measurement_conditions`、`observed_needed_test`、`test_and_provenance`、`observed_or_needed_result`、`status` 和 `flip_condition`。区分尚未检验、无法定论、已削弱和本次检验支持。依据使用 **verified**、**computed**、**inferred**、**assumed**、**unverified** 或 **conflicted** 标签；未被证伪的主张不自动成为已验证的主张。

## Evidence and uncertainty rules

反证条件必须可观察，并与事先规定范围的主张相连。检验失败可能针对辅助假设或测量，而非整套理论。不得将事后调整当作独立支持。若未进行检验，或看过结果后才选择阈值，将结论标为 `unverified` 或 `conflicted` 并说明局限。

## Stop conditions

无法限定主张或预测时，提出1个阻断问题后停止。没有可检验的推论、无法获得所需观察，或高风险主张没有安全检验时，拒绝使用或暂缓使用本方法。任务属于来源质量、形式蕴涵或解释生成，而非反驳尝试时，停止本程序。

## Complement handoff

仅当可证伪主张属于产品或市场假设，且下一项决策是安全的最小检验时，转交 `lean-startup`。传递可能失败的预测、反证条件、测量条件和安全排除项。补充程序不得用通用实验替代缺失的反证条件。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"falsificationism-positive-01","decisive_features":["testable_claim","critique"],"expected_behavior":"route","expected_route":"falsificationism","kind":"positive","rationale":"主张需要可能失败的预测和可观察的反证条件，而非更多确认性轶事。","schema":"opensocrates.template-example/1.0.0","template_prompt":"什么观察会对这项偏爱的产品假设构成决定性反对证据？"},{"case_id":"falsificationism-positive-02","decisive_features":["testable_claim","critique"],"expected_behavior":"route","expected_route":"falsificationism","kind":"positive","rationale":"要求的输出是预先规定、带测量条件的反驳尝试。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将这项解释变成预测，区分辅助假设，并在检验前定义失败阈值。"},{"case_id":"falsificationism-positive-03","decisive_features":["testable_claim","critique"],"expected_behavior":"route","expected_route":"falsificationism","kind":"positive","rationale":"方法须定位失败的检验实际挑战了什么。","schema":"opensocrates.template-example/1.0.0","template_prompt":"预测失败削弱的是理论、测量，还是辅助设定假设？"},{"case_id":"falsificationism-negative-01","decisive_features":["competing_explanations","diagnose"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"没有规定可能失败的预测时，生成候选解释属于溯因。","schema":"opensocrates.template-example/1.0.0","template_prompt":"为异常生成多个解释，比较哪个最能说明观察事实。"},{"case_id":"falsificationism-negative-02","decisive_features":["source_quality","reconcile_evidence"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"任务是校准证据层级，而非尝试反驳。","schema":"opensocrates.template-example/1.0.0","template_prompt":"按设计严谨性对这些来源排序，并根据适用性调整主张强度。"},{"case_id":"falsificationism-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"复制已提供的检验规范是机械操作。","schema":"opensocrates.template-example/1.0.0","template_prompt":"把预注册的预测和阈值复制到检验表。"},{"case_id":"falsificationism-explicit-01","decisive_features":["explicit_method","testable_claim"],"expected_behavior":"explicit_primary","expected_route":"falsificationism","kind":"explicit","rationale":"用户明确选择以反驳为导向检验普遍主张。","schema":"opensocrates.template-example/1.0.0","template_prompt":"明确调用证伪主义，挑战“这项干预总能改善留存”的主张。"},{"case_id":"falsificationism-insufficiency-01","decisive_features":["testable_claim"],"expected_behavior":"refuse","expected_route":null,"kind":"insufficiency","rationale":"固定的禁用条件适用：没有可检验的推论时，方法须拒绝，不能编造反证条件。","schema":"opensocrates.template-example/1.0.0","template_prompt":"对一项没有可观察预测、也无法说明什么会构成反对证据的主张使用证伪主义。"}]
```
