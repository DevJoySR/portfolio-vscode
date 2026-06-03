"use client";

export function ResumeView() {
  return (
    <div className="resume-view">
      <div className="resume-view__toolbar">
        <span className="resume-view__filename">cv.pdf</span>
        <a
          href="/cv_portfolio.pdf"
          download="cv_adrien_sudja.pdf"
          className="resume-view__download"
        >
          <svg
            width="14"
            height="14"
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
          Télécharger
        </a>
      </div>
      <iframe
        src="/cv_portfolio.pdf"
        className="resume-view__frame"
        title="CV Adrien Sudja"
      />
    </div>
  );
}
