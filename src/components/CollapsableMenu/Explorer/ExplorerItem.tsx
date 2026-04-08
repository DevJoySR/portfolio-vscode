// src/components/CollapsableMenu/Explorer/ExplorerItem.tsx
import Image from "next/image";
import type { ExplorerNode } from "@/lib/redux/type";
import React from "react";

const CDN =
  "https://cdn.jsdelivr.net/gh/material-extensions/vscode-material-icon-theme@main/icons";

const FILE_ICON_MAP: Record<string, string> = {
  tsx: "react_ts",
  ts: "typescript",
  mjs: "javascript",
  cjs: "javascript",
  css: "css",
  json: "json",
  md: "markdown",
  pdf: "pdf",
  env: "dotenv",
  gitignore: "git",
  lock: "lock",
  svg: "svg",
  png: "image",
  jpg: "image",
  ico: "favicon",
};

const FOLDER_ICON_MAP: Record<string, string> = {
  src: "folder-src",
  components: "folder-components",
  public: "folder-public",
  styles: "folder-css",
  experience: "folder-project",
  next: "folder-next",
  node_modules: "folder-node",
};

const FILE_NAME_MAP: Record<string, string> = {
  "postcss.config": "postcss",
  "tailwind.config": "tailwind",
  "next.config": "next",
  tsconfig: "tsconfig",
  package: "nodejs",
  "package-lock": "nodejs",
  ".eslintrc": "eslint",
  ".prettierrc": "prettier",
  ".gitignore": "git",
  ".env": "dotenv",
  ".env.local": "dotenv",
};

// ── Icône dossier ───────────────────────────────────────────────────────────
interface FolderIconProps {
  id: string;
  isOpen: boolean;
}

function FolderIcon({ id, isOpen }: FolderIconProps) {
  const [errored, setErrored] = React.useState(false);
  const base = FOLDER_ICON_MAP[id] ?? "folder";
  const iconName = errored ? "folder" : isOpen ? `${base}-open` : base;

  return (
    <span
      style={{ width: 16, height: 16, display: "inline-flex", flexShrink: 0 }}
    >
      <Image
        src={`${CDN}/${iconName}.svg`}
        width={16}
        height={16}
        alt=""
        aria-hidden
        unoptimized
        onError={() => setErrored(true)}
      />
    </span>
  );
}

// ── Icône fichier ───────────────────────────────────────────────────────────
function FileIcon({ node }: { node: ExplorerNode }) {
  const [errored, setErrored] = React.useState(false);

  if (node.type === "folder") {
    return <FolderIcon id={node.id} isOpen={node.isOpen ?? false} />;
  }

  const name = node.label.toLowerCase();
  const ext = name.split(".").pop() ?? "";
  // Nom sans extension (ex: "postcss.config" depuis "postcss.config.mjs")
  const nameNoExt = name.includes(".")
    ? name.substring(0, name.lastIndexOf("."))
    : name;
  const specialName = name.startsWith(".") ? name.slice(1) : null;

  const iconName = errored
    ? "file"
    : (FILE_NAME_MAP[nameNoExt] ??
      FILE_NAME_MAP[name] ??
      (specialName && FILE_ICON_MAP[specialName]) ??
      FILE_ICON_MAP[ext] ??
      "file");

  return (
    <Image
      src={`${CDN}/${iconName}.svg`}
      width={16}
      height={16}
      alt=""
      aria-hidden
      unoptimized
      style={{ opacity: node.isSystem ? 0.4 : 1 }}
      onError={() => setErrored(true)}
    />
  );
}

// ── Export ──────────────────────────────────────────────────────────────────
export function ExplorerItem({ node }: { node: ExplorerNode }) {
  return (
    <>
      <FileIcon node={node} />
      <span className="vsc-tree-row__label">{node.label}</span>
    </>
  );
}
