# OpenSea drops

This page explains how to create a mint task from an OpenSea collection link. The app fills in the collection and sale information, so you only need to pick the phase, wallets, quantity, price cap, RPC, gas, and timing.

## Before you start

- The official OpenSea collection link. It usually looks like `https://opensea.io/collection/slug`.
- Wallets that are in the app and funded on that chain. Even a free mint costs gas.
- At least one RPC for that chain. If there is competition, paid RPCs are recommended.
- A proxy group, if you have many wallets.
- The [OpenSea API key](../setup/opensea-api.md), if you use the OpenSea API mode.

Do not put a seed phrase or private key in any task field. Add keys only through [Wallets](../setup/wallets.md) import.

## Steps

1. Open **Tasks → EVM → New Task** or [Smart Mint](smart-mint.md).
2. Paste the official link.
3. Wait until the **Mint Phase** field appears. Do not create the task while it is loading.
4. Check that the chain and the contract are right.
5. Pick the phase.
6. Pick the **Mode**.
7. If needed, pick a **Proxy Group**.
8. Enter the **NFT Amount**. This is the quantity per wallet.
9. Check the **Price per NFT**. It is the maximum price of one item, not the total.
10. Pick wallets and RPCs, and set the gas, timing, and launch method.
11. Create the task, then start it.

If you pick 20 wallets and set the NFT Amount to 2, each of the 20 wallets tries up to 2.

## What to check

| Item | Check |
| --- | --- |
| Link | That it is the official OpenSea page, not a look-alike fake address |
| Chain | That it is the chain where the mint opens |
| Contract | That it matches the address the project published |
| Phase | That there is a public or whitelist stage, and that the times are right |
| Price | That it matches the announcement |

If anything looks off, stop and check the official link and announcement again.

## Picking a phase

One collection can have several phases. They differ in whether they are public, their times, prices, and per-wallet limits. Pick a phase your wallets are eligible for. The price can change when you change the phase, so check it again. Putting a wallet in a task does not make an ineligible wallet eligible.

## Modes

| Mode | When to use it |
| --- | --- |
| Anonymous Mode | Gets mint data through proxies without logging in. It is the default in Smart Mint. It uses a saved key only for wallets that got no answer. If the drop requires login, it logs in then |
| Normal Mode | Logs in to OpenSea with the wallet and gets the data |
| OpenSea API | Gets the data with a saved API key. You cannot pick it if you have no key |
| Dual Mode | Gets data through both the normal path and the API path and uses whichever answer comes first. You cannot pick it if you have no key |

A public stage is usually sent straight onchain with no OpenSea request. For a stage that needs preparation, the task goes through the preparing state and fires after it becomes **Ready**.

## Proxies

- They matter in stages where each wallet needs OpenSea preparation.
- Add plenty of proxies for the number of wallets.
- If many wallets fail to prepare at once, test the proxy group before you recreate the task.
- Do not swap out proxies that are working just before the open.

## Quantity and price

- **NFT Amount** is an integer of 1 or more. Do not go over the per-wallet limit. What a wallet has already minted reduces its remaining limit.
- **Price per NFT** is filled in by the phase. Use 0 only when it is really free.
- The balance a wallet needs is `Price per NFT × NFT Amount + gas margin`.

## Actions after minting

You can attach Transfer NFT, List NFT, and Accept Offer to tasks that are not Spam. Test any setting you are using for the first time with a small wallet.

## Pre-start checklist

- [ ] Official OpenSea link
- [ ] Chain and contract
- [ ] Phase
- [ ] Eligible wallets
- [ ] Quantity within the per-wallet limit
- [ ] Price per NFT
- [ ] Mint value and gas for each wallet
- [ ] Working RPCs for that chain
- [ ] Gas that fits the launch method
- [ ] Timestamp and time zone
- [ ] If Spam, the Max Tx and the end time

## Duplicate and edit

In a saved OpenSea task, the link, chain, and phase may be locked. You can change the wallets, RPCs, gas, timing, quantity, price cap, and proxy group. For a duplicated task, check the phase and price again.

## Troubleshooting

**The link cannot be read.** Check that it contains `opensea.io/collection/` and has no spaces before or after, and paste a clean link with the tracking parameters removed.

**It keeps loading.** Paste it again after a moment. Check your internet, and test your key or proxies if you use them. You can also close and reopen the window.

**No phases appear.** The drop may have no mint stages, or the creator may have changed it. Check that you pasted the collection page, not an item page.

**You cannot pick OpenSea API.** You have no key. Use another mode.

**The key is rejected or hits a limit.** Test it in [OS API](../setup/opensea-api.md) and delete expired keys. After a limit message, wait a moment.

**Wallet preparation stalls or fails.** Check the wallets' eligibility, the proxy group, and the PC clock. Do not recreate all the tasks. Retry only the wallets that failed.

**Not enough balance.** Each wallet needs its own mint value and gas margin. Also leave gas for the actions after minting.

**It is a whitelist but it says you are not eligible.** Check whether you picked the exact phase, whether the address is the same, whether the wallet has already used its allocation, and whether the project changed the list.

**The phase has not opened.** Compare the official time with the timestamp and time zone. If you do not know the exact time, use Simulate.

**RPC timeouts or limit errors.** Switch to working paid RPCs, and delete RPCs from other chains.

**The transaction reverts.** Common causes are: before the phase starts or after it ends, not eligible, over the limit, already minted, the price went up, not enough balance, a low gas limit, and a nonce that does not match. Repeating the same task does not help until you fix the cause.

**You get a nonce too low or a replacement error.** Check the wallet's pending transactions and set the Nonce back to automatic. Do not run several tasks at the same time from the same wallet.

**It succeeded but the NFT is not shown.** Open the transaction hash in an explorer and check the transfer. OpenSea's and wallets' indexing can be late.

**Listing or accepting an offer fails.** Check the key, NFT ownership and approval, the duration, whether the offer is still valid, and gas.

## What to send when you contact support

Please send the app version, the OpenSea link, the chain and phase name, the task name and the approximate time, the public addresses that failed, the error text on screen, the transaction hash, and a screenshot with sensitive information masked. Never send a seed phrase, private key, wallet export, license key, or API key.
