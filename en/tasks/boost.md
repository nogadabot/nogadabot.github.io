# Boost

When a transaction you sent has been pending for a long time, Boost replaces it at the same nonce with a higher fee. It never happens automatically. It runs only when you click it yourself.

## How to use it

1. On the **Tasks** screen, pick a running task that has a pending transaction.
2. Type the fee in the field in the bottom bar. `12` means 12 for both the max fee and the priority fee, and `12/11` means a max fee of 12 and a priority fee of 11. The unit is gwei.
3. Click **Boost**.

The fee you enter is also saved in that task's gas settings.

## Good to know

- Replacement is best effort. If the original transaction is confirmed first, Boost does nothing, and you are not charged twice.
- You cannot Boost a transaction that is already in a block.
- For a competitive mint, it is better to set enough [gas](gas.md) from the start.
