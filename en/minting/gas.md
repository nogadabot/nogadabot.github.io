# Gas settings
Gas affects transaction cost and network acceptance or processing. Higher gas does not guarantee mint success or ordering.

| Field | Meaning |
|---|---|
| Gas Limit | Maximum gas the transaction may consume |
| Max Fee | Maximum fee per unit of gas |
| Priority Fee / Tip | Priority component on chains that support it |
| Auto | Calculated from network information during preparation |
| Custom | Values chosen by the user |

**Gwei is a price unit.** Lowering Gas Limit does not lower that unit price, and an insufficient limit can cause an out-of-gas failure. Check the meaning of blank/zero values and the selected chain's support.

Auto gas does not continually replace a sent transaction with a more expensive one. The app's [Boost](boost.md) is an explicit user-requested replacement.

Estimated and actual receipt costs can differ. Do not combine an ERC-20 mint payment with native-coin gas as though they used the same unit.

Supported Flashbots routes on Ethereum mainnet use private submission. Builder acceptance is not block inclusion and does not imply silent public fallback after failure.
