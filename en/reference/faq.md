# FAQ

## Which chains are supported?

Ethereum and major EVM chains. See [Supported chains](chains.md). For an EVM chain that is not in the list, you can [add it yourself](custom-chains.md). Solana and Bitcoin are not supported.

## Does it work on a Mac?

No. It is a Windows app. On a Mac, you can use a [Windows VPS](../getting-started/vps.md).

## Is my wallet safe?

Private keys are stored encrypted on this PC with Windows DPAPI and never go to a server. Even so, use small-balance wallets for minting. [Security and privacy](security.md)

## Do I have to prepare RPCs?

No. The app runs on the built-in public RPCs even if you add none. But public RPCs get blocked easily, so for a competitive mint paid RPCs are recommended. [RPC providers](../resources/nodes.md)

## Do I need proxies, API keys, and captcha keys?

Not for minting itself. Proxies are for site requests with many wallets, an OpenSea key is for Viewer buying, the Mint Calendar, and API-mode minting, and a captcha key is for social modules that have a captcha.

## How do I buy a license?

Pay on the operator's sales page and the key arrives by email. [License](../getting-started/license.md)

## Can I use it on several PCs?

One key is tied to one PC. When you move, ask the operator for a device reset.

## Do tasks run if I turn off the app?

No. The app has to be running. To keep it running, use a [Windows VPS](../getting-started/vps.md).

## Is minting success guaranteed?

No. It depends on gas, RPC speed, competition, and the project's state. The better you prepare, the better your chances.

## Why doesn't it stop firing when a wallet is not eligible or short of balance?

Eligibility and balance information is for reference. There are variables the app cannot know (a whitelist addition at the last minute, a sudden open, and so on). The network makes the final call.

## Can I get a refund?

We can help only when the app cannot be installed at all. Mint results are not eligible for a refund.
