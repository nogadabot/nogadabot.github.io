# Choosing a proxy

A proxy is not a required purchase. Direct contract minting usually has a shorter path without one. Consider proxies only when many wallets call a signed/voucher API at once or when you intentionally require a specific egress route.

## Check before choosing

* It can reach the target-chain RPCs and required API domains.
* Latency and failure rate are stable in the app's **Test all** result.
* Region, concurrent connections, traffic limits, and authentication fit your use.
* Its failure behavior matches the task's fail-closed route policy; Nogada will not silently switch to direct.

Format:

```text
host:port:username:password
```

Providers, pricing, and terms change frequently. Check current reputation and refund terms, then test a small amount before committing.
