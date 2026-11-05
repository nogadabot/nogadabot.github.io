# Local data and exports

Wallets, accounts, tasks, settings, caches, and browser profiles all live on the PC that runs the app. There is no Nogada cloud account.

## Where it is stored

| Data | Location |
| --- | --- |
| App data | `%LOCALAPPDATA%\nogada\data` |
| Browser profiles | `%LOCALAPPDATA%\nogada\browser-profiles` |
| Logs | The `logs` folder next to `nogada.exe` |

`wallets.dat`, `rpc.dat`, `proxies.dat`, `accounts.dat`, and `opensea_developer_keys.dat` are encrypted with Windows DPAPI. They are tied to this PC and this user.

The task and whitelist JSON files, caches, logs, P&L display files, account auth state, and browser profiles are not secret stores. So protect the whole Windows user account and the disk, not only the `.dat` files.

## CSV export versus backup

**Settings → General → Export Data** exports one of wallets, accounts, RPCs, or proxies as an unencrypted CSV. The private keys and credentials inside can be read as they are. A CSV is not a complete way to move your data.

To move several kinds of data encrypted, use [Backup, restore, and moving](backup-restore.md). In either case, do not leave the file in a shared folder, and delete temporary copies.

## Deleting

When you delete wallets, groups, tasks, whitelists, or browser profiles, they are removed from this PC. There is no recycle bin. Before a big deletion, make a backup, and check that the backup file is outside the app data folder.

## Logs

Logs can contain URLs, addresses, and task errors. Look through them before you share them, and when you contact support send only the time range that is needed. **Settings → General → Send Logs** sends a bundle without wallet keys, RPC API keys, and proxy credentials.
