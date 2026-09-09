# Boost: a user-requested fee replacement
The app's **Boost** control requests a higher-fee replacement for a pending transaction using the same nonce. It never runs automatically.

1. Check the transaction state and target wallets.
2. Review the gas values and scope in the Boost screen.
3. After execution, inspect acceptance and receipts for the original and replacement transactions.

Boost does not turn a confirmed transaction back into a pending one or increase the requested mint quantity. The network may reject the replacement, or the original transaction may confirm first.

Distinguish a gas preview from executing Boost. Follow the current screen's units and limits rather than copying old numeric examples.

The bot and app are independent. The app's Boost button does not control bot tasks. Review [pending and unverified outcomes](../app-guide/results.md) before deciding to run again.
