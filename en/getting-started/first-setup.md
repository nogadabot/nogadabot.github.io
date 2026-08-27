# 3. First-Time Setup (5 min)

Once activated, set up in this order before minting. **①Wallet → ②RPC → ③Check gas** is all you need to start minting; ④ is optional.

## ① Add a wallet (required)

Add the wallet(s) you'll mint with. Go to the **Wallets** menu:

* **Generate**: the app creates new wallets for you (keys stored automatically).
* **Import**: paste the private key of an existing wallet.

> 🔐 Desktop app wallet keys are **encrypted with Windows DPAPI and stored only on your PC**. Telegram bot wallets are separate and use encrypted server custody. In either product, use a **burner (small-balance) wallet** for minting, not your main wallet.

Details → [Wallets](../app-guide/wallets.md)

## ② Add an RPC (required)

An RPC is the "pipe" the app uses to talk to the blockchain. Go to the **RPC** menu and add an endpoint.

* **Free**: copy a public RPC for your chain from [Chainlist](https://chainlist.org)
* **Paid (recommended)**: Alchemy, DRPC, etc., fast and stable with no rate limits (matters most for competitive mints)

After adding, run **Test** and keep the ones with low ping.

Details → [RPC](../app-guide/rpc.md) · Picks → [RPC/Node links](../resources/nodes.md)

## ③ Check gas (required)

Use the **gas calculator** in the **Tools** menu to preview the current gas and the per-mint cost. Your wallet needs enough ETH for transactions to go out.

> 💡 When setting high custom gas, keep **20–50% more ETH than the estimate** in your wallet to be safe; complex contracts can use more gas.

Details → [Tools (Gas Calculator)](../app-guide/tools.md) · [Gas Settings Explained](../minting/gas.md)

## ④ (Optional) Proxies · API keys

Most mints **don't need these.** Only if:

* **Proxies**: for IP spreading when you have many wallets or do website-based tasks (WL sites etc.) → [Proxies](../app-guide/proxies.md)
* **OpenSea / Alchemy / Etherscan / captcha API keys**: for extras like NFT holdings, PnL, listings. **Minting itself works without keys.** → [Settings](../app-guide/settings.md)

---

> ✅ **You're ready!** Create a task from a link in [Smart Mint](../minting/smart-mint.md), then launch your first mint from Start in [Tasks](../app-guide/tasks.md).
>
> 🤖 Want to mint with the app closed? → [Telegram Bot](../telegram/telegram-bot.md)
