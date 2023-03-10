# 托管服务商的对比

在互联网上有许多不同的托管服务商，能够运行你的 bot。
但有时候很难跟踪它们的成本和性能。
这就是为什么 grammY 社区在这个页面收集并分享他们的经验。

## 什么是托管服务商？

为了每天 24 小时保持 bot 在线，你需要每天 24 小时运行一台电脑。
正如 [介绍中提到的](../guide/introduction.html#如何保持-bot-的运行)，你很可能不想在你的笔记本或家用电脑上做这件事。
相反，你可以请求一家公司来在云端运行你的 bot。

换句话说，你只是在别人的电脑上运行它。

## 对比表格

> 请点击页面底部的编辑按钮来添加更多提供商或编辑现有的提供商！

我们有两个对比表格：一个是 [serverless](#serverless) 托管，一个是 [VPS](#vps) 托管。

### Serverless

Serverless 意味着你不控制运行 bot 的单个机器。
相反，这些托管服务商会允许你上传你的代码，然后根据需要启动和停止不同的机器，以保证你的 bot 始终工作。

这有一个缺点，你的 bot 在默认情况下不能访问一个持久存储，比如本地文件系统。
如果你需要永久存储数据，你通常必须单独拥有一个数据库并连接到它。
因此，我们建议你为更复杂的 bot 使用 [VPS](./vps.md) 进行托管。

你需要知道的是，在 serverless 基础设施下，你必须使用 [webhooks](../guide/deployment-types.md)。

| 名字                   | 最低价格 | 价格                                                                                                       | 限制                                                                                    | Node.js | Deno                         | Web | 备注                                                                                             |
| ---------------------- | -------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------- | ---------------------------- | --- | ------------------------------------------------------------------------------------------------ |
| Deta                   | 免费     | 暂时没有付费计划                                                                                           | 没有特别的限制                                                                          | ✅      | ❓                           | ❓  |                                                                                                  |
| Deno Deploy            | 免费     | $10/月的订阅，包含 5M req 和 100 GB 网络流量; $2/1M req, $0.3/GB 网络流量                                  | [100K req/day, 100 GB/mo, 10 ms CPU-time limit](https://deno.com/deploy/pricing)        | ❌      | ✅                           | ❌  |                                                                                                  |
| Fly                    | 免费     | $1.94/月订阅，包含一个共享 CPU 和 256 MB 内存, $0.02/GB 网络流量                                           | [3 shared-cpu-1x 256mb VMs, 160GB/mo, 3GB storage](https://fly.io/docs/about/pricing/)  | ✅      | ✅                           | ❓  |                                                                                                  |
| DigitalOcean Functions | 免费     | $1.85/100K GB-s                                                                                            | [90K GB-s/mo](https://docs.digitalocean.com/products/functions/details/pricing/)        | ✅      | ❌                           | ❓  |                                                                                                  |
| Cloudflare Workers     | 免费     | $5/10M req                                                                                                 | [100K req/day, 10 ms CPU-time limit](https://workers.cloudflare.com/)                   | ❌      | [✅](https://denoflare.dev/) | ✅  |                                                                                                  |
| Vercel                 | 免费     | $20/月的订阅                                                                                               | [Unlimited invocations, 100 GB-h, 10 s time limit](https://vercel.com/pricing)          | ❓      | ❓                           | ❓  | 不适用于非网站建设？                                                                             |
| Scaleway Functions     | 免费     | €0.15/1M req, €1.2/100K GB-s                                                                               | [1M requests, 400K GB-s/mo](https://www.scaleway.com/en/pricing/#serverless-functions)  | ❓      | ❓                           | ❓  |                                                                                                  |
| Scaleway Containers    | 免费     | €0.10/100K GB-s, €1.0/100K vCPU-s                                                                          | [400K GB-s, 200K vCPU-s/mo](https://www.scaleway.com/en/pricing/#serverless-containers) | ❓      | ❓                           | ❓  |                                                                                                  |
| Vercel Edge Functions  | 免费     | $20/月的订阅, 包含 500K 请求                                                                               | [100K req/day](https://vercel.com/pricing)                                              | ❓      | ❓                           | ❓  |                                                                                                  |
| serverless.com         | Free     |                                                                                                            |                                                                                         | ❓      | ❓                           | ❓  |                                                                                                  |
| Heroku                 | $5       | $5 for 1,000 [dyno hours](https://devcenter.heroku.com/articles/usage-and-billing#dyno-usage-and-costs)/mo | [512MB RAM, 30分钟不活跃后休眠](https://www.heroku.com/pricing)                         | ✅      | ✅                           | ❓  | Deno is supported by a [third-party buildpack](https://github.com/chibat/heroku-buildpack-deno). |
| DigitalOcean Apps      | $5       |                                                                                                            |                                                                                         | ❓      | ❓                           | ❓  | 未测试                                                                                           |
| Fastly Compute@Edge    |          |                                                                                                            |                                                                                         | ❓      | ❓                           | ❓  |                                                                                                  |

### VPS

虚拟私人服务器是一个你拥有完全控制权限的虚拟机器。
你通常可以通过 [SSH](https://en.wikipedia.org/wiki/Secure_Shell) 访问它。
你可以在里面安装任何软件，并且由你自己负责系统升级和其他事情。

在 VPS 上，你可以使用轮询或者 webhooks 来运行 bot。

请查看 [教程](./vps.md) 来了解如何在 VPS 上运行 grammY bot。

| 名字          | 最低价格 | 到 Bot API 的延迟                         | 最便宜的方案                       |
| ------------- | -------- | ----------------------------------------- | ---------------------------------- |
| Contabo       |          | 15 ms :de: Nuremberg                      |                                    |
| DigitalOcean  | $5       | 1-15 ms :netherlands: AMS, 19 ms :de: FRA | 1 vCPU, 1 GB RAM, 25 GB SSD, 1 TB  |
| Hetzner Cloud | €4.15    | ~42 ms :de:                               | 1 vCPU, 2 GB RAM, 20 GB SSD, 20 TB |
| IONOS VPS     | €1 or $2 | 15 ms :de: Baden-Baden                    | 1 vCPU, 0.5 GB RAM, 8 GB SSD       |
| Scaleway      | €~7      |                                           | 2 cores, 2 GB RAM, 20 GB SSD       |

## 单位解释

### 基本单位

| 单位 | 文字化表达 | 解释                                         |
| ---- | ---------- | -------------------------------------------- |
| K    | 千         | 1,000 个 X 东西。                            |
| M    | 百万       | 1,000,000 个 X 东西。                        |
| €    | 欧元       | 货币欧元。                                   |
| $    | 美元       | 货币美元。                                   |
| req  | 请求       | HTTP 请求的数量。                            |
| vCPU | 虚拟 CPU   | 一个虚拟 CPU 的计算能力，是真实 CPU 的一部分 |
| ms   | 毫秒       | 0.001 秒。                                   |
| s    | 秒         | 1 秒 (时间的国际单位).                       |
| min  | 分钟       | 1 分钟，60 秒。                              |
| h    | 小时       | 1小时，60分钟。                              |
| day  | 天         | 1 天，24 小时。                              |
| mo   | 月         | 1 个月，大概 30 天。                         |
| GB   | 千兆字节   | 1,000,000,000 字节的储存量。                 |

### 单位组合示例

| 单位        | 数量         | 文字化表达              | 解释                                |
| ----------- | ------------ | ----------------------- | ----------------------------------- |
| $/mo        | 费用         | 每月美元数              | 每月费用。                          |
| €/M req     | 费用         | 每百万次请求欧元数      | 处理 100 万次请求的费用。           |
| req/min     | 吞吐量       | 每分钟请求数            | 1 分钟内处理的请求数。              |
| GB/s        | 吞吐量       | 每秒千兆字节            | 1 秒内传输的千兆字节数。            |
| GB-s        | 内存用量     | 千兆字节秒              | 1 秒钟能使用的千兆字节数。          |
| GB-h        | 内存用量     | 千兆字节小时            | 1 小时能使用的千兆字节数。          |
| h/mo        | 时间分量     | 每月小时数              | 一个月内的小时数。                  |
| K vCPU-s/mo | 处理时间分量 | 每月 1000 次虚拟CPU秒数 | 每月用一个虚拟 CPU 的处理时间的秒数 |