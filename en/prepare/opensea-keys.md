# OpenSea API keys

**OS API** holds your OpenSea API keys. You can mint without one; to sell on OpenSea from the app, you need one.

![OS API](../images/os-api.png)

## Adding keys

1. Make a group with **+ New Group**. Tasks can pick which group's keys they use.
2. Click **Add Keys** and put each key on a line of its own.
3. Click the add button. The app asks OpenSea about every key and saves only the ones it accepts.

Keys are stored on this PC, encrypted.

## Reading the table

| Column | Meaning |
|---|---|
| Key | Only a few characters at each end show. **Show All** shows the whole key. |
| Status | The response time at the last check, and the remaining requests / limit OpenSea reported. |
| Type | The kind of key, such as **Developer** or **Instant**. |
| Expiry | When the key expires, if it does. |

- **Test All**: checks every key in the group again.
- **Clear Invalid**: removes keys in the group that expired or that OpenSea refused.

The **Instant** group holds short-lived keys made by the Instant key task. Tasks that make keys are picked from the modules in [Accounts and social tasks](../social/accounts-and-social.md).

## What a key unlocks

| Feature | Without a key |
|---|---|
| **List Selected**, **Cancel Listings** and **Accept Offer** in Holdings | Does not work. The buttons are off, and hovering over them tells you to add a key on the OS API page. |
| The **Listing** and **Top offer** columns of the Holdings table | Show **needs OpenSea API key** instead of a value. |
| The post-mint actions **List NFT** and **Accept Offer** | Does not work. The field says **needs OpenSea API key**. |
| **OpenSea API** and **Dual Mode** in the OpenSea Mode of Smart Mint and of a task | Cannot be picked. The field name says **needs OpenSea API key**. |
| Wallet alerts in Market | The Alert Center shows no **Wallet** tab and wallet alerts do not run. Saved wallet alerts are not deleted; they come back when you add a key again. |
| Connecting My allowlists in the Mint Calendar | Does not work. Trying to connect tells you to add a key on the OS API page first. |
| **Normal Mode** and **Anonymous Mode** for signed drops | Works. |
| Market prices and charts | Works. They come from the Nogada server. |

## Many wallets, several keys

The **Status** column shows how many requests OpenSea still allows each key. When one task group asks for many wallets at once, a single key can run out partway, so keep several keys if you mint with many wallets. Smart Mint's note gives the same advice.
