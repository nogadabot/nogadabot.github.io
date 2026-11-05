# Troubleshooting

First read the error text shown in the task row, the notice, or the window exactly as it is. Check what that job needs first: wallet funds, RPC state, proxy state, account auth, API keys, captcha balance, and the internet. Then redo only what failed.

## Install and launch

- **The file disappears.** Antivirus or the browser often deleted it. Put the folder on the exclusion list and download it again.
- **SmartScreen blocks it.** Click **More info → Run anyway**.
- **Nothing opens.** See [Install and first run](../getting-started/install.md).

## License

- **Activation does not work.** Check that the key has no spaces and that the internet works.
- **It says it is in use on another device.** Ask the operator for a device reset. [License](../getting-started/license.md)
- **I did not receive the key.** Check your spam folder, and contact the operator with the email you bought with.

## Transactions do not go out

- **Balance**: Check that each wallet has the mint value and gas.
- **RPC**: Test in the RPC menu. Check that the RPC the task picked belongs to that chain.
- **Gas**: Check that it is not too low. Leave the gas limit empty. [Gas](../tasks/gas.md)
- **Phase**: Check that it has opened and that the wallet is eligible.

## A transaction stays pending

Replace it with a higher fee using [Boost](../tasks/boost.md).

## It cannot find the ABI

The app checks the verification sources of the chosen chain in turn. If you enter **Settings → Integrations → Etherscan API Key**, the lookup limit goes up. If the contract exists but has no verified ABI, enter the function signature or Hex yourself. If the chain is wrong, it says there is no code.

## Smart Mint cannot find the route

See "When the lookup fails" in [Smart Mint](../tasks/smart-mint.md).

## OpenSea tasks

See the Troubleshooting section of [OpenSea drops](../tasks/opensea.md).

## Collecting logs

Open the log folder from **Settings → General → Application Logs**. If it is safe, reproduce the problem once and note the approximate time. `nogada.log`, `tasks.log`, and `funds-sessions.log` help. Do not copy only the last lines. Leave the files as they are. The cause is often earlier.

## What to send when you contact support

- What you were trying to do
- The error text on screen and the approximate time
- The app version and the Windows version
- The screen, the task or module name, the chain, the public transaction hash or wallet address
- The steps to reproduce

Do not send seed phrases, private keys, wallet exports, license keys, API keys, account tokens, proxy passwords, or backup passwords. Check the sensitive fields in screenshots too.

If you use **Send Logs**, a bundle with sensitive values masked is uploaded and an ID appears. Attach that ID to your request.
