"use client";

import { useAppSelector } from "@/lib/redux/hooks";
import { Explorer } from "@/components/CollapsableMenu/Explorer/Explorer";

export function VSCodeSideBar() {
  const { activePanel, sidebarOpen } = useAppSelector((s) => s.explorer);

  if (!sidebarOpen) return null;

  return (
    <aside
      className="vsc-sidebar"
      role="complementary"
      aria-label="Panneau latéral"
    >
      {activePanel === "explorer" && (
        <div className="vsc-sidebar__panel">
          <div className="vsc-sidebar__panel-header">
            <span className="vsc-sidebar__panel-title">Explorer</span>
          </div>
          <Explorer />
        </div>
      )}

      {activePanel === "search" && (
        <div className="vsc-sidebar__panel">
          <div className="vsc-sidebar__panel-header">
            <span className="vsc-sidebar__panel-title">Recherche</span>
          </div>
          <div className="vsc-sidebar__panel-body">
            <input
              className="vsc-sidebar__input"
              placeholder="Rechercher"
              aria-label="Rechercher dans les fichiers"
            />
          </div>
        </div>
      )}

      {activePanel === "git" && (
        <div className="vsc-sidebar__panel">
          <div className="vsc-sidebar__panel-header">
            <span className="vsc-sidebar__panel-title">Contrôle de source</span>
          </div>
          <div className="vsc-sidebar__panel-body">
            <input
              className="vsc-sidebar__input"
              placeholder="Message (Ctrl+Enter pour committer)"
              aria-label="Message de commit"
            />
          </div>
        </div>
      )}
    </aside>
  );
}
