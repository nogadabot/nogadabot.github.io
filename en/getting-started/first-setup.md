# Your first mint, step by step

With the license active, these five steps get your first task running. Each step links to the page with the details.

## 1. Add wallets

In **Wallets**, make a group with **+ New Group**, then paste private keys, one per line, into **Import Keys**. If you need new wallets, make as many as you want with **Generate Keys**. → [Wallets](../prepare/wallet-groups.md)

Start with minting-only wallets that do not hold much money.

## 2. Fund them for gas

Each wallet needs enough coin for the mint price and the gas. **Wallets → Manage Funds** with **Disperse** sends from one wallet to many in the group in one go. → [Dispersing and consolidating funds](../prepare/funding.md)

Not sure how much? Put the gas limit and the NFT price into the [Calculator](../app/calculator.md).

## 3. Add an RPC

Without an RPC the app sends through each chain's built-in public RPC. Public RPCs get blocked easily, though, so add an RPC for the chain you mint on in **RPC → Add RPC** and check it with **Test All**. → [RPCs and chains](../prepare/rpc-and-chains.md)

## 4. Make a task with Smart Mint

In **Smart Mint**, paste the mint link, the contract address, or a mint transaction hash from that drop, pick the chain, and click **Resolve mint route**.

1. In **Phase selection**, pick the phase to mint.
2. In **Execution settings**, choose the wallet group, the quantity per wallet and the launch method.
3. Check **Final review** and click **Create mint task**.

→ [Smart Mint](../tasks/smart-mint.md)

For drops where each wallet needs signed mint data, such as an OpenSea allowlist, that data is fetched over proxy IPs, and a registered OpenSea API key is used instead when the IPs are blocked. With many wallets, have both ready. → [Proxies](../prepare/proxy-groups.md), [OpenSea API keys](../prepare/opensea-keys.md)

## 5. Start it from Tasks

Smart Mint only creates the task. Go to **Tasks** and click the row's ▶ button or **Start** in the bar at the bottom.

- If the phase is already open, it sends right away.
- If the phase opens later, the task waits until then and sends. Keep the app open.

The result shows in the row's **Status** column. If it fails, the reason shows there in short, and the row's **⋯ → Show Logs** has the full record. → [Running tasks and Boost](../tasks/running.md)
