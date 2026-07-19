import type { Metadata } from "next";
import "@/app/globals.css";
import "@/styles/portfolio.css";
import { ReduxProvider } from "@/lib/redux/ReduxProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://adriensudja.fr"),
  title: "Adrien Sudja — Développeur Full-Stack & Créatif | Portfolio",
  icons: {
    icon: "/favicon.svg",
  },
  description:
    "Portfolio de développeur web full-stack. Spécialisé Next.js, React, TypeScript et Java. Étudiant BTS SIO SLAM, futur bachelier Epitech Rennes. Disponible pour alternance.",
  authors: [{ name: "Adrien Sudja" }],
  keywords: [
    "développeur web",
    "full-stack",
    "Next.js",
    "React",
    "TypeScript",
    "portfolio",
    "Rennes",
  ],
  openGraph: {
    title: "Adrien Sudja — Développeur Full-Stack",
    description:
      "Portfolio développeur web full-stack. Next.js, React, TypeScript, Java.",
    url: "https://adriensudja.fr",
    siteName: "Portfolio — Adrien Sudja",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Adrien Sudja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrien Sudja — Développeur Full-Stack",
    images: ["/og-image.png"],
    description:
      "Portfolio développeur web full-stack. Next.js, React, TypeScript, Java.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
