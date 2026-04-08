"use client";

export function VSCodeStatusBar() {
  return (
    <footer
      className="vsc-statusbar"
      role="contentinfo"
      aria-label="Barre de statut"
    >
      {/* Gauche */}
      <div className="vsc-statusbar__left">
        <div className="vsc-statusbar__item" title="Branche Git">
          <svg
            width="13"
            height="13"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M11.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-2.25.75a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25zM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM3.5 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z" />
          </svg>
          <span>master</span>
        </div>

        <div className="vsc-statusbar__item" title="Erreurs et avertissements">
          <svg
            width="13"
            height="13"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2z" />
            <path d="M7.5 5h1v5h-1V5zm0 6h1v1h-1v-1z" />
          </svg>
          <span>0</span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 16 16"
            fill="#f0c040"
            aria-hidden="true"
          >
            <path d="M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.72L8 2.28zM8 11a.75.75 0 1 1 0 1.5A.75.75 0 0 1 8 11zm.75-5.25v4.5h-1.5v-4.5h1.5z" />
          </svg>
          <span>0</span>
        </div>

        <div className="vsc-statusbar__item">
          <span>Ln 1, Col 1</span>
        </div>
      </div>

      {/* Droite */}
      <div className="vsc-statusbar__right">
        <div className="vsc-statusbar__item">
          <span>UTF-8</span>
        </div>
        <div className="vsc-statusbar__item">
          <span>TypeScript JSX</span>
        </div>
        <div className="vsc-statusbar__item" title="Live Server">
          <svg
            width="13"
            height="13"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 2a.5.5 0 0 1 .5.5v4.793l2.146 2.147a.5.5 0 0 1-.708.707l-2.5-2.5A.5.5 0 0 1 7.5 9V3.5A.5.5 0 0 1 8 3z" />
          </svg>
          <span>Port: 3000</span>
        </div>
      </div>
    </footer>
  );
}
