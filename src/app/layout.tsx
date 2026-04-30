import type { Metadata } from "next";
import "./globals.css";
import "@/styles/vscode.css";
import "@/styles/portfolio.css";
import { ReduxProvider } from "@/lib/redux/ReduxProvider";

export const metadata: Metadata = {
  title: "Joy — Portfolio",
  description: "Portfolio développeur web — Next.js · React · TypeScript",
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
