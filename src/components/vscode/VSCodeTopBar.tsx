// src/components/VSCodeTopBar.tsx
"use client";

import Image from "next/image";

const MENU_ITEMS = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
] as const;

export function VSCodeTopBar() {
  return (
    <header className="vsc-topbar" role="banner">
      {/* ── Gauche : logo + menu ── */}
      <div className="vsc-topbar__left">
        <div className="vsc-topbar__logo" aria-label="Visual Studio Code">
          <Image
            src="/vscode.svg"
            width={18}
            height={18}
            alt="Visual Studio Code logo"
            priority
            unoptimized
          />
        </div>

        <nav
          className="vsc-topbar__menu"
          role="menubar"
          aria-label="Menu principal"
        >
          {MENU_ITEMS.map((item) => (
            <button
              key={item}
              role="menuitem"
              className="vsc-topbar__menu-item"
              aria-haspopup="true"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* ── Centre : titre ── */}
      <div className="vsc-topbar__center" aria-label="Titre">
        <span className="vsc-topbar__title">Adrien Sudja - Portfolio</span>
      </div>

      {/* ── Droite : contrôles fenêtre ── */}
      <div className="vsc-topbar__right" aria-label="Contrôles de fenêtre">
        <button className="vsc-winbtn" aria-label="Réduire">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect y="5" width="11" height="1" />
          </svg>
        </button>

        <button className="vsc-winbtn" aria-label="Agrandir">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
          >
            <rect x="0.5" y="0.5" width="10" height="10" />
          </svg>
        </button>

        <button className="vsc-winbtn vsc-winbtn--close" aria-label="Fermer">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M1.3 0L5.5 4.2 9.7 0 11 1.3 6.8 5.5 11 9.7 9.7 11 5.5 6.8 1.3 11 0 9.7 4.2 5.5 0 1.3 1.3 0z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
