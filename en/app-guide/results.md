# Results and transaction timing

A transaction hash, RPC acceptance and an NFT mint are different events.

## Read the task row

**Status** stays short. **Result** contains the failure reason, transaction link and available on-chain evidence. Open the task details for the explanation and the action you can take.

| Result | What is known |
|---|---|
| Minted | The expected NFT mint was verified from the receipt |
| Failed | A send failure or on-chain revert was confirmed |
| Pending | A transaction exists but its final receipt is not yet known |
| Unverified | A transaction was observed, but the expected NFT mint is not verified |
| Partial | Wallets or transaction chunks have different outcomes |

Do not start another run merely because a refresh failed. A new run may mint again.

## Result summary

Use **Result summary** in the current task group. It collects the wallet-level results and transaction links. Only receipt-verified mint quantities contribute to the NFT total.

**Next update:** outcome totals use **task × wallet** pairs, with unique wallets shown separately. One wallet used in two tasks means two task-wallet outcomes and one unique wallet. Missing results are shown as unreported. Repeated references to the same mint receipt do not inflate the NFT total.

## Flight Recorder

In task details, the first submission attempt and RPC acceptance use **ms**. On-chain receipt timing uses **s**: 142 ms is 0.142 seconds; 7.811 s is 7.811 seconds. An unrecorded value stays blank or is marked as unrecorded—it is not zero latency.

An accepted submission does not prove inclusion or a successful mint. Timing is based on recorded observations, not a promise about blockchain processing speed.

See [Troubleshooting](../help/troubleshooting.md) or [Boost](../minting/boost.md).
