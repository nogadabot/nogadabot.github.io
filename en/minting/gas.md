# Gas Settings

Gas affects transaction inclusion probability and maximum cost. A high value never guarantees ordering or mint success.

## Auto and Custom

### Auto

During task preparation, Nogada computes send fees from the current network base fee and priority suggestion. Scheduled tasks prepare the value before launch and add no new lookup after T0.

Auto does not keep raising an already-submitted transaction. Each nonce launches once; there is no automatic RBF or automatic fee escalation.

### Custom

You set **Max fee** and **Priority fee** directly. The task preserves the caps and tip you chose. Stable, whose chain rules do not use priority, sends tip as 0.

## Gas Limit

Gas Limit caps the computation a transaction may consume.

* Blank or 0 estimates it during task preparation.
* A manual value is used exactly as configured.
* Too low can revert out of gas; lowering the limit does not reduce the price of gas actually consumed.

## Cost display

The displayed estimate is a maximum or projection based on selected gas and Gas Limit. Receipt cost can differ with actual usage and base fee. A low-balance estimate is information only and never blocks Start; the network makes the final decision.

## Boost

To change gas on a submitted transaction, press **Boost** on the task. Boost is a user-requested replacement at the same nonce and never runs automatically. Nogada does not replace a transaction that is already mined or whose exact target cannot be verified.

## Flashbots

When selected on Ethereum mainnet, Flashbots submits through a supported private bundle path rather than the public mempool. A private-path failure never silently falls back to public propagation.

Next → [Transaction Boost](boost.md)
