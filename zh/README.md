---
description: Nogada，EVM NFT 铸造机器人。快速、安全、易用的桌面应用。
---

# Nogada 简介

**Nogada** 是一款专为在以太坊及主要 L2 链上快速铸造 NFT 而设计的 **Windows 桌面应用**。您可以同时用多个钱包进行铸造、精确控制 Gas，并在同一界面完成资金管理、盈亏追踪以及 Telegram 远程控制。

> 💡 第一次使用？只需跟着以下 3 个步骤即可立即开始 → [安装](getting-started/installation.md) → [激活许可证](getting-started/license.md) → [初始设置](getting-started/first-setup.md)

## 能做什么？

* **多钱包铸造**：同时用数十乃至数百个钱包进行铸造
* **Gas 精确控制**：自动（Auto）或手动（Custom）Gas 设置 + 实时 Gas 计算器
* **市场联动**：支持 OpenSea / Seaport / Transient（发射台）铸造
* **资金管理**：从单个钱包向多个钱包分发（Disperse），也可重新归集（Consolidate）
* **盈亏（PnL）追踪**：以卡片图片形式清晰呈现铸造成本与收益
* **Telegram 机器人**：即使关闭应用，也能通过 Telegram 全天 24 小时管理铸造与钱包
* **自动更新**：有新版本时应用会自动升级

## 支持的链

支持以太坊主网（L1）及主要 L2/EVM 链：

> **Ethereum · Arbitrum · Optimism · Base · Polygon · BNB Chain · Avalanche · Linea · Abstract · Zora · Blast · Scroll** 等（+ 测试网 Sepolia）

如果所需链不在列表中，还可以添加**自定义 EVM 链**。

## 🔐 我的钱包安全吗？

**私钥永远不会离开您的电脑。**

* 导入钱包的私钥通过 **Windows DPAPI 加密，仅存储在您的电脑上**。
* 我们的服务器**既不存储也不接收私钥。** 只有您电脑上的 Nogada 应用才能解密私钥并为铸造交易签名。
* 铸造、钱包等核心功能**全部在您的电脑上**运行。（服务器仅用于许可证验证、更新及 Telegram 机器人。）

> ⚠️ **但在 web3 领域不存在 100% 的安全。** 请将大额资产保存在从未连接过任何 dApp 的**金库（vault）钱包**中，铸造和活动时请始终使用**一次性（小额）钱包**。这是最佳实践。

详情 → [安全与安全须知](help/security.md)

## 需要帮助？

* ❓ [常见问题（FAQ）](help/faq.md)
* 🔧 [故障排查](help/troubleshooting.md)
* 🤖 [Telegram 机器人](telegram/telegram-bot.md)
