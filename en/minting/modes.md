# Mint Modes: Instant, Safe, and Spam

A mint mode controls when and how often a task sends its transaction. Every mode still requires creating a task and pressing **Start in Tasks**.

## The three modes

| Mode | Behavior | Use it when |
|---|---|---|
| **Instant** | Execute once per selected wallet without simulation | Lowest first-broadcast latency matters |
| **Safe** | When explicitly selected, eth_call the same call and then execute once | You want to avoid gas on an actual simulated revert |
| **Spam** | Repeat until Stop, a user cap, or an exact NFT mint receipt is confirmed | Opening time is uncertain or repeated attempts are intended |

Safe is not an eligibility/WL classifier. It is an actual simulation of the same call at that moment. If the user does not choose Safe, a simulation result never blocks the launch.

## Scheduled Start

Set a start time and press Start early to arm the task.

* Wallet keys, RPC connections, gas, nonce, approvals, and deterministic calldata are prepared ahead of time.
* At the selected time, the first raw transaction is propagated without a new synchronous RPC or remote check.
* Dynamic wallet-specific data such as signatures or vouchers is signed and sent as soon as it arrives.
* Start is stored first, so a short preparation wait needs no second click. Stop cancels it.

## Spam controls

| Setting | Meaning |
|---|---|
| **Delay (ms)** | Interval before the next attempt |
| **Max tx** | Maximum transmissions per wallet, not number of successes |
| **End/guardrail** | User-selected automatic stop time or duration |

Spam does not stop merely because receipt status is 1. It auto-stops as Minted only when the expected NFT contract, recipient, and quantity are proven in the receipt. A pending or unverified result does not keep creating new nonces automatically and is shown separately.

## Quantity and multiple wallets

* Quantity is the **request per wallet**.
* Total target quantity is selected wallet count × quantity per wallet.
* If a known per-transaction cap applies, the exact request is split across nonces. Quantity is never silently reduced.
* Multiple wallets prepare and send in parallel.
* The app nonce coordinator manages same-wallet use across app tasks.
* The standalone Telegram bot and app do not share nonce state. Concurrent same-wallet use is allowed, but may collide; read the warning.

## Gas and Boost

Each nonce launches once with the user's gas settings. Nogada performs no automatic RBF or automatic fee escalation. Press **Boost** yourself to replace gas during execution. A higher tip may improve inclusion priority but never guarantees mining order.

## Result truth

* **Minted**: the successful receipt proves the exact NFT Transfer.
* **Failed**: an on-chain revert or launch failure is confirmed.
* **Pending**: a hash exists but no final receipt; the same raw/transaction is reconciled.
* **Mint unverified**: receipt status succeeded but the expected NFT result was not proven.
* **Partial**: wallet or chunk outcomes are mixed.

Next → [Tasks](../app-guide/tasks.md) · [Gas Settings](gas.md)
