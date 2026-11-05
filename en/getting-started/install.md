# Install and first run

Nogada is a Windows app. You run it from a single `nogada.exe` file, with no installer. There is no background service either, so nothing runs after you close the app. Note that this includes scheduled tasks: they do not run while the app is closed.

## Steps

1. **Download.** Get `nogada.exe` from the link in your purchase instructions.
2. **Create a folder.** Create a fixed folder such as `C:\Nogada\` and put the file in it. Logs build up in a `logs` folder next to this file, so it is best not to leave the file on the desktop or in Downloads and move it later.
3. **Allow it in Windows.** If a blue SmartScreen window appears, click **More info → Run anyway**. If antivirus deletes the file, add this folder under **Windows Security → Virus & threat protection → Manage settings → Exclusions**.
4. **Run and activate.** Double-click `nogada.exe` to start it and enter your license key. See [License](license.md).

Activation needs an internet connection. The app checks your license again from time to time. A short outage is fine, but if the app cannot check for a long time, it returns to the license screen.

Social tasks and sites that need a browser require one of Chrome, Brave, or Edge.

## If nothing opens

It is usually one of these three.

- **Antivirus quarantined it.** Check the protection history in Windows Security.
- **It is on OneDrive or a network drive.** Move it to a local folder such as `C:\Nogada\`.
- **It is already running.** Only one copy of Nogada runs at a time. If you start a second one, it closes quietly. Check the taskbar.

If it still does not work, see [Troubleshooting](../reference/troubleshooting.md).
