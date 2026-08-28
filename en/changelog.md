# What's New

Newest version first. The app auto-updates to the latest version every time you open it — see [Download](getting-started/download.md) to install.

## v0.9.36

- Captured mint transactions that previously delivered an NFT to an address other than the signing wallet can no longer create or restart a task. Normal mint routes remain signer-only, while advanced ABI and Hex calls keep their literal calldata without offering a separate mint-recipient setting.

## v0.9.35

- Smart Mint now resolves supported project mint sites and direct contracts that use verified Blockscout ABIs and on-chain group minting, including Robinhood Chain. Group price, start state, supply, and collection sold-out status come from contract facts without blocking the user's phase choice or launch.
- Contract ABI lookup now uses the selected chain across supported EVM explorers and verified-source fallbacks. Smart Mint requires an explicit chain choice, while the task editor loads verified callable functions automatically after a valid contract is entered.
- Normal resolved mint routes now deliver to the wallet that signs the mint transaction. Separate mint-recipient controls were removed from the app and bot, and older configured-recipient tasks stop before broadcast.
- The task editor's RPC picker no longer stacks group headers over endpoint names and URLs. Long RPC names, addresses, connection state, and selection controls remain readable on every chain.
- Telegram Smart Mint now starts with only a link or contract address, then always asks the user to confirm the chain before lookup. Exact phase, quantity, launch mode, schedule, and gas are configured with buttons in the normal setup flow; the legacy one-line command remains available for experienced users.
- Future SeaDrop GTD and FCFS tasks now keep the exact signed or allowlist mint function from setup through voucher arrival, so a valid T0 voucher is broadcast instead of being mistaken for a changed mint method.
- Telegram phase, created-task, and terminal-result cards now show the essential price, limit, schedule, wallet, success, failure, pending, mint-count, and short transaction-link facts without repeated nonce or custody explanations.

## v0.9.34

- Smart Mint now resolves the project's actual mint phases from supported links and contracts without inventing an Auto, Public, or ended phase. Eligibility guesses no longer block phase selection or launch.
- The app and Telegram bot operate independently and can use the same wallet without sharing tasks, state, nonce coordination, credentials, or execution. A clear warning explains that simultaneous use may create an on-chain nonce conflict.
- Scheduled GTD, FCFS, and Public tasks prepare before the opening time and broadcast through the selected RPC routes as soon as the real phase or voucher becomes available, without adding a new synchronous wait at launch.
- Mint execution now preserves the selected wallet, recipient, phase, quantity, price, calldata, and gas. Supported multi-mint routes split exact quantities into tracked transactions instead of silently reducing the request.
- Task status and mint results now follow persisted run and receipt evidence, preventing idle tasks from changing state on their own and avoiding guessed success, failure, or ended labels.
- OpenSea drop links and contract inputs resolve more reliably, Smart Mint hands created tasks back to the task list clearly, and app and bot controls provide clearer phase, wallet, RPC, recipient, and launch feedback.

## v0.9.33

- Mint launches are faster and more predictable: the app and Telegram bot each independently prepare their own wallets, gas, nonce, network routes, and scheduled transactions before launch or the scheduled opening time, then broadcast without adding a new online wait.
- Smart Mint support on Stable now includes Fefer Genesis, GMCards, and OmniHub public mints, with current price and approval handling, exact scheduled execution, and safer restart recovery.
- Stable NFT holdings, transfers, and split sends are now available through verified ownership checks. OpenSea marketplace, SeaDrop, and PnL remain closed on Stable until their data paths are independently verified.
- Restart, Safe, Boost, Flashbots, proxy, and multi-RPC handling now preserve the exact wallet, transaction, route, and privacy choice while avoiding duplicate sends or unintended public fallback.
- The Telegram bot stays responsive while balances load in the background, refreshes automatic gas while a mint gate is closed, and immediately discards revoked OpenSea credentials.
- Server upgrades now preserve pending Telegram mint and approval records created by earlier versions.

## v0.9.32

- Corrected chain gas guidance. Stable still sends priority fees as 0; Robinhood keeps your selected gas settings, and Public, GTD, and FCFS remain project mint phases.
- Bot wallet recovery on Base, Optimism, Ink, and Shape now keeps a small L1 fee reserve so send-max withdrawals can pay the full network fee.

## v0.9.31

- Added Robinhood Chain and Stable. Robinhood supports Nogada's NFT, PnL, and OpenSea tools; Stable supports minting and transfers with USDT0 gas, while its OpenSea NFT and PnL tools stay hidden until those data surfaces are verified.
- Gas handling now follows each chain: Stable sends priority fees as 0. Robinhood keeps the user's selected gas settings; its sequencer arrival order is separate from the project's Public/GTD/FCFS mint phase.

## v0.9.30

- PnL is now easier to trust: results clearly say whether they are exact, estimated, or partial, explain missing evidence, and never turn unavailable history into a false zero.
- Recover faster when something fails: follow plain-language fixes, retry only the affected wallets, check task readiness before launch, and restore an earlier task version when needed.
- See what happened at a glance with a clearer activity timeline, before-and-after wallet balances, and searchable task and change history.
- Address-heavy work is quicker and safer with saved destinations, import previews, faster search, and privacy controls that hide sensitive details when sharing your screen.
- Admin and operations tools are safer and more useful, with privacy-protected customer references, clearer queues and audit history, stronger backup checks, and automatic service-health alerts.

## v0.9.29

- More reliable minting across supported launchpads: the wallet, chain, price, quantity, recipient and transaction you selected now stay attached to the task from launch through confirmation.
- Faster launches under load: network and gas preparation happens earlier, large wallet groups avoid unnecessary queues, and the first transaction gains no new online wait.
- Stop, restart and Boost now continue or replace only the transaction belonging to that task, preventing accidental duplicate mints or changes to another pending transaction.
- NFT transfers, listings, offers, funding and consolidation now recover cleanly from timeouts and show the confirmed on-chain result more accurately.
- Improved app and Telegram bot stability across scheduling, wallet management, licensing, payments, updates, backups and status screens.

## v0.9.28

- Faster mints: removed the delay before the first transaction (auto-gas prep) so the app fires at the open much quicker — aiming for the first block.
- Fires at your gas, once: the app no longer raises the gas on its own every few seconds. It fires once at the gas you set (Auto or Custom); raise it yourself with the Boost button if you want.
- Mint success now shows correctly (green) in the status panel — a landed mint is no longer mislabeled as failed.

## v0.9.27

- More accurate payment on ERC-20 drops: Manifold and TLStacks mints now send the exact native platform fee, so an ERC-20-priced drop no longer reverts.
- Manifold allowlist drops now mint correctly (the on-chain fee for allowlist claims is used).
- Fixed a case where pasting an OpenSea link could show a temporary red error — the app now retries across your RPCs automatically instead of failing the first try.
- Safer custom gas: when you set a max fee, the tip is kept within it so the mint isn't rejected by the network.

## v0.9.26

- More reliable minting: more accurate price, value, gas and ERC-20 handling across every mint path.
- Faster launches: RPC connections are pre-warmed and the fire path is leaner.
- Sturdier under pressure: better retries, clearer statuses, and self-healing when a drop's data shifts.
- New: whitelist checks can use operator-published external checkers, routed automatically from the pasted slug or link.
- A large batch of stability and accuracy fixes throughout the app.

## v0.9.25

- New: a Drops page — scan popular chains for SeaDrop mints that are opening or just deployed, then tap one to load it straight into Smart Mint.
- Faster whitelist and signed-drop minting across many wallets: each wallet's voucher is now fetched in parallel and shared per drop, so a big multi-wallet launch no longer waits through them one at a time.
- New: a drop's per-wallet tasks now fold into one collapsible card in Tasks — see the drop, phase, wallet count and live progress, and start or stop them all at once.
- New: per-task gas tuning — set a tip multiplier and a minimum priority fee on an individual task, with quick 15/30/60% bump presets for spam mode.
- Fixed a few labels that were showing in English inside the Korean and Chinese interfaces.

## v0.9.24

- New: use your own OpenSea API key for signed drops. App and bot credentials are separate, so register the key in the product where you want to use it. That product then pulls each voucher from OpenSea's official Drops API (120/min per account). Public mints still need no key.
- New: set a custom proxy test URL, so you can check your proxies against any address you like (defaults to api.ipify.org).
- New: unwrap WETH back to ETH in one click, right from the Wallets screen.
- New: the whole app, the user guide, and the Telegram bot are now fully available in Simplified Chinese (简体中文) — switch language in Settings.
- Cleaner, more natural wording across English, Korean, and Chinese.

## v0.9.23

- New: check your wallets for an EIP-7702 delegation (a smart-account upgrade some mints reject) and revoke it in one click, right from the Wallets screen.
- New: Log out from Settings. It stops every running task and locks the app behind your key, but keeps all your wallets, RPCs, and settings.
- New: spread funds with a random amount per wallet, so a disperse doesn't send the exact same value to everyone.
- New: consolidate straight into an external address (an exchange deposit or cold wallet), plus a one-click ETH / USD toggle on the gas estimate.
- Whitelist minting is gentler on rate limits at scale: it now paces voucher requests across your proxies, and the spam watcher tracks the mint-open time more tightly.
- Cleaner, more natural wording across the app and the in-app guide.

## v0.9.22

- Smart Mint now shows the correct estimated cost for a whitelist / signed phase — it could previously show the public price even when you'd selected a cheaper allowlist phase. (Display only; your tasks always fired at the right price.)
- Sending or spreading ERC-1155 NFTs to another wallet now works — it was reverting every time before.
- A broad round of stability and reliability fixes across minting, transfers, listings, and the Telegram bot.

## v0.9.21

- Whitelist minting is much faster now — the app catches your mint voucher the instant OpenSea issues it and fires the moment the drop opens, instead of lagging seconds behind.
- The whitelist checker now shows each drop's real phases and whether each wallet is on the list (✓ / ✗), instead of only showing "Public".
- Smart Mint correctly reads and displays a drop's allowlist / signed phases.
- Firing is gas-safe: the app won't waste gas broadcasting into a sold-out or not-yet-open drop.
- Spam tasks can now fire as private, revert-protected Flashbots bundles on Ethereum mainnet (optional).
- Fixed a few rare screen freezes and sharpened text contrast for readability.

## v0.9.20

- Boost now replaces a stuck transaction in place — same nonce, higher gas — instead of piling on another one, and it works on a running task too, with +10% / +25% / +50% quick presets.
- New "funded wallets only" quick-pick when building a task: instantly select just the wallets that hold enough to mint.
- Whitelist scan results can now be saved, reloaded, and deleted — your eligibility checks stick around instead of vanishing when you close the dialog.
- Spam tasks can now have an end time: pick a clock time and the burst stops itself then, even when set to unlimited.
- Task editor shows each wallet's balance in the picker, the start time supports seconds, and the start / stop / boost controls were tidied up.
- Steadier spam timing, and every running task now stops cleanly when you close the app.

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
