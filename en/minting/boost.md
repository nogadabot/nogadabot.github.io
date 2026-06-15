# Transaction Boost (speedup)

When a minting transaction you sent **takes too long to land**, re-fire it at higher gas.

## When to use

* When a task/transaction stays **pending** after running
* When gas was set too low to land in a block

## How to use

1. On the [Tasks] screen, select the pending task/transaction.
2. Click the **Boost (🚀 rocket)** button.
3. The app **re-fires the same transaction at a higher priority fee.**

> 💡 In some versions you can type the boost gas directly. Format examples:
> * `300 150` → Max 300, Priority 150
> * `300` → both Max and Priority 300

## Notes

* Boost **re-sends an already-sent transaction more expensively.** Gas cost goes up.
* You can't boost a transaction that's already confirmed (success/failure final).

> 💡 For a competitive mint, setting [gas](gas.md) high enough from the start beats boosting. Boost is a "rescue when it's slower than expected."
