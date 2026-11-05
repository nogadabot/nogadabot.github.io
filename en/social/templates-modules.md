# Answer templates and social modules

Answer templates give each account a different answer. Social modules set the submission flow for each site. You can use them together, but they are different features.

## Answer templates

1. In **Settings → Key Templates → Custom Templates**, click **Add Template**.
2. Pick a lowercase name such as `punkanswer` and put one answer per line.
3. Use `{punkanswer}` in the text field of a Google Form or a social module.

When you create the task, the app replaces it with one answer per account.

- **Random**: Shuffles the answers to fit the account group.
- **Order**: Hands them out one by one from the top.

Answers repeat only when there are more accounts than answers. The same group, the same name, and the same account position give the same answer. If you remove an account from the middle of a group, the positions and answers of the accounts after it change.

A name starts with a letter and uses only lowercase letters, digits, and underscores. It cannot overlap with another template or with a built-in name such as `{wallet}`, `{xhandle}`, `{xtweet}`, `{discordhandle}`, `{gmail}`, or `{random:…}`.

A template turns into answers when you create a task. If you edit the template later, tasks you already made do not change. To use the new answers, create the task again.

## Social modules

Start from **Tasks → Modules**. The module locks the target flow, picks the `http` or `browser` engine, and shows only the fields it supports. Pick an account group and fill in the fields, then pick a captcha solver if the module requires one.

Modules are reviewed and uploaded by the operator. This is not a feature for pasting code into the app. The ordinary **New Social Task** is not the place to pick a module.

Each row uses that account's values, proxy, and browser profile. If a value or a solver setting is missing, the app does not switch to another account. Only that row is skipped or fails.
