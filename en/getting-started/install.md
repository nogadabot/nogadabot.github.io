# Download and first launch

Nogada is a single program file, `nogada.exe`. There is no setup wizard: you download it and run it.

## From download to the main screen

1. Download `nogada.exe` with **Download the app**, either on the payment confirmation screen or on [My license](https://nogada-lic.duckdns.org/dashboard). Buying a key is covered in [License](license.md).
2. Double-click the file. Windows may show a blue warning because the program is new to it; click **More info**, then **Run anyway**.
3. The license screen comes up. Paste your key and click **Activate**. This first activation needs the internet.

When the menu shows on the left, you are in.

## Where files go

| What | Where | Note |
|---|---|---|
| `nogada.exe` | A folder you choose, for example `C:\Nogada` | A plain local folder works best. Synced folders such as OneDrive, and network drives, cause trouble. |
| Records (logs) | A `logs` folder made next to the exe | Move the exe around and a new `logs` folder appears at each place. |
| Wallets, tasks, settings | `%LOCALAPPDATA%\nogada` | Not next to the exe, so swapping in a newer exe keeps everything. |

## Things the app does by itself

- **Checks the license**: once 90 seconds after launch, then every 15 minutes. A brief internet drop changes nothing. Only when the server refuses the key (expired, suspended, bound to another PC) do you land back on the license screen.
- **Updates**: with **Force update on startup** on in **Settings → General → Updates**, a new version is installed right after the license check at launch and the app restarts. With it off, the app only tells you a new version is out.
- **Allows one copy**: if Nogada is already running, opening it again shows nothing new. Look for the window that is already open; it may be minimized or behind other windows.
- **Stops everything on close**: the X at the top right ends the app, not just the window. Running and scheduled tasks end with it.

The window cannot be made smaller than 1100 × 720.

## Running it on a VPS

If tasks must keep going while your own PC is off, rent a Windows computer that stays on (a VPS) and run Nogada there.

1. Connect to it with Remote Desktop (RDP).
2. Inside the remote screen, do "From download to the main screen" above.
3. A key works on one PC. If your home PC used it, first click **Reset device** on [My license](https://nogada-lic.duckdns.org/dashboard) (once every 24 hours).

Things to watch:

- The X on the Remote Desktop window only disconnects you; Nogada keeps going inside the VPS. Choosing sign out or restart inside the VPS ends that Windows session, and Nogada with it.
- Scheduled tasks fire by the VPS's own clock, so turn on Windows time sync there. A difference shown next to the clock in the app's status bar means that clock is off.
- Before giving the VPS back, take a [backup](../app/backup-and-data.md) and run **Settings → General → Wipe All Data**. Deleting only the exe leaves your wallets on its disk.

## If it does not open

See "The app does not open" in [When you are stuck](../help/when-stuck.md).
