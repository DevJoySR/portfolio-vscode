import type { FileTab, SidebarPanel, ExplorerNode, FileLanguage } from '../type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ─── Arborescence statique du portfolio ───────────────────────────────────────
// isSystem: true = grisé, non-interactif (fichiers de config réels du projet)
// isSystem: false = cliquable, ouvre un onglet dans l'éditeur

export const EXPLORER_TREE: ExplorerNode[] = [
  {
    id: 'next',
    label: '.next',
    type: 'folder',
    isSystem: true,
    children: [],
  },
  {
    id: 'node_modules',
    label: 'node_modules',
    type: 'folder',
    isSystem: true,
    children: [],
  },
  {
    id: 'public',
    label: 'public',
    type: 'folder',
    isSystem: false,
    isOpen: true,
    children: [
      {
        id: 'about_me',
        label: 'a_propos.ts',
        type: 'file',
        language: 'typescript',
        isSystem: false,
      },
      {
        id: 'resume',
        label: 'cv.pdf',
        type: 'file',
        language: 'pdf',
        isSystem: false,
      },
    ],
  },
  {
    id: 'src',
    label: 'src',
    type: 'folder',
    isSystem: false,
    isOpen: true,
    children: [
      {
        id: 'components',
        label: 'components',
        type: 'folder',
        isSystem: false,
        isOpen: false,
        children: [
          {
            id: 'skills',
            label: 'competences.tsx',
            type: 'file',
            language: 'typescriptreact',
            isSystem: false,
          },
          {
            id: 'projects',
            label: 'projets.tsx',
            type: 'file',
            language: 'typescriptreact',
            isSystem: false,
          },
        ],
      },
      {
        id: 'contact',
        label: 'contact.tsx',
        type: 'file',
        language: 'typescriptreact',
        isSystem: false,
      },
    ],
  },
  // ── Fichiers système racine (non-cliquables) ──
  { id: 'gitignore', label: '.gitignore', type: 'file', isSystem: true },
  { id: 'next_config', label: 'next.config.ts', type: 'file', isSystem: true },
  { id: 'pkg_lock', label: 'package-lock.json', type: 'file', isSystem: true },
  { id: 'pkg', label: 'package.json', type: 'file', isSystem: true },
  { id: 'postcss', label: 'postcss.config.mjs', type: 'file', isSystem: true },
  { id: 'tsconfig', label: 'tsconfig.json', type: 'file', isSystem: true },
];

// ─── State ────────────────────────────────────────────────────────────────────

export interface ExplorerState {
  tree: ExplorerNode[];
  openTabs: FileTab[];
  activeTabId: string | null;
  selectedFileId: string | null;   // surligné dans l'explorer
  activePanel: SidebarPanel;
  sidebarOpen: boolean;
}

const initialState: ExplorerState = {
  tree: EXPLORER_TREE,
  openTabs: [
    {
      id: 'about_me',
      label: 'a_propos.ts',
      language: 'typescript',
      isDirty: false,
      isPreview: false,
    },
  ],
  activeTabId: 'about_me',
  selectedFileId: 'about_me',
  activePanel: 'explorer',
  sidebarOpen: true,
};

// ─── Slice ────────────────────────────────────────────────────────────────────

const explorerSlice = createSlice({
  name: 'explorer',
  initialState,
  reducers: {
    // Ouvre un fichier : crée l'onglet s'il n'existe pas, l'active
    openFile(state, action: PayloadAction<{ id: string; label: string; language: FileLanguage }>) {
      const { id, label, language } = action.payload;
      const exists = state.openTabs.find((t) => t.id === id);

      if (!exists) {
        state.openTabs.push({
          id,
          label,
          language,
          isDirty: false,
          isPreview: false,
        });
      }

      state.activeTabId = id;
      state.selectedFileId = id;
    },

    // Ferme un onglet, active le suivant/précédent automatiquement
    closeTab(state, action: PayloadAction<string>) {
      const idx = state.openTabs.findIndex((t) => t.id === action.payload);
      if (idx === -1) return;

      state.openTabs.splice(idx, 1);

      if (state.activeTabId === action.payload) {
        // Active l'onglet adjacent
        const next = state.openTabs[idx] ?? state.openTabs[idx - 1] ?? null;
        state.activeTabId = next?.id ?? null;
      }
    },

    // Change l'onglet actif
    setActiveTab(state, action: PayloadAction<string>) {
      state.activeTabId = action.payload;
      state.selectedFileId = action.payload;
    },

    // Toggle le panel sidebar (re-click = ferme)
    setActivePanel(state, action: PayloadAction<SidebarPanel>) {
      if (state.activePanel === action.payload && state.sidebarOpen) {
        state.sidebarOpen = false;
        state.activePanel = null;
      } else {
        state.activePanel = action.payload;
        state.sidebarOpen = true;
      }
    },

    // Toggle ouverture d'un dossier dans l'arbre
    toggleFolder(state, action: PayloadAction<string>) {
      const toggle = (nodes: ExplorerNode[]): boolean => {
        for (const node of nodes) {
          if (node.id === action.payload && node.type === 'folder') {
            node.isOpen = !node.isOpen;
            return true;
          }
          if (node.children && toggle(node.children)) return true;
        }
        return false;
      };
      toggle(state.tree);
    },

     openFolder(state, action: PayloadAction<string>) {
      const open = (nodes: ExplorerNode[]): boolean => {
        for (const node of nodes) {
          if (node.id === action.payload && node.type === 'folder') {
            node.isOpen = true;
            return true;
          }
          if (node.children && open(node.children)) return true;
        }
        return false;
      };
      open(state.tree);
    },

    // Sélectionne un fichier dans l'explorer sans l'ouvrir
    selectFile(state, action: PayloadAction<string>) {
      state.selectedFileId = action.payload;
    },
  },
});

export const {
  openFile,
  closeTab,
  setActiveTab,
  setActivePanel,
  openFolder,
  toggleFolder,
  selectFile,
} = explorerSlice.actions;

export default explorerSlice.reducer;