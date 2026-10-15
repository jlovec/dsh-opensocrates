OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 边界批判 (`boundary-critique`@5)

行动前须自行理清的问题：
- 哪些人受到这项决策的影响，却没有纳入当前分析框架?
- 若把边界扩大到另一个群体、时间范围或成本，原有结论还能成立吗?
- 当前的纳入规则在不知不觉中保护了哪些人的利益?

## 边界批判

## Teacher questions

- 哪些人受到这项决策的影响，却没有纳入当前分析框架?
- 若把边界扩大到另一个群体、时间范围或成本，原有结论还能成立吗?
- 当前的纳入规则在不知不觉中保护了哪些人的利益?

## Purpose

使用本程序让判断的边界可见。识别当前框架包含谁和什么、谁受到影响却被排除，以及改变边界如何改变结论。目标不是延长利益相关者名单，而是揭示让当前答案看似必然的所有权、收益、成本、权限、时间跨度、管辖范围和系统边缘假设。将描述性主张（正在发生什么）与规范性主张（什么应被计入或应采取什么行动）分开。

## Use when

当答案可能取决于哪些行动者被计入、衡量谁的结果、包含哪些地区或时期、谁拥有决策权或哪些外部效应被划为范围之外时使用。尤其适合政策、产品、组织、公共利益和系统变革问题：对一群人技术上正确的答案，可能给另一群人带来成本。如果比较本身隐藏了遗漏的人群或时间跨度，也可用于范围有限的比较问题。

## Do not use when

若范围、决策者、受影响人群、管辖范围和时间跨度已经明确，剩余任务仅是比较选项或核查来源，不要使用。不要把纯机械性请求变成边界练习。不要仅因某个受影响群体可以想象就认定其存在；在任务或证据表明联系相关之前，将其标为假说。

## Inputs to establish

明确决策问题、决策者、预期受益者、当前纳入规则、时间跨度、地区或管辖范围、计入的资源和结果指标。列出最多三项可能实质改变边界的缺失事实。用户未提供边界时，说明一个合理的暂定边界；只有不同答案会改变建议时，才最多提出一个简短问题。区分用户提供的事实、核查过的来源、推断的影响和价值选择。

## Procedure

1. 公开一句话的决策问题与暂定边界：谁、什么、哪里、何时，以及针对什么结果。说明边界是用户提供还是假定，形成可见的框架状态。
2. 公开纳入集合记录，包含行动者、目的、知识、资源和决策权。为每项纳入附上简短理由，使边界可供审查，而不是只作断言。
3. 公开被遗漏但受影响的集合。区分直接影响、间接影响及可以质疑框架的人；将不确定项标为假说，而非事实。
4. 公开事实／价值区分：将描述性观察与应计入谁的收益、成本、声音或权利的判断分别列出。通过这一状态变化，防止价值选择伪装成中立的系统边缘。
5. 公开纳入和遗漏群体之间的收益与成本比较，只使用重要影响。每项影响记录证据标签，未核验影响保留为未解决。
6. 公开一个或多个边界变体，如更长的时间跨度、不同管辖范围或增加受影响群体。逐一说明是否改变结论、选项顺序、风险或完成标准。
7. 公开当前边界、最影响决策的边界变化所带来的后果，以及可观察的转变条件。若缺少决定性边界事实，将结论状态改为暂定或保留，不要用猜测填补。

## Public output contract

返回简洁、可放入卡片的 `current_boundary`、`omitted_boundary`、`benefit_and_cost_effects`、`boundary_variant`、`consequence_of_changing_it` 和 `flip_condition`。首行说明当前边界，以及它支持、削弱判断还是使判断保留。重要假设不超过三项，未解决不确定性不超过两项。卡片中的依据使用 **verified**（已核验）、**computed**（已计算）、**inferred**（推断）、**assumed**（假定）、**unverified**（未核验）或 **conflicted**（存在冲突）标签；备选项概括相关边界变体，不要列出每个利益相关者。

## Evidence and uncertainty rules

受影响群体本身不是影响的证据。每项重要收益或成本应使用来源、用户提供的文件、可复现计算或明确标记的推断。不要把多数人的观点或决策者的偏好当作遗漏群体不重要的证明。若边界变体产生不相容的结论，将判断标为 **conflicted** 或 **held**，直到有权决策者选定适用范围。缺少决定性边界事实时，只能给出暂定结论。

## Stop conditions

当两个合理边界导向实质不同的行动，且无法从用户目的或权威规则安全选择任一边界时，停止并提出一个阻塞性问题。当受影响群体、管辖范围或时间跨度是决定性要素但无法识别时，暂缓给出结果。若边界明确且不再有重要遗漏行动者或系统边缘，停止本方法，交给处理实际比较或证据任务的方法。

## Complement handoff

只有边界审查揭示重要权力、同意、实施或冲突问题时，才向 `stakeholder-analysis` 作聚焦的补充交接。传递已公开的纳入／遗漏集合、已选边界变体和需要利益相关者分析的未解决影响。不要启用第二套完整程序或重复边界清单。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"boundary-critique-positive-01","decisive_features":["boundary_sensitive","stakeholder_conflict"],"expected_behavior":"route","expected_route":"boundary-critique","kind":"positive","rationale":"若将非乘客、无障碍可达性、街区或时间跨度纳入边界，结论会改变。","schema":"opensocrates.template-example/1.0.0","template_prompt":"本市是否应该仅按现有乘客的平均通勤时间判断公交改造？"},{"case_id":"boundary-critique-positive-02","decisive_features":["boundary_sensitive","stakeholder_conflict"],"expected_behavior":"route","expected_route":"boundary-critique","kind":"positive","rationale":"要求的成功判断取决于纳入的员工、被排除的合同人员、所有权和衡量的结果。","schema":"opensocrates.template-example/1.0.0","template_prompt":"判断工作场所监控试点是否成功时，应该把谁计入？"},{"case_id":"boundary-critique-positive-03","decisive_features":["boundary_sensitive","stakeholder_conflict"],"expected_behavior":"route","expected_route":"boundary-critique","kind":"positive","rationale":"改变受影响行动者和时间跨度，可能逆转谁受益、谁付费及哪项方案更可取。","schema":"opensocrates.template-example/1.0.0","template_prompt":"如果纳入租户和未来三十年的搬迁成本，沿海防洪计划仍合理吗？"},{"case_id":"boundary-critique-negative-01","decisive_features":["multiple_options","choose"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"边界、决策者、时间跨度和标准已明确；剩余任务是选项比较。","schema":"opensocrates.template-example/1.0.0","template_prompt":"按三个固定的价格与延迟标准，比较范围已明确的两家供应商。"},{"case_id":"boundary-critique-negative-02","decisive_features":["source_quality","reconcile_evidence"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"这是来源支持问题，而非谁或什么属于系统边界的问题。","schema":"opensocrates.template-example/1.0.0","template_prompt":"对于指定主张，哪段的引用支持更强？"},{"case_id":"boundary-critique-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"调整提供的列表格式是机械性任务，不得触发判断方法。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将列出的利益相关者移入 CSV，列为姓名和角色。"},{"case_id":"boundary-critique-explicit-01","decisive_features":["explicit_method","boundary_sensitive"],"expected_behavior":"explicit_primary","expected_route":"boundary-critique","kind":"explicit","rationale":"用户就受影响行动者和范围问题明确调用方法。","schema":"opensocrates.template-example/1.0.0","template_prompt":"使用 boundary-critique 审查我们的气候承诺是否排除了供应链工人。"},{"case_id":"boundary-critique-insufficiency-01","decisive_features":["boundary_sensitive","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"定义边界的决定性输入缺失，方法必须保留判断，而非编造受影响集合。","schema":"opensocrates.template-example/1.0.0","template_prompt":"告诉我纳入所有受影响的人后建议是否会改变，但不提供决策、人群或时间跨度。"}]
```
