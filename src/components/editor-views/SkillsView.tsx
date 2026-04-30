"use client";

const SKILLS = [
  {
    category: "Frontend",
    icon: "🖥️",
    color: "var(--omni-pink)",
    items: [
      "HTML / CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Figma",
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "var(--omni-cyan)",
    items: ["Java", "Node.js", "Express", "PHP", "Python", "Flask", "REST API"],
  },
  {
    category: "Bases de données",
    icon: "🗄️",
    color: "var(--omni-purple)",
    items: ["MySQL", "SQLite", "PostgreSQL"],
  },
  {
    category: "Outils & DevOps",
    icon: "🛠️",
    color: "var(--omni-orange)",
    items: ["Git / GitHub", "Linux", "Postman", "Agile / Scrum", "VS Code"],
  },
] as const;

export function SkillsView() {
  return (
    <div className="sk-view">
      <section className="pf-section-header">
        <div className="pf-section-header__inner">
          <p className="pf-section-header__eyebrow">Stack technique</p>
          <h2 className="pf-section-header__title">Compétences</h2>
          <p className="pf-section-header__desc">
            Les technologies que j&apos;utilise au quotidien pour concevoir des
            applications robustes et modernes.
          </p>
        </div>
      </section>

      <div className="sk-grid">
        {SKILLS.map((group) => (
          <div key={group.category} className="sk-card">
            <div className="sk-card__header">
              <span className="sk-card__icon">{group.icon}</span>
              <h3 className="sk-card__title" style={{ color: group.color }}>
                {group.category}
              </h3>
            </div>
            <div className="sk-card__badges">
              {group.items.map((name) => (
                <span
                  key={name}
                  className="sk-badge"
                  style={{ "--sk-color": group.color } as React.CSSProperties}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="sk-certs">
        <h3 className="sk-certs__title">Certifications</h3>
        <div className="sk-certs__list">
          <div className="sk-cert">
            <span className="sk-cert__icon">🛡️</span>
            <div>
              <div className="sk-cert__name">JavaScript / OWASP</div>
              <div className="sk-cert__year">2026</div>
            </div>
          </div>
          <div className="sk-cert">
            <span className="sk-cert__icon">🔐</span>
            <div>
              <div className="sk-cert__name">SecNum — ANSSI</div>
              <div className="sk-cert__year">2025</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
