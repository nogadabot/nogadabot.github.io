# Telegram Bot Guide

The Nogada Telegram bot is a standalone 24/7 minting product that runs on the server without connecting to the desktop app. It uses only the wallets, tasks, RPCs, proxies, and OpenSea keys registered in the bot. It cannot view or control app data.

> The app and bot share product rules and verified minting code, not runtime state or data. You may register the same wallet address in both products. If both send from that wallet at the same time, their nonces can collide; Nogada warns you but does not block your choice.

## 1. Sign in without the app

1. Open **@NOGADA\_Mint\_Bot** in Telegram.
2. Send `/redeem purchase-email`.
3. Within 10 minutes, send the eight-digit code delivered to that email as `/redeem 12345678`.

No app installation or app pairing code is required. Signing in from a new Telegram account signs out the previous chat, while preserving bot wallets and bot tasks.

## 2. Bot wallets and bot-only settings

Use **💼 Wallets** to create a bot wallet or import a private key, then fund it only with the small amount needed for minting. Bot wallet keys are encrypted on the server so the bot can sign 24/7. Keep major assets in a separate self-custody safe wallet and move funds or confirmed NFTs with **💸 Withdraw** or `sweep=`.

RPCs, proxies, and OpenSea API keys under **🛠 Settings** belong only to the bot. Values registered in the app are never copied or synchronized.

## 3. Easiest path: Smart Mint

1. Tap **🔮 Smart Mint** or send `/mint`.
2. If you have one bot wallet, it is selected automatically. If you have several, choose the wallets that should execute.
3. Send only one supported mint link or contract address. For example:

   ```text
   https://opensea.io/collection/example
   ```

4. If the chain cannot be confirmed from the input, choose it with an inline button.
5. If the project registered multiple phases, choose the exact project phase you want.
6. The default path creates the bot task immediately. For a future phase, it uses the project's published start time, its end time only when one was published, **Spam**, and automatic gas.
7. Open **⚙️ Tasks → 🤖 Bot tasks**, review the task, and press **Start** early enough to arm it.

Smart Mint accepts contracts, block-explorer URLs, OpenSea collection/item/assets URLs, marketplaces, launchpads, and project mint sites. If a protected or data-poor page cannot be resolved, continue with its contract or an advanced ABI/Hex task.

* The default quantity is **1 per selected wallet**. The bot shows the total as `wallet count × quantity per wallet`.
* Tap **⚙️ Advanced settings** before sending the link only when you want to change quantity, launch mode, schedule, or gas.
* When a known per-transaction cap applies, the bot splits the exact request across nonces. It never silently reduces quantity.
* Missing phase indexes or incomplete timing are not guessed as Public or Ended.
* The bot does not guess eligibility to block wallet selection or Start. If an actual signature, proof, or other execution input cannot be obtained, that wallet receives a factual preparation/execution result.

## 4. Start and launch speed

Every bot mint begins from **Start inside Bot tasks**. Resolving a Smart Mint never broadcasts by itself.

* An immediate Start is recorded and launches as soon as wallets, RPC, gas, nonce, and mint data are ready.
* For a scheduled task, press Start early to arm it. Static inputs are prepared ahead of time and the first transaction is broadcast at the selected time.
* The same raw transaction may be propagated through multiple RPCs. There is no automatic RBF or automatic fee escalation.
* The same wallet may run in the app at the same time. The bot warns about possible nonce collisions but does not block it.

## 5. Optional advanced settings and manual input

The normal Smart Mint path does not require command flags. Turn on **⚙️ Advanced settings** before sending the link, then use buttons after phase selection to change:

* Quantity: 1, 2, 3, 5, or a custom per-wallet amount
* Launch: Spam, Once, or Safe
* Schedule: a custom UTC start and optional end, or the project's published schedule
* Gas: automatic, or a custom max fee, tip, and gas limit

The old one-line format remains available as a power-user option. For example:

```text
/mint https://opensea.io/collection/example sepolia 1 at=1787802000 until=1787802300 fire=spam gas=400000 max=3 delay=250 tip=2 fee=7
```

You do not need to write this format for ordinary Smart Mint use.

If automatic lookup is insufficient or you want exact calldata, use **⚙️ Tasks → 🤖 Bot tasks → ➕**.

```text
0xcontract [chain] [quantity per wallet] [native value per send] [mode] + options
```

Common options:

| Option | Meaning |
|---|---|
| `sig=mintPublic(uint256,address)` | Explicit function signature |
| `args=2;{address}` | Function arguments; `{address}` becomes each bot wallet |
| `0x...` mode | Send user-supplied calldata unchanged |
| `fire=spam` | Retry until Stop or an exact mint receipt is confirmed |
| `fire=safe` | User-selected one-shot route with simulation |
| `tip=5 fee=80 gas=120000` | User gas settings (gwei / gas limit) |
| `max=200 delay=500` | Maximum spam sends and interval in ms |
| `at=+5m` / `at=16:59` | Scheduled Start in UTC |
| `until=17:00` | Spam stop time in UTC |
| `recipient=0x...` | Separate NFT recipient on supported mint routes |
| `nft=0x...` | NFT contract expected in the receipt when minting through a router |
| `sweep=0x...` | Move confirmed NFTs to a safe wallet |

For ABI/Hex tasks, `quantity` is the expected NFT count in the receipt; it does not rewrite calldata. Only a provable conflict on a protocol-bound route such as SeaDrop is rejected before sending. The bot does not guess arbitrary calldata semantics to block a launch.

## 6. Reading results

The bot keeps the normal flow to three short cards:

* **Phase card:** project, chain, confirmed current status when known, and each exact phase's price, per-wallet cap, and published time.
* **Task card:** task number, phase, selected wallets and quantity, launch mode, and schedule. The same-wallet nonce warning appears here once instead of repeating at Start and in later notifications.
* **Final result card:** verified, failed, pending, or unverified counts, short wallet/transaction details, explorer links, and wallet/withdraw buttons.

Internal platform names, minter addresses, selectors, and setup diagnostics are omitted from the normal cards. When an actual error needs action, the bot still shows that error.

| State | Meaning |
|---|---|
| Submitted / pending | A transaction hash exists, but its receipt is not final yet |
| Minted | A successful receipt contains the exact expected NFT Transfer contract, recipient, and quantity |
| Failed | An on-chain revert or launch failure is confirmed |
| Mint unverified | Receipt status succeeded, but the expected NFT contract, recipient, or quantity was not proven |

While a transaction is pending, the bot creates no new nonce and keeps reconciling the same transaction. It also never auto-reruns an unverified mint. You may explicitly press Start again from the task detail, but the bot first warns that this sends a new transaction and may duplicate the mint.

## 7. Remember

* App and bot wallets, tasks, and settings are not visible to each other and never synchronize.
* Before Start, verify selected wallets, per-wallet quantity, total quantity, total value, chain, and phase.
* A higher tip may improve priority but never guarantees mining order.
* A supply change in Drop Watch is not proof that minting opened. Treat it as a signal; phase and transaction truth come from official/on-chain data.
* Never expose private keys, email verification codes, or exported keys in forwarded chats, recordings, or streams.
