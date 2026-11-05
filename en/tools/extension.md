# Capture extension

Nogada Capture is an extension for Chrome and Edge. It captures calls from an explorer or a mint site and hands them to the app through the `nogada-v1://` protocol.

## Install

1. In **Settings → Integrations → Nogada Capture Browser Extension**, click **Download Extension**.
2. Extract the archive into a fixed folder.
3. Open `chrome://extensions` or `edge://extensions`.
4. Turn on **Developer mode**.
5. Pick that folder with **Load unpacked**.

Start Nogada once before you use it. It registers the protocol when it starts.

## What it captures

| Type | What is sent to the app |
| --- | --- |
| Hex | The target, the call data, the amount, and the source URL |
| Function | The contract, the function name and signature, the visible parameters, and the amount |

Hex opens the task window in Hex mode. A function builds the ABI for that function and opens the window in Function mode. Fill in any missing parameters, then save.

Fees are not sent. To prevent unit mistakes, the window starts with the app's defaults or automatic values.

## How it opens

If Nogada is running, the task window opens in the open app window. If it is not running, Windows starts the app, and the app uses the values it received.

## Privacy and safety

- The extension does not sign transactions.
- It does not skip wallet approval.
- It keeps the last capture only in browser storage.
- It talks to the app only through `nogada-v1://` addresses.

## Troubleshooting

- **Nothing happens when I click.** Start Nogada yourself once and try again. If you moved the app, click **Re-register protocol handler**.
- **Some parameters are empty.** The extension reads only the values visible on the page. Fill them in on the task window.
- **The gas fields are empty.** This is normal. The app's task settings decide the gas.
