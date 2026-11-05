# Five-minute first setup

This is the shortest path to your first mint. You do not need proxies, API keys, or captcha keys.

## 1. Pick a language

In **Settings → General → Language**, choose English, 한국어 (Korean), or 简体中文 (Chinese). It changes right away and is saved on this PC.

## 2. Add wallets

1. In the **Wallets** menu, click **+ New Group** to create a group.
2. Put in a private key with **Import Keys**, or create new wallets with **Generate Keys**.
3. Pick a chain and check that the balance shows.

Details are in [Wallets](../setup/wallets.md).

## 3. Add RPCs (recommended)

The app works with the built-in public RPCs even if you add none. But public RPCs get blocked easily. For a competitive mint, add your own RPCs in the **RPC** menu. See [RPC](../setup/rpc.md).

## 4. Create a mint task

1. Open **Smart Mint**.
2. Pick a chain and paste one of a mint link, a contract address, or a transaction hash.
3. Click **Resolve mint route**.
4. Pick the phase, wallets, and quantity, and create the task.

Details are in [Smart Mint](../tasks/smart-mint.md).

## 5. Start

Creating a task does not fire it on its own. In the **Tasks** menu, you have to press that task's start button.

## Good to set up

- **Settings → General → Backup & Restore**: If you have added wallets, take a backup first.
- **Settings → Integrations → Discord Webhook**: Get each task's result in Discord when the task ends.
- **Settings → Quick Task Settings**: Set the wallets you use often so you can create tasks faster.
- **Proxies**: Spread site requests on drops with many wallets. See [Proxies](../setup/proxies.md).
