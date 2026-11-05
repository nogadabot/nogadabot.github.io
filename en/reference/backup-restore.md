# Backup, restore, and moving

The app does not upload your data anywhere, and there is no automatic backup. Before you delete a wallet, change PCs, or make a risky change, use **Settings → General → Backup & Restore**.

## Making a backup

1. Enter a **Backup Password** of at least 8 characters.
2. Click **Export Backup**.
3. Keep the `.nogada-backup` file somewhere other than this PC.

It is encrypted with the password. The password is not stored, and if you forget it you cannot get it back.

## What a backup contains

It contains wallets, accounts and their auth state, RPCs, proxies, OpenSea developer keys, tasks, whitelists, P&L settings and backgrounds, and screen settings and favorites.

The license, logs and caches, and browser profiles and sessions are not included. Activate again on the new PC and reconnect your sessions.

## Restoring and moving PCs

1. Install and activate Nogada on the new PC. [License](../getting-started/license.md)
2. In **Backup & Restore**, enter the password and click **Restore Backup**.
3. Check the backup time, the app version, and the contents.
4. Click **Restore & Restart**.

Restoring changes the data on this PC. Before it does, it encrypts the current state with the same password and keeps it as a rollback file, then closes the app. Do not delete the original backup or the rollback file until you start the app again and check the number of wallets, the task groups, the settings, and the RPCs.

Do not copy `.dat` files to another PC. They are tied to Windows DPAPI and will not open on another PC. Use a backup.

> **Warning**: A wallet you deleted without a backup or a key export cannot be recovered. The server has no copy.
