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

### ⭐ Pre-set Quick task defaults
For time-critical mints, pre-selecting wallets and RPCs makes task setup faster.
* **Settings → Quick task setup**: save default wallets and RPCs → create the task, then open **Tasks** and press **Start** to broadcast
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
Launch the desktop app **minimized at login** if you want app features ready immediately → **Settings → General → Run on startup**. The Telegram bot runs independently.

### Telegram bot (standalone 24/7)
Use bot-only wallets and tasks without installing or connecting the app → [Telegram Bot](../telegram/telegram-bot.md)

---

> ✅ TL;DR: **competitive mint = the ⭐ three (paid RPC · multi-RPC · Quick task setup)** first. Alerts/convenience can wait. None of this is mandatory.
