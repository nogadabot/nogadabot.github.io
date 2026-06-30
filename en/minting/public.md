# Public Mint

An open mint anyone can join. Nogada offers two ways.

> 💡 For a contested public mint, the key is **Spam + fast gas + a scheduled start** → [Mint Modes explained](modes.md)

## Method A: Launchpad/market link (easiest)

For launchpads like OpenSea or Transient, **just paste the link**.

1. **Tasks** → `+ New task`.
2. In the target tab, pick **OpenSea Drop** or **Launchpad**.
3. **Paste the mint link** into the contract address field.
4. The app **auto-detects the mint phase** → pick the phase.
5. Fill wallets/RPC/gas → **Create** → **Run**.

> 💡 For a mint that's already live, auto-detection is the fastest and easiest.

## Method B: Contract directly (manual)

For a regular contract where auto-detection doesn't apply, specify the function yourself.

1. Get the project's **contract address** (from Etherscan, etc.).
2. **Tasks** → `+ New task` → target **Contract**.
3. Enter the address and click **Fetch ABI** to pick `mint` / `publicMint` etc. from the function list.
4. Fill **Arguments**: a public mint usually has just **quantity**.
5. Put the mint price in **Amount (ETH)** (0 if free).
6. Set wallets/RPC/gas → **Create** → **Run**.

### Using raw hex (advanced)

You can copy the **input data (hex)** from someone else's minting transaction.

* On Etherscan, open a mint tx for that collection → **Input Data** → "View Input As → Original" to copy the hex
* In the task editor, check **Raw calldata** and paste the hex
* Just match the contract address + total amount (price × quantity)

> ⚠️ **Be careful with functions that include a receiver address or token id**: a wrong copy could mint to someone else's wallet. Simple `mint(quantity)` types are safe to copy directly.

> 💡 Confused about the function/hex? Ask ChatGPT/Claude "what's this contract's mint function and arguments?", they read contracts well.

Next → [Gas Settings Explained](gas.md)
