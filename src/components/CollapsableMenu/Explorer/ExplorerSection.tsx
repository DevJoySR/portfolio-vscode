"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  toggleFolder,
  openFile,
  selectFile,
} from "@/lib/redux/slices/explorerSlice";
import type { ExplorerNode } from "@/lib/redux/type";
import { ExplorerItem } from "./ExplorerItem";

interface Props {
  node: ExplorerNode;
  depth: number;
}

function moveTreeFocus(
  currentElement: HTMLElement,
  direction: "previous" | "next",
) {
  const tree = currentElement.closest('[role="tree"]');

  if (!tree) return;

  const items = Array.from(
    tree.querySelectorAll<HTMLElement>(
      '[role="treeitem"]:not([aria-disabled="true"])',
    ),
  ).filter((item) => item.offsetParent !== null);

  const currentIndex = items.indexOf(currentElement);

  if (currentIndex === -1) return;

  const nextIndex =
    direction === "next"
      ? (currentIndex + 1) % items.length
      : (currentIndex - 1 + items.length) % items.length;

  items[nextIndex]?.focus();
}

export function ExplorerSection({ node, depth }: Props) {
  const dispatch = useAppDispatch();
  const { selectedFileId } = useAppSelector((s) => s.explorer);

  const isSelected = selectedFileId === node.id;
  const indent = depth * 8;

  // ── Dossier ────────────────────────────────────────────────────────────────
  if (node.type === "folder") {
    return (
      <>
        <div
          role="treeitem"
          aria-expanded={node.isOpen}
          aria-selected={isSelected}
          aria-disabled={node.isSystem || undefined}
          className={`vsc-tree-row${node.isSystem ? " vsc-tree-row--system" : ""}${isSelected ? " vsc-tree-row--selected" : ""}`}
          style={{ paddingLeft: indent + 4 }}
          onClick={() => {
            if (node.isSystem) return;
            dispatch(toggleFolder(node.id));
            dispatch(selectFile(node.id));
          }}
          tabIndex={node.isSystem ? -1 : isSelected ? 0 : -1}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              moveTreeFocus(e.currentTarget, "next");
              return;
            }

            if (e.key === "ArrowUp") {
              e.preventDefault();
              moveTreeFocus(e.currentTarget, "previous");
              return;
            }

            if (e.key === "ArrowRight" && !node.isOpen) {
              e.preventDefault();

              if (!node.isSystem) {
                dispatch(toggleFolder(node.id));
                dispatch(selectFile(node.id));
              }

              return;
            }

            if (e.key === "ArrowRight" && node.isOpen) {
              e.preventDefault();

              const currentItem = e.currentTarget;
              const group = currentItem.nextElementSibling;

              if (group?.getAttribute("role") === "group") {
                const firstChild =
                  group.querySelector<HTMLElement>('[role="treeitem"]');

                firstChild?.focus();
              }

              return;
            }

            if (e.key === "ArrowLeft" && node.isOpen) {
              e.preventDefault();

              if (!node.isSystem) {
                dispatch(toggleFolder(node.id));
                dispatch(selectFile(node.id));
              }

              return;
            }

            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();

              if (!node.isSystem) {
                dispatch(toggleFolder(node.id));
                dispatch(selectFile(node.id));
              }
            }
          }}
        >
          {/* Flèche */}
          <span
            className={`vsc-tree-row__arrow${node.isOpen ? "" : " vsc-tree-row__arrow--closed"}`}
          >
            ›
          </span>

          {/* Icône dossier */}
          <ExplorerItem node={node} />
        </div>

        {/* Enfants — rendus uniquement si ouvert */}
        {node.isOpen && node.children && (
          <div role="group">
            {node.children.map((child) => (
              <ExplorerSection key={child.id} node={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </>
    );
  }

  // ── Fichier ────────────────────────────────────────────────────────────────
  return (
    <div
      role="treeitem"
      aria-selected={isSelected}
      aria-disabled={node.isSystem || undefined}
      className={`vsc-tree-row vsc-tree-row--file${node.isSystem ? " vsc-tree-row--system" : ""}${isSelected ? " vsc-tree-row--selected" : ""}`}
      style={{ paddingLeft: indent + 20 }}
      onClick={() => {
        if (node.isSystem || !node.language) return;
        dispatch(
          openFile({ id: node.id, label: node.label, language: node.language }),
        );
      }}
      tabIndex={node.isSystem ? -1 : isSelected ? 0 : -1}
      onKeyDown={(e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          moveTreeFocus(e.currentTarget, "next");
          return;
        }

        if (e.key === "ArrowUp") {
          e.preventDefault();
          moveTreeFocus(e.currentTarget, "previous");
          return;
        }

        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();

          if (!node.isSystem && node.language) {
            dispatch(
              openFile({
                id: node.id,
                label: node.label,
                language: node.language,
              }),
            );
          }
        }
      }}
    >
      <ExplorerItem node={node} />
    </div>
  );
}
