# Add a custom chain

Add an EVM chain that is not in the built-in list. Use **Settings → Fire Engine → Add Custom Chain**.

## Adding

1. Paste a working RPC URL and click **Detect**.
2. The app calls `eth_chainId`, and looks up and fills in the info it knows.
3. Check the chain ID, the name, the native symbol, and the explorer (optional).
4. Add it.

The RPC URL, chain ID, name, and symbol are required. You cannot add the same chain ID twice. You can edit the RPC, name, symbol, and explorer later. You cannot edit the chain ID, so delete the chain and add it again.

> **Warning**: The app treats the native token as having 18 decimals. If detection finds a different value, it warns you. It still saves, but balances and amounts may be shown wrongly.

## What works on a custom chain

It appears in the pickers and uses the RPC and explorer you entered. The disperse contract, Multicall3, the NFT batch helper, the market and indexers, and chain-specific modules do not appear on their own.

Basic calls may work while some tools do not. Before a big task, test reading a balance and a small transaction first. For a competitive mint, put a dedicated RPC in the RPC menu.

Deleting a chain only removes the entry on this PC. Transactions already sent are not affected.
