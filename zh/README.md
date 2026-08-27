---
description: Nogada，EVM NFT 铸造机器人。快速、安全、易用的桌面应用。
---

# Nogada 简介

**Nogada** 提供用于以太坊及主要 L2 链快速铸造 NFT 的 **Windows 桌面应用**和独立运行的 **Telegram 机器人**。两者分别使用自己的钱包、任务、RPC 与代理，互不控制，也不同步。

> 💡 第一次使用？只需跟着以下 3 个步骤即可立即开始 → [安装](getting-started/installation.md) → [激活许可证](getting-started/license.md) → [初始设置](getting-started/first-setup.md)

## 能做什么？

* **多钱包铸造**：同时用数十乃至数百个钱包进行铸造
* **Gas 精确控制**：自动（Auto）或手动（Custom）Gas 设置 + 实时 Gas 计算器
* **市场联动**：支持 OpenSea / Seaport / Transient（发射台）铸造
* **资金管理**：从单个钱包向多个钱包分发（Disperse），也可重新归集（Consolidate）
* **盈亏（PnL）追踪**：以卡片图片形式清晰呈现铸造成本与收益
* **Telegram 机器人**：无需安装或连接应用，使用机器人专用钱包与任务进行 24 小时铸造
* **自动更新**：有新版本时应用会自动升级

## 支持的链

支持以太坊主网（L1）及主要 L2/EVM 链：

> **Ethereum · Arbitrum · Optimism · Base · Polygon · BNB Chain · Avalanche · Linea · Abstract · Zora · Blast · Scroll** 等（+ 测试网 Sepolia）

如果所需链不在列表中，还可以添加**自定义 EVM 链**。

## 🔐 我的钱包安全吗？

**桌面应用钱包的私钥不会离开您的电脑。**

* 桌面应用钱包的私钥通过 **Windows DPAPI 加密，仅存储在您的电脑上**。
* 许可证与更新服务不会接收或存储桌面应用钱包密钥。只有您电脑上的 Nogada 应用才能解密密钥并为铸造交易签名。
* 独立 Telegram 机器人使用单独的机器人钱包。机器人钱包密钥会加密托管在服务器上以便全天候签名，且不会与桌面应用钱包同步。
* 铸造、钱包等桌面应用核心功能**全部在您的电脑上**运行。

> ⚠️ **但在 web3 领域不存在 100% 的安全。** 请将大额资产保存在从未连接过任何 dApp 的**金库（vault）钱包**中，铸造和活动时请始终使用**一次性（小额）钱包**。这是最佳实践。

详情 → [安全与安全须知](help/security.md)

## 需要帮助？

* ❓ [常见问题（FAQ）](help/faq.md)
* 🔧 [故障排查](help/troubleshooting.md)
* 🤖 [Telegram 机器人](telegram/telegram-bot.md)
