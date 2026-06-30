# 4. Recommended Settings (optional)

Once the essentials (wallets · RPC · gas) are done, these are the **"nice-to-have" settings that boost your mint success rate, speed, and convenience**. All optional, but if you're going after competitive mints, the ⭐ ones are strongly recommended.

> 💡 You don't have to do all of these. **For competitive mints, start with the 3 ⭐ items**; add the rest when you need them.

## 🏆 For competitive mints (strongly recommended)

### ⭐ Paid dedicated RPC
Public RPCs hit rate limits easily. Low-supply first-come (FCFS) mints end in 1–2 blocks, so a fast, unthrottled **paid RPC** wins.
* Get one from Alchemy · DRPC etc. → add under **RPC** → run **Test group** and keep the low-ping ones
* Details → [RPC](../app-guide/rpc.md) · [RPC / Node links](../resources/nodes.md)

### ⭐ Multi-RPC broadcast
Fires your transaction to **several RPCs at once** to land in a block faster.
* **Settings → Engine → Multi-RPC broadcast** → on
* > ⚠️ When you create a task, don't forget to **check the RPCs that task should use** (otherwise it runs on the public RPC).

### ⭐ Pre-set Quick Fire defaults
For time-critical mints (live mints), picking wallets · RPC every time is too slow.
* **Settings → Quick Fire**: pre-assign default wallets · RPC → fire in one click
* Details → [Tasks](../app-guide/tasks.md)

## ⚙️ Stability · advanced (situational)

### Flashbots (private bundles)
When you want to reduce front-running exposure and failed-tx leakage.
* **Settings → Engine → Flashbots**: enable bundles + tune window / priority

### Default gas policy
* **Settings → Engine → Gas**: set your usual gas stance via auto tip multiplier (×) and min priority (gwei floor)
* Details → [Gas Settings Explained](../minting/gas.md)

### Proxies
For spreading IPs when you have many wallets or do WL-site work.
* Add under **Proxies** → details → [Proxies](../app-guide/proxies.md)

## 🔔 Convenience · alerts

### API keys (extra features)
**Not needed** for minting itself, but handy to enable:

| Key | What it unlocks |
|---|---|
| **OpenSea** | Listing status · best offers · list/accept |
| **Alchemy** | NFT holdings · PnL (profit & loss) |
| **Etherscan** | Fetch ABI · explorer lookups |
| **Captcha** (CapMonster etc.) | Auto-solve captchas (only mints that need it) |

Details → [Settings → Integrations](../app-guide/settings.md)

### Discord webhook alerts
Get mint success/failure posted to Discord → **Settings → Integrations → Discord webhook**

### Run on startup
Launch the app **minimized at login** so the bot · alerts · auto-backup are always running → **Settings → General → Run on startup**

### Telegram bot (runs 24/7 even with the app closed)
Mint and manage wallets from your phone while away → details → [Telegram Bot](../telegram/telegram-bot.md)

---

> ✅ TL;DR: **competitive mint = the ⭐ three (paid RPC · multi-RPC · Quick Fire)** first. Alerts/convenience can wait. None of this is mandatory.
