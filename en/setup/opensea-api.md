# OpenSea API key

An OpenSea API key lets the app use OpenSea's authenticated features. It is not the same as an RPC. An RPC connects to a chain, and this key connects to OpenSea.

## What needs a key

- Listing NFTs and canceling listings
- Loading and accepting offers
- Viewer bulk buying
- The mint calendar schedule
- The OpenSea API mode of a task

Many things work without a key. Market and Dashboard prices come from the Nogada server, so they need no key. Drop minting also works without a key in Normal Mode and Anonymous Mode. Anonymous Mode uses a key only as a fallback, for wallets that got no answer to the anonymous request.

## Adding keys

1. In the **OS API** menu, create or pick a group.
2. Click **Add Keys** and paste one key per line. Blank lines and lines that start with `#` are ignored.
3. Click **Verify & Add**.

The app checks each key with OpenSea before saving it. It does not add invalid keys or duplicate keys.

Keys are hidden by default. They show only when you click **Show All** or copy.

## Getting keys

- **From OpenSea developer settings, yourself**: Apply in the developer settings of your OpenSea account, then add the key with the steps above. You need email verification and some simple usage information.
- **With a module**: If the operator has posted an OpenSea key module under **Tasks → Modules**, you can create keys with it. The keys it creates are encrypted and saved in OS API.

## Testing keys

Click Test or **Test All** to see the latency. Also look at the **Type** and **Expiry** columns. Check that no key expires before the drop.

| Status | What to do |
| --- | --- |
| invalid | Delete it and add a new key. **Clear Invalid** removes them all at once |
| error | Check the connection and test again |
| Expiring in 7d | Add a new key before it expires |
| Expired | Add a new key, then delete the expired one |

Keys from the same OpenSea account share one request limit. Creating several keys on the same account does not raise the limit.

## OpenSea Early Start

If you turn on **Settings → Fire Engine → OpenSea Early Start**, the app starts requesting mint data 1 second before the start (T-1s). It does not send transactions early. In large task groups it uses up the rate limit quickly, so check the remaining limit before you turn it on.

## Keeping keys safe

- Do not post keys in Discord, screenshots, logs, or support requests.
- If a key is exposed, revoke it on OpenSea and delete it in the app too.
- When you contact support, send the masked key row, the status, the app version, and the time it failed.
