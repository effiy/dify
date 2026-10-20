---
title: 'Skills'
tags: ['web']
category: 'web'
created: '2026-10-20'
updated: '2026-10-20'
source: 'external'
type: 'index'
status: 'stable'
lifecycle: 'active'
---

# Skills

Workspace Skill management, including the list, file editing, publishing, and version restoration.

Routes enter through `page.tsx` for the list and `detail-page.tsx` for a Skill's detail. Navigation uses `permissions.ts` for visibility; Agent V2 consumes the shared Skill error handling from `error.ts`.

File editing, draft coordination, publishing, and version UI remain internal to `detail/`.
