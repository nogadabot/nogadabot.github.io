# Frequently asked questions
## Does the bot work while the app is closed?
Yes. Bot tasks run independently on the server. App tasks require the app and PC to remain running.

## Does my bot time zone change other users' times?
No. It is stored per private chat ID. The app follows your PC's Windows time zone. See [Time zones](../telegram/timezone.md).

## Does creating a Smart Mint task send it immediately?
No. Create the task, then press Start. For a scheduled run, press Start in advance.

## Must I paste a signed voucher?
Supported standard OpenSea signed routes fetch it automatically. Unsupported custom routes require the correct execution data. See [Signed mints](../minting/whitelist.md).

## Is a free mint completely free?
A zero mint price can still require gas. Check ERC-20 payments separately from native-coin gas.

## Does unverified mean failed?
It means the result could not be verified. Do not turn it into zero, failure or success by assumption; inspect the existing transaction and evidence.

## Can I use every EVM chain?
Check the actual chain list and feature support. A listed chain does not guarantee all market or NFT-data routes.

## Why is a documented button missing?
Check [version coverage](../README.md). Features marked Next update are not public yet. For purchase, license and device conditions, see [Activation](../getting-started/license.md).
