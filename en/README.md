# Nogada user guide

Nogada provides a **Windows app** and an **independent Telegram bot** for minting EVM NFTs. The app runs on your PC; the bot runs on the server.

| | Windows app | Telegram bot |
|---|---|---|
| Wallets, tasks, RPCs and proxies | Configured in this PC's app | Configured separately in the bot |
| Wallet keys | Encrypted locally with Windows DPAPI | Encrypted on the server |
| Time zone | Your PC's Windows time zone | Selected per private chat and stored on the server |
| Availability | Keep the app and PC running | Bot tasks run independently of the app |

You can use the same address in both products, but wallets, tasks, nonces and settings are not synchronized.

## Start with what you need

- Install the app: [Download](getting-started/download.md) → [Activate](getting-started/license.md) → [Initial setup](getting-started/first-setup.md)
- Prepare a mint: [Smart Mint](minting/smart-mint.md) → [Tasks and Start](app-guide/tasks.md) → [Read the results](app-guide/results.md)
- Use Telegram without the app: [Get started with the bot](telegram/telegram-bot.md)
- Resolve a failure or a stalled refresh: [Troubleshooting](help/troubleshooting.md)

## Version coverage

This guide describes the public **v0.9.43** release. Sections marked **Next update** describe implemented features undergoing verification; they are not yet available in the public app or bot. If a control is missing, check your app version and the [release history](changelog.md).

Drops is hidden from the regular menus. Supply Watch is a separate observation tool and never starts a mint automatically. Check the actual chain, phase and on-screen instructions rather than assuming a feature is supported.
