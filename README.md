# Portfolio — VSCode Theme

Portfolio personnel développé avec Next.js, simulant l'interface de Visual Studio Code.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2-764abc?logo=redux)

## Stack

- **Next.js 16** — App Router, SSG
- **React 19** + **TypeScript 5**
- **Redux Toolkit 2** — gestion des onglets, explorer, sidebar
- **CSS custom** (`vscode.css` + `portfolio.css`) + **Tailwind v4** pour utilitaires

## Structure

src/
├── app/ # Next.js App Router
├── components/
│ ├── vscode/ # Shell VSCode (layout, tabs, sidebar, statusbar)
│ ├── editor-views/ # Vues contenu (About, Skills, Projects, Contact, Resume)
│ └── CollapsableMenu/ # Explorer de fichiers
├── lib/redux/ # Store, slices, types
└── styles/
├── vscode.css # Tokens + classes vsc-\*
└── portfolio.css # Classes about-, pf-, sk-, resume-

text

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

## Déploiement

Déployé sur **Vercel** — chaque push sur `master` déclenche un déploiement automatique.

## Conventions

Voir [CLAUDE.md](./CLAUDE.md) pour les conventions du projet (CSS, Redux, ajout de vues).
