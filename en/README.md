---
description: Nogada is a Windows desktop app that handles NFT minting and everything after it in one place.
---

# About Nogada

Nogada is a Windows desktop app. You can mint NFTs with many wallets, manage the NFTs you minted, watch the market, and run social tasks, all in one place. Take two minutes to read this page before you install.

The app does two main things.

- **Onchain**: Minting, running transactions, and sending NFTs and funds, with no limit on the number of wallets, on many EVM chains.
- **Offchain**: Social tasks such as Google Forms, X, Discord, and whitelist applications, run with many accounts.

The app also includes NFT management, P&L cards, market charts, a mint calendar, Early Calls, drop discovery, a gas calculator, and a browser capture extension.

## The menu at a glance

The left menu is split into four groups.

| Group | Menu | What it is for |
| --- | --- | --- |
| Minting | [Dashboard](market/dashboard.md) | See the current market and Early Calls |
| | [Smart Mint](tasks/smart-mint.md) | Paste a link and the app finds the mint route and creates the tasks |
| | [Tasks](tasks/overview.md) | Where you create and run mint and social tasks |
| | [Early Calls](market/early-calls.md) | Projects picked by the operator before they mint |
| | [Discovery](market/discovery.md) | Scans for newly posted drops |
| Assets | [Wallets](setup/wallets.md) | Create and import wallets and move funds |
| | [Accounts](setup/accounts.md) | The Google, X, and Discord accounts used for social tasks |
| | [NFT](tools/nfts.md) | Holdings, P&L, and the viewer |
| | [Market](market/market.md) | Collection prices, charts, alerts, and the mint calendar |
| Connections | [RPC](setup/rpc.md) | The way to reach the chains. Every onchain task goes through it |
| | [Proxies](setup/proxies.md) | IPs that spread your requests to sites |
| | [OS API](setup/opensea-api.md) | Manages your OpenSea API keys |
| | [Whitelists](tools/whitelists.md) | Check wallet eligibility and keep the results |
| | [Contracts](tools/contracts.md) | Manage the EIP-7702 bundler and wallet delegation |
| Tools | [Calculator](tools/calculator.md) | Unix time conversion and gas cost calculation |
| | [Settings](setup/settings.md) | Language, keys, the fire engine, and chain settings |

## Is my wallet safe?

Wallet private keys are stored only on this PC and are encrypted with Windows DPAPI. The license server and the market server never receive private keys. Signing always happens on this PC. Details are in [Security and privacy](reference/security.md).

Even so, use small-balance wallets for minting, and keep large assets in wallets you have not put into the app.

## Where to start

If you are new, read these in order.

1. [Install and first run](getting-started/install.md)
2. [License](getting-started/license.md)
3. [Five-minute first setup](getting-started/first-setup.md)
4. [Smart Mint](tasks/smart-mint.md)

If you get stuck, see [Troubleshooting](reference/troubleshooting.md) and the [FAQ](reference/faq.md).
