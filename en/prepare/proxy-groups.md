# Proxies

Proxies spread the requests you send to sites over many IPs. With many wallets, they keep you from being blocked for sending everything from one IP. Mint transactions themselves never go through a proxy; they are always sent from this PC to the RPC.

![Proxies](../images/proxies.png)

## Where they are used

| Used in | What it does |
|---|---|
| Smart Mint's **Proxy Group** | For drops where each wallet needs signed mint data, spreads those requests over the group's IPs. This PC asks directly only when every proxy fails. |
| The task window's **Proxy Group** | Shows when you put a launchpad link in the contract field. Used for requests to that launchpad (mint data and so on). |
| **Settings → Fire Engine → Whitelist Checker Proxies** | Sends the Whitelist Checker's OpenSea sign-in and eligibility requests through proxies. |
| A proxy on **Accounts** | The IP each account uses in social tasks. |

## Adding proxies

1. In **Proxies**, make a group with **+ New Group**.
2. Click **Add Proxies**. The box takes one proxy per line, in any of the common formats.

```
192.0.2.10:8080:user:pass
user:pass@192.0.2.11:8080
https://user:pass@192.0.2.12:8443
```

## Testing

**Test All** checks the group's proxies 5 at a time. Each row also has a button to test just that one.

- Leave the **Test URL** field next to it empty for a quick connectivity check.
- Enter a site such as `opensea.io` to see whether each proxy reaches it. Testing with the site you will mint on is more telling.

The **Status** column shows the response time (ms) and the response code.

The row's edit button changes the proxy line and the trash button removes it.

## How many you need

Some launchpad fields in the task window suggest about 1 IP per 8 wallets. Add more as you add wallets, and test with the site you will mint on first. The app's help recommends BirdProxies, StatProxies and Zesty.
