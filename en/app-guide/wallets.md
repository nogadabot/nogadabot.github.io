# App wallets
Organize wallets into groups and view native-coin or token balances on the selected chain. Bot wallets do not appear here.

## Add and manage wallets
Create a group, then generate wallets or import existing private keys. Search by name or address and select only the wallets you need. Check the target and instructions before exporting keys or deleting wallets.

App keys are encrypted locally with Windows DPAPI. Copying a database to another PC does not guarantee it can be decrypted. Privacy mode hides sensitive displays such as addresses, balances and QR codes.

## Deposit QR
Open Deposit QR from a wallet row. Verify the **chain, symbol and full address**, then scan or copy it. The QR carries an address; check the network in the sending wallet too.

## Manage funds
- **Distribute:** send from one wallet to several. Check the amount per recipient.
- **Consolidate:** collect funds from several wallets. Read whether the chosen mode expects an amount per source or a balance to leave.
- **ERC-20:** distinguish the token unit from the native coin. Gas is separate.

Blank, zero and maximum amounts do not mean the same thing in every field. Do not apply a blank ERC-20 consolidation field's meaning to an unrelated amount field. Check successful, pending and failed results before choosing what to retry.

The selected chain's balance does not include assets on other chains. Check other chains, tokens and NFTs before deleting a wallet.

## Wrapped tokens and delegation
On supported chains, controls such as **Unwrap WETH** convert wrapped native tokens back into the chain's native coin. This is different from transferring NFTs or bridging to another chain. Check the token, amount and gas.

**EIP-7702** checks show wallet code or delegation state. Revoking a delegation is an on-chain action, not deletion of a local wallet. Do not treat an unknown state as safe; inspect the displayed delegate and revocation scope.
