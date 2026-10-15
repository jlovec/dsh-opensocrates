OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 道义推理 (`deontic-reasoning`@5)

行动前须自行理清的问题：
- 这是必须做、可以做、不得做，还是仅仅用规则措辞表达的偏好?
- 这项义务或许可的来源与适用范围是什么，对哪些人有约束力?
- 如果两项义务冲突，实际适用的是哪项例外或优先规则?

## 道义推理

## Teacher questions

- 这是必须做、可以做、不得做，还是仅仅用规则措辞表达的偏好?
- 这项义务或许可的来源与适用范围是什么，对哪些人有约束力?
- 如果两项义务冲突，实际适用的是哪项例外或优先规则?

## Purpose

用此程序区分行动者必须做、可以做、不得做或仅在例外下可做的行动。明确候选义务、许可、禁止、权利和政策条件，检查来源及范围，在运用实际偏好前揭示冲突。结果是有边界的获准行动集合，以及每项义务的清晰状态；不能替代权威的法律或专业意见。

## Use when

决策涉及政策、合同、同意、权利、权限、安全义务、专业标准，或“好的结果”与“获准行动”冲突时使用。建议混淆要求与偏好、例外可能重要，或不同来源似乎施加不同义务时有用。有适用文本或指定权威时使用，并说明使规则相关的管辖区、组织、角色及时间范围。

## Do not use when

不要从一般道德直觉或含糊政策摘要编造法律义务、权利、许可或禁止。不用于确定纯经验性的原因、技术设计矛盾，或没有规范约束的偏好。理想结果不能为禁止行为辩护。来源不可用、含糊、过时或超出所述权限时，规则标为 unverified，并寻找负责方，不将其说成有约束力。

## Inputs to establish

说明决策、行动者、候选行动、各行动者的角色和权限、相关来源或政策、管辖或组织范围、有效期、例外及误分类的伤害。区分明确文本、解释和拟议伦理原则。决定性问题最多两个，例如“哪个来源实际约束此行动者和行动？”或“是否存在改变状态的例外或同意条件？”

## Procedure

1. **确定行动集合与权限。** 列出实际可行行动，确定谁可执行或授权，排除决策边界外选项。**可见输出/状态变化：** 公布行动列表、行动者角色和权限范围。
2. **提取候选规范。** 对每个来源说明其似乎要求、允许、禁止或豁免何种行动，引用或安全地识别相关公开依据。**可见输出/状态变化：** 公布带来源、范围、有效期和证据状态的义务清单。
3. **检查层级与条件。** 比较适用来源、例外、同意、角色限制和优先规则，区分建议与义务。**可见输出/状态变化：** 公布现行规则、条件和冲突，含糊解释标为 unverified。
4. **谨慎处理冲突。** 义务相互冲突时，若来源建立优先顺序，识别该顺序；否则说明冲突，仅在具备资格的权威参与下选择伤害最小的获准临时行动。**可见输出/状态变化：** 公布冲突处置或暂缓状态，不默默挑选偏爱的规则。
5. **筛选获准选项。** 移除禁止行动，保留必需行动，真正获准的选择留待实际比较。**可见输出/状态变化：** 公布获准、必需、禁止和未解决选项，分别附理由和来源状态。
6. **确定实际下一步。** 在获准集合内说明下一步行动、负责人、所需证据，以及改变规范状态的条件。**可见输出/状态变化：** 公布结论、暂缓或升级路径及转变条件。

## Public output contract

返回候选义务、许可、禁止、豁免、适用来源、范围、冲突、获准选项及未解决问题。区分 verified 的来源文本、inferred 的解释、assumed 的情境和 unverified 的权限。结论卡可以说“在所述来源下获准”或“尚无法确立许可”，但不得无权威依据地主张普遍法律结论。完整来源分析和替代方案保留在追溯记录中。

## Evidence and uncertainty rules

规范状态取决于来源、范围、角色、时点和条件，而非只看后果。政策建议不自动成为义务，惯常做法不自动构成许可。不要编造引文、管辖区、生效日期、同意或层级。来源冲突时标为 conflicted，并暂缓或升级，除非权威优先规则解决冲突。不能用有利结果交换掉安全、权利和隐私约束。

## Stop conditions

适用来源或权威未知，行动或行动者未定义，可能改变结果的例外尚为 unverified，或高风险状态需要专业解释时，停止。暂缓行动，不称其获准或必需。适用时升级至负责法律、政策、临床、安全或治理事务的负责人。

## Complement handoff

检查约束规则和权限后，合理的困难案例仍揭示原则与案例判断间的张力时，转交 reflective-equilibrium。传递公开规范、范围、冲突和获准集合；补充方法不得编造新义务。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"deontic-reasoning-positive-01","decisive_features":["duties_rights","explicit_rules"],"expected_behavior":"route","expected_route":"deontic-reasoning","kind":"positive","rationale":"决策受义务、许可、禁止、同意及可识别的政策来源约束。","schema":"opensocrates.template-example/1.0.0","template_prompt":"数据共享提案可能有用，但同意条款和隐私政策决定团队必须、可以或不得做什么。"},{"case_id":"deontic-reasoning-positive-02","decisive_features":["duties_rights","explicit_rules"],"expected_behavior":"route","expected_route":"deontic-reasoning","kind":"positive","rationale":"所需输出是有来源的规范状态和冲突处理，而非仅优化结果。","schema":"opensocrates.template-example/1.0.0","template_prompt":"临床人员询问，指定专业守则下两项义务是否冲突，以及允许哪些临时行动。"},{"case_id":"deontic-reasoning-positive-03","decisive_features":["duties_rights","explicit_rules"],"expected_behavior":"route","expected_route":"deontic-reasoning","kind":"positive","rationale":"行动集合包括来自政策的必需、获准、禁止和例外状态。","schema":"opensocrates.template-example/1.0.0","template_prompt":"工作场所政策似乎要求报告、允许经同意的例外，并禁止分享敏感细节；澄清获准选项。"},{"case_id":"deontic-reasoning-negative-01","decisive_features":["practical_consequence","choose"],"expected_behavior":"route","expected_route":"pragmatism","kind":"negative","rationale":"问题是没有规范权威瓶颈的实际方案比较。","schema":"opensocrates.template-example/1.0.0","template_prompt":"应根据可观察后果和可逆试点比较两种服务策略，没有规则约束选择。"},{"case_id":"deontic-reasoning-negative-02","decisive_features":["value_conflict","argument_dispute"],"expected_behavior":"route","expected_route":"reflective-equilibrium","kind":"negative","rationale":"原则和判断的相互调整是更具体的路由。","schema":"opensocrates.template-example/1.0.0","template_prompt":"一个原则与几项困难案例冲突，团队希望在有裁量空间时修订它们，以获得更大的一致性。"},{"case_id":"deontic-reasoning-mechanical-01","decisive_features":[],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"复制政策文本是机械任务，不要求规范解释。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将政策条款复制为检查表，不解释任何行动是否必需或获准。"},{"case_id":"deontic-reasoning-explicit-01","decisive_features":["explicit_method","duties_rights","explicit_rules"],"expected_behavior":"explicit_primary","expected_route":"deontic-reasoning","kind":"explicit","rationale":"用户明确要求有来源的规范分类。","schema":"opensocrates.template-example/1.0.0","template_prompt":"使用 deontic-reasoning，区分本合同允许、要求、禁止及留下未解决的事项。"},{"case_id":"deontic-reasoning-insufficiency-01","decisive_features":["duties_rights","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"权限与范围缺失，不能编造有约束力的义务。","schema":"opensocrates.template-example/1.0.0","template_prompt":"未提供适用政策、角色、管辖区或同意条件；宣布该行动是法律要求。"}]
```
