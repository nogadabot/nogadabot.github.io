# Supply Watch

Open **Supply Watch** and add the chain and NFT contract. The bot checks supply periodically on the server. This list is separate from the app's watchlist; neither list is copied to the other.

Supply Watch v2 reports:

- An increase of at least 100 since the previous increase notification
- Reaching 50, 70, 80, 90, 95 or 100% of a known maximum supply
- A marked increase in minting rate between consecutive observations

Supply changes and rates are calculated from observation intervals. If maximum supply is unknown, no percentage is invented. Repeated threshold and acceleration alerts are limited, so the same notice is not sent on every check.

**Increasing supply is not proof that a mint has opened.** Supply Watch never presses Start or automatically runs a minting task. Set up any minting schedule separately.

The app's watchlist runs while the app is open. Telegram watches run on the server. Muting notifications does not delete a watch.
