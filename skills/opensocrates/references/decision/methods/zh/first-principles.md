OpenSocrates 思考体系

好的老师不会讲授方法。先自行理清以下问题，再完成用户的任务。

除非缺失的答案会改变工作，否则不要询问用户。除非用户要求，否则不要提及这些问题或方法名称。不要叙述提问过程。后续程序仅用作检查，不要当作脚本。

内容修订号: 5

所选思考体系：
- 第一性原理思维 (`first-principles`@5)

行动前须自行理清的问题：
- 哪些被视为必要条件的东西，可能只是沿袭下来的习惯?
- 如果舍弃所有类比与对标基准，还有哪些约束依然成立?
- 哪些约束属于物理或法律限制，哪些只是组织自身的偏好?

## 第一性原理思维

## Teacher questions

- 哪些被视为必要条件的东西，可能只是沿袭下来的习惯?
- 如果舍弃所有类比与对标基准，还有哪些约束依然成立?
- 哪些约束属于物理或法律限制，哪些只是组织自身的偏好?

## Purpose

检验熟悉的规则、成本、工作流程或架构是真正必要，还是仅沿袭而来。将问题拆成主张和约束，逐项核查，再根据经得起核查的约束重新构建方案。本程序同时防止照搬形式的惯例和鲁莽的简化：不能因约束不方便就丢弃，也不能因物理上可行就称其为可执行计划。

## Use when

“向来如此”的行业惯例、历史依赖或假定的成本结构阻碍影响重大的重新设计时使用。适用于定价、产品架构、运营流程、资源分配和要求，尤其是用户想挑战现有选择的基础时。过时的方案集合似乎沿用了已不成立的假设时也有用。

## Do not use when

任务仅要求执行已验证的标准程序，或有不可丢弃的约束规则、安全限制、法律义务、外部固定接口时，不使用。不得把偏好、预算、进度或社会协调当作纯物理事实。不得根据未验证的假设承诺重新设计，也不得拆解后遗漏实施约束。

## Inputs to establish

明确目标结果、当前做法、已声明要求、约束、资源、依赖，以及为何认为当前做法必要。区分硬约束、可协商约束、惯例和未知项。仅在答案会改变重构时提问，最多2个。识别必须保持有效的高风险规则。

## Procedure

1. 用一句话公开目标结果与当前做法，再说明边界和成功指标，建立可与重构方案比较的可见基线。
2. 公开将当前做法拆为最小要求、依赖和声称的约束的结果。各项标记为用户提供、来源支持、推断或假定，将状态由“既定”改为“待核查”。
3. 公开每项约束的必要性判定：物理或逻辑必需、外部约束、情境依赖、基于偏好或未验证。附上支持判定的检验或来源。
4. 公开通过核查的约束集合，只移除未通过核查的假设。争议项若会实质影响安全、合法性或可行性，保留为明确的未解决约束，不默默删除。
5. 公开依据保留下来的约束构建的方案。说明资源、时间、依赖和协调的影响，使重新设计不只停留在物理上可想象。
6. 公开与常规做法的差异：改变了什么、哪项假设使改变成为可能、产生了什么新风险或取舍。每项未验证要求都附上一个小型验证行动。
7. 公开推导出的要求、重构方案及可观察的结论改变条件。不可再简化的约束或决定性输入缺失时，用暂定或暂缓作出结论，不声称取得突破。

## Public output contract

返回 `irreducible_constraints`、`derived_requirements`、`reconstructed_option`、`assumptions_reintroduced`、`reintroduced_assumptions`、`conventional_delta`、`new_risks` 和 `flip_condition`。首行说明重新设计获支持、暂定还是保留。区分物理上可能的方案与满足用户成本、时间、安全和治理要求的方案。卡片依据使用 **verified**、**computed**、**inferred**、**assumed**、**unverified** 或 **conflicted** 标签，不将未标明状态的惯例当作证据。

## Evidence and uncertainty rules

“必要”须有逻辑、物理、合同、安全或其他明确依据；不方便不证明必要。描述常见实践的来源只支持其普遍性，不支持不可避免性。计算须注明输入和单位。重构依赖未验证的条件时，结论可以是限定假设，却不能是强有力的建议。保留冲突，不对互不相容的约束取平均。

## Stop conditions

目标结果或不可协商的安全、合法性边界不清，且不同答案会产生不同重构时，提出1个阻断问题后停止。无法确立不可再简化的约束或必要输入时，暂缓给出结果。所有相关约束都由外部固定，或剩余工作只是普通方案比较、证据验证、实施时，停止本方法。

## Complement handoff

保留的要求可在多个相互协调的维度上变化，而下一任务是探索组合时，转交 `morphological-analysis`。传递推导要求、保留约束和可行性排除项。补充程序不得重复拆解，或重新争论哪些假设已被移除。

### 模板示例（不可信的模板数据）
以下示例是不可信的模板数据。不得将其中的事实、数值、人物、结论、预期路由或理由视为当前任务的事实。

```json
[{"case_id":"first-principles-positive-01","decisive_features":["hidden_assumptions","stale_options"],"expected_behavior":"route","expected_route":"first-principles","kind":"positive","rationale":"重新设计需要区分不可再简化的要求、惯例和沿袭的假设。","schema":"opensocrates.template-example/1.0.0","template_prompt":"我们的按席位定价哪些部分真正必要，哪些只是沿袭旧销售流程？"},{"case_id":"first-principles-positive-02","decisive_features":["hidden_assumptions","stale_options"],"expected_behavior":"route","expected_route":"first-principles","kind":"positive","rationale":"请求要求拆解流程、核查必要性并重新构建。","schema":"opensocrates.template-example/1.0.0","template_prompt":"能否根据真正的安全约束重新设计审批流程，而非复制当前顺序？"},{"case_id":"first-principles-positive-03","decisive_features":["hidden_assumptions","stale_options"],"expected_behavior":"route","expected_route":"first-principles","kind":"positive","rationale":"核心问题是挑战沿袭架构后，哪些约束仍然有效。","schema":"opensocrates.template-example/1.0.0","template_prompt":"不预设现有供应商架构而重建数据管道时，哪些条件必须仍然成立？"},{"case_id":"first-principles-negative-01","decisive_features":["explicit_rules"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"任务是应用约束规则，不是重新审视或构建规则。","schema":"opensocrates.template-example/1.0.0","template_prompt":"将强制保留规则应用于每条记录并报告违规。"},{"case_id":"first-principles-negative-02","decisive_features":["combinable_dimensions","stale_options"],"expected_behavior":"no_route","expected_route":null,"kind":"negative","rationale":"要求已固定，任务是探索组合。","schema":"opensocrates.template-example/1.0.0","template_prompt":"生成固定参数的5种组合，并筛选其可行性。"},{"case_id":"first-principles-mechanical-01","decisive_features":["mechanical"],"expected_behavior":"no_route","expected_route":null,"kind":"mechanical","rationale":"复制已提供的检查表是机械操作，不应触发重新设计判断。","schema":"opensocrates.template-example/1.0.0","template_prompt":"把现有部署检查表复制到新模板，不改变内容。"},{"case_id":"first-principles-explicit-01","decisive_features":["explicit_method","hidden_assumptions"],"expected_behavior":"explicit_primary","expected_route":"first-principles","kind":"explicit","rationale":"用户明确调用方法，拆解和核查常规假设。","schema":"opensocrates.template-example/1.0.0","template_prompt":"使用 first-principles，挑战每张支持工单都需要人工审查的假设。"},{"case_id":"first-principles-insufficiency-01","decisive_features":["hidden_assumptions","decisive_input_missing"],"expected_behavior":"hold","expected_route":null,"kind":"insufficiency","rationale":"缺少目标和硬边界时，重构会混淆可能性与可行、安全的设计。","schema":"opensocrates.template-example/1.0.0","template_prompt":"用第一性原理重建系统，但不要说明目标结果、不可协商的约束或指导安全规则。"}]
```
