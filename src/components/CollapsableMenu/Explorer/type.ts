export type FileLanguage = "typescript" | "typescriptreact" | "pdf";

export type SidebarPanel = "explorer" | "search" | "git" | "extensions" | null;

export interface FileTab {
  id: string;
  label: string;
  language: FileLanguage;
  isDirty: boolean;
  isPreview: boolean;
}

export interface ExplorerNode {
  id: string;
  label: string;
  type: "file" | "folder";
  isOpen?: boolean;
  isSystem?: boolean;
  language?: FileLanguage;
  children?: ExplorerNode[];
}