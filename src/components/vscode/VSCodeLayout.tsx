"use client";

import { VSCodeTopBar } from "./VSCodeTopBar";
import { VSCodeActivityBar } from "./VSCodeActivityBar";
import { VSCodeSideBar } from "./VSCodeSideBar";
import { VSCodeEditor } from "./VSCodeEditor";
import { VSCodeStatusBar } from "./VSCodeStatusBar";

/**
 * Orchestrateur principal — reproduit la grille VSCode :
 * [TopBar]
 * [ActivityBar | SideBar | Editor]
 * [StatusBar]
 */
export function VSCodeLayout() {
  return (
    <div className="vsc-layout">
      <VSCodeTopBar />

      <div className="vsc-body">
        <VSCodeActivityBar />
        <VSCodeSideBar />
        <VSCodeEditor />
      </div>

      <VSCodeStatusBar />
    </div>
  );
}
