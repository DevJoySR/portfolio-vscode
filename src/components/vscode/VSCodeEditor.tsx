"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  closeTab,
  setActiveTab,
  openFile,
  openFolder,
  toggleFolder,
} from "@/lib/redux/slices/explorerSlice";
import { WelcomeScreen } from "./WelcomeScreen";
import { AboutView } from "@/components/editor-views/AboutView";
import { ServicesView } from "@/components/editor-views/ServicesView";
import { SkillsView } from "@/components/editor-views/SkillsView";
import { ProjectsView } from "@/components/editor-views/ProjectsView";
import { TimelineView } from "@/components/editor-views/TimelineView";
import { ContactView } from "@/components/editor-views/ContactView";
import { ResumeView } from "@/components/editor-views/ResumeView";

function TabIcon({ language }: { language: string }) {
  if (language === "typescriptreact") {
    return (
      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
        <rect width="16" height="16" rx="2" fill="#1b9ad6" />
        <text
          x="1"
          y="12"
          fontSize="5.5"
          fontFamily="monospace"
          fontWeight="bold"
          fill="white"
        >
          TSX
        </text>
      </svg>
    );
  }
  if (language === "pdf") {
    return (
      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
        <rect width="16" height="16" rx="2" fill="#e53935" />
        <text
          x="1"
          y="12"
          fontSize="5.5"
          fontFamily="monospace"
          fontWeight="bold"
          fill="white"
        >
          PDF
        </text>
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <rect width="16" height="16" rx="2" fill="#3178c6" />
      <text
        x="3"
        y="12"
        fontSize="7"
        fontFamily="monospace"
        fontWeight="bold"
        fill="white"
      >
        TS
      </text>
    </svg>
  );
}

const FILE_META: Record<
  string,
  { label: string; language: "typescript" | "typescriptreact" | "pdf" }
> = {
  about_me: { label: "a_propos.ts", language: "typescript" },
  services: { label: "services.ts", language: "typescript" },
  skills: { label: "competences.tsx", language: "typescriptreact" },
  projects: { label: "projets.tsx", language: "typescriptreact" },
  timeline: { label: "timeline.ts", language: "typescript" },
  contact: { label: "contact.tsx", language: "typescriptreact" },
  resume: { label: "cv.pdf", language: "pdf" },
};

// Dossier parent à ouvrir automatiquement pour chaque fichier
const PARENT_FOLDER: Record<string, string> = {
  projects: "components",
  skills: "components",
  timeline: "experience",
};

export function VSCodeEditor() {
  const dispatch = useAppDispatch();
  const { openTabs, activeTabId } = useAppSelector((s) => s.explorer);

  function handleNavigate(viewId: string) {
    const meta = FILE_META[viewId];
    if (!meta) return;

    // Ouvre le dossier parent dans la sidebar si défini
    const folder = PARENT_FOLDER[viewId];
    if (folder) dispatch(openFolder(folder));

    dispatch(
      openFile({ id: viewId, label: meta.label, language: meta.language }),
    );
  }

  function renderContent() {
    if (!activeTabId) return <WelcomeScreen />;
    switch (activeTabId) {
      case "about_me":
        return <AboutView onNavigate={handleNavigate} />;
      case "services":
        return <ServicesView />;
      case "skills":
        return <SkillsView />;
      case "projects":
        return <ProjectsView />;
      case "timeline":
        return <TimelineView />;
      case "contact":
        return <ContactView />;
      case "resume":
        return <ResumeView />;
      default:
        return <WelcomeScreen />;
    }
  }

  return (
    <main className="vsc-editor" role="main" aria-label="Éditeur">
      {openTabs.length > 0 && (
        <div className="vsc-tabs" role="tablist" aria-label="Fichiers ouverts">
          {openTabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <div
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                className={`vsc-tab${isActive ? " vsc-tab--active" : ""}`}
                onClick={() => dispatch(setActiveTab(tab.id))}
                onMouseDown={(e) => {
                  if (e.button === 1) {
                    e.preventDefault();
                    dispatch(closeTab(tab.id));
                  }
                }}
                title={tab.label}
              >
                <TabIcon language={tab.language} />
                <span className="vsc-tab__label">{tab.label}</span>
                <button
                  className="vsc-tab__close"
                  aria-label={`Fermer ${tab.label}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(closeTab(tab.id));
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      )}

      <div className="vsc-editor__content">{renderContent()}</div>
    </main>
  );
}
