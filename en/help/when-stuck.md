# When you are stuck

Problems sorted by stage. If nothing here helps, see "Asking for help" at the end.

## Launching and the license

**The app does not open**

| What you see | What to do |
|---|---|
| Nothing happens when you double-click | Nogada may already be running, and a second launch shows nothing. Find the open window, or end `nogada.exe` in Task Manager and start it again. |
| The file is gone, or Windows says it contains a threat | Your antivirus took it. Restore it from the antivirus history and add the app folder to its exclusions. |
| You start it from a synced folder (such as OneDrive) or a network drive | Move the exe to a local folder such as `C:\Nogada` and start it there. |

**It says "License Check Temporarily Unavailable"**
It tried several times but could not reach the license server. It is usually a short connection problem. Check your internet and click **Retry Now**. Your saved key, PC binding and remaining time do not change.

**The key will not activate**
- Check you pasted the key exactly, with no spaces before or after.
- Check on [My license](https://nogada-lic.duckdns.org/dashboard) whether the key expired or was suspended.
- If the key is bound to another PC, use **Reset device** on My license (once every 24 hours).

**It went back to the license screen while I was using it**
The app checks the license every 15 minutes and returns to the license screen when the server refuses the key (expired, suspended, or bound to another PC). A short internet drop alone does not send you back.

## Buying a license

| Store page message | What to do |
|---|---|
| Different amount, or not picked up? | Enter the hash of the transaction you sent at the bottom of the order screen and click **Check**. The operator checks it. |
| This order's time is up | If you already sent, wait a little or check by transaction hash. If not, place a new order. |
| Too many open orders | Up to 3 orders can be open. Cancel one on My license. |
| Too many orders today | You passed the number of orders allowed per day. Try again tomorrow. |
| Could not read the rate | Try again shortly, or pay with USDC or USDT. |

## Smart Mint lookups

| Code | Meaning and what to do |
|---|---|
| R-NO-CODE | There is no contract at that address on that chain. Check the chain or paste the mint contract address. |
| R-CHAIN-MISMATCH | The link is on a different chain than the one picked. Switch the chain and look up again. |
| R-FN-NONE, R-FN-UNNAMED | No mint function was found. Paste the minter contract or the project's mint page link, or use ABI / Hex. |
| R-FN-AMBIGUOUS | Several mint functions match. Pick one from the list. |
| R-VALUE-UNKNOWN | The price could not be read. Enter the mint price. |
| R-TOKEN-ID | An ERC-1155 collection needs a token ID. |
| R-PROOF-UNVERIFIED | An allowlist proof is needed, but none was found for the picked wallets. Try adding the allowlist file. |
| R-AUTH-REQUIRED | The mint needs a signature the project site issues for each wallet. |
| R-LINK-BLOCKED, R-LINK-FETCH | The project page could not be read. Paste the mint contract address yourself. |
| R-RATE-LIMITED | The explorer, the project server or the RPC hit a request limit. Try again shortly or switch RPCs. |
| R-TX-NOTFOUND | The transaction was not found on that chain. Check the chain. |
| R-RPC | It could not reach the chain or the project server. Check your RPCs. |
| R-BUDGET | The lookup ran out of time. Try again or use fewer wallets. |
| R-HUMAN-CHECK | The site asks for a captcha. You have to mint on the project site yourself. |
| R-POW-REQUIRED | The mint needs a calculation (mining) per wallet, which the app does not do. |
| R-RESOLVE | The route could not be found for another reason. Try again or use ABI / Hex. |

## Tasks

**It says "No RPC, public RPC fallback"**
No RPC is saved for that chain. It can still send through a public RPC, but for a contested mint, add an [RPC](../prepare/rpc-and-chains.md).

**A Spam task will not save**
Spam cannot leave the max fee, priority fee or gas limit on auto. Enter numbers in all three.

**It fails for lack of funds**
Put enough coin for the mint price and gas in the wallet and start the task again. See **Balance Needed** in the [Calculator](../app/calculator.md) for how much.

**It fails with execution reverted**
The contract refused the transaction. Often the sale is not open yet, the wallet is not eligible, or the price or quantity is wrong. To start before it opens, turn on Simulate so it sends when the try passes.

**It stopped saying the RPC is out of balance or credits**
All of the task's RPCs reported they ran out. Top up with the RPC provider or add another RPC.

**It stopped saying the OpenSea price is above my maximum**
The price OpenSea gave at fire time was above the task's **Price per NFT**. If that price is right, raise Price per NFT.

**It says OpenSea rejected this wallet**
The wallet may not be eligible, may be short of funds, or there may be a temporary error. The app retries a few times and then stops.

**I cannot edit a task**
A running task cannot be edited. Stop it first.

**It goes out late at the open**
- Firing counts on the PC clock. If the status bar shows a difference next to the clock, sync Windows time.
- Start the task well ahead, not right before the open.
- Add several RPCs and try turning on **Multi-RPC broadcast**.

**A sent transaction does not go in**
The gas may be too low. Raise it with [Boost](../tasks/running.md#boost) in the bottom bar on Tasks.

## NFTs and Market

**The list, accept offer and cancel listing buttons do not work**
They need an OpenSea API key. Add one on [OS API](../prepare/opensea-keys.md).

**Holdings shows "N error(s)"**
Some wallets could not be read. Refresh in a little while. If it keeps happening, check that chain's RPC.

**P&L will not calculate**
The chain may not be supported. On a chain Alchemy supports, add an Alchemy address in the RPC menu or **Settings → Integrations → PnL Alchemy URLs**.

**Market shows nothing**
Check the state of **Settings → Integrations → Market Hub** and refresh.

## Common questions

**Does it run on a Mac?** No. It is a Windows app. On a Mac you can use a Windows VPS. → [Download and first launch](../getting-started/install.md#running-it-on-a-vps)

**Which chains can it mint on?** Ethereum and EVM chains. The list is in [RPCs and chains](../prepare/rpc-and-chains.md#supported-chains), and you can add an EVM chain that is missing.

**Do tasks run with the app closed?** No. Tasks run inside the app.

**Can I use one key on two PCs?** No. One key, one PC.

**It says a wallet is not eligible; why does it not stop me?** The eligibility and balances the app shows are there to help you decide. You choose whether to send, and the chain decides the result. Pick **Safe (simulate first)** in Smart Mint and wallets that would fail the simulation are skipped.

**Is a successful mint guaranteed?** No. It depends on gas, RPCs, competition and the project.

**Are refunds possible?** It is a digital product, so there are no refunds.

## Asking for help

1. For a task problem, open that task's **⋯ → Show Logs** and click **Copy All**.
2. In **Settings → General → Application Logs**, click **Send Logs**. Write what happened in **Reason** (optional, up to 500 characters) and send. When the upload finishes, the app shows the log bundle's ID. Wallet keys, RPC API keys and proxy credentials are never in the bundle.
3. Send that ID and the copied task log to the operator.
