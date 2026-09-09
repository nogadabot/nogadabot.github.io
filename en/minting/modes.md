# Instant, Safe and Spam
Launch mode and schedule are separate settings. An **Instant once** task with a future start time still waits for that time.

| Mode | Behavior |
|---|---|
| Instant once | Sends the selected call without simulation |
| Safe once | Uses the simulation route explicitly selected by the user before execution |
| Spam | Repeats according to user limits, stop conditions and transaction results |

Safe mode is not an eligibility decision from the project and does not guarantee success. A single execution may still require multiple transactions to satisfy the exact quantity.

## Prepare a schedule
Create the task and press Start in advance to prepare connections, gas, nonces and any available calldata. Supported routes recheck signed data that becomes available later. Check the actual schedule and [time-zone rules](../telegram/timezone.md).

## Spam limits
In the app, a blank or zero spam time limit means the default 120 seconds. Selecting Unlimited removes only the time limit; transaction-count and end-time limits can still apply. Follow each bot advanced prompt's units and ranges.

Besides successful mint completion, Stop and explicit limits, additional sends stop after an on-chain revert if a check using the same mint settings confirms that the mint is sold out. This is different from arbitrarily blocking Start based on a supply display.

Pending transactions are tracked as the same transactions. Unknown results are not promoted to success. Fees are not automatically increased, and automatic RBF is not used.
