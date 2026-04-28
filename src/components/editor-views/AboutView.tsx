"use client";

import { useState, useEffect } from "react";

const PROFILE = {
  name: "Adrien Sudja",
  title: "Développeur",
  titleAccent: "full-stack & créatif",
  location: "Rennes / Vannes",
  age: 21,
  github: "https://github.com/DevJoySR",
  linkedin: "https://www.linkedin.com/in/adrien-sudja-247824329/",
  email: "adriensudja.pro@outlook.fr",
  bio: "Étudiant en BTS SIO option SLAM, futur bachelier Epitech à Rennes. Je conçois des applications web robustes avec une attention particulière à l'expérience utilisateur.",
};

const COUNTERS = [
  { label: "Ans de pratique", value: 2, suffix: "+" },
  { label: "Projets réalisés", value: 5, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
];

const TABS = ["Bio", "Hobbies"] as const;
type Tab = (typeof TABS)[number];

function useCountUp(target: number, duration = 1400, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0: number | null = null;
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

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
  const count = useCountUp(value, 1400, animate);
  return (
    <div className="about-counter">
      <span className="about-counter__value">
        {count}
        <span className="about-counter__suffix">{suffix}</span>
      </span>
      <span className="about-counter__label">{label}</span>
    </div>
  );
}

function BioTab() {
  return (
    <div className="pf-tab-content">
      <p className="pf-tab-content__text">{PROFILE.bio}</p>
      <div className="pf-info-grid">
        <div className="pf-info-item">
          <span className="pf-info-item__label">Localisation</span>
          <span className="pf-info-item__value">{PROFILE.location}</span>
        </div>
        <div className="pf-info-item">
          <span className="pf-info-item__label">Âge</span>
          <span className="pf-info-item__value">{PROFILE.age} ans</span>
        </div>
        <div className="pf-info-item">
          <span className="pf-info-item__label">Email</span>
          <a
            href={`mailto:${PROFILE.email}`}
            className="pf-info-item__value pf-info-item__value--link"
          >
            {PROFILE.email}
          </a>
        </div>
      </div>
    </div>
  );
}

function HobbiesTab() {
  const hobbies = [
    { icon: "🎮", label: "Gaming", detail: "League of Legends, Enshrouded" },
    { icon: "💻", label: "Dev perso", detail: "Side projects, open source" },
    { icon: "🎵", label: "Musique", detail: "Écoute & découverte" },
  ];
  return (
    <div className="pf-tab-content">
      <div className="pf-hobbies">
        {hobbies.map((h, i) => (
          <div key={i} className="pf-hobby">
            <span className="pf-hobby__icon">{h.icon}</span>
            <div>
              <div className="pf-hobby__label">{h.label}</div>
              <div className="pf-hobby__detail">{h.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AboutView({
  onNavigate,
}: { onNavigate?: (view: string) => void } = {}) {
  const [activeTab, setActiveTab] = useState<Tab>("Bio");
  const [animateCounters, setAnimateCounters] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimateCounters(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="about-view">
      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero__content">
          <h1 className="about-hero__headline">
            <span className="about-hero__headline-line1">Bonjour, je suis</span>
            <span className="about-hero__headline-line2">{PROFILE.name}</span>
            <span className="about-hero__headline-line3">
              {PROFILE.title} {PROFILE.titleAccent}
            </span>
          </h1>

          <p className="about-hero__bio">{PROFILE.bio}</p>

          <div className="about-hero__cta">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("projects");
              }}
              className="about-cta-btn about-cta-btn--primary"
            >
              Voir mes projets →
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="about-cta-btn about-cta-btn--ghost"
            >
              Me contacter
            </a>
          </div>

          <div className="about-hero__links">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="about-social-btn"
            >
              <svg
                width="16"
                height="16"
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
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            {/* ── Bouton CV : ouvre la vue resume (visualisation) ── */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("resume");
              }}
              className="about-social-btn about-social-btn--cv"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              CV
            </a>
          </div>

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
        <div className="about-hero__gradient" aria-hidden="true" />
      </section>

      {/* ── Onglets ── */}
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
        <div
          className="about-tab-content"
          role="tabpanel"
          aria-label={activeTab}
        >
          {activeTab === "Bio" && <BioTab />}
          {activeTab === "Hobbies" && <HobbiesTab />}
        </div>
      </section>

      {/* ── Parcours ── */}
      <section className="about-parcours">
        <div className="about-parcours__card about-parcours__card--active">
          <div className="about-parcours__card-icon">💼</div>
          <div className="about-parcours__card-body">
            <span className="about-parcours__card-status">En cours</span>
            <h3 className="about-parcours__card-title">
              Recherche d&apos;alternance
            </h3>
            <p className="about-parcours__card-desc">
              Ouvert à des opportunités sur Rennes et sa région · Dev web /
              fullstack
            </p>
          </div>
        </div>
        <div className="about-parcours__card">
          <div className="about-parcours__card-icon">🚀</div>
          <div className="about-parcours__card-body">
            <span className="about-parcours__card-status">Rentrée 2026</span>
            <h3 className="about-parcours__card-title">
              Bachelor Epitech Rennes
            </h3>
            <p className="about-parcours__card-desc">
              Formation en alternance · Architecture logicielle &amp; projets
              innovants
            </p>
          </div>
        </div>
        <div className="about-parcours__card">
          <div className="about-parcours__card-icon">🎓</div>
          <div className="about-parcours__card-body">
            <span className="about-parcours__card-status">2024 — 2026</span>
            <h3 className="about-parcours__card-title">
              BTS SIO — Option SLAM
            </h3>
            <p className="about-parcours__card-desc">
              Pôle Sup de La Salle · Rennes — Développement logiciel &amp; web,
              bases de données, cybersécurité
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
