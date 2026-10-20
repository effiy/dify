---
title: '@dify/iconify-collections'
tags: []
category: 'packages'
created: '2026-10-20'
updated: '2026-10-20'
source: 'external'
type: 'index'
status: 'stable'
lifecycle: 'active'
---

💡 一、项目价值概述

# @dify/iconify-collections

Pre-generated Iconify collections for Dify custom SVG icons. The web app imports these collections from this package and renders icons with Tailwind CSS classes.

## Adding Custom SVG Icons

Add new SVG source files under one of these directories:

- `assets/public/...` for multi-color or public brand-like icons.
- `assets/vender/...` for UI vendor icons that should render with `currentColor`.

After adding or changing SVG files, regenerate the packaged collections:

```bash
pnpm --filter @dify/iconify-collections generate
```

Then run the dimension guard:

```bash
pnpm --filter @dify/iconify-collections check:dimensions
```

This protects existing icon groups with layout-sensitive intrinsic sizes, such as the `main-nav-*` icons that must remain `20x20` after collection flattening.

Commit both the SVG source files and the generated package files under `custom-public/` or `custom-vender/`.
Restart the web dev server after regenerating icons. Tailwind loads this plugin collection at startup, so an already-running dev server may not render newly-added `i-custom-*` classes until it restarts.

Use the generated icons through Tailwind icon classes in frontend code. For example:

```text
assets/vender/integrations/mcp.svg
```

becomes:

```tsx
<span aria-hidden className="i-custom-vender-integrations-mcp size-4" />
```

Custom vector icons flow through this package and are consumed as `i-custom-*` classes. Keep bitmap images (including SVGs embedding raster images) in their owning feature asset directory and render them as images.

When reviewing generated `icons.json` diffs, check that unrelated existing icon groups did not lose or change their intrinsic `width` and `height`. If a group is layout-sensitive, add it to `scripts/check-icon-dimensions.ts`.

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
