# AGENTS.md

## Role

`next-front` is the matching app Web UI. Business rules live in API Domain; this app handles screens, input, and BFF calls to `onion-hono-sample`.

Design reference: [Next.jsの考え方](https://zenn.dev/akfm/books/nextjs-basic-principle). Repo overview: `../README.md`.

## Next.js 16

Read `node_modules/next/dist/docs/` before framework-specific code. Default to Server Components. Add `"use client"` only for events, browser APIs, hooks, or client-only providers. `params`, `cookies()`, etc. are async.

## Directory rules

- `src/app/<route>/page.tsx` — compose containers only.
- `src/app/<route>/_containers/<block-name>/` — kebab-case UI block (`login-form`, `member-list`).
- Required per container: `index.tsx` (export Container only), `container.tsx`, `presentational.tsx`.
- Private colocation: `actions.ts`, `schemas.ts`, `form.tsx`, etc. Import containers via `index.tsx` only.
- `src/shared/api` — server-only HTTP transport.
- `src/shared/dal` — authorized data access (`getCurrentMemberId`, `findMembers`, …).
- `src/shared/ui` — reusable presentational pieces.
- `src/shared/store` — Zustand for UI state only (providers as deep as possible).

## Patterns

- **Container** (`{Block}Container`): Server Component; fetches via DAL, passes props.
- **Presentation** (`{Block}Presentation`): renders props; may import Client leaves.
- **Mutations**: Server Actions + `revalidatePath()` / `redirect()`. No TanStack Query.
- **Forms**: Conform + Zod v3 (`@conform-to/zod` compatibility).
- **Auth**: URL 保護は `src/middleware.ts`（`/login`, `/register` は除外）。会員 ID が必要な処理は `getCurrentMemberId()`。Cookie set/delete は Server Actions のみ。
- **Errors**: unpredictable → `error.tsx`; validation → `submission.reply()`, do not throw.

## Boundaries

- Do not duplicate API Domain rules. Do not use `as any`.
- Mark server-only modules with `server-only`. Keep client props serializable.
- Avoid unrelated refactors or speculative features.

## Verification

- `bun run lint` and `bun run build` after meaningful changes.
- Commands: `package.json`.
