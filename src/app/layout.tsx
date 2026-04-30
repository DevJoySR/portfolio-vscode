import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/vscode.css";
import "@/styles/portfolio.css";
import { ReduxProvider } from "@/lib/redux/ReduxProvider";

export const metadata: Metadata = {
  title: "Adrien Sudja — Développeur Full-Stack",
  description:
    "Portfolio développeur web full-stack. Next.js, React, TypeScript, Java. Étudiant BTS SIO SLAM, futur bachelier Epitech Rennes.",
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
    url: "https://portfolio-vscode-2t1rzik4q-devjoysrs-projects.vercel.app/",
    siteName: "Portfolio — Adrien Sudja",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrien Sudja — Développeur Full-Stack",
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
