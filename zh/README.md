---
description: Nogada 是一款 Windows 桌面应用，在一个应用里完成 NFT 铸造以及铸造之后的事。
---

# Nogada 简介

Nogada 是 Windows 桌面应用。你可以用多个钱包铸造 NFT，管理已铸造的 NFT，查看市场，还能处理社交任务，全部在一个地方完成。安装之前，花 2 分钟读一下。

应用做的事主要有两类。

- **链上**：在多个 EVM 链上铸造、执行交易、转移 NFT 和资金，钱包数量不限。
- **链下**：用多个账户处理 Google 表单、X、Discord、白名单申请等社交任务。

此外还有 NFT 管理、盈亏卡片、市场图表、铸造日历、早期项目、Drop 发现、Gas 计算器和浏览器捕获扩展。

## 菜单一览

左侧菜单分为四组。

| 分组 | 菜单 | 用途 |
| --- | --- | --- |
| 铸造 | [仪表盘](market/dashboard.md) | 查看当前市场和早期项目 |
| | [智能铸造](tasks/smart-mint.md) | 只要填入链接，就能找到铸造路径并创建任务 |
| | [任务](tasks/overview.md) | 创建并运行铸造任务和社交任务 |
| | [早期项目](market/early-calls.md) | 运营者挑选的、尚未铸造的项目 |
| | [发现](market/discovery.md) | 扫描新上线的 Drop |
| 资产 | [钱包](setup/wallets.md) | 创建、导入钱包并转移资金 |
| | [账户](setup/accounts.md) | 社交任务使用的 Google、X、Discord 账户 |
| | [NFT](tools/nfts.md) | 持仓 NFT、盈亏和查看器 |
| | [市场](market/market.md) | 系列行情、图表、提醒和铸造日历 |
| 连接 | [RPC](setup/rpc.md) | 通往链的通道，所有链上任务都经过这里 |
| | [代理](setup/proxies.md) | 把网站请求分散到不同 IP |
| | [OS API](setup/opensea-api.md) | 管理 OpenSea API 密钥 |
| | [白名单](tools/whitelists.md) | 检查并保存钱包的资格 |
| | [合约](tools/contracts.md) | 管理 EIP-7702 捆绑器和钱包委托 |
| 工具 | [计算器](tools/calculator.md) | Unix 时间转换和 Gas 费用计算 |
| | [设置](setup/settings.md) | 语言、密钥、发射引擎和链设置 |

## 我的钱包安全吗

钱包私钥只保存在这台电脑上，并用 Windows DPAPI 加密。许可证服务器和市场服务器都不会接收私钥。签名始终在这台电脑上完成。详情见[安全与隐私](reference/security.md)。

即便如此，铸造也请用小额钱包，大额资产放在没有接入应用的钱包里。

## 从哪里开始看

第一次使用，按下面的顺序看即可。

1. [安装与首次运行](getting-started/install.md)
2. [许可证](getting-started/license.md)
3. [前 5 分钟设置](getting-started/first-setup.md)
4. [智能铸造](tasks/smart-mint.md)

遇到问题，请看[故障排查](reference/troubleshooting.md)和[常见问题](reference/faq.md)。
