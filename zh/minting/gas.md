# Gas 设置

Gas 会影响交易被打包的概率与最大成本。更高的数值无法保证顺序或铸造成功。

## Auto 与 Custom

### Auto

任务准备阶段会根据当前网络 base fee 与 priority 建议计算发送 Gas。预约任务会在发射前准备好该值，T0 之后不会增加新的查询。

Auto 不会持续提高已提交交易的 Gas。每个 nonce 只发射一次，不会自动 RBF 或自动提高费用。

### Custom

用户直接设置 **Max fee** 与 **Priority fee**。任务会保留用户选择的上限与 tip。根据链规则不使用 priority 的 Stable 会把 tip 设为 0 发送。

## Gas Limit

Gas Limit 是交易可消耗计算量的上限。

* 留空或填 0 时，会在任务准备阶段估算。
* 手动输入时，会按用户设置使用。
* 过低可能导致 out of gas revert；降低上限不会降低实际消耗 Gas 的单价。

## 成本显示

界面估算是根据所选 Gas 与 Gas Limit 得出的最大值或预测值。实际收据费用会随实际使用量和 base fee 变化。余额不足估算仅供参考，不会阻止 Start；最终由网络决定。

## Boost

若要改变已提交交易的 Gas，请由用户在任务中点击 **Boost**。Boost 是相同 nonce 的用户请求替换，绝不会自动执行。交易已经打包或无法确认准确目标时不会替换。

## Flashbots

在 Ethereum 主网选择 Flashbots 后，会通过支持的私有 bundle 路径提交，而不是公开内存池。私有路径失败时不会暗中切换到公开传播。

下一页 → [交易加速](boost.md)
