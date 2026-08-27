---
description: Nogada, an EVM NFT minting bot. Fast, safe, and easy to use.
---

# About Nogada

**Nogada** provides a fast NFT-minting **Windows desktop app** and a standalone **Telegram bot** for Ethereum and major L2 chains. Each product runs its own wallets, tasks, RPCs, and proxies; neither controls or synchronizes with the other.

> 💡 New here? Just follow these 3 steps to get started → [Install](getting-started/installation.md) → [Activate License](getting-started/license.md) → [First-Time Setup](getting-started/first-setup.md)

## What can it do?

* **Multi-wallet minting**: mint with dozens to hundreds of wallets at once
* **Precise gas control**: Auto or Custom gas + a live gas calculator
* **Marketplace support**: mint via OpenSea / Seaport / Transient (launchpads)
* **Fund management**: spread ETH from one wallet to many (Disperse), gather it back (Consolidate)
* **PnL tracking**: turn minting cost & profit into a clean card image
* **Telegram bot**: mint 24/7 with bot-only wallets and tasks, without installing or connecting the app
* **Auto-update**: the app updates itself when a new version ships

## Supported chains

Ethereum mainnet (L1) plus major L2/EVM chains:

> **Ethereum · Arbitrum · Optimism · Base · Polygon · BNB Chain · Avalanche · Linea · Abstract · Zora · Blast · Scroll** and more (+ Sepolia testnet)

Not on the list? You can add a **custom EVM chain**.

## 🔐 Are my wallets safe?

**Desktop app wallet keys never leave your PC.**

* Desktop app wallet keys are **encrypted with Windows DPAPI and stored only on your PC**.
* License and update services never receive or store desktop app wallet keys. Only the Nogada app on your PC can decrypt them to sign minting transactions.
* The standalone Telegram bot uses separate bot wallets. Their keys are encrypted in server custody so the bot can sign 24/7; they never sync with desktop app wallets.
* Core desktop app features like minting and wallets run **entirely on your PC.**

> ⚠️ **That said, nothing is 100% safe in web3.** Keep large assets in a **vault wallet** that never connects to any dApp, and always use a **burner (small-balance) wallet** for minting and events. That's the best habit.

Details → [Security & Safety](help/security.md)

## Need help?

* ❓ [FAQ](help/faq.md)
* 🔧 [Troubleshooting](help/troubleshooting.md)
* 🤖 [Telegram Bot](telegram/telegram-bot.md)
