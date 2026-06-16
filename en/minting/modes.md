# Mint Modes — Instant · Safe · Spam (speed & success, explained)

Minting comes down to two ideas:

* **Fire once** — send one transaction right at mint time.
* **Keep hammering** — keep sending until the mint opens and lands.

That choice is the **mint mode**. You pick one of three in the task editor.

---

## 🔘 The 3 mint modes

| Mode | What it does | When to use |
|---|---|---|
| **Instant (once)** | Sends **one** transaction per wallet, immediately | When you start exactly at mint time, or **schedule** it. Fastest. |
| **Safe (simulate)** | **Dry-runs first**, skips wallets that would fail, then sends once for the rest | When you want to avoid wasting gas |
| **Spam** | **Repeats** until it lands → **auto-stops on success** | When you don't know the exact time, or it's competitive. "Turn it on and it grabs the mint." |

> 💡 **The default is Spam** — it wins most competitive mints (other platforms default to spam too). Switch to Instant/Safe whenever you like.

---

## 🛡️ What is Safe (Simulate)?

**Simulate = a safety check that "test-runs" the mint before really sending it.**

* Before sending for real, it does a **dry-run** (eth_call) against the chain.
* Any wallet that **would fail (revert)** — mint not open, not eligible, sold out, low balance — is **skipped**.
* Only wallets that pass actually send (once).

**Why it's nice:** it never sends a doomed transaction, so it **doesn't waste gas**.

> ⚠️ **Important — Simulate is NOT "retry".**
> It's a safety check, then **one shot**. If you start **before the mint opens** (e.g. 4:58 for a 5:00 mint), the dry-run fails → that wallet is skipped → **the task ends.** It does **not** wait or retry until mint time.
> 👉 To arm it early and catch the exact open, use **Scheduled start** or **Spam**.

---

## 🔥 What is Spam?

**Spam = keep sending until the mint succeeds.**

* While the mint is closed, attempts fail — but the moment it **opens, it grabs the mint**.
* On **success (confirmed on-chain) it auto-stops** — no extra gas burned.

This is the "don't know the time / it's competitive — **just turn it on and it catches it**" mode.

### The 3 spam knobs

| Knob | Meaning | Default |
|---|---|---|
| **Delay (ms)** | Wait between attempts. `100` = **every 0.1s** (10/sec), `10` = every 0.01s, `0` = max speed. | user-set |
| **Max tx** | Cap on **how many sends**. ⚠️ Not "N successes" — it stops after **N transmissions**. Blank = **unlimited**. | unlimited |
| **Guardrail (sec)** | **Time safety belt** — auto-stop this many seconds after start. Blank = **off (unlimited)**. | off |

> 💡 **Delay** = how fast you hammer, **Max tx** = how many times, **Guardrail** = for how many seconds.

> ⚠️ **Watch the guardrail trap!**
> If the guardrail is set to e.g. 120s and you **start a 5:00 mint at 4:55**, it **shuts off at 4:57 — before the mint even opens.** If you start early, set the guardrail long enough or just turn it off. (It's off by default.)

---

## ⏰ Scheduled start — fire exactly at mint time

Set a **start time** on the task and the bot **waits until then and fires precisely** — even if you started it early. (Works with Instant, Safe, and Spam.)

* **Example:** mint is 5:00 PM sharp → set start to `5:00:00 PM`, start early → the bot fires at exactly 5:00. A **countdown** shows on screen.
* No schedule → it fires the **instant** you press start. (That's why "arm it early" means **Schedule** or **Spam**.)

---

## 🏆 Winning a competitive mint (FCFS · Public)

To land a contested mint:

1. **Scheduled start** — fire at mint time (or **Spam** to arm it early)
2. **Fast gas** — auto (recommended) or manual-high → [Gas guide](gas.md)
3. **Spam** — if it's fierce, keep hammering

> 💡 Simulate (Safe) is **not** a success booster — it's a gas saver. In a real race, dropping it can be faster (the dry-run costs a beat).

> 🎯 **Recommended setup — "arm it and it grabs the mint"**
> If you don't know the exact time or just want to land it, make a new task **1–2 minutes before mint** and set:
> 1. **Mint mode → Spam**
> 2. **Max tx → blank** (unlimited)
> 3. **Delay → 100–2000ms** (0.1s–2s, your call)
> 4. Hit **Start** (or set a scheduled start at mint time)
>
> Example: mint is **5:00 PM** and you start the task at **4:59** → the bot fires non-stop at your chosen interval (0.1–2s) from 4:59 on. The moment it **succeeds (confirmed on-chain) it auto-stops.** So it keeps hammering *until it lands (or you stop it)*.
> - Easier on gas/RPC → use a **larger** delay (e.g. 1000–2000ms)
> - More aggressive → use a **smaller** delay (e.g. 100–300ms)
> - ⚠️ For a mint that can **never** succeed (sold out, not eligible) it would retry forever — stop it manually or cap it with **Max tx**.

---

## 👛 Minting with many wallets

Most people mint with many wallets (dozens). Two ways:

| Way | How | Upside |
|---|---|---|
| **One task per wallet (default · recommended)** | Pick 20 wallets + create → **20 tasks** auto-made (wallet1=task1 … wallet20=task20) | See **each wallet's progress at a glance** in the list; start/stop each one |
| **Many wallets in one task (option)** | Check the option → 20 wallets ride **one task** and **fire together** | Tidy, one row |

Either way, **wallets fire in parallel** — they don't queue one-by-one.

> ⚠️ **Golden rule — "one wallet, one task"**
> **Don't run the same wallet in two tasks at once.** Each wallet has a sequential **nonce** (0,1,2,3…). If two tasks use the same wallet, they grab the **same nonce** → only one lands and the rest fail "nonce too low", or they tangle and **both just burn gas.**
> 👉 That's why **"one task per wallet" is safe** (each wallet is bound to its own task). Putting **different** wallets in one task is fine (independent nonces).

> 🛡️ **The app guards this for you.** If a wallet is **already minting in another task** and you start a second task that also uses it, that **one wallet is auto-skipped** (a toast says "wallet 0x12…34 is already minting in another task — skipped") while the task's other wallets fire normally. The whole task doesn't stop.

---

## 🎯 Contract vs OpenSea drop — what's different

Pick in the editor's **Target**.

| Target | Input | ABI / args | Note |
|---|---|---|---|
| **Contract** | Contract address (`0x…`) + mint function | **Needed** (auto via Fetch ABI) | The usual direct mint |
| **OpenSea drop** | Collection **link** (opensea.io/...) | **Not needed** | **Fetch stages** → pick a phase (GTD/FCFS/Public). OpenSea builds the tx for you |
| **Launchpad** | Mint link | Not needed | Supported: Transient |

> 💡 **OpenSea drops are much easier** — ABI, args, and math are all automatic. Just paste the link and pick a phase. If ABI feels hard, prefer OpenSea drops / launchpads.

### If contract arguments confuse you

Press **Fetch ABI** and the contract's function list loads automatically. Pick the mint function (`mint`, `mintPublic`, …) and **the fields that function needs appear automatically** (name + type). When filling them:

* `{wallet}` = auto-replaced with each wallet's address
* `{tokenId}` = auto-replaced with the token id
* If the function is **payable**, the **Value (ETH)** field is required (red asterisk).

---

## ⚙️ Defaults & why

| Setting | Default | Why |
|---|---|---|
| **Mint mode** | **Spam** | Wins most competitive mints (other platforms default to spam) |
| **Simulate** | **Off** | The dry-run costs a beat. Pick "Safe" when you want it |
| **Guardrail** | **Off (unlimited)** | So a hidden time cap can't kill an early-started task. It auto-stops on success anyway |
| **Gas** | **Auto** | Tracks the live market |

---

> 🔎 See also: [Public mint](public.md) · [Whitelist (WL) mint](whitelist.md) · [Gas](gas.md) · [Boost](boost.md)
