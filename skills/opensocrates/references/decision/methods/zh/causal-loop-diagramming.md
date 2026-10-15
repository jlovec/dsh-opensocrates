OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 因果回路图 (`causal-loop-diagramming`@5)

行动前须自行理清的问题：
- 实际增加或减少的变量是什么，能否用怀疑者也可测量的表述说明?
- 这个回路是强化回路还是平衡回路，什么延迟会掩盖它的效果?
- 哪一条连接其实是假设，却被表述成已经确认的因果路径?

## 因果回路图

## Teacher questions

- 实际增加或减少的变量是什么，能否用怀疑者也可测量的表述说明?
- 这个回路是强化回路还是平衡回路，什么延迟会掩盖它的效果?
- 哪一条连接其实是假设，却被表述成已经确认的因果路径?

## Purpose

使用本程序将有依据的动态解释转成简洁的因果回路图。命名变量，为每条有向连接标注正负，区分增强回路和平衡回路，并标记可能让干预看似无效或造成超调的延迟。图是关于结构的公开假说，不是证明或预测。其价值在于让反馈叙述可供检查，并将一种可能干预连接到可观察的核查。

## Use when

当问题因效应绕系统返回而重复、加速、衰减、振荡或抵抗政策时使用。适合解释需求为何进一步刺激需求、压力为何带来短期缓解却增加长期积压、纠正措施为何后来被抵消。适用于少量已命名变量和明确的时间跨度。若 `systems-thinking` 已确定较广边界，用户需要明确回路结构，可作为聚焦的补充方法。

## Do not use when

不要用于一次性事件、简单线性机制或没有可辩护方向的相关性列表。不要仅因首尾出现同一个词就画回路；每条连接都需要含义和时间背景。未经核查连接，不要用图确定高风险因果主张。若变量无法定义为可增减的量或条件，停止并使用其他结构。

## Inputs to establish

确定重点行为、时间跨度、系统边界及简短变量列表。对每个变量，记录增加或减少的含义、支持方向的证据或假设，以及延迟。识别回路需要说明其后果的干预或决策。最多提出两个决定性问题，如“观察模式中哪个变量最先变化？”或“什么延迟反应可能逆转短期效果？”

## Procedure

1. **固定模式和边界。** 说明随时间变化的行为并排除无关因素，确保目标是动态模式而非单个事件。**可见输出／状态变化：** 公开重点模式、时间跨度和边界；若无法确定，将图标为保留。
2. **定义变量。** 将模糊事件转换为可升降的命名变量，在旁边写出各自的操作性含义。**可见输出／状态变化：** 公开附单位或定性方向的变量清单，无支持的变量标为假定。
3. **标注连接正负。** 对每条拟议箭头，说明在既定条件下源变量增加是否倾向于使目标变量增加或减少。记录直接证据、认可的机制或明确假设。**可见输出／状态变化：** 公开带支持状态的正负连接，移除方向无法确定的连接。
4. **追踪回路。** 沿闭合路径追踪：变化推动同向更多变化时为增强回路，路径抵消偏离时为平衡回路。用行为命名回路，不要用未经说明的字母。**可见输出／状态变化：** 公开回路描述及使各回路依赖其正负号的连接。
5. **标记延迟和干预。** 在信息、行动或后果较迟到达的地方加入延迟，说明如何造成超调、振荡或政策阻力。将候选干预放在其意图改变的回路上。**可见输出／状态变化：** 公开延迟说明、预期效果、副作用及首先监测的可观察信号。
6. **检查并交接。** 将图与观察模式比较，说明何种证据会证伪连接或改变回路分类。若缺少决定性连接，保留结构结论。**可见输出／状态变化：** 公开得到支持或暂定的图、转变条件及下一步安全核查。

## Public output contract

返回可读文本形式的简洁图，如“培训 ↑ → 信心 ↑ → 练习 ↑ → 技能 ↑（增强）”或“积压 ↑ → 等待时间 ↑ → 放弃 ↑ → 积压 ↓（平衡）”。包含变量定义、回路类型、延迟、干预含义、副作用及证据状态。将假设与已核验观察明显区分。结论卡应展示主要回路层面的含义和可观察的转变条件；完整图留在追溯记录中。

## Evidence and uncertainty rules

正负号描述既定条件下的倾向，不是普遍规律。没有时间顺序或机制，相关性不能提供箭头。不要从漂亮的图推断回路行为，也不要在没有来源时使用精确系数、概率或延迟时长。若一个缺失连接可能把增强回路变成平衡回路，将回路标为 **conflicted** 或 **held**。证据无法区分的备选图应予保留。

## Stop conditions

当重点模式不重复、变量无法赋予操作性含义或关键连接方向未知时，停止。若图必须依靠无支持的连接才能解释观察行为，暂缓作出结论。对安全关键行动，将回路视为假说，干预前要求相关领域验证。

## Complement handoff

当图揭示遗漏行动者、存量、流量、边界选择或更广副作用时，交给 `systems-thinking`。传递带正负号的变量、回路类型、延迟和观察模式；系统思维可以扩展解释，但不能把图当作已核验事实。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"causal-loop-diagramming-positive-01","decisive_features":["feedback_delay","recurring_failure"],"expected_behavior":"route","expected_route":"causal-loop-diagramming","kind":"positive","rationale":"任务要求命名变量、带正负号的连接、回路类型及塑造模式的延迟效应。","schema":"opensocrates.template-example/1.0.0","template_prompt":"排队使等待变长，等待变长导致放弃，放弃又改变未来的人员需求；绘制带正负号的回路与延迟。"},{"case_id":"causal-loop-diagramming-positive-02","decisive_features":["feedback_delay","causal_question"],"expected_behavior":"route","expected_route":"causal-loop-diagramming","kind":"positive","rationale":"需要明确表示多个有向回路及平衡约束。","schema":"opensocrates.template-example/1.0.0","template_prompt":"用户增长增加评论，评论吸引更多用户，而容量限制产生平衡反应；识别两个回路。"},{"case_id":"causal-loop-diagramming-positive-03","decisive_features":["feedback_delay","recurring_failure"],"expected_behavior":"route","expected_route":"causal-loop-diagramming","kind":"positive","rationale":"要求的结果是关于延迟政策阻力的带正负号回路解释，而非单一效应估计。","schema":"opensocrates.template-example/1.0.0","template_prompt":"政策带来快速缓解，但执行需要很长延迟才改变行为，因此后来反弹；绘制反馈解释。"},{"case_id":"causal-loop-diagramming-negative-01","decisive_features":["feedback_delay","deep_uncertainty","causal_question"],"expected_behavior":"route","expected_route":"systems-thinking","kind":"negative","rationale":"应先明确更广的系统边界及杠杆问题，再绘制聚焦的回路图。","schema":"opensocrates.template-example/1.0.0","template_prompt":"大型组织涉及许多行动者、存量和副作用；在选择简洁回路图前，确定最佳杠杆点。"},{"case_id":"causal-loop-diagramming-negative-02","decisive_features":["causal_question","confounding"],"expected_behavior":"route","expected_route":"causal-reasoning","kind":"negative","rationale":"范围有限的反事实效应问题不需要反馈回路。","schema":"opensocrates.template-example/1.0.0","template_prompt":"一项试验询问某药物是否造成相对对照的测量结果，没有重复的动态模式。"},{"case_id":"causal-loop-diagramming-mechanical-01","decisive_features":[],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"复制和调整格式不需要因果判断。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将现有回路标签复制到演示文稿中，保留顺序，不评估任何关系。"},{"case_id":"causal-loop-diagramming-explicit-01","decisive_features":["explicit_method","feedback_delay"],"expected_behavior":"explicit_primary","expected_route":"causal-loop-diagramming","kind":"explicit","rationale":"用户指定方法，并提供了重复的增强与平衡模式。","schema":"opensocrates.template-example/1.0.0","template_prompt":"应用 causal-loop-diagramming，说明为何折扣增加需求，却后来导致缺货和信任下降。"},{"case_id":"causal-loop-diagramming-insufficiency-01","decisive_features":["feedback_delay","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"没有方向或时序的一次共同变动，不能支持带正负号的回路。","schema":"opensocrates.template-example/1.0.0","template_prompt":"两个变量只共同变动过一次，但方向、时序和重复模式未知；绘制已核验的增强回路。"}]
```
