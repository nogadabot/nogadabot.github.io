# Signed and allowlist mints
GTD, FCFS and allowlist phases may require a wallet-specific proof or signed voucher. Selecting a wallet and obtaining valid execution data are separate steps.

## Prepare the task
Select the exact chain and phase in Smart Mint, then save wallets, quantity, gas and schedule. Press Start in advance for a scheduled run.

**The normal workflow does not require users to obtain and paste vouchers in advance.** Supported OpenSea signed routes automatically retrieve wallet-specific data and use it when the project makes it available. If the API cannot be reached or the data is unavailable, the task reports the reason.

Key-based OpenSea routes and the default anonymous route can have different requirements. Configure app keys/proxies in the app and bot keys/proxies in the bot.

Preserve the exact phase price, wallet cap, period and signature target. Do not substitute another phase or another wallet's signature. For unsupported custom contracts, verify the project's function, proof and signature rules before using advanced tasks.

The absence of a separate checker does not prove ineligibility. Conversely, missing required proofs or signatures must not be presented as executable calldata.

Verify success from [the NFT evidence in the receipt](../app-guide/results.md).
