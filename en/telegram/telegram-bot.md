# Getting started with Telegram
The official [@NOGADA_Mint_Bot](https://t.me/NOGADA_Mint_Bot) runs on the server without the app. It does not view or control app wallets, tasks, RPCs or proxies.

## 1. Sign in and prepare wallets
Complete [purchase-email verification](../getting-started/license.md), then prepare bot wallets under **Wallets**. Bot keys are encrypted on the server and are separate from the app's DPAPI-protected wallets. See [Wallets and deposits](wallets.md).

## 2. Create a Smart Mint task
1. Open **Smart Mint** or `/mint`.
2. Select the bot wallets and send a link or contract.
3. Select the chain yourself, then choose the project's exact phase.
4. Review quantity per wallet, total target, mode, gas and schedule.
5. Create the task, then press Start in the task list.

Normal signed-mint users do not need to prepare vouchers manually. Supported routes retrieve wallet-specific data automatically. See [Signed mints](../minting/whitelist.md).

## 3. Tasks and results
Switch between compact and detailed views. Check task numbers and the targets of Start/Stop, details and delete buttons. Running again sends new transactions and may mint duplicates.

**Next update:** **Result summary** in the task list shows up to 25 of your tasks per page, using each task's latest run. Task-wallet outcomes and unique wallets are counted separately. Tasks without records remain unknown. Task details also show flight timing in ms and s.

## 4. Personal settings
- [Time zone](timezone.md): saved per private chat on the server, with UTC, local time and seconds.
- [Notifications](notifications.md): separate from app preferences.
- [Supply Watch](supply-watch.md): observation alerts, not automatic minting.
- RPCs, proxies and OpenSea keys: configure them separately in the bot's **Settings**.

## Advanced ABI/Hex
Use the button workflow for normal tasks. Open **Advanced ABI/Hex** help only when you need to supply calldata directly.

| Input | Meaning |
|---|---|
| `sig=`, `args=` | Actual function signature and arguments |
| `fire=spam`, `fire=safe` | User-selected launch mode |
| `gas=`, `fee=`, `tip=` | Gas limit, max fee and priority fee |
| `max=`, `delay=` | Per-wallet transaction limit and attempt interval in ms |
| `at=`, `until=` | Start and end using the stated UTC convention |
| `nft=` | NFT contract to verify in receipts |
| `sweep=` | Post-mint transfer destination |

Do not run example addresses or times unchanged. Follow the current help's formats and ranges. Receipt-verification quantities do not rewrite ABI/Hex calldata. The signing wallet receives a normal mint.

Using the same wallet concurrently in the app and bot can cause nonce conflicts. The products do not share execution state.
