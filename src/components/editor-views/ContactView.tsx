"use client";

import { useState } from "react";

const CONTACT = {
  github: "https://github.com/DevJoySR",
  linkedin: "https://www.linkedin.com/in/adrien-sudja-247824329/",
  email: "adriensudja.pro@outlook.fr",
};

export function ContactView() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="pf-contact">
      <section className="pf-section-header">
        <div className="pf-section-header__inner">
          <p className="pf-section-header__eyebrow">Travaillons ensemble</p>
          <h2 className="pf-section-header__title">Contact</h2>
          <p className="pf-section-header__desc">
            Une question, une opportunité, un projet ? Je réponds rapidement.
          </p>
        </div>
      </section>

      <div className="pf-contact__layout">
        <div className="pf-contact__info">
          <h3 className="pf-contact__info-title">Retrouvez-moi</h3>
          <div className="pf-contact__links">
            <a href={`mailto:${CONTACT.email}`} className="pf-contact__link">
              <span className="pf-contact__link-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <div>
                <span className="pf-contact__link-label">Email</span>
                <span className="pf-contact__link-value">{CONTACT.email}</span>
              </div>
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-contact__link"
            >
              <span className="pf-contact__link-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </span>
              <div>
                <span className="pf-contact__link-label">GitHub</span>
                <span className="pf-contact__link-value">DevJoySR</span>
              </div>
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-contact__link"
            >
              <span className="pf-contact__link-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <div>
                <span className="pf-contact__link-label">LinkedIn</span>
                <span className="pf-contact__link-value">Adrien Sudja</span>
              </div>
            </a>
          </div>
        </div>

        <div className="pf-contact__form-wrap">
          {status === "success" ? (
            <div className="pf-contact__success">
              <span className="pf-contact__success-icon">✓</span>
              <p>Message envoyé ! Je te répondrai rapidement.</p>
              <button
                className="pf-btn pf-btn--ghost"
                onClick={() => setStatus("idle")}
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form className="pf-form" onSubmit={handleSubmit} noValidate>
              <div className="pf-form__group">
                <label htmlFor="contact-name" className="pf-form__label">
                  Nom
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="pf-form__input"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="pf-form__group">
                <label htmlFor="contact-email" className="pf-form__label">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="pf-form__input"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="pf-form__group">
                <label htmlFor="contact-message" className="pf-form__label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="pf-form__input pf-form__textarea"
                  placeholder="Dites-moi tout..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="pf-btn pf-btn--primary pf-btn--full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Envoi..." : "Envoyer →"}
              </button>
              {status === "error" && (
                <p style={{ color: "red", marginTop: "8px" }}>
                  Erreur lors de l&apos;envoi. Réessaie.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
