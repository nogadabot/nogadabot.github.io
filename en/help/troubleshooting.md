# Troubleshooting

## Download won't work / the file disappears

* Antivirus (Windows Defender) or the browser often blocks it. Try downloading the **zip** version, or temporarily allow/exclude it in your antivirus and retry.
* If a download link is blocked, copy it and **open it in a new tab**.

## The installer won't run

* Blue SmartScreen warning → **More info → Run anyway**.
* Still blocked: **right-click the file → Properties → check "Unblock" → Apply**.
* Add Nogada to your antivirus **exclusion/allow list**.

## Activation fails

* Make sure you pasted the key **exactly, no spaces** (`NOGADA-XXXX-XXXX-XXXX-XXXX`).
* Check your internet (activation needs server verification).
* If it says "in use on another device" → deactivate on that device or ask the operator to reset it.

## I didn't get my license key

* Check your **email spam folder**.
* Send `/redeem purchase-email` to **@NOGADA\_Mint\_Bot** on Telegram.
* If "key not found", confirm the purchase email matches. Still failing → contact the operator.

## Minting transactions won't go out

* Is the **wallet balance** enough (mint price + gas, 20–50% buffer)?
* Is an **RPC** connected and checked on the task? Test it on the [RPC] screen.
* Is **gas** too low? See [Gas Guide](../minting/gas.md).
* **Leave Gas Limit blank**: setting it too low causes "out of gas" failure.

## Transaction stays pending

* Use the **Boost (🚀)** button to re-fire at higher gas. → [Boost](../minting/boost.md)

## Fetch ABI doesn't work

* Add an **Etherscan API key** in [Settings → Integrations](../app-guide/settings.md) for better results (falls back to Sourcify without one).
* Unverified contracts may have no ABI → enter the function/hex manually.

## Minting started but my task isn't responding

* If the log doesn't change to "pending" within 5–10 seconds after starting, **mint manually on the project site** (backup). Projects sometimes change settings at the last minute.

> If none of these help, **contact the operator with a screenshot**. Steps can vary by Windows version / antivirus.
