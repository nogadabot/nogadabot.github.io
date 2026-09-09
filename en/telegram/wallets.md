# Bot wallets and deposits

Create or import bot wallets from **Wallets**. Choose a chain to see each wallet's native balance on that chain. A failed balance lookup is not a zero balance; check the last known value or the unavailable notice.

Bot wallet keys are encrypted on the server. They are separate from app wallets. Using the same address does not copy app wallet names, tasks or RPC settings.

## Next update: deposit QR

1. Check the **chain** on the wallet screen.
2. Select **Deposit QR**, then choose a wallet.
3. Verify the network, symbol and full address on the card.
4. Scan the QR or copy the address from the message.

The QR contains a wallet address. Scanning it does not guarantee that your sending wallet selects the correct network. Check the network on the transfer screen too.

If QR generation or upload fails, retry. Opening a QR neither sends a transaction nor exports a private key.

## Withdrawal and deletion

Native-token withdrawal uses the `0xaddress [chain]` you enter. Omitting the chain means Ethereum; it does not use the chain selected in the wallet viewer. It collects native balances from **all bot wallets** on that chain, so check the scope. This is different from moving NFTs. Before deleting a wallet, check other chains and your key backup. Deletion does not cancel a transaction already sent.
