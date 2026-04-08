// Types partagés pour tout le portfolio VSCode

export type SidebarPanel = 'explorer' | 'search' | 'git' | null;

export type FileLanguage =
  | 'typescript'
  | 'typescriptreact'
  | 'pdf'
  | 'json'
  | 'markdown';

export interface FileTab {
  id: string;           // identifiant unique = nom du fichier
  label: string;        // nom affiché dans l'onglet
  language: FileLanguage;
  isDirty: boolean;     // point orange si modifications non sauvées
  isPreview: boolean;   // italique si preview (single-click)
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