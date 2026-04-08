"use client";

import { useAppSelector } from "@/lib/redux/hooks";
import { ExplorerSection } from "./ExplorerSection";

export function Explorer() {
  const { tree } = useAppSelector((s) => s.explorer);

  return (
    <div className="vsc-explorer" role="tree" aria-label="Fichiers du projet">
      {/* Header racine avec nom du projet */}
      <div className="vsc-explorer__root-header">
        <span className="vsc-explorer__root-label">Portfolio-VSCode</span>
      </div>

      {/* Arbre de fichiers */}
      <div className="vsc-explorer__tree">
        {tree.map((node) => (
          <ExplorerSection key={node.id} node={node} depth={0} />
        ))}
      </div>

      {/* Outline + Timeline en bas */}
      <div className="vsc-explorer__footer">
        <div className="vsc-explorer__footer-section">
          <span className="vsc-explorer__footer-arrow">›</span>
          <span>Outline</span>
        </div>
        <div className="vsc-explorer__footer-section">
          <span className="vsc-explorer__footer-arrow">›</span>
          <span>Timeline</span>
        </div>
      </div>
    </div>
  );
}
