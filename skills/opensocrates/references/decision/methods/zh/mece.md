OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- MECE 原则（相互独立、完全穷尽） (`mece`@5)

行动前须自行理清的问题：
- 在这一层级中，哪个项目确实可能同时属于两个类别?
- 哪一个相关案例在当前分类中完全没有可归入的类别?
- 是否在未作说明的情况下，中途改变了原来的分类维度?

## MECE 原则（相互独立、完全穷尽）

## Teacher questions

- 在这一层级中，哪个项目确实可能同时属于两个类别?
- 哪一个相关案例在当前分类中完全没有可归入的类别?
- 是否在未作说明的情况下，中途改变了原来的分类维度?

## Purpose

使用本程序，检查同一层次的分类或分解是否相互独立、完全穷尽。固定一个分类轴，分别检查重叠与缺口，并保持类别粒度一致。结果是具有已知边界案例、可辩护的分类规则，并非保证现实中每个类别天然清晰。

## Use when

类别、责任分组、选项、需求、原因或问题树分支重复或遗漏重要案例时使用。适合审查已有分类，也可作为逻辑树或管理层结构中的集中检查。分类规则本身而非事实来源是决策瓶颈时使用。

## Do not use when

研究对象是自然重叠本身、类别有意表示不同轴，或只须应用约束性分类体系时，不使用。在同一层不要混合年龄、地理、意图与流程阶段。不要用“其他”掩盖大片缺失类别，也不要在确实允许多标签归属时强行制造虚假的排他性。

## Inputs to establish

确定分类全集、决策目的、候选类别、拟采用的单一轴、纳入与排除规则及已知边界案例。说明类别是单标签还是多标签。仅当全集或分类目的存在重大歧义时，最多提一个问题；否则说明有边界的全集。

## Procedure

1. 用一句话公开全集、决策目的与一个分类轴，固定可见的分类状态，防止标准混杂。
2. 公开候选类别，每类各附一条纳入与排除规则。将类别边界标为明确、推论或未验证。
3. 使用可能同时属于两类的合理案例，公开互斥性测试。对每项重叠进行合并、重新划分或明确允许多标签归属，并记录状态变化。
4. 用边缘案例与已知观察公开总体覆盖测试。仅当缺失案例与所声明全集有关时增加类别；否则缩小全集并披露排除项。
5. 公开同层粒度检查，比较类别的抽象程度、规模与决策用途。重设暗中成为同级类别子类或宽泛到无法支持行动的类别。
6. 公开边界案例、最终分类规则与有意保留的未解重叠。不要用模糊的“其他”容纳全集中重要的一部分。
7. 公开分类结果、重叠／缺口判定与可观察的结论转变条件。如果分类轴无法支持决策或重要案例无法归类，暂缓分类，不要强加标签。

## Public output contract

返回 `classification_universe`、`classification_rule`、`classification_axis`、`categories`、`inclusion_rules`、`exclusion_rules`、`overlap_gap_check`、`overlap_check`、`coverage_check`、`granularity_check`、`boundary_cases` 与 `flip_condition`。公开输出必须区分 ME 与 CE，并说明单标签或多标签分类。依据使用 **verified**、**computed**、**inferred**、**assumed**、**unverified** 或 **conflicted** 标签；类别本身不是普遍程度的证据。

## Evidence and uncertainty rules

ME 与 CE 是逻辑覆盖测试，不是类别有用的实证证明。一个例子可揭示重叠或缺口，但不能说明其普遍程度。将有来源支持的观察与类别设计选择分开。重要类别缺失、争议案例未解决或分类轴会改变决策时，将结果标为暂定或暂缓。

## Stop conditions

无法限定全集或分类目的时，停止并提出一个阻塞性问题。分类轴无法在不产生误导性重叠的情况下表示重要案例，或缺失类别会改变决策时，暂缓。当规则在所需范围通过 ME／CE，剩余工作属于结构分解或选项比较时，结束。

## Complement handoff

已验证类别是更广泛诊断或计划的第一层，且需要递归分支与末端测试时，移交给 `logic-tree`。传递全集、分类轴、最终类别、边界案例与覆盖判定。补充方法不应重复同层 MECE 检查。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"mece-positive-01","decisive_features":["category_overlap","tangled_hierarchy"],"expected_behavior":"route","expected_route":"mece","kind":"positive","rationale":"用户要求在一个分类轴下分别检查重叠与覆盖。","schema":"opensocrates.template-example/1.0.0","template_prompt":"对于这一次购买决策，这些客户分组是否相互独立且完全穷尽？"},{"case_id":"mece-positive-02","decisive_features":["category_overlap","tangled_hierarchy"],"expected_behavior":"route","expected_route":"mece","kind":"positive","rationale":"要求输出分类规则，并进行重叠、缺口与粒度检查。","schema":"opensocrates.template-example/1.0.0","template_prompt":"重新设计这些风险类别，使任何案例都不同时属于两类，且不遗漏任何重要案例。"},{"case_id":"mece-positive-03","decisive_features":["category_overlap","tangled_hierarchy"],"expected_behavior":"route","expected_route":"mece","kind":"positive","rationale":"这是集中 ME／CE 审查，不是宽泛递归诊断。","schema":"opensocrates.template-example/1.0.0","template_prompt":"检查我们的问题树分支是否使用单一轴、粒度一致，并覆盖所声明全集。"},{"case_id":"mece-negative-01","decisive_features":["tangled_hierarchy","diagnose"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"任务需要完整逻辑树，不仅是分类质量检查。","schema":"opensocrates.template-example/1.0.0","template_prompt":"递归分解停机原因，为每个末端分支附上测试。"},{"case_id":"mece-negative-02","decisive_features":["ambiguous_terms","human_need"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"自然重叠是有意的，强制互斥会扭曲现象。","schema":"opensocrates.template-example/1.0.0","template_prompt":"保留这些重叠标签，因为重叠本身表示有意义的客户身份。"},{"case_id":"mece-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"字母排序是机械操作，不评估分类逻辑。","schema":"opensocrates.template-example/1.0.0","template_prompt":"按字母顺序排列给定类别，保留描述。"},{"case_id":"mece-explicit-01","decisive_features":["explicit_method","category_overlap"],"expected_behavior":"explicit_primary","expected_route":"mece","kind":"explicit","rationale":"用户明确指定单一轴的重叠与覆盖审查。","schema":"opensocrates.template-example/1.0.0","template_prompt":"明确使用 mece 审查此运营模式中的责任分组。"},{"case_id":"mece-insufficiency-01","decisive_features":["category_overlap","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"没有有边界的全集、目的与归属规则，就无法评估 ME 与 CE。","schema":"opensocrates.template-example/1.0.0","template_prompt":"告诉我这些类别是否 MECE，但不要说明全集、分类目的或类别规则。"}]
```
