# App settings
The current settings sections are **General, Language, Integrations, Launch engine, Chains · RPC, License and Quick task setup**. A saved setting belongs to the app on this PC unless its description says otherwise.

## General and language
Adjust zoom, startup behavior, privacy and Windows notification preferences. Choose English, Korean or Simplified Chinese; the app remembers that choice locally. The app displays local times using Windows time-zone settings, not the Telegram bot's preference.

**Next update:** first submission, RPC acceptance and on-chain receipt notifications are separate options and default to off. Mint result categories remain separate.

## Integrations
OpenSea keys can serve signed mint data as well as supported market operations. Alchemy data endpoints are chain-specific and support relevant NFT/PnL queries. An Etherscan V2 key expands ABI lookup and is also required by the existing Stable NFT lookup route; this does not imply support for all Stable market features. Webhooks apply to the corresponding notification feature.

An API key is not universally required or universally unnecessary. Follow the feature's actual request and error message. App keys are not copied to the bot.

## Launch engine and Chains · RPC
Review gas defaults, broadcast settings, supported private submission options, visible chains and public RPC overrides. Do not treat every blank or zero field as “unlimited”; read that field's description. Auto gas does not automatically increase fees on a transaction already sent.

## License and quick setup
License controls manage app activation and device binding. Quick-task defaults help create new tasks; they do not automatically start them. Check the saved task before pressing Start.

Updates and data reset are different actions. A refresh is not a reset, and deleting local data is not a routine fix for a failed lookup.
