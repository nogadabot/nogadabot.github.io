# Whitelist (WL) Mint

A WL mint lets **only registered wallets** mint. It usually needs a proof or signature, so there is one extra preparation step compared to a public mint.

> 💡 Mint modes (Instant·Safe·Spam), scheduled start, and many-wallet handling → [Mint Modes explained](modes.md)

## Easiest path: OpenSea / Transient WL

For OpenSea/Transient launchpad WLs, Nogada **handles the proof automatically**.

1. **Tasks** → `+ New task` → target **OpenSea Drop** or **Launchpad**.
2. Paste the **link** and the phase auto-detects → select the **WL (allowlist) phase**.
3. Select your **WL-registered wallets**. (Check which wallets are on the WL with **Whitelist check** on the [Wallets] screen first.)
4. Fill RPC/gas → **Create** → **Run**.

## How to fetch OpenSea WL vouchers: API key vs Default

An OpenSea SeaDrop **WL (signed/allowlist) drop** needs each wallet's mint voucher to be fetched before it can fire. There are two ways to fetch it (pick under **WL voucher source** on the Smart Mint / task editor screen):

* **OpenSea API (recommended)** — fetch the voucher with your own **OpenSea API key**. The limit is **per key, not per IP** (~120 requests/min per key ≈ about 50 wallets), so **no proxy is needed**, and you scale by adding more keys. Add keys under **Settings → OpenSea API keys** — create them at `https://opensea.io/settings/developer` (fill the company/site fields with anything).
  * Past ~50 wallets, **create separate OpenSea accounts and add one key per account**. The limit is **per account**, so several keys on the same account do NOT add up.
  * Keys **expire after 30 days** — recreate and replace them when they do.
* **Default (proxy)** — fetch over your **proxy IPs**, no key. The limit is per IP, so use **several proxies** when minting from many wallets.

> 💡 **Public mints need neither.** A public stage mints with no voucher, so no key or proxy is involved. This choice only appears on **WL/signed** stages.

> When keys are registered, **OpenSea API is the default**, and you can switch to **Default (proxy)** when creating the task.

## General steps (common to all WL mints)

1. **Make sure the app is the latest version** (bottom-left).
2. **Create the task and check the log first**: Run it to confirm the log message looks correct.
3. **Stop and Run again 3–5 minutes before mint time**: projects sometimes change settings at the last minute; this reloads the latest data.
4. **Prepare manual minting as backup**: if minting starts but your task log doesn't change to "pending" within 5–10 seconds, mint manually on the project site.

> 💡 **Check WL wallets**: [Wallets] → select wallets → **Whitelist check** to see which wallets are on a drop's WL in advance.

## Custom contract WL (advanced)

A custom-contract WL (not a launchpad) usually has a **per-wallet signature/proof.** In that case:

* If the operator provides separate instructions (module/hex), follow them.
* Or you must obtain your exact proof and put it in the arguments/hex (harder).

> ⚠️ The most common WL mistakes are **trying with a non-WL wallet** or **a wrong proof**. Always verify with the log before running.

Next → [Gas Settings Explained](gas.md)
