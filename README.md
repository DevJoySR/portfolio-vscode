# 🖥️ Portfolio — VSCode Theme

> Portfolio personnel simulant fidèlement l'interface de Visual Studio Code — onglets, explorateur de fichiers, barre d'activité, barre de statut.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2-764abc?logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-email-000000?logo=mail.ru&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Vercel-deployed-black?logo=vercel&logoColor=white)

---

## ✨ Présentation

Ce portfolio reproduit l'expérience VS Code dans le navigateur. Chaque section du portfolio est accessible comme un fichier ouvert dans l'éditeur : l'explorateur latéral liste les "fichiers", les onglets permettent de naviguer entre les vues, et la barre de statut affiche des informations contextuelles.

Le formulaire de contact envoie de vrais emails via l'API [Resend](https://resend.com), sans dépendance à un client mail tiers.

---

## 🚀 Stack technique

| Technologie         | Rôle                                                                               |
| ------------------- | ---------------------------------------------------------------------------------- |
| **Next.js 16**      | Framework — App Router, Server Actions                                             |
| **React 19**        | UI                                                                                 |
| **TypeScript 5**    | Typage statique                                                                    |
| **Redux Toolkit 2** | État global — onglets ouverts, vue active, sidebar                                 |
| **Tailwind CSS v4** | Utilitaires CSS                                                                    |
| **CSS custom**      | `vscode.css` (tokens + classes `vsc-*`) · `portfolio.css` (classes `pf-*`, `sk-*`) |
| **Resend**          | Envoi d'emails via API Route Next.js                                               |

---

## 🗂️ Structure du projet

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # API Route — envoi email via Resend
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── vscode/                 # Shell VSCode
│   │   ├── VSCodeLayout.tsx
│   │   ├── VSCodeTopBar.tsx
│   │   ├── VSCodeActivityBar.tsx
│   │   ├── VSCodeSideBar.tsx
│   │   ├── VSCodeEditor.tsx
│   │   └── VSCodeStatusBar.tsx
│   ├── editor-views/           # Contenu des "fichiers"
│   │   ├── AboutView.tsx
│   │   ├── SkillsView.tsx
│   │   ├── ProjectsView.tsx
│   │   ├── ContactView.tsx
│   │   └── ResumeView.tsx
│   └── CollapsableMenu/        # Explorateur de fichiers latéral
├── data/                       # Données statiques (projets, compétences…)
├── lib/
│   └── redux/                  # Store, slices, types
└── styles/
    ├── vscode.css              # Thème VS Code (tokens, layout shell)
    └── portfolio.css           # Styles des vues contenu
```

---

## ⚙️ Lancer en local

### Prérequis

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/DevJoySR/portfolio-vscode.git
cd portfolio-vscode
npm install
```

### Variables d'environnement

Crée un fichier `.env.local` à la racine :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

> Obtiens une clé API sur [resend.com](https://resend.com). Sans cette variable, le formulaire de contact retournera une erreur 500.

### Démarrer

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

---

## 📬 Formulaire de contact

L'envoi de mail est géré par une API Route Next.js (`/api/contact`) qui utilise [Resend](https://resend.com).

- Les emails sont envoyés depuis `contact@adriensudja.fr` (domaine vérifié SPF/DKIM/DMARC)
- Le champ `replyTo` est défini à l'adresse de l'expéditeur pour faciliter la réponse directe
- Validation côté serveur : champs obligatoires, longueur max du message (2000 caractères)

---

## 🚢 Déploiement

Le projet est déployé sur **Vercel**. Chaque push sur `master` déclenche un déploiement automatique.

Pour déployer sur ton propre compte Vercel, ajoute la variable d'environnement `RESEND_API_KEY` dans **Settings → Environment Variables** de ton projet Vercel.

---

## 📄 Licence

Projet personnel — tous droits réservés. Le code source est consultable mais non réutilisable sans autorisation.
