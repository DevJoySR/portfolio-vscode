// Types partagés pour tout le portfolio VSCode

export type SidebarPanel = 'explorer' | 'search' | 'git' | null;

export type FileLanguage =
  | 'typescript'
  | 'typescriptreact'
  | 'pdf'
  | 'json'
  | 'markdown';

export interface FileTab {
  id: string;
  label: string;
  language: FileLanguage;
}

export interface ExplorerNode {
  id: string;
  label: string;
  type: 'file' | 'folder';
  language?: FileLanguage;
  isSystem: boolean;    // true = grisé, non-cliquable
  children?: ExplorerNode[];
  isOpen?: boolean;     // état ouvert/fermé des dossiers
}