OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- Cynefin 框架 (`cynefin-framework`@5)

行动前须自行理清的问题：
- 这里的因果是显而易见、凭专业知识可知、只能通过试探发现，还是已经处于危机之中?
- 这意味着应采用什么应对模式，是否正在使用来自另一领域的模式?
- 若处于无序状态，首先该如何拆分问题，才能在适当领域采取行动?

## Cynefin 框架

## Teacher questions

- 这里的因果是显而易见、凭专业知识可知、只能通过试探发现，还是已经处于危机之中?
- 这意味着应采用什么应对模式，是否正在使用来自另一领域的模式?
- 若处于无序状态，首先该如何拆分问题，才能在适当领域采取行动?

## Purpose

用此程序根据观察到的情境形态选择应对方式。区分可重复的因果模式、需要专家分析的情境、需要安全实验的情境、需要紧急控制的情境，以及需要更好界定的问题。目的不是用领域标签装饰建议，而是公开分类证据、随之采取的行动和可能改变分类的信号。

## Use when

建议的应对方式可能不适合情境时使用，例如团队把固定流程用于适应性问题、在快速变化的中断中等待分析，或把几个不同问题当作一个问题。标准化、分析、试探与行动之间的选择本身就是决策时尤其有用。也可把混合情境分成需要不同应对方式的部分。

## Do not use when

不用于纯机械任务、没有实质裁量空间的确定规则，或只需已知计算或转录的请求。用户只想要装饰标签而非改变行动时，不强行分类。不要把 complex 情境自动视为更重要，也不要把 clear 情境自动视为安全；分类描述决策关系，不描述后果严重程度。

## Inputs to establish

明确决策问题、情境边界、时间跨度、观察到的模式，以及任何即时安全或连续性约束。收集观察、以往案例、领域知识和用户提供的事实，并标明哪些已核查、推断、假设或仍未核实。最多问两个简明问题，且只在答案可能改变行动方式时询问。决定性观察不可用时，说明暂定边界，并只推进到明确标注的暂缓状态。

## Procedure

1. 公布一句话的决策问题、范围、时间跨度和即时约束。将每项标为用户提供或假设，形成可见的框架状态。可见输出/状态变化：框架状态已公布。
2. 公布因果观察记录，区分可重复关系、依赖专家判断的关系、新出现的反馈、急性中断及尚无法解释的观察。每项重要观察附证据状态。可见输出/状态变化：观察记录已公布。
3. 公布一个暂定分类：clear、complicated、complex、chaotic 或 confused，并给出支持它的两到三项观察。若各部分的证据支持不同分类，将情境拆分并分别公布边界，不作平均。可见输出/状态变化：分类状态已公布。
4. 公布对应行动方式：可重复模式采用感知—分类—响应，依赖专家的模式采用感知—分析—响应，适应性模式采用试探—感知—响应，紧急中断采用行动—感知—响应。分类为 confused 时，公布消除混乱所需的最小界定或观察任务。可见输出/状态变化：行动方式已公布。
5. 公布一个安全的下一步行动及其学习或转变信号。说明观察什么、由谁观察、何时观察；信号须可观察，不能只是期望情况改善。可见输出/状态变化：信号清单已公布。
6. 公布结论状态、证据、一项重要不确定性及改变分类或行动方式的条件。不要仅因选定标签就宣称确定。可见输出/状态变化：结论状态已公布。
7. 若缺失的边界、观察或约束可能改变行动方式，公布暂缓或暂定结果，以及阻塞问题或核查项。这一步把状态改为暂缓，不以编造事实填补缺口。可见输出/状态变化：暂缓状态已公布。

## Public output contract

返回简明、可直接用于结论卡的结果，包含 `decision_question`、`domain`、`classification_evidence`、`action_mode`、`transition_signals`、`next_action` 和 `flip_condition`。领域是由可见观察支持的结论，不是徽章。依据适用时标为 **verified**、**computed**、**inferred**、**assumed**、**unverified** 或 **conflicted**。重要假设不超过三个，未解决的不确定性不超过两个。结果暂缓时，说明缺什么，以及哪项核查可解除暂缓。

## Evidence and uncertainty rules

直接观察、可识别来源、用户提供的记录和可复现计算，只能作为它们实际支持的事项的证据。标签通常是从模式推断出来的；不能仅因来源使用同一词就视为 verified。不要编造转变、影响或成功的概率。区分反馈存在这一事实与对反馈含义的推断。边界变化、分类竞争或观察过时时标为 conflicted 或 unverified；若不确定性可能改变下一步行动，降低结论强度。

## Stop conditions

两个合理边界或观察要求实质不同的行动，而无法依据用户目标或权威约束择一时，停止并问一个阻塞问题。无法确定决定性关系、即时约束或转变信号时，暂缓。一个可执行方式、一个可观察信号及一个转变条件公布后，结束程序。紧急情境中不要等待穷尽分析；先记录控制行动，再于新观察出现后重新检查分类。

## Complement handoff

只有当分类揭示几个一致的外部未来，且各自要求不同准备时，才转交 `scenario-planning`。传递已公布的边界、分类证据、行动方式、转变信号和未解决的不确定性。不要重复完整分类，也不要让补充方法提供本应先解除当前程序暂缓的缺失事实。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"cynefin-framework-positive-1","decisive_features":["context_disorder","diagnose"],"expected_behavior":"route","expected_route":"cynefin-framework","kind":"positive","rationale":"用户描述稳定关系并询问适当应对方式。观察由用户提供，路由应分类情境，但不能声称未来每个案例都属于 clear。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们的账单支持团队遵循有记录的决策树，相同输入可靠地产生相同修复。我们应标准化应对并监控例外吗？"},{"case_id":"cynefin-framework-positive-2","decisive_features":["context_disorder","deep_uncertainty"],"expected_behavior":"route","expected_route":"cynefin-framework","kind":"positive","rationale":"请求描述适应性模式而非固定程序。路由应明确 complex 情境和学习信号，不得编造任何试探的成功概率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"几个团队在设法减少倦怠，但每项干预都会以意想不到的方式改变工作量、信任和行为。帮助我们选择小型试探、观察结果，并决定下一步尝试。"},{"case_id":"cynefin-framework-positive-3","decisive_features":["context_disorder","diagnose"],"expected_behavior":"route","expected_route":"cynefin-framework","kind":"positive","rationale":"请求取决于选择紧急行动方式及后续重新评估信号。这里未独立核实事件事实，路由应在支持控制的同时保留不确定性。","schema":"opensocrates.template-example/1.0.0","template_prompt":"生产服务在多个地区发生故障，客户现在无法访问服务。我们需要立即控制事件，再使用新观察调整恢复过程的应对方式。"},{"case_id":"cynefin-framework-negative-1","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"这是固定指令的格式整理任务，不是情境分类判断。无需方法路由，也不应添加证据主张。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将这些已获批准的操作步骤转换为编号检查表，完全保留措辞。"},{"case_id":"cynefin-framework-negative-2","decisive_features":["macro_environment","forecast"],"expected_behavior":"route","expected_route":"pestel-analysis","kind":"negative","rationale":"请求涉及战略不确定性，因而相近，但决定性输出是重要外部因素清单，而非领域分类和应对方式。这是可能的同族混淆。","schema":"opensocrates.template-example/1.0.0","template_prompt":"扫描可能影响我们扩张计划的政治、经济、社会、技术、环境和法律变化。"},{"case_id":"cynefin-framework-mechanical-1","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"任务输出机械，没有关于情境或行动的实质决策。方法路由应保持静默。","schema":"opensocrates.template-example/1.0.0","template_prompt":"按时间顺序排列这些事件时间戳，并以 CSV 返回。"},{"case_id":"cynefin-framework-explicit-1","decisive_features":["explicit_method","context_disorder"],"expected_behavior":"explicit_primary","expected_route":"cynefin-framework","kind":"explicit","rationale":"用户点名该方法并要求其公开输出，因此它保持主要方法。回应仍须标明用户提供的观察，避免将分类呈现为确定事实。","schema":"opensocrates.template-example/1.0.0","template_prompt":"使用 Cynefin 框架判断我们的服务中断需要即时行动、专家分析还是安全实验。展示证据及会改变分类的信号。"},{"case_id":"cynefin-framework-insufficiency-1","decisive_features":["decisive_input_missing","context_disorder"],"expected_behavior":"hold","expected_route":"cynefin-framework","kind":"insufficiency","rationale":"这是实际的应对方式决策，但决定性观察缺失。方法可暂缓并请求最少的缺失事实，不能编造领域或概率。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们应标准化这个问题还是运行实验？我还没有描述问题、原因、时间压力或我们有什么证据。"}]
```
