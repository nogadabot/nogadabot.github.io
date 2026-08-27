# Smart Mint: from link to task

Smart Mint resolves a user-supplied mint target into a task draft. **Resolving or choosing a phase never broadcasts**; the created task launches only from Start in Tasks.

## Accepted inputs

* NFT or minter contract address
* Etherscan-style block-explorer URL
* OpenSea collection, item, or assets URL
* Marketplace or launchpad URL
* Official project mint-site URL

## Workflow

1. Paste a link or contract and select **Resolve mint route**.
2. If the project registered multiple phases, they appear with their exact names. Choose one.
3. Review chain, transaction target, NFT target, wallets, quantity per wallet, total target quantity, value, gas, and schedule.
4. Select **Create task**.
5. Open **Tasks**, select the task, and press **Start**.

There is no “Auto (best phase)”. Nogada does not choose a phase on the user's behalf.

## Telegram fast path

In the Telegram bot, tap **Smart Mint** or send `/mint`. A single bot wallet is selected automatically; with multiple wallets, choose the execution scope. Then send only a supported project-mint, marketplace/OpenSea, explorer, launchpad URL, or `0x` address. If the chain is unknown, choose it with a button, then choose the exact project phase.

The default path creates the task with 1 mint per wallet. A future phase uses its published start time, its end only when published, Spam, and automatic gas. Turn on **Advanced settings** before sending the link only to change quantity, launch mode, schedule, or gas. The legacy one-line flags remain an optional power-user route.

## Phase truth

* Exact phase names from API, on-chain, or project data are preserved.
* A phase with no index or name is never rewritten as Public index 0.
* Current, upcoming, or ended appears only when complete, reliable timing supports it.
* Missing or conflicting timing remains unknown instead of being guessed.
* Eligibility/WL badges are not shown and guessed eligibility never blocks selection or Start.

## If a link cannot be resolved

A valid link can still be protected by client rendering, region restrictions, bot protection, or missing public metadata. Try, in order:

1. The project's OpenSea collection or block-explorer URL
2. The actual minter/NFT contract and exact chain
3. Fetch ABI in the task editor
4. Exact function arguments or raw calldata published by the project

Nogada never invents a Public phase or contract merely because lookup failed.

## Quantity and result

Quantity is requested per wallet and total target multiplies it by selected wallet count. A known per-transaction cap is handled with exact nonce chunks, never a silent reduction. **Minted** appears only when the receipt proves the expected NFT contract, recipient, and quantity.

Next → [Tasks](../app-guide/tasks.md)
