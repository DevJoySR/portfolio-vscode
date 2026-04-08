"use client";

export function WelcomeScreen() {
  return (
    <div className="vsc-welcome" aria-label="Écran d'accueil">
      <div className="vsc-welcome__logo" aria-hidden="true">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="white">
          <path d="M74.3 6.2L46.6 33.9 21.1 12.2 6.2 20.5v59l14.9 8.3 25.5-21.7 27.7 27.7L93.8 80V20L74.3 6.2zm0 62.6L55.5 50l18.8-18.8v37.6zM14.8 73.6V26.4L37 50 14.8 73.6z" />
        </svg>
      </div>

      <div
        className="vsc-welcome__shortcuts"
        role="list"
        aria-label="Raccourcis clavier"
      >
        <div className="vsc-welcome__shortcut" role="listitem">
          <span className="vsc-welcome__shortcut-label">Open Chat</span>
          <div className="vsc-welcome__keys">
            <kbd className="vsc-key">Ctrl</kbd>
            <kbd className="vsc-key">Alt</kbd>
            <kbd className="vsc-key">I</kbd>
          </div>
        </div>
        <div className="vsc-welcome__shortcut" role="listitem">
          <span className="vsc-welcome__shortcut-label">Show All Commands</span>
          <div className="vsc-welcome__keys">
            <kbd className="vsc-key">Ctrl</kbd>
            <kbd className="vsc-key">Shift</kbd>
            <kbd className="vsc-key">P</kbd>
          </div>
        </div>
        <div className="vsc-welcome__shortcut" role="listitem">
          <span className="vsc-welcome__shortcut-label">Open Settings</span>
          <div className="vsc-welcome__keys">
            <kbd className="vsc-key">Ctrl</kbd>
            <kbd className="vsc-key">,</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
