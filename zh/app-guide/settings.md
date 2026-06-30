# 设置 (Settings)

这是用于配置应用行为和 API 密钥的页面。左侧共有 **7 个标签**。

![settings](../images/settings.png)

![设置详情](../images/settings-detail.png)

> 🔍 *放大：左侧切换分类，**语言**、**集成**（API·Telegram）、网络等。*

## 常规 (General)

* **界面缩放**：将整体 UI 缩放至 70~140%（保存在本机）。
* **开机自启**：Windows 登录时以最小化状态自动运行 Nogada（后台运行机器人/通知）。
* **浏览器扩展**：将 Nogada Capture 扩展与应用连接（已检测到的浏览器：Chrome/Edge）。
* **日志**：打开任务和引擎输出的记录文件夹（出现问题时查阅）。
* **检查/应用更新** · **数据重置（恢复出厂设置）**：请谨慎操作。

## 语言 (Language)

* **English / 한국어 / 简体中文** 切换。点击后整个应用立即切换语言。

## 集成 (Integrations)：API 密钥

> 这些密钥均为**可选**。**铸造本身无需任何密钥。** 每个密钥用于开启额外功能。

| 密钥 | 用途 | 获取地址 |
|---|---|---|
| **OpenSea API 密钥**（≤5） | 挂单状态·最优报价·挂单/接受 | docs.opensea.io |
| **Alchemy URL**（按链） | NFT 持有列表·盈亏（PnL） | [alchemy.com](https://www.alchemy.com) |
| **Etherscan 密钥** | 导入 ABI·浏览器查询 | [etherscan.io](https://etherscan.io) |
| **验证码密钥**（CapMonster/CapSolver/2captcha） | 自动解验证码（仅需要时使用） | 各服务商 |
| **Discord Webhook** | 将铸造成功/失败通知发送至 Discord | Discord 频道设置 |

详细链接 → [资源](../resources/nodes.md)

## 引擎 (Engine)：铸造行为

* **Gas**：自动 Tip 倍数（×）、最低优先级（gwei 下限）。
* **Flashbots**：Bundle 开/关、window/priority/max、reputation 密钥（复制/重置）。
* **连发安全时限（秒）**：连发铸造时的安全时间（留空则关闭）。
* **多 RPC 广播**：同时向多个 RPC 发送交易（提升速度）。

## 网络 (Network)

* **按链覆盖公共 RPC**：将默认公共 RPC 替换为自定义 RPC。
* **显示/隐藏链**：将不使用的链从列表中隐藏。

## 许可证 (License)

* **激活 / 停用（解绑设备）**：更换电脑时，在此解绑后在新电脑上重新激活。
* **HWID**：本设备的唯一标识符（可复制）。

## 快速发射 (Quick Fire)

* **快速任务钱包 / RPC**：预先指定用于快速铸造（如实时铸造）的默认钱包和 RPC。
