# Task modes

The mode decides when and how a transaction is sent. In Smart Mint, **Instant ×1** is a task with simulation off, **Safe (simulate first)** is a simulation task, and **Spam (repeated)** is a spam task.

## Instant (simulation off)

Signs once and sends right away. Use it for a mint that is already open, an ordinary contract call, or a task where you know the exact time. If you use it on a closed mint, it fails.

## Simulate

Repeats `eth_call` with the same call data and amount, and when it stops failing, sends the real transaction.

- If the call fails, it keeps trying again.
- If it succeeds, it signs and sends right away.

It is one step slower than Instant, but it is safe for drops where you do not know the exact open time. The retry interval is the **Delay** field. It is not a dry-run-only mode. It is a waiting mode that ends up sending the transaction.

## Spam

Good for chains with very fast blocks. It sends many transactions from a few seconds before the open to a few seconds after, aiming to get one in.

When you turn on Spam, this changes.

- You must fill in Gas Limit, Max Fee, and Priority Fee.
- The **Max Tx** field appears.
- In **Timestamp**, you can write `start-end`.

It keeps sending until one of these happens.

| Stop condition | Meaning |
| --- | --- |
| Success | The receipt status is 1 |
| Max Tx | The set number was reached |
| End time | The end of `start-end` has passed |
| Spam Guardrail | The limit in Settings was reached |
| Stop | You stopped it yourself |

## Spam + Flashbots

On Ethereum mainnet, if you turn on Flashbots for a task, it sends bundles instead of using the public mempool. A missed attempt costs no gas and uses no nonce.

## How to choose

| Situation | Mode |
| --- | --- |
| It is already open | Instant |
| You know the exact time | Instant + Timestamp |
| You do not know when it opens | Simulate |
| Blocks are fast and competition is heavy | Spam |
| You want to avoid the cost of failure on Ethereum mainnet | Spam + Flashbots |
