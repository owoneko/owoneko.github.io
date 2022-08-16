---
title: secondary dns 配置
date: 2022-08-16 10:10:38
tags: Technology
---

为了提高dns服务器的可靠性，博主采用了不同的dns提供方来解析本域名。主dns服务器为luadns，从dns服务器为he.net。
下面来简要概括一下配置方案：
首先，在域名注册商那里把域名解析服务器地址设置为主dns服务器的地址加上从dns服务器的地址，然后在主dns服务器提
供商处添加新的NS记录，具体值为从dns服务器地址。接下来转到从dns服务器提供商处添加待配置从dns服务器的域名和主
dns服务器地址，并记录允许区域转移的ip地址，最后回到主dns服务器提供商处添加新的SLAVE记录，值为所记录的ip地址，
待从dns提供方验证完成即可。配置dnssec步骤相对繁琐，附dns评分地址：https://dnsspy.io 。 可见本博客评分为A+。
