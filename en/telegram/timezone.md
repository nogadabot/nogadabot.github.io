# Time zones and scheduling

Open **Settings → Time zone**. Choose a location such as Seoul or New York, or enter an IANA name such as `Asia/Seoul`.

- The setting belongs to your **Telegram private chat ID** and is stored in the server database.
- It survives bot and server restarts and does not change another user's setting.
- Changing the interface language preserves your time zone.
- The app uses Windows time. Changing the bot's time zone does not change the app or your PC.

Schedules are stored in UTC. Messages can show `UTC · local time · 5 min 20 sec remaining`. Remaining time is calculated when a message is generated or refreshed; an old message does not tick down every second.

Advanced inputs such as `at=16:59` use UTC as stated in the prompt. Local-time display does not silently change the input convention. Daylight saving follows the selected location's time-zone rules.

Saving a schedule does not start the task. Press the task's **Start** in advance to begin preparation.
