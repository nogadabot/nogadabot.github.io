# Dashboard
The dashboard brings together app readiness, upcoming tasks, recent results and issues to check. It does not combine Telegram bot wallets or server-side tasks with app data.

## Navigation
The main navigation contains Dashboard, Smart Mint, Tasks, Wallets, Market and Settings. Use the advanced menu for PnL, RPC, proxies, tools and administration. Admin controls require the appropriate permission.

Press **Ctrl+K** to open the command palette. Drops is hidden from regular navigation and the palette. Smart Mint and manual ABI/Hex tasks have separate entry points.

## What to read first
- Check running tasks and the next scheduled task.
- Distinguish readiness from results: ready does not mean minted.
- If a refresh fails, retry and check whether a value is current or last known.
- Open [Result summary](results.md) for detailed transaction outcomes.

## Watchlist
Add a chain and NFT contract to observe supply changes, percentages and minting rate. Keep the app running. Increasing supply does not prove that a mint has opened, and watching never starts a task.

**Next update:** responses from an obsolete watchlist request cannot overwrite the current alert state. Failed reads keep the last data and show that a retry is pending.

Creating a task does not broadcast it. Execution begins from that task's Start control.
