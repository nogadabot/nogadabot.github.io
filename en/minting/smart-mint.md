# Smart Mint: from link to task
Smart Mint resolves a project link or contract into minting-task settings. Resolving a link or creating a task does not submit a transaction.

## Basic flow
1. Enter a project mint link, OpenSea link, explorer link or contract address.
2. Confirm the chain where the contract is deployed. In the bot, select the chain yourself.
3. Choose the exact phase published by the project.
4. Review wallets, quantity per wallet, total target, price, gas and schedule.
5. Create the task, then press **Start** from the task list.

Do not substitute GTD, FCFS and Public phases based only on their names. Prices, times, wallet limits and signature requirements can differ. Missing information is not treated as Public or ended.

## If automatic lookup fails
Check the project's official collection link, contract and chain. If the route still cannot be resolved, use a verifiable ABI, function arguments or exact calldata in the [task editor](../app-guide/tasks.md). Another wallet's signature or proof may not work for your wallet.

Normal signed-mint users do not need to paste vouchers manually. Supported routes retrieve [wallet-specific execution data](whitelist.md) automatically.

Review the actual target, phase, quantity and value in the created task. Saved settings and transaction evidence take precedence over guesses.
