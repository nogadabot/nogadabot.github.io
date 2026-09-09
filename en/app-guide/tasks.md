# Tasks and Start
A task saves the chain, contract, phase, wallets, quantity, gas and schedule. **Creating a task and running it are separate actions.**

## Create and run
1. Create a task through [Smart Mint](../minting/smart-mint.md) or the manual ABI/Hex editor.
2. Review its saved settings in the task group.
3. Press Start to run now, or press it in advance to prepare a scheduled run.
4. Check Status and Result; open logs or Result summary when needed.

Group start/stop, bulk editing, duplication and deletion apply to the targets shown on screen. Deleting a task does not cancel transactions already sent. When editing a running task, check the notice explaining when the new settings take effect.

## Quantities and amounts
**Quantity per wallet**, **selected wallets** and **total target quantity** are different values. A known per-transaction limit may split the exact requested amount into multiple transactions, each potentially requiring gas.

For manual ABI/Hex tasks, function arguments or calldata define the actual mint quantity. Transaction value is the **total native-coin amount sent with one transaction**, not the price per NFT. Advanced receipt settings specify the NFT contract and quantity to verify; they do not rewrite calldata. The signing wallet receives the mint.

## Status and Result
Status remains short; Result shows failure reasons, transaction links and on-chain evidence. See [Reading results](results.md) to distinguish minted, failed, pending and unverified outcomes.

Balance or eligibility estimates are preparation information, not guarantees. If a sent transaction remains pending, inspect that transaction before starting another run. Pressing Start again can send new transactions from the same wallets and mint duplicates.

See [Mint modes](../minting/modes.md) and [Boost](../minting/boost.md).

## Editing and retry tools
| Feature | What to check |
|---|---|
| Retry failed wallets | Creates a new idle task for the failed wallets. Review it and press Start separately. |
| Task templates | Save and load reusable task settings. Check the current chain, target, price and quantity after applying one. |
| Compare and restore saved versions | Review changes and restore earlier settings. For a running task, follow the notice about when restored settings take effect. |

Stop requests an end to further unsent work. It does not cancel a transaction already submitted to the chain.
