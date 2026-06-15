# Using the Telegram Bot

The Nogada Telegram bot lets you mint and manage wallets **24/7, even with the app closed.** Think of it as the same thing as the app, used from Telegram.

> 🤖 Bot handle: **@NOGADA\_Mint\_Bot**

## 1) Connect (pairing)

Only someone **linked to your license** can control the bot.

1. In the app, go to **Settings → Integrations**.
2. Find the **pairing code** shown there.
3. Open **@NOGADA\_Mint\_Bot** on Telegram and **send that code** as a message.
4. When you see "Connected!", you're done.

![Settings - Integrations (Telegram pairing)](../images/settings-integrations.png)

> *Settings → Integrations. The **Telegram** section shows the pairing status (here: already **Connected**). When not yet connected, a **pairing code** appears here — send it to the bot to link.*

> ⚠️ **Treat the pairing code like a password.** Never expose it while screen-recording or streaming — someone who sees it could connect to your bot and drain the bot wallet.

> 💡 One license = one connected chat. Connecting anew releases the previous connection.

## 2) Bot Wallet (kept on server)

To mint via Telegram you use a **bot wallet**. Unlike in-app wallets, it's **kept on the server** so it works even with the app closed.

* Create one via the [Wallets] screen or Telegram: **Create bot wallet**.
* 🔐 The bot wallet is for **burner (small) use**. **Don't put large funds in it.** (It's encrypted, but this is the trade-off for 24/7 operation.)
* If you need the private key, you can **Export key** from the bot (not while recording).

## 3) What the bot can do

From the bot menu (buttons):

* **Wallet** — view/create bot wallets, balances
* **Gas** — check live gas
* **Portfolio / Mint history** — holdings & records
* **Auto-Mint** — create & run minting tasks
* **Track NFT / Reminders** — drop/supply alerts (linked to the app [Watchlist])

> 💡 Drops you add to the app's **Watchlist** are watched 24/7 by the bot and alerted to Telegram when they go live.

## 4) Get your license key (works before connecting)

Even before activating, you can get your key from the bot:

```
/redeem youremail@example.com
```

→ the bot sends your `NOGADA-…` key. (Details → [Activate Your License](../getting-started/license.md))

> ✅ **Summary**: send the Settings→Integrations pairing code to the bot → connect → create a bot wallet (burner) → mint & watch from Telegram. Runs even with the app closed.
