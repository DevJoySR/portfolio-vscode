# CLAUDE.md — Conventions du projet portfolio-vscode

## Stack

- Next.js 16 (App Router), React 19, TypeScript 5
- Redux Toolkit (state: onglets, explorer, sidebar)
- CSS custom (`src/styles/vscode.css`) + Tailwind v4 pour les utilitaires

## Architecture

- `src/components/vscode/` : shell VSCode (layout, tabs, sidebar, statusbar)
- `src/components/editor-views/` : vues contenu (AboutView, SkillsView, etc.)
- `src/lib/redux/slices/explorerSlice.ts` : EXPLORER_TREE + logique onglets

## Ajouter une vue

1. Créer `src/components/editor-views/MaVueView.tsx`
2. Ajouter le nœud dans `EXPLORER_TREE` (explorerSlice.ts)
3. Ajouter l'entrée dans `FILE_META` + le `case` dans `renderContent()` (VSCodeEditor.tsx)
4. Si la vue est dans un sous-dossier, ajouter dans `PARENT_FOLDER`

## Conventions CSS

- Préfixe `vsc-` : composants shell VSCode
- Préfixe `pf-` : vues portfolio (About, Contact, Projects, Skills)
- Variables CSS racine dans `vscode.css` (`--vsc-bg`, `--vsc-accent`, etc.)
- Les @media queries doivent être au plus proche du composant concerné

## IDs des fichiers (EXPLORER_TREE ↔ FILE_META doivent être synchronisés)

| id Explorer | label affiché   | Vue rendue   |
| ----------- | --------------- | ------------ |
| about_me    | a_propos.ts     | AboutView    |
| skills      | competences.tsx | SkillsView   |
| projects    | projets.tsx     | ProjectsView |
| contact     | contact.tsx     | ContactView  |
| resume      | cv.pdf          | ResumeView   |

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

**Règle absolue** : ne jamais surcharger une propriété déjà définie dans le CSS custom avec une classe Tailwind sur le même élément.
