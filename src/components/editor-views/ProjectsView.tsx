"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/projects";

const CATEGORIES = ["Tous", "Web", "App"] as const;
type Category = (typeof CATEGORIES)[number];

const TAG_COLORS: Record<string, string> = {
  "Next.js": "#ffffff",
  TypeScript: "#3178c6",
  CSS: "#264de4",
  Python: "#3776ab",
  Flask: "#00b39f",
  Java: "#f89820",
  MySQL: "#4479a1",
  MVC: "#988bc7",
  "HTML/CSS": "#e34c26",
  "Node.js": "#67e480",
  Express: "#888888",
  SQLite: "#78d1e1",
  PHP: "#8892be",
  "C#": "#9b4f96",
  "API REST": "#e89e64",
  "Three.js": "#ff79c6",
  "Framer Motion": "#e96379",
};

export function ProjectsView() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");

  const filtered = PROJECTS.filter(
    (p) => activeCategory === "Tous" || p.category === activeCategory,
  );

  return (
    <div className="pf-projects">
      <section className="pf-section-header">
        <div className="pf-section-header__inner">
          <p className="pf-section-header__eyebrow">Mes réalisations</p>
          <h2 className="pf-section-header__title">Projets</h2>
          <p className="pf-section-header__desc">
            Une sélection de projets développés en formation, en stage et en
            autonomie.
          </p>
        </div>
      </section>

      <div className="pf-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`pf-filter-btn${activeCategory === cat ? " pf-filter-btn--active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="pf-projects-grid">
        {filtered.map((p) => (
          <article key={p.id} className="pf-project-card">
            <div className="pf-project-card__header">
              <div className="pf-project-card__meta">
                <span className="pf-project-card__year">{p.year}</span>
                <span
                  className={`pf-badge${p.status === "En cours" ? " pf-badge--active" : ""}`}
                >
                  {p.status}
                </span>
              </div>
              <div className="pf-project-card__links">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-project-card__link"
                    aria-label="GitHub"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-project-card__link"
                    aria-label="Voir le projet"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
                {"confidential" in p && p.confidential && (
                  <span
                    className="pf-badge"
                    title="Code source non disponible — projet professionnel"
                  >
                    🔒 Confidentiel
                  </span>
                )}
              </div>
            </div>

            <h3 className="pf-project-card__title">{p.title}</h3>
            <p className="pf-project-card__desc">{p.description}</p>

            <div className="pf-project-card__tags">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="pf-tag"
                  style={
                    {
                      "--tag-color": TAG_COLORS[tag] ?? "#888",
                    } as React.CSSProperties
                  }
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
