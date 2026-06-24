# What's New

Newest version first. The app auto-updates to the latest version every time you open it — see [Download](getting-started/download.md) to install.

## v0.9.19

- Fixed an OpenSea minting bug: drops that had already started — any tokens already minted — failed to fetch your mint data and wouldn't fire. They now mint correctly, on both public and signed (GTD / FCFS allowlist) phases.

## v0.9.18

- Spam mode is now gas-safe. It no longer fires transactions that would just fail — while a drop hasn't opened, is sold out, or your wallet has already hit its limit, it waits at zero gas and tells you why, then fires the instant the mint would actually go through.
- When firing, spam keeps a single live transaction and raises its gas if it isn't mined, instead of flooding the chain with hundreds of failing transactions (which could previously burn real gas on a sold-out drop).
- New per-task gas-boost presets for the retry, a faster fire at the open moment, and an option to skip the safety check and blind-fire for the lowest latency.

## v0.9.17

- Spam mode no longer gives up when a whitelist drop hasn't issued your mint data yet — it keeps re-checking and fires the instant the phase opens. Queue any phase (Public, GTD WL, FCFS WL) minutes early and spam will catch the open.

## v0.9.16

- Fixed: a public mint set up BEFORE the drop opened could fail to fire at launch ("function name or hex calldata required") — it now fires correctly, and spam mode keeps retrying until the drop opens.

## v0.9.15

- Whitelist checks now run from your own connection — faster and steadier when many people rush the same drop.
- More gas headroom on OpenSea mints (you're only ever charged for the gas actually used).
- Telegram bot: minting now goes through your own proxy — add one in the bot settings (you'll be prompted if it's missing).

## v0.9.14

- Some Korean text that still showed in English (Wallets, Proxies, RPC, NFT screens) is now properly translated.
- Clearer names for the auto-gas options in Settings, plus a recommended-range hint on the fire-delay field.
- New diagnostic log file — if something goes wrong, open the logs folder and send it for support.
- Steadier token (ERC-20) approval before minting, plus internal stability, security and bug fixes.

## v0.9.13

- OpenSea drops keep working even when OpenSea changes its site — the app fixes itself automatically, no manual update needed.
- Faster, steadier minting across many wallets on OpenSea.
- Drops priced in a token (USDC and the like): a one-tap button to approve the token before you mint.
- Cancel a single NFT listing — not just all of a wallet's listings at once.
- Scheduled mints fire more reliably at the right time, plus stability and safety fixes.

## v0.9.12

- Dashboard tidied into two columns — drops & watchlist on top, mint feed & running below.
- Update notes now arrive here in Telegram too, in both English and Korean.

## v0.9.11

- New Smart Mint screen — paste a link and see the drop, price, phases and each wallet's eligibility at a glance.
- Drop image, an open countdown, and sold-out / look-alike-name warnings.
- Pick which wallets mint, the phase, and your gas — with an estimated total cost.
- Proxy groups: your launch and voucher requests go out from the same proxy IP.
- Post-mint auto-sweep to a safe wallet, plus a recent / watched-drops list.
- Mints are never blocked — even an ineligible or low-balance wallet still fires; the network decides.
