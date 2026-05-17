# recept.tammergard.se

Filip & Ida Tammergårds receptsamling 😋

## Utveckling

```sh
pnpm install
pnpm dev
```

Bygg och förhandsgranska produktionsbygget:

```sh
pnpm build
pnpm preview
```

## Lägga till ett recept

Skapa en ny `.md`-fil i [src/content/recipes/](src/content/recipes/). Filnamnet blir URL-slug. Frontmatter:

```yaml
---
title: Receptets namn
description: Kort beskrivning som visas i listan och i metadata.
minutes: 60
category: Huvudrätt # Huvudrätt | Efterrätt | Bröd | Frukost | Dryck
source: https://example.com/inspiration # frivillig
---
```

Schemat valideras av [src/content.config.ts](src/content.config.ts) — bygget kraschar om något fält saknas eller är fel typ.
