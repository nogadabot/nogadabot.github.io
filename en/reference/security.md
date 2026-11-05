# Security and privacy

Important data is kept encrypted on this PC, update files are verified before they are installed, and the license is tied to the PC on the server.

## Local encryption

`wallets.dat`, `rpc.dat`, `proxies.dat`, `accounts.dat`, and `opensea_developer_keys.dat` are encrypted with Windows DPAPI. They are tied to this PC and this Windows user. The app does not normally ask for an app password.

## Files that are not encrypted

`tasks.json`, the license state, `flashbots.key`, the NFT cache, P&L settings and backgrounds, account auth state, browser profiles, and logs are not encrypted. Wallet private keys are not in them. Browser profiles hold site cookies, so treat the whole Windows user profile as sensitive.

## What the server receives and does not receive

- **Does not receive**: Wallet private keys. Signing always happens on this PC.
- **Receives**: The key and the device identifier needed for the license check.
- **Problem reports**: App screen errors are sent with sensitive values masked, for diagnosis. **Send Logs** is sent only when you click it yourself.

## Updates

The app checks the signature of the release info, the signature of the downloaded file, and the version order. It does not accept even an older signed build. If the check fails, it does not apply the update and records the reason.

## License and device

When you activate, the server ties the key to this PC's device identifier. Deleting the local state file does not change the tie on the server. [License](../getting-started/license.md)

## What it cannot stop

- Malware that runs with your Windows user's permissions
- Anyone who can operate your desktop
- A compromised browser profile or account session
- Phishing that gets you to enter a private key or license key in the wrong place

## Habits

- Use small-balance wallets for minting, and keep large assets in wallets you have not put into the app.
- Never send your seed phrase or private keys to anyone. The operator will never ask for them either.
- Use only official links. Test an unfamiliar contract with a small wallet first.
- Delete exported files and keys on the clipboard right away.
