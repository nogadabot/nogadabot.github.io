# Proxies
A proxy routes requests through a network path you choose. It is not required for every mint and can add latency.

Open **Advanced → Proxies**, create a group and import a supported format, such as:

```text
host:port:username:password
```

Use the group test and host filter after import. Check the displayed scope before deleting entries or clearing a group.

If a task specifies a proxy group, verify that the required RPC and mint-data services work through that route. A failed explicit route must not be silently replaced with a direct connection and reported as successful.

Do not share proxy passwords in messages, images or logs. App and bot proxies are managed separately. See [Proxy resources](../resources/proxies.md).
