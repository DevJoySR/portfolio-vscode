"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setActivePanel } from "@/lib/redux/slices/explorerSlice";
import type { SidebarPanel } from "@/lib/redux/type";

interface ActivityItem {
  id: SidebarPanel;
  label: string;
  icon: React.ReactNode;
}

const ACTIVITY_ITEMS: ActivityItem[] = [
  {
    id: "explorer",
    label: "Explorer (Ctrl+Shift+E)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="8" height="18" rx="1.5" />
        <rect x="12" y="3" width="10" height="10" rx="1.5" />
        <rect x="12" y="15" width="10" height="6" rx="1.5" />
      </svg>
    ),
  },
  {
    id: "search",
    label: "Recherche (Ctrl+Shift+F)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <circle cx="10.5" cy="10.5" r="6.5" />
        <line x1="16.5" y1="16.5" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    id: "git",
    label: "Contrôle de source (Ctrl+Shift+G)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden="true"
      >
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="6" y1="9" x2="6" y2="15" />
        <line x1="15.7" y1="6.7" x2="9" y2="13.4" />
      </svg>
    ),
  },
];

export function VSCodeActivityBar() {
  const dispatch = useAppDispatch();
  const { activePanel, sidebarOpen } = useAppSelector((s) => s.explorer);

  const isActive = (id: SidebarPanel) => activePanel === id && sidebarOpen;

  return (
    <aside
      className="vsc-actbar"
      role="navigation"
      aria-label="Barre d'activité"
    >
      <div className="vsc-actbar__top">
        {ACTIVITY_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`vsc-actbar__btn${isActive(item.id) ? " vsc-actbar__btn--active" : ""}`}
            onClick={() => dispatch(setActivePanel(item.id))}
            title={item.label}
            aria-label={item.label}
            aria-pressed={isActive(item.id)}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Boutons bas — non interactifs pour l'instant */}
      <div className="vsc-actbar__bottom">
        <button
          className="vsc-actbar__btn"
          title="Comptes"
          aria-label="Comptes"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            aria-hidden="true"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
        <button
          className="vsc-actbar__btn"
          title="Paramètres"
          aria-label="Paramètres"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
