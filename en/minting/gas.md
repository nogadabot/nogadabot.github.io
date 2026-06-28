# Gas Settings Explained

Gas settings decide your minting **success rate and cost**. Once you grasp the idea, it's not hard.

## Two gas modes

### 🔄 Auto

The app **raises gas automatically to match market conditions** (looks at pending transactions and sets the priority fee a bit higher).

* **When**: ample supply or less competitive mints, non-urgent mints.
* Pro: no thinking needed. Con: occasionally a bit pricier than necessary.

### 🎯 Custom

You set the **Max fee** and **Priority fee** directly.

* **When**: hyped mints, low supply, gas wars, high-profit mints.
* You decide the value, preview cost with the [gas calculator](../app-guide/tools.md) first.
* For a **slow/guaranteed mint**, keep Max moderate and **Priority around 0.1** = cheapest mint.

> In Nogada, set the defaults for **auto tip multiplier** and **minimum priority (gwei)** in [Settings → Engine](../app-guide/settings.md), and adjust per task.

## ⚠️ Leave Gas Limit blank

* Gas Limit is the "upper bound of work for this transaction." **Lowering it does NOT save fees.**
* **Leave it blank or 0** so the app estimates it safely.
* Setting it too low yourself causes **"out of gas" failure**: you **lose the gas fee.** Don't touch it unless you're an expert.

## Keep enough balance

When using high custom gas, keep **20–50% more ETH than the estimate** in the wallet. Complex contracts can require a larger gas limit and more ETH, and if it's short, the transaction won't go out at all.

## Flashbots (advanced)

In [Settings → Engine](../app-guide/settings.md), enabling Flashbots bundles submits transactions directly to block builders instead of the public mempool (anti-frontrun, etc.). Leave it default if unsure.

## There's no perfect answer

Low-supply FCFS (100–300 items, done in 1–2 blocks) depends on **everyone's gas, RPC speed, internet, and the project's API state**: sometimes decided by milliseconds. There's no "input this and you'll always succeed." Build your own instinct with experience.

Next → [Transaction Boost](boost.md)
