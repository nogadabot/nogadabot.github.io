# Notification settings

App notifications and Telegram notifications are **separate personal settings**. In the bot, open **Settings → Notifications**. Changing Telegram preferences does not change Windows notification preferences in the app.

## Public v0.9.43

You can turn **Task results** and **Supply Watch** notifications on or off separately. Muting a category changes message delivery; it does not stop tasks or erase their records.

## Next update: choose results and stages

- Mint success, failure, partial results, unverified mints, pending or stopped tasks
- First submission attempt, RPC/builder acceptance, on-chain receipt observation
- Supply Watch

**Task results** is the master switch for task notifications. When it is off, individual task categories remain muted even if enabled. Supply Watch has its own switch.

The new submission, acceptance and receipt notifications default to off. Enable only the stages you want. RPC acceptance or an observed receipt alone does not prove a successful NFT mint.

Messages already delivered are not rewritten when later observations arrive. Use [task result summary](telegram-bot.md) for current results.
