OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 溯因推理 (`abduction`@5)

行动前须自行理清的问题：
- 正在解释的反常事实是什么，原本平淡的基准解释会是什么?
- 还有哪一个最有力的竞争解释尚未被明确提出?
- 什么观察能区分仍需考虑的候选解释，而非与它们全都相符?

## 溯因推理

## Teacher questions

- 正在解释的反常事实是什么，原本平淡的基准解释会是什么?
- 还有哪一个最有力的竞争解释尚未被明确提出?
- 什么观察能区分仍需考虑的候选解释，而非与它们全都相符?

## Purpose

使用本程序比较对已观察到的事实或意外事实的竞争解释，选择当前最佳解释，但不将其视为已被证明。至少保留两个仍有可能成立的候选解释，评估解释的契合度与风险，并找出能够区分候选解释的证据。结果是附有具体下一步核查的暂定诊断，而不是事后拼凑证据以迎合偏好的说法。

## Use when

适用于调试、诊断、调查、异常解读，以及多个原因可能解释同一观察结果的其他情形。适合信息不完整、需要判断最可能发生了什么或意外结果为何出现的问题。仅在演绎规则尚未确定结果时使用。

## Do not use when

当明确规则和已确定的前提必然推出结论，或没有任何观察能够区分解释时，不要使用。不要把单个候选解释当作解释集合，不要用编造的精确数值评分，也不要把未观察到反证当成确证。当候选解释只是描述性解读时，避免宣称因果关系已经确定。

## Inputs to establish

明确意外观察、预期基线、受影响的决策或诊断、已知事实、合理候选解释，以及可用检验或来源。注明各候选解释涉及原因、机制、数据错误还是适用范围。若观察或决策目标不清楚，最多提出一个决定性问题；否则明确假设后继续。

## Procedure

1. 公开需要解释的观察及其偏离的基线。注明哪些部分是核查过的事实、用户报告或假设，由此形成可见的异常状态。
2. 公开至少两个候选解释及各自预测的观察和适用范围。如果测量、选择或报告错误有合理可能，也应列为候选解释，不要默认第一个实质性说法正确。
3. 公开解释契合度、覆盖范围、简约性、与既有知识的一致性和可检验性的定性比较。使用强、中、弱、未知等有序标签，不要编造概率。
4. 公开区分性证据：能够区分主要候选解释的观察、实验或来源。说明什么结果会增强、削弱或不改变各候选解释的支持程度。
5. 公开当前最佳解释及其领先的理由，并注明暂定状态。继续展示其他解释，说明结果是诊断、工作假设还是尚未解决的候选集合。
6. 公开下一步核查行动和重要失效情形，包括哪些情况会表明解释错误或证据连接不可靠。
7. 公开当前结论、候选集合和可观察的转变条件。若没有候选解释得到区分性支持，或缺少决定性观察，应暂缓判断，不要选择最生动的故事。

## Public output contract

返回 `observation`、`candidate_explanations`、`comparison_criteria`、`discriminating_evidence`、`provisional_best_explanation`、`next_test` 和 `flip_condition`。结果为暂定时，首行必须说明这是“当前最佳解释”或同等表述。依据使用 **verified**（已核验）、**computed**（已计算）、**inferred**（推断）、**assumed**（假定）、**unverified**（未核验）或 **conflicted**（存在冲突）标签；候选解释的契合度是推断，不是直接证明。

## Evidence and uncertainty rules

意外事实可以引出假设，但不能确定原因。在提高对候选解释的支持程度之前，要求独立或具有区分力的支持。避免在多个标准下重复计算同一观察。若候选解释同样契合，应报告竞争尚未解决。若无法开展重要检验，保持最佳解释为暂定或暂缓状态，并说明缺少的证据。

## Stop conditions

当观察或决策目标过于模糊、无法提出候选解释时，停止并提出一个阻塞性问题。只有一个候选解释、没有可检验的推论或缺少决定性证据时，暂缓判断。当明确前提必然推出结果，或剩余任务是来源质量、形式有效性或选项比较时，停止本程序。

## Complement handoff

若主要决策是是否购买、收集或等待区分性信息，交给 `value-of-information`。传递候选集合、会改变决策的证据以及下一次检验的成本或延迟。补充方法不应重复解释比较。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"abduction-positive-01","decisive_features":["competing_explanations","diagnose"],"expected_behavior":"route","expected_route":"abduction","kind":"positive","rationale":"多种解释都符合异常，需要区分性证据才能给出暂定的当前最佳解释。","schema":"opensocrates.template-example/1.0.0","template_prompt":"多种原因都可能解释转化率突然下降；哪种解释最符合观察到的事实？"},{"case_id":"abduction-positive-02","decisive_features":["competing_explanations","diagnose"],"expected_behavior":"route","expected_route":"abduction","kind":"positive","rationale":"任务是在信息不完整时诊断，并要求提出具有区分力的核查。","schema":"opensocrates.template-example/1.0.0","template_prompt":"服务仅在部分地区故障。比较合理解释，并提出能够区分它们的下一项观察。"},{"case_id":"abduction-positive-03","decisive_features":["competing_explanations","diagnose"],"expected_behavior":"route","expected_route":"abduction","kind":"positive","rationale":"答案必须比较候选解释，并明确保持暂定状态。","schema":"opensocrates.template-example/1.0.0","template_prompt":"对于这个意外实验结果，当前最佳解释是什么？什么会让你改变判断？"},{"case_id":"abduction-negative-01","decisive_features":["explicit_rules","explain"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"已确定的前提与规则要求演绎，而非寻找最佳解释。","schema":"opensocrates.template-example/1.0.0","template_prompt":"根据这些明确的前提和规则，结论是否必然成立？"},{"case_id":"abduction-negative-02","decisive_features":["repeated_observations","weak_sample"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"任务是从样本推广，而不是比较竞争解释。","schema":"opensocrates.template-example/1.0.0","template_prompt":"用重复的样本观察估计该模式在总体中出现的频率。"},{"case_id":"abduction-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"复制假设是机械性任务，不应触发诊断。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将提供的三个假设复制到调查模板中。"},{"case_id":"abduction-explicit-01","decisive_features":["explicit_method","competing_explanations"],"expected_behavior":"explicit_primary","expected_route":"abduction","kind":"explicit","rationale":"用户为异常结果的诊断明确指定了方法。","schema":"opensocrates.template-example/1.0.0","template_prompt":"明确调用 abduction，诊断为何配置变更后部署失败。"},{"case_id":"abduction-insufficiency-01","decisive_features":["competing_explanations","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"没有观察和竞争候选时，选择最佳解释是在编故事，而非推断。","schema":"opensocrates.template-example/1.0.0","template_prompt":"选择最佳解释，但只给出结论，不提供观察、替代解释或可检验的证据。"}]
```
