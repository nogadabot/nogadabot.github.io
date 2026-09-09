# Nogada 使用指南

Nogada 提供用于 EVM NFT 铸造的 **Windows 应用**和**独立运行的 Telegram 机器人**。应用在你的电脑上运行，机器人在服务器上运行。

| 项目 | Windows 应用 | Telegram 机器人 |
|---|---|---|
| 钱包、任务、RPC 和代理 | 在这台电脑的应用中设置 | 在机器人中单独设置 |
| 钱包私钥 | 使用 Windows DPAPI 在本地加密保存 | 在服务器上加密保存 |
| 时区 | 使用电脑的 Windows 时区 | 按私人聊天设置，并保存在服务器上 |
| 持续运行 | 需要保持应用和电脑运行 | 不依赖应用是否开启 |

两个产品可以使用同一个钱包地址，但钱包、任务、nonce 和设置不会自动同步。

## 按需要查阅

- 首次安装应用：[下载](getting-started/download.md) → [激活](getting-started/license.md) → [初始设置](getting-started/first-setup.md)
- 准备铸造：[Smart Mint](minting/smart-mint.md) → [任务与 Start](app-guide/tasks.md) → [查看结果](app-guide/results.md)
- 不安装应用，直接使用机器人：[Telegram 入门](telegram/telegram-bot.md)
- 处理失败或刷新异常：[故障排查](help/troubleshooting.md)

## 适用版本

本指南以公开版本 **v0.9.43** 为基础。标注为 **下次更新** 的内容已完成开发、正在验证，尚未加入公开版本的应用或机器人。如果找不到某个按钮，请先检查应用版本和[更新记录](changelog.md)。

普通菜单中已隐藏 Drops。供应量监测是独立的观察工具，不会自动开始铸造。请根据实际链、铸造阶段和界面提示操作，不要推定某项功能已经支持。
