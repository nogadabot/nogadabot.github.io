# Terms and privacy

The short version of the rules for buying and using Nogada, and of what the app sends to our server. For questions, see [Asking for help](when-stuck.md#asking-for-help).

## Buying a license

- You pay in crypto on the [store page](https://nogada.app/buy): ETH, USDC or USDT on Ethereum or Base. There is no auto-renewal.
- It is a digital product, so there are no refunds. Amounts sent above the order amount are not returned either.
- A successful mint depends on gas, competition and the project, so the app cannot promise one.
- The store keeps your Telegram ID, username and first name, your orders, and for each deposit its transaction hash and the address it came from.

## Free Discord key

- Signing in with Discord on a community link (`nogada.app/claim/...`) lets an account with the set role claim a free 30-day key once. It is once per Discord account across all communities.
- The server keeps your Discord user ID, your Discord name at the time, the key and the community it came from, so each account can claim only once across all communities. This record stays even after the key ends or is deleted. While you are logged in, your display name and profile picture value (hash) are also kept with the login (one hour before claiming, 30 days after). No password is asked.

## One key, one PC

- A key runs on one PC at a time. The PC is known by its device ID, a hash of the Windows machine ID.
- If the key is turned on again with the same device ID, such as on a copied or cloned Windows or under another Windows user on the same PC, the place that used it until then stops at its next license check.
- A PC with a different device ID can use the key only after **Reset device** on [My license](https://nogada.app/dashboard), once every 24 hours. See [License](../getting-started/license.md#one-key-one-pc).

## What stays on your PC

- **Private keys** are kept only on this PC, encrypted with your Windows account, and transactions are signed on this PC. The app does not send private keys to our server: they are not in mint records, license checks or log bundles.
- The app does not ask for or use recovery phrases (seed phrases). Wallets come in by private key.
- Backups and data exports are files you save on this PC. A backup is encrypted with the password you choose. **Export Data** writes private keys as plain text, so keep that file safe.

## What the app sends to our server

| When | What is sent |
|---|---|
| License check (at launch, then every 15 minutes) | Your license key, the device ID (a SHA-256 hash of the Windows machine ID, not the ID itself) and the app version. |
| Other server features (updates, Market, the built-in RPCs, Telegram alerts) | The same key and device ID, with what that request is about. |
| Mint records (when a task starts, succeeds or fails, and on Boost) | Chain, contract address, mint function name, gas settings, a wallet address of the task, transaction hash, NFT contract, error message (up to 200 characters), OpenSea drop details when the task has them, time, app version, a random install ID made on this PC, and a hash of your license key. Not the license key itself and not the device ID. |
| Log bundle (when you click **Send Logs**, or when the operator asks for one) | The app's log files and crash log from the `logs` folder, your **Reason** text, app version, install ID, license key hash, linked Discord ID if any, and the system type. Before upload, every line has the query part of web addresses, user names and passwords in addresses, long key-like parts of addresses, and proxy user names and passwords replaced with `<redacted>`. |
| Feedback (when you send it with the **Feedback** button) | The type you picked, your message, the contact you gave, attached screenshots, app version and your license key. For a bug with **Send diagnostics file too** on, the log bundle above goes with it. The operator reads it to improve the app. |
| Crashes | The app writes what happened to `crash.log` in the `logs` folder. It is sent only inside a log bundle. |

When the operator asks for a log bundle, the app sends it by itself at its next license check, without asking you.
