"use client";

import { useState, useEffect, useRef } from "react";

// ─── Données personnelles ─────────────────────────────────────────────────────
const PROFILE = {
  name: "Adrien Sudja",
  title: "Développeur Web Full-Stack",
  location: "Rennes / Vannes",
  age: 21,
  github: "https://github.com/DevJoySR",
  linkedin: "https://www.linkedin.com/in/adrien-sudja-247824329/",
  email: "adrien.sudja@email.com", // ← remplace par ton vrai email
  bio: "Passionné par le développement web depuis plusieurs années, je construis des applications modernes avec React, Next.js et TypeScript. Actuellement en BTS SIO option SLAM, je cherche à mettre mes compétences au service de projets ambitieux.",
  formation: "BTS SIO — Option SLAM",
  school: "Chanteloup, Bretagne",
  disponibility: "Disponible dès septembre 2025",
};

const COUNTERS = [
  { label: "Années de pratique", value: 3, suffix: "+" },
  { label: "Année d'études", value: 2, suffix: "ème" },
  { label: "Projets réalisés", value: 8, suffix: "+" },
  { label: "Technos maîtrisées", value: 15, suffix: "+" },
];

const TABS = ["Bio", "Formation", "Hobbies"] as const;
type Tab = (typeof TABS)[number];

// ─── Hook compteur animé ──────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Easing out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

// ─── Composant compteur individuel ───────────────────────────────────────────
function Counter({
  value,
  suffix,
  label,
  animate,
}: {
  value: number;
  suffix: string;
  label: string;
  animate: boolean;
}) {
  const count = useCountUp(value, 1200, animate);
  return (
    <div className="about-counter">
      <div className="about-counter__value">
        {count}
        <span className="about-counter__suffix">{suffix}</span>
      </div>
      <div className="about-counter__label">{label}</div>
    </div>
  );
}

// ─── Onglet Bio ───────────────────────────────────────────────────────────────
function BioTab() {
  return (
    <div className="about-tab-content">
      <div className="about-bio">
        {/* Ligne de code stylisée — cohérence VSCode */}
        <div className="about-bio__code-block">
          <span className="code-keyword">const</span>{" "}
          <span className="code-var">developer</span>{" "}
          <span className="code-op">=</span>{" "}
          <span className="code-bracket">{"{"}</span>
        </div>
        <div className="about-bio__code-block about-bio__code-block--indent">
          <span className="code-prop">name</span>
          <span className="code-op">:</span>{" "}
          <span className="code-string">&quot;{PROFILE.name}&quot;</span>
          <span className="code-op">,</span>
        </div>
        <div className="about-bio__code-block about-bio__code-block--indent">
          <span className="code-prop">age</span>
          <span className="code-op">:</span>{" "}
          <span className="code-number">{PROFILE.age}</span>
          <span className="code-op">,</span>
        </div>
        <div className="about-bio__code-block about-bio__code-block--indent">
          <span className="code-prop">location</span>
          <span className="code-op">:</span>{" "}
          <span className="code-string">&quot;{PROFILE.location}&quot;</span>
          <span className="code-op">,</span>
        </div>
        <div className="about-bio__code-block about-bio__code-block--indent">
          <span className="code-prop">role</span>
          <span className="code-op">:</span>{" "}
          <span className="code-string">&quot;{PROFILE.title}&quot;</span>
          <span className="code-op">,</span>
        </div>
        <div className="about-bio__code-block about-bio__code-block--indent">
          <span className="code-prop">status</span>
          <span className="code-op">:</span>{" "}
          <span className="code-string">
            &quot;{PROFILE.disponibility}&quot;
          </span>
          <span className="code-op">,</span>
        </div>
        <div className="about-bio__code-block">
          <span className="code-bracket">{"}"}</span>
        </div>

        <p className="about-bio__text">{PROFILE.bio}</p>
      </div>
    </div>
  );
}

// ─── Onglet Formation ─────────────────────────────────────────────────────────
function FormationTab() {
  const diplomes = [
    {
      year: "2024 – 2026",
      title: "BTS SIO — Option SLAM",
      school: "Lycée, Bretagne",
      status: "En cours",
    },
    { year: "2024", title: "Baccalauréat", school: "Lycée", status: "Obtenu" },
    // Ajoute tes vrais diplômes ici
  ];

  return (
    <div className="about-tab-content">
      <div className="about-timeline">
        {diplomes.map((d, i) => (
          <div key={i} className="about-timeline__item">
            <div className="about-timeline__dot" />
            <div className="about-timeline__body">
              <div className="about-timeline__header">
                <span className="about-timeline__title">{d.title}</span>
                <span
                  className={`about-timeline__badge ${d.status === "En cours" ? "about-timeline__badge--active" : ""}`}
                >
                  {d.status}
                </span>
              </div>
              <div className="about-timeline__school">{d.school}</div>
              <div className="about-timeline__year">{d.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Onglet Hobbies ───────────────────────────────────────────────────────────
function HobbiesTab() {
  const hobbies = [
    { icon: "🎮", label: "Gaming", detail: "League of Legends, Minecraft" },
    { icon: "💻", label: "Dev perso", detail: "Side projects, open source" },
    { icon: "🎵", label: "Musique", detail: "Écoute & découverte" },
    // Ajoute / modifie tes hobbies réels
  ];

  return (
    <div className="about-tab-content">
      <div className="about-hobbies">
        {hobbies.map((h, i) => (
          <div key={i} className="about-hobby">
            <span className="about-hobby__icon">{h.icon}</span>
            <div>
              <div className="about-hobby__label">{h.label}</div>
              <div className="about-hobby__detail">{h.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────
export function AboutView() {
  const [activeTab, setActiveTab] = useState<Tab>("Bio");
  const [animateCounters, setAnimateCounters] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Déclenche les compteurs quand la vue devient visible
  useEffect(() => {
    const timer = setTimeout(() => setAnimateCounters(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="vsc-view about-view" ref={heroRef}>
      {/* ── Hero ── */}
      <section className="about-hero">
        {/* Numéros de ligne façon éditeur de code */}
        <div className="about-hero__line-numbers" aria-hidden="true">
          {Array.from({ length: 20 }, (_, i) => (
            <span key={i} className="about-hero__line-num">
              {i + 1}
            </span>
          ))}
        </div>

        <div className="about-hero__content">
          {/* Greeting */}
          <p className="about-hero__greeting">
            <span className="code-comment">
              {"// Bienvenue sur mon portfolio"}
            </span>
          </p>

          {/* Nom */}
          <h1 className="about-hero__name">
            <span className="code-keyword">const </span>
            <span className="about-hero__name-text">{PROFILE.name}</span>
            <span className="about-hero__cursor" aria-hidden="true" />
          </h1>

          {/* Titre */}
          <p className="about-hero__title">
            <span className="code-comment">{"// "}</span>
            <span className="about-hero__title-text">{PROFILE.title}</span>
          </p>

          {/* Liens sociaux */}
          <div className="about-hero__links">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="about-social-btn"
              aria-label="GitHub"
            >
              {/* GitHub icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="about-social-btn about-social-btn--linkedin"
              aria-label="LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              download
              className="about-social-btn about-social-btn--cv"
              aria-label="Télécharger le CV"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              CV
            </a>
          </div>

          {/* Compteurs */}
          <div className="about-counters">
            {COUNTERS.map((c) => (
              <Counter
                key={c.label}
                value={c.value}
                suffix={c.suffix}
                label={c.label}
                animate={animateCounters}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Onglets Bio / Formation / Hobbies ── */}
      <section className="about-tabs-section">
        <div className="about-tabs" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`about-tab${activeTab === tab ? " about-tab--active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div role="tabpanel" aria-label={activeTab}>
          {activeTab === "Bio" && <BioTab />}
          {activeTab === "Formation" && <FormationTab />}
          {activeTab === "Hobbies" && <HobbiesTab />}
        </div>
      </section>
    </div>
  );
}
