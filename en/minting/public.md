# Public Mint

A public mint is a route the project has opened for anyone to call. Nogada never invents a Public phase from an unnamed or indexless phase.

## Create with Smart Mint

1. Paste a contract, block-explorer, OpenSea collection/item/assets, marketplace, launchpad, or project mint link into **Smart Mint**.
2. Review the exact phase names registered by the project and any verifiable time and price.
3. Choose the phase, wallets, quantity per wallet, gas, and start time.
4. Select **Create task**.
5. Open **Tasks**, select the created task, and press **Start**.

Current, upcoming, and ended states appear only when complete, reliable timing supports them. Incomplete timing remains unknown; it is never guessed as Public or Ended.

## Create directly from a contract

When automatic resolution is unavailable, use **Tasks → + New task**.

1. Verify the actual chain and transaction target contract.
2. Use **Fetch ABI** to choose the mint function, or enter the exact signature/arguments or raw calldata.
3. Enter the **requested quantity per wallet** and the **total native-token value sent in one transaction**.
4. If a router/shared minter emits NFTs from another contract, enter the **expected NFT contract**.
5. Choose wallets and RPCs, create the task, then launch from **Start in Tasks**.

Expected quantity for ABI/Hex does not change calldata or value. Nogada also does not guess arbitrary calldata semantics to block a launch.

## Success truth

After submission, Nogada reconciles the same transaction receipt. **Minted** requires a successful receipt proving the exact expected NFT contract, recipient, and Transfer quantity. If receipt status succeeds but the NFT result cannot be proven, it is **Mint unverified**.

Next → [Mint Modes](modes.md) · [Gas Settings](gas.md)
