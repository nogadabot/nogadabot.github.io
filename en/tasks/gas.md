# Gas

Gas sets how likely a transaction is to get into a block and the most it can cost. Setting it high does not guarantee your place in line or a successful mint.

## Auto and manual

If you leave a field empty, it is automatic. The app uses the value the RPC suggests and decides at fire time. You adjust the **Auto Tip Multiplier** and the per-chain **min tip** in [Settings](../setup/settings.md).

To set them yourself, enter **Max Fee** and **Priority Fee** in gwei. On Stable, which has no priority fee under its chain rules, the app sends 0.

## What the fee fields mean

- **Max Fee**: The most gwei you are willing to pay. It cannot be smaller than the priority fee.
- **Priority Fee**: The tip you pay to get included. It is actually spent.
- **Gas Limit**: The upper limit of the computation a transaction may use. If you leave it empty, the app estimates it. If it is too low, the transaction fails with `out of gas`.

In Spam, you must fill in all three fields.

## Cost calculation

Before a task, use the [Calculator](../tools/calculator.md) to work out how much to put in each wallet. The estimated cost on screen is an estimate, and the real cost depends on usage and the base fee. A transaction that fails on the chain also uses gas.

## Notes by chain

- **Flashbots**: A route on Ethereum mainnet that skips the public mempool. [Task modes](modes.md)
- **Chains that process in arrival order**: Raising the fee will hardly let you pass a transaction that arrived first. A fast RPC and a fast first send matter more.

To raise the fee of a transaction you already sent, use [Boost](boost.md).
