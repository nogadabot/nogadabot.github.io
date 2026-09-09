# RPC connections
RPC endpoints let the app query a chain and submit signed transactions. Open **Advanced → RPC**, create a group and import one URL per line.

Test **chain identity, recent blocks and successful responses**, not just latency. A failed check is different from an empty list. Keep the last saved data and retry when needed.

## Task selection
Check which chain each selected endpoint serves. A task with explicit endpoints respects that selection. If none are selected, the default pool depends on app settings and the chain's registered endpoints; do not assume it uses one particular provider.

The same signed transaction can be sent through multiple RPCs. This is not multiple new mints and does not automatically raise gas. RPC acceptance is separate from block inclusion.

App and bot RPC settings are independent. Configure bot RPCs in the bot's **Settings**. Check the item number before using its details, connection-test or delete controls.

RPC URLs can contain API credentials. Do not expose full URLs in public logs or screenshots. See [RPC resources](../resources/nodes.md).
