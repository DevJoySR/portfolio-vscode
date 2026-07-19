"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "16px",
        padding: "24px",
        textAlign: "center",
        background: "var(--vsc-bg)",
        color: "var(--vsc-fg)",
        fontFamily: "var(--vsc-font-mono)",
      }}
    >
      <p style={{ color: "var(--vsc-error)", fontSize: "13px" }}>
        {"// Une erreur inattendue est survenue"}
      </p>
      <h2 style={{ fontSize: "18px", fontWeight: 600 }}>
        Impossible de charger cette vue
      </h2>
      <button
        onClick={() => unstable_retry()}
        style={{
          padding: "10px 22px",
          borderRadius: "8px",
          border: "1px solid var(--vsc-accent)",
          background: "transparent",
          color: "var(--vsc-accent)",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Réessayer
      </button>
    </div>
  );
}
