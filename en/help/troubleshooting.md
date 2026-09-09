# Troubleshooting
## Lists are empty or keep loading
Distinguish a failed query, last known data and a genuinely empty list. Retry the read instead of resetting wallet or task data. Refreshing a list is not the same as starting a mint.

## A task does not start
Check the schedule, selected wallets, chain/RPC, actual phase and displayed error. Gas-limit, max-fee and tip failures refer to different settings. Correct the relevant value rather than repeatedly pressing Start while preparation is pending.

## A transaction stays pending
Inspect its existing hash and receipt first. RPC acceptance is not proof of inclusion. Another Start may create another transaction. If using the app's [Boost](../minting/boost.md), verify the exact pending target and fees.

## The receipt succeeded, but the mint is unverified
A successful transaction can still lack verified evidence for the expected NFT contract, recipient or quantity. Check the explorer and [Result summary](../app-guide/results.md). An unverified result is not automatically minted again.

## Installation or authentication fails
Check the official download source and Windows warning. For licensing, verify the purchase email, code expiry and device limit. Disabling antivirus or deleting data is not the default remedy.

## Contacting support
Provide the app version, chain, task number, time, displayed error and a relevant screenshot. Hide private keys, verification codes, license keys and complete RPC credentials.
