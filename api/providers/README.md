---
title: 'Providers'
tags: ['api']
category: 'api'
created: '2026-10-20'
updated: '2026-10-20'
source: 'external'
type: 'index'
status: 'stable'
lifecycle: 'active'
---

💡 一、项目价值概述

# Providers

This directory holds **optional workspace packages** that plug into Dify’s API core. Providers are responsible for implementing the interfaces and registering themselves to the API core. Provider mechanism allows building the software with selected set of providers so as to enhance the security and flexibility of distributions.

## Developing Providers

- [VDB Providers](vdb/README.md)

## Tests

Provider tests often live next to the package, e.g. `providers/<type>/<backend>/tests/unit_tests/`. Shared fixtures may live under `providers/` (e.g. `conftest.py`).

## Excluding Providers

In order to build with selected providers, use `--no-group vdb-all` and `--no-group trace-all` to disable default ones, then use `--group vdb-<provider>` and `--group trace-<provider>` to enable specific providers.

---

⚡ 二、功能特征

「待补充」

---

📊 三、关键指标

「待补充」

---

🏛️ 四、核心设计

「待补充」

---

📁 五、目录结构与文件约定

「待补充」

---

🔗 六、相关资源

「待补充」

---

🚀 快速开始

「待补充」

---

⚙️ 技术栈

「待补充」
