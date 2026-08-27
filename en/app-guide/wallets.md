# Wallets

Manage the wallets you mint with. Create or import wallets, view balances, and move funds.

![wallets](../images/wallets.png)

![Wallets, close-up](../images/wallets-detail.png)

> 🔍 *Close-up: **Add wallets** to generate or import wallets used only by the app.*

## Top

* **Chain selector**: which chain's balances to show (Ethereum, Base, etc.).
* **Show ERC-20 balance**: enter a token address to show that token's balance as a column.
* **Add wallet**: add wallets.

Telegram bot wallets never appear on this screen. Create, import, and manage them separately under **💼 Wallets** in the bot. You may register the same address in both products, but no data is shared. → [Telegram Bot](../telegram/telegram-bot.md)

## Groups & wallet list

* **Group rail (left)**: organize wallets into groups. `+ New group`.
* **Wallet table**: checkbox · name · address · ETH · WETH. Check to act on several at once.
* **Filter by name/address**: search when you have many.

## Buttons

| Button | What it does |
|---|---|
| **Generate** | Create N new wallets (keys stored automatically) |
| **Import** | Paste a wallet's **private key** to import (multiple lines = multiple wallets) |
| **Manage Funds** | Move funds between wallets (below) |
| **Refresh balances** | Reload balances |

![Import keys modal](../images/wallet-import.png)

> *The **Add wallets → Paste keys** modal: one private key per line, then **Import**.*

> 🔐 **Desktop app wallet keys are encrypted with Windows DPAPI and stored only on your PC**; license and update services never receive them. Telegram bot wallets are separate and use encrypted server custody. Use a **burner wallet** for minting in either product.

## 💸 Manage Funds (Disperse / Consolidate)

For spreading gas to many wallets or collecting scattered balances back.

* **Disperse**: send ETH from one wallet → many wallets (gas top-up before minting)
* **Consolidate**: gather balances from many wallets → one wallet (`send-max`, nearly the full amount)

### 🎯 Worked example: spread gas to your wallets

Before a mint, send gas from **one funded wallet → all your minting wallets**:

![Disperse example](../images/wallet-fund-example.png)

| # | Step (example) |
|---|---|
| ① | Pick **Disperse** (one → many). *(Consolidate is the reverse: many → one)* |
| ② | **From**: the **one** wallet that holds the funds (the source) |
| ③ | **To**: the wallets that should **receive** gas (the destinations) |
| ④ | **Amount each**: how much ETH each wallet gets (e.g. `0.01`) |
| ⑤ | **Start disperse**: sends it. When done you see success/pending/failed, and you can **retry** only the failed ones. |

## Bottom bar (when wallets selected)

For selected wallets: **Copy addresses / Export keys (confirm) / Delete (confirm) / Clear**, etc.

> ⚠️ **Export keys** is the only feature that shows a private key on screen. Be careful not to expose the key to others, and never click it while screen-recording or streaming.
