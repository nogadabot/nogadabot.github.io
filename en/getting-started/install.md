# Download and first launch

Nogada comes as an installer. It installs for your Windows account only, without administrator rights. The installed app is called **Nogada App**.

## From download to the main screen

1. Download the installer, `nogada-setup-<version>.exe`, with **Download the app**, either on the payment confirmation screen or on the key card of [My license](https://nogada.app/dashboard). The button shows only while the license is in its period. Buying a key is covered in [License](license.md).
2. Double-click the installer. Windows may show a blue warning because the program is new to it; click **More info**, then **Run anyway**. See [If Windows warns you](#if-windows-warns-you).
3. The installer is in English for everyone. Follow its steps. The install folder is `%LOCALAPPDATA%\Programs\Nogada App` unless you change it during the install.
4. Start the app with **Nogada App** on the desktop or in the Start menu.
5. The license screen comes up. Paste your key and click **Activate**. This first activation needs the internet.

When the menu shows on the left, you are in. The app starts in English; to change the language, go to **Settings → General → Language**.

### If Windows warns you

The installer is not signed with a code-signing certificate and Windows does not know it yet, so Microsoft Defender SmartScreen may stop it with a blue window that shows the publisher as unknown. This is expected for Nogada.

1. Click **More info** in that window.
2. Check that the app is `nogada-setup-<version>.exe`, then click **Run anyway**.

Run it only if you downloaded it with **Download the app** on the payment screen or on My license. If your antivirus removes the file, see "The app does not open" in [When you are stuck](../help/when-stuck.md).

## Where files go

| What | Where | Note |
|---|---|---|
| The program | The install folder (by default `%LOCALAPPDATA%\Programs\Nogada App`) | A plain local folder works best. Synced folders such as OneDrive, and network drives, cause trouble. |
| Records (logs) | A `logs` folder inside the install folder | It is made next to the program. |
| Wallets, tasks, settings | `%LOCALAPPDATA%\nogada` | Outside the install folder, so a new version or uninstalling the app keeps everything. |

## Installing again or uninstalling

- While the app is running, installing and uninstalling stop and ask you to close it. Close the app and try again.
- Installing again goes to the folder you picked the first time.
- Uninstalling **Nogada App** from the apps list in Windows Settings removes only the installed program files. The `logs` folder and `%LOCALAPPDATA%\nogada` (wallets, keys, tasks) stay. To remove the data from this PC too, use **Settings → General → Wipe All Data** in the app before uninstalling. → [Backup and data](../app/backup-and-data.md)

## Things the app does by itself

- **Checks the license**: once 90 seconds after launch, then every 15 minutes. A brief internet drop changes nothing. Only when the server refuses the key (expired, suspended, bound to another PC, or turned on at another place with the same device ID) do you land back on the license screen. → [License](license.md#one-key-one-pc)
- **Updates**: with **Force update on startup** on in **Settings → General → Updates**, a new version is installed right after the license check at launch and the app restarts. With it off, the app only tells you a new version is out.
- **Allows one copy**: if Nogada is already running, opening it again shows nothing new. Look for the window that is already open; it may be minimized or behind other windows.
- **Stops everything on close**: the X at the top right ends the app, not just the window. Running and scheduled tasks end with it.

The window cannot be made smaller than 1100 × 720.

## Running it on a VPS

If tasks must keep going while your own PC is off, rent a Windows computer that stays on (a VPS) and run Nogada there.

1. Connect to it with Remote Desktop (RDP).
2. Inside the remote screen, do "From download to the main screen" above.
3. A key works on one PC. If your home PC used it, first click **Reset device** on [My license](https://nogada.app/dashboard) (once every 24 hours).

Things to watch:

- The X on the Remote Desktop window only disconnects you; Nogada keeps going inside the VPS. Choosing sign out or restart inside the VPS ends that Windows session, and Nogada with it.
- Scheduled tasks fire by the VPS's own clock, so turn on Windows time sync there. A difference shown next to the clock in the app's status bar means that clock is off.
- Before giving the VPS back, take a [backup](../app/backup-and-data.md) and run **Settings → General → Wipe All Data**. Deleting only the app leaves your wallets on its disk.

## If it does not open

See "The app does not open" in [When you are stuck](../help/when-stuck.md).
