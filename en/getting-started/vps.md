# Windows VPS and remote access

A VPS is a remote computer that stays on in a data center. You do not need one. But in a heavily contested mint, latency decides your place in line, so many users use a VPS.

## Why is it faster?

Many RPC providers and launchpad servers are in the United States. If your home PC is in Asia, a request can take several hundred ms to reach the US. If you install Nogada on a VPS in the US, requests leave directly from the VPS, so the distance shrinks a lot.

Start by trying the US East, such as Northern Virginia or New York. It is not always the fastest. Each provider has different data centers and routes, so measure and then choose.

A slow remote screen from your home to the VPS has nothing to do with minting. What matters is the latency from the VPS to the launchpad and from the VPS to the RPC.

## Connect with Remote Desktop

1. Rent a Windows VPS with RDP in the region you want.
2. On your PC, open **Remote Desktop Connection**.
3. Enter the IP, user name, and password the provider gave you.
4. Inside the VPS, follow [Install and first run](install.md) as is.
5. Add your RPCs and test them, then set up the rest of your data.

A VPS is a separate PC. Files, app data, browser profiles, and the license activation do not sync with your home PC by themselves. One key is tied to only one PC, so every time you switch between the VPS and your home PC you must ask the operator for a device reset. See [License](license.md).

## Disconnect without closing the app

If you just close the remote window, the VPS and Nogada keep running. Scheduled tasks keep running even if you turn off your home PC.

Signing out, restarting, or shutting down also closes Nogada. So does a maintenance reboot by the provider.

## Checklist

- Keep Windows Update on, but pick a restart time that does not overlap an important mint.
- Turn off sleep and hibernate.
- Check that Windows time sync works. Scheduled firing uses this PC's clock.
- Leave headroom in CPU, memory, and disk.
- Use a strong, unique Windows password, and if possible allow RDP only from your own IP.
- Do not move wallet exports or API keys through the shared clipboard. Anyone who can get onto the desktop can operate the app.
- Make a Nogada backup before you delete the VPS.

## RPCs still matter

A good VPS region does not fix a slow or blocked RPC. Prepare several good RPCs and check them with the test in the RPC menu. Next is [Wallets](../setup/wallets.md).
