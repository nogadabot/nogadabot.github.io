# Tasks — the heart of minting

A **task** is one minting setup that holds "which contract, with which wallets, and how to mint." Create a task and **Run** it to start minting.

![tasks](../images/tasks.png)

## Layout

* **Group rail (left)** — organize tasks into groups. Create one with `+ New group`. (e.g. "WL mints", "Public")
* **Toolbar (top-right)**
  * **+ New task** — opens the task editor (detailed below).
  * **Quick Fire** — fire selected tasks fast.
  * **Start group / Stop group** — run/stop all tasks in a group at once.
  * **Bulk edit** — edit settings of multiple tasks together.

> ⚠️ Tasks go **inside a group**. If you have no group yet, create one with `+ New group` first.

---

## ⭐ Creating a task (full editor walkthrough)

Click `+ New task` to open the editor. Let's go field by field.

![task editor](../images/task-editor.png)

![Fetch ABI — close-up](../images/task-editor-detail.png)

> 🔍 *Close-up: type the contract address, then click **Fetch ABI** to auto-fill the function.*

### 🎯 Worked example — your first mint

**Goal:** mint **1 NFT at 0.05 ETH** using **2 wallets**. Just fill the editor by the numbers:

![worked example](../images/task-example.png)

| # | Field | What to do (with example values) |
|---|---|---|
| ① | **Contract address** | Paste the NFT's contract address — e.g. `0x4E1f…480e56` |
| ② | **Fetch ABI → Function** | Click **Fetch ABI**; the app reads the contract and lists its functions. Pick **`mint(uint256)`** and the Function field fills in. |
| ③ | **Arguments** | The value(s) the function needs. For `mint(uint256)` this is just the **quantity → `1`** |
| ④ | **Value (ETH)** | The mint **price per item → `0.05`** (put `0` for a free mint) |
| ⑤ | **Wallets + RPC** | Tick the wallets to mint with (**All** = both here), and tick at least one **RPC** |
| ⑥ | **Create** | Done — the task drops into your list, ready to **Run** |

> 💡 The red *"wallets look short on funds"* note just means those wallets don't hold 0.05 ETH yet. Top them up first → [Manage Funds](../app-guide/wallets.md).

> 🧩 **Don't know the function or arguments?** That's exactly what **② Fetch ABI** is for — it shows you the contract's real functions so you don't have to guess. For most public mints it's `mint(uint256)` with the quantity as the argument.

---

### Left — "what to mint"

| Field | What to enter |
|---|---|
| **Task name** | Leave blank to auto-name. Type your own to tell tasks apart. |
| **Target (tabs)** | **Contract** / **OpenSea Drop** / **Launchpad** (see below) |
| **Contract address** | The NFT contract to mint (`0x...`) |
| **Chain** | The chain to mint on (Ethereum, Base, etc.) |
| **Raw calldata** | Check to enter **raw hex data** instead of a function (advanced) |
| **Function** | The mint function (e.g. `mint(uint256)`). Use **Fetch ABI** to auto-fill |
| **Arguments** | Values for the function, separated by `;`. `{address}` = wallet address, `{id}` = token id (auto-replaced) |
| **Amount (ETH)** | Mint price (per item). `0` if free |

#### 🔧 "Fetch ABI" — no need to type the function by hand

Enter the contract address and click **Fetch ABI** to **auto-load the contract's function list** as a dropdown. Pick the mint function (`mint`, `publicMint`, etc.) and the field fills in. (Add an Etherscan API key in [Settings](../app-guide/settings.md) for best results; it falls back to Sourcify without one.)

> 💡 **Target tab differences**
> * **Contract** — mint directly with a contract address + function (most common)
> * **OpenSea Drop / Launchpad** — just paste the mint link and it **auto-detects the phase**. Pick the phase, fill the rest, done. (Supported: OpenSea, Transient)

### Right — "how to mint"

| Field | What to enter |
|---|---|
| **Copies** | How many times to repeat the task |
| **Wallets** | Check the wallets to mint with. Check **All** to select everything |
| **RPC** | Check the RPC endpoints to use (none = runs on public RPC) |

### Execution settings (scroll down)

The editor also has gas and timing settings: **Gas Limit / Max fee (gwei) / Priority (gwei) / nonce / start time / delay / Simulation / Spam mode / Flashbots bundle**. Leave **Gas Limit blank** so the app estimates it safely. Full guide → [Gas Settings Explained](../minting/gas.md)

### Bottom — save

* **Templates** — save/load frequently used settings.
* **Cancel / Create** — **Create** makes the task.

---

## ▶ Firing it: Run · Quick Fire · Stop · Boost

Once the task is created, here's how you actually send it:

* **Run** — fires **this one task**. Transactions go out at the task's start time (or immediately if start = `now`).
  *Example: you set up a WL mint with start time = the phase open, hit **Run**, and it auto-sends the moment the window opens.*
* **⚡ Quick Fire** — the fastest path. **Tick** one or more tasks, hit **Quick Fire**, and they all fire **at once, right now** — no editor, no waiting.
  *Example: a surprise stealth mint drops. You already have the task saved → tick it → **Quick Fire** → it sends instantly.*
* **Stop** — stops a running task.
* **🚀 Boost** — transaction stuck pending (gas too low)? Boost **re-sends it at higher gas** so it lands. → [Transaction Boost](../minting/boost.md)
* **Start group / Stop group** — Run or Stop **every task in a group** together (great for firing many wallets/contracts at once).

> 💡 **Best practice**: 3–5 minutes before mint time, **Stop and Run again** — this reloads the latest on-chain data (projects sometimes change settings at the last minute).
