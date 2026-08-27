# Tasks: where every app mint starts

A task stores what to mint, which wallets to use, and the quantity, gas, and timing. Dashboard remains the first screen, but **every app mint transaction launches only after a task is created and Start is pressed in Tasks**.

## Easiest way to create a task

1. Paste a contract, block-explorer, OpenSea collection/item/assets, marketplace, launchpad, or project mint link into **Smart Mint**.
2. If the project registered multiple phases, choose one by its exact name.
3. Review wallets, quantity per wallet, gas, start time, and required options.
4. Select **Create task**.
5. Open **Tasks**, select the created task, and press **Start**.

Moving between Smart Mint and Tasks is the intended flow. Resolving Smart Mint or using **Quick task** creates a task; neither broadcasts automatically.

## Task screen

* **Group rail**: organize tasks by project or strategy.
* **+ New task**: open the manual/advanced task editor.
* **Quick task**: create a task with wallets and RPCs saved in Settings. Launch it from Start.
* **Start/Stop group**: request Start or Stop for all applicable tasks in a group.
* **Bulk edit**: change shared settings on selected tasks.
* **Row Start/Stop/Boost/log/edit/clone/delete**: control an individual task.

Readiness is explanatory information. Balance, predicted failure, or guessed eligibility never blocks Start or selection. The Start request is stored first and launches automatically once required preparation finishes.

## Manual contract, ABI, and Hex tasks

When automatic lookup is insufficient, use **+ New task**.

| Field | Meaning |
|---|---|
| Chain | Chain where the transaction will be sent |
| Transaction target | Contract being called; it may be a router/shared minter |
| ABI function and arguments | Choose from fetched ABI or enter the exact signature/arguments |
| Raw calldata | Send user-supplied hex unchanged |
| Transaction value | **Total native-token value sent in one transaction**, not a per-item price |

### Receipt verification (advanced)

The collapsed advanced section verifies the confirmed result; it does not configure the mint call. **NFT contract to verify** tells the receipt scanner which contract's Transfer events count when the transaction target is a router/shared minter. When blank, the transaction target is used. **Minted quantity to verify** is the number of matching NFTs required for the Minted result. It never changes ABI arguments, raw calldata, value, transaction count, or the actual mint request. The signing wallet is always the expected recipient and is not configurable.

For ABI/Hex, the actual mint quantity comes from the exact function arguments or raw calldata. Only a provable quantity conflict on a protocol-bound route such as SeaDrop is reported before sending; Nogada does not guess arbitrary calldata semantics to block a launch.

## Wallets and exact quantity

* The screen distinguishes **quantity per wallet**, selected wallet count, and **total target quantity**.
* If a known per-transaction cap applies, the exact request is split across nonces. Quantity is never silently reduced.
* Multiple app tasks are coordinated by the app's nonce coordinator.
* You may use the same wallet concurrently in the standalone Telegram bot. The app does not block this, but warns that the two products do not share nonce state and can collide.

## Execution modes

| Mode | Behavior |
|---|---|
| Instant | Send the user-selected transaction immediately without simulation |
| Safe | Only when selected by the user, eth_call the same call and send once for wallets without an actual simulated revert |
| Spam | Repeat until Stop, a user cap, or an exact NFT mint receipt is confirmed |

Safe is an optional transaction simulation, not an eligibility classifier. Use Instant or scheduled execution when lowest first-broadcast latency matters.

## Schedule and launch

Press Start early to arm a scheduled task. Wallet keys, RPC connections, gas, nonce, approvals, and deterministic calldata are prepared ahead of time. At the selected time, the first raw transaction is propagated without adding a new online check. There is no automatic RBF or automatic fee escalation; only a user-pressed **Boost** replaces gas during execution.

## Result states

| State | Meaning |
|---|---|
| Preparing/queued | Start is stored and preparation or scheduled time is pending |
| Submitted/pending | A transaction hash exists and the same receipt is being reconciled |
| Minted | A successful receipt proves the expected NFT contract, signing wallet, and exact quantity |
| Failed | An on-chain revert or launch failure is confirmed |
| Mint unverified | Receipt status succeeded, but the exact NFT Transfer was not proven |
| Partial | Completed, failed, pending, or unverified wallet/chunk results are mixed |

A pending transaction never creates a new nonce automatically. Unverified tasks are also excluded from automatic, group, and bulk reruns. You may explicitly press Start again on that row, but the app warns that every execution wallet may send a new transaction and duplicate the mint.

## Check before launch

Review selected wallets, quantity per wallet, total target quantity, value per transaction, total maximum value, chain, transaction target, phase, and any advanced receipt-verification target/count. A changed chain, target, value, selected phase, or quantity in protocol-bound calldata is an intent-integrity mismatch and will not launch. The signing wallet is the fixed mint recipient. Guessed eligibility, balance, price, or same-wallet app/bot use is never a blocking reason.
