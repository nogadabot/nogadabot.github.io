# Keys, data and execution scope
## App versus bot
App private keys are encrypted locally with Windows DPAPI. Bot wallet keys are encrypted on the server. Wallets, tasks and nonce state are not shared between the products.

Encryption does not remove every risk. Exported keys, clipboard contents and screenshots need separate care. Check your recovery method before moving to another PC.

## Screens and sharing
App privacy mode hides sensitive displays; it does not cancel transactions or move assets. Deposit QR codes contain addresses, not private keys. Do not forward Telegram verification codes or exported-key messages.

## Before and after execution
Check the chain, contract, quantity, value, receiving wallet and selected options. High gas or a mode named Safe is not a guarantee of success. Deleting, stopping and rerunning a task have different effects on transactions already sent.

## Backup and reset
Copying a DPAPI-protected database to another PC does not guarantee recovery. Verify your backup and key-recovery method before releasing a device or resetting data. Do not delete databases or key files merely because a query fails.

Time zones, notifications and login preferences are separate personal settings for each product. A change does not automatically update another product or user.
