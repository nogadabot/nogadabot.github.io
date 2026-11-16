# Proxies

Proxies spread the requests you send to sites over many IPs. With many wallets, they keep you from being blocked for sending everything from one IP. Mint transactions themselves never go through a proxy; they are always sent from this PC to the RPC.

![Proxies](../images/proxies.png)

## Where they are used

| Used in | What it does |
|---|---|
| Smart Mint's **Proxy Group** | For drops where each wallet needs signed mint data, spreads those requests over the group's IPs. This PC asks directly only when every proxy fails. |
| The task window's **Proxy Group** | Shows when you put a launchpad link in the contract field. Used for requests to that launchpad (mint data and so on). |
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

## When you need them

- **Not needed** for a mint where the app only talks to the chain, such as calling a contract's mint function directly. Transactions and chain reads go to the RPC and never through a proxy, so proxies change nothing there.
- **Needed** when the app has to get something from a launchpad or a project's own site for every wallet before it can mint: signed mint data, an allowlist proof, or a sign-in. This holds even when the mint itself is a contract call. With many wallets, all those requests coming from one IP can get slowed down or blocked, and a wallet that does not get its data in time cannot mint.
- **Always needed** for the Instant key task: the app does not make an OpenSea Instant key without a proxy, because OpenSea allows only a few keys per IP.
- OpenSea drops worked from a single IP in our tests, so proxies are optional there.
- Social tasks use the proxy set on each account.

The more wallets you run, the more proxies you want. Test them with the site you will mint on first. The app's help recommends BirdProxies, StatProxies and Zesty.

## What we saw in our tests

Our own results from November 2026, to give you a feel for it. Yours can differ.

| What we tried | What happened |
|---|---|
| OpenSea, 400 wallets asking for mint data at the same time from one IP (Anonymous mode) | All 400 got an answer |
| Making Instant keys from one IP | 5 keys, then about 4 hours 50 minutes of waiting |
| Launchpads and projects' own sites | Not tested. Each site limits differently, so test with that site first |
