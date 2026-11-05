# Proxies

Sites and launchpads put request limits on their APIs. Proxies spread your requests over many IPs and ease those limits.

![proxies](../images/proxies.png)

## Adding proxies

1. Create a group with **+ New Group**. Splitting by provider or type makes them easier to manage.
2. Click **Add Proxies** and paste one per line. Lines that start with `#` are ignored.
3. Invalid lines are reported separately.
4. Check the connection and latency with **Test All**. Adding alone does not test.

### Accepted formats

| Format | Example |
| --- | --- |
| Host and port | `192.0.2.10:8080` |
| URL without auth | `http://192.0.2.10:8080` |
| Auth after the host | `192.0.2.10:8080:user:pass` |
| Auth before the host | `user:pass@192.0.2.11:8080` |
| URL with auth | `https://user:pass@192.0.2.12:8443` |

If you leave out the protocol, it is treated as `http`. SOCKS is not accepted.

## Where they are used

- **Onchain tasks**: Pick a proxy group on the task when you have many wallets on a site with tight request limits.
- **Social tasks**: When a module needs it, attach one proxy to each [account](accounts.md).
- **Whitelist checker**: In **Settings → Fire Engine**, you can send checker requests through a proxy group.

RPC calls do not go through proxies.

## Storage and testing

Proxies are saved encrypted in `%LOCALAPPDATA%\nogada\data\proxies.dat`. If a test fails, the proxy is not removed from the list. It is only marked. You can test it again later. If you enter a site such as `opensea.io` in the **Test URL** field, you can see whether the proxy reaches that site.

To learn how to choose proxies, see [Choosing proxies](../resources/proxies.md).
