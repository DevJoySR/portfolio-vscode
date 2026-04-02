'use client';

import { useState } from "react";
import ExplorerFolder from "./ExplorerFolder";
import ExplorerFile from "./ExplorerFile";
import type { ExplorerNode } from "./type";

interface Props {
  node: ExplorerNode;
  depth: number;
}

export default function ExplorerItem({ node, depth }: Props) {
  const [open, setOpen] = useState(false);

  const isFolder = node.type === "folder";

  return (
    <div>
      {isFolder && (
        <>
          <ExplorerFolder
            name={node.name}
            depth={depth}
            open={open}
            onClick={() => setOpen(!open)}
          />

          {open && node.children && (
            <div>
              {node.children.map((child) => (
                <ExplorerItem
                  key={child.name}
                  node={child}
                  depth={depth + 1}
                />
              ))}
            </div>
          )}
        </>
      )}

      {!isFolder && (
        <ExplorerFile
          name={node.name}
          depth={depth}
        />
      )}
    </div>
  );
}
