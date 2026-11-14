# Backup and data

Everything on this page is in **Settings → General**, arranged by what you are trying to do.

## Moving to a new PC

1. On the old PC, enter at least 8 characters in **Backup Password** under **Backup & Restore**, click **Export Backup**, and save the file somewhere the new PC can reach. The password is kept nowhere; without it the file cannot be opened.
2. Click **Reset device** on [My license](https://nogada.app/dashboard) so the key can move (once every 24 hours).
3. On the new PC, download the app and activate your key. → [Download and first launch](../getting-started/install.md)
4. In **Backup & Restore** there, type the backup's password, click **Restore Backup** and pick the file. Check the counts it shows (wallets, tasks and so on) and click **Restore & Restart**.
5. Redo what the backup does not carry, from the table below.

Copying the data folder instead does not work: wallets, accounts, RPCs, proxies and OpenSea API keys are encrypted with your Windows account, so they will not open on another PC.

### What the backup carries

| Item | In the backup? |
|---|---|
| Tasks | Yes |
| Wallets | Yes |
| Accounts | Yes. Their browser profiles are not, so connect Google again where you need it. |
| Market watched collections | Yes |
| P&L card backgrounds | Yes |
| RPCs, proxies | Yes |
| OpenSea API keys on OS API | No. Add them again. |
| App settings | Yes |
| License activation | No. Activate the key on the new PC. |

### What a restore does

A restore swaps the portable data on this PC for what is in the backup. The data that was there is first saved as an encrypted rollback copy, so it is not lost silently. Then the app closes; open it again to use the restored data. The license activation and browser profiles on this PC stay as they were.

## Giving a PC or VPS to someone else

**Danger Zone: Wipe All Data** erases everything this app saved on this PC, for good: wallets (private keys), accounts (tokens, cookies), RPCs, proxies, API keys, the license activation, tasks and browser profiles. It runs only after you type `WIPE` in the confirmation, and the app closes when it finishes.

Deleting only the app does not do this; the data stays on the disk. Make sure your wallet keys are kept somewhere else before you wipe.

## Taking a list into another program

**Export Data** writes one kind of data to a CSV file: **Wallets** (keys and addresses), **Accounts** (identities and credentials), **RPC** (URLs and API tokens) or **Proxies** (hosts and credentials). Use it to bring a list into a spreadsheet or another tool.

The file is plain text, so anyone who opens it can read the private keys and passwords in it. Delete it when you are done.

## Logging out

**Log Out** stops running tasks and goes back to the license screen; next time the key has to be entered again. It does not release the PC binding on the server. To use the key on another PC, reset the device as described in [License](../getting-started/license.md).

## Logs

- **Show Logs**: opens the log folder next to the exe.
- **Send Logs**: uploads a compressed bundle, with sensitive values masked, to Nogada support. Wallet keys, RPC API keys and proxy credentials are never in it. What to send along is in [When you are stuck](../help/when-stuck.md).

## Where the files are

| What | Where |
|---|---|
| App records (logs) | The `logs` folder next to the exe |
| Wallets, accounts, RPCs, proxies, OpenSea API keys, tasks, settings | `%LOCALAPPDATA%\nogada\data` |
| Per-account browser profiles (Connect Google and so on) | `%LOCALAPPDATA%\nogada\browser-profiles` |

## Staying safe

- Private keys and transaction signing never leave this PC.
- Features that copy private keys (**Copy Private Keys** in Wallets, the copy button in the edit window, CSV) leave the keys on the clipboard or in a file. Clear the clipboard and delete the file when you are done.
- Mint with dedicated wallets that hold little money, and move what you earn to a separate wallet. Smart Mint's **Sweep to a safe wallet after mint** and a task's **Transfer NFT** action help with that.
