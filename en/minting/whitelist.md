# Signed and Allowlist Mints

An allowlist phase may require a wallet-specific proof or signature (voucher). Nogada does not guess that a wallet is “eligible” or “ineligible” to block selection or launch. It relies on required execution data and the actual on-chain result.

## Create it in the app

1. Paste a contract, block-explorer, OpenSea, marketplace, launchpad, or project mint link into **Smart Mint**.
2. Choose the signed/allowlist phase by the exact name registered by the project.
3. Review wallets, quantity per wallet, gas, schedule, and required settings, then select **Create task**.
4. Open **Tasks**, select the created task, and press **Start**.

Smart Mint creates the task; it never broadcasts from the resolver screen. Every app mint starts from Start in Tasks.

## OpenSea signed data

A signed SeaDrop phase needs a voucher for each wallet. The app fetches this data while preparing the task and supports:

* **OpenSea API**: uses app-only OpenSea API keys registered under **Settings → Integrations**.
* **Default route**: uses the network/proxy route configured in the app.

The app and Telegram bot never share OpenSea keys, wallets, tasks, RPCs, or proxies. Register bot credentials separately in bot Settings when minting from the bot.

## Selection and results

* There is no WL-check result or eligibility badge, and guessed eligibility never blocks wallet selection or Start.
* If an actual proof, voucher, or other value required to build calldata cannot be obtained, that wallet receives a factual preparation/execution failure.
* Once submitted, the transaction hash is preserved and the same receipt is reconciled. A new nonce is not created automatically for a pending transaction.
* **Minted** is shown only when the successful receipt proves the expected NFT contract, recipient, and quantity.
* If receipt status succeeds but the exact NFT Transfer cannot be proven, the result is **Mint unverified**.

## Custom contracts

For a custom contract requiring a wallet-specific proof/signature, prefer the route resolved by Smart Mint. If it cannot be resolved, enter the exact ABI/function arguments or calldata supplied by the project in an advanced task. Nogada does not guess arbitrary calldata semantics or silently change quantity or launch behavior.

Next → [Gas Settings Explained](gas.md)
