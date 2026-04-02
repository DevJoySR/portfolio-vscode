'use client';

import ExplorerSection from "./ExplorerSection";
import ExplorerItem from "./ExplorerItem";
import type { ExplorerNode } from "./type";

export default function Explorer() {
  const tree: ExplorerNode[] = [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "app",
          type: "folder",
          children: [
            { name: "layout.tsx", type: "file" },
            { name: "page.tsx", type: "file" },
          ],
        },
        {
          name: "components",
          type: "folder",
          children: [
            { name: "Header.tsx", type: "file" },
            { name: "Footer.tsx", type: "file" },
          ],
        },
      ],
    },
    {
      name: "package.json",
      type: "file",
    },
  ];

  return (
    <div className="text-xs text-gray-300 select-none">
      <ExplorerSection title="Explorer">
        {tree.map((node: ExplorerNode) => (
          <ExplorerItem key={node.name} node={node} depth={0} />
        ))}
      </ExplorerSection>
    </div>
  );
}
