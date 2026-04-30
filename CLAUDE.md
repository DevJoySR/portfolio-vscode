# CLAUDE.md — Conventions du projet portfolio-vscode

## Stack

- Next.js 16 (App Router), React 19, TypeScript 5
- Redux Toolkit 2 (gestion des onglets, explorer, sidebar)
- CSS custom (`vscode.css` + `portfolio.css`) + Tailwind v4 pour utilitaires
- Pas de Monaco Editor, pas de Fluent UI (dépendances supprimées)

## Architecture

src/
├── app/ # Next.js App Router
│ └── layout.tsx # Imports CSS globaux
├── components/
│ ├── vscode/ # Shell VSCode (layout, tabs, sidebar, statusbar)
│ └── editor-views/ # Vues contenu (AboutView, SkillsView, etc.)
│ └── CollapsableMenu/ # Explorer de fichiers (Explorer, ExplorerSection, ExplorerItem)
├── lib/redux/
│ ├── slices/explorerSlice.ts # EXPLORER_TREE + logique onglets
│ ├── store.ts
│ └── hooks.ts
└── styles/
├── vscode.css # Shell VSCode (:root tokens + classes vsc-\*)
└── portfolio.css # Vues portfolio (about-, pf-, sk-, resume-)

text

## Ajouter une vue

1. Créer `src/components/editor-views/MaVueView.tsx`
2. Ajouter le nœud dans `EXPLORER_TREE` (`explorerSlice.ts`)
3. Ajouter l'entrée dans `FILE_META` + le `case` dans `renderContent()` (`VSCodeEditor.tsx`)
4. Si la vue est dans un sous-dossier, ajouter dans `PARENT_FOLDER`
5. Ajouter les styles dans `portfolio.css`

## IDs fichiers — EXPLORER_TREE ↔ FILE_META (doivent toujours être synchronisés)

| id EXPLORER_TREE | label affiché   | Vue rendue   |
| ---------------- | --------------- | ------------ |
| about_me         | a_propos.ts     | AboutView    |
| skills           | competences.tsx | SkillsView   |
| projects         | projets.tsx     | ProjectsView |
| contact          | contact.tsx     | ContactView  |
| resume           | cv.pdf          | ResumeView   |

> ⚠️ Ne jamais ajouter un id dans FILE_META sans l'ajouter dans EXPLORER_TREE, et vice-versa.

## CSS — Règles hybrid Tailwind / Custom

**Tailwind** pour :

- Layout utilitaire dans le JSX (`flex`, `items-center`, `gap-2`, `overflow-hidden`)
- Espacements ponctuels non thémés (`mt-4`, `px-6`)

**CSS custom** (`vscode.css` / `portfolio.css`) pour :

- Tout ce qui utilise `var(--vsc-*)` ou `var(--omni-*)`
- Les classes `vsc-*` (shell VSCode)
- Les classes `pf-*`, `about-*`, `sk-*`, `resume-*` (vues portfolio)
- Les états (`.pf-filter-btn--active`, `.vsc-tab--active`)
- Les animations (`@keyframes`)

**Règle absolue** : ne jamais surcharger une propriété déjà définie en CSS custom avec une classe Tailwind sur le même élément.

## Préfixes CSS

| Préfixe   | Scope                    |
| --------- | ------------------------ |
| `vsc-`    | Shell VSCode             |
| `pf-`     | Vues portfolio (partagé) |
| `about-`  | AboutView uniquement     |
| `sk-`     | SkillsView uniquement    |
| `resume-` | ResumeView uniquement    |
