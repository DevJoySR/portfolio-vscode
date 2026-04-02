"use client";

import ExplorerSection from "./ExplorerSection";
import ExplorerFolder from "./ExplorerFolder";
import { useAppSelector } from "@/lib/redux/hooks";

export default function Explorer() {
  const tree = useAppSelector((state) => state.explorer.tree);

  return (
    <div className="flex flex-col flex-1 select-none">
      <ExplorerSection title="PORTFOLIO">
        {tree.map((node) =>
          node.type === "folder" ? (
            <ExplorerFolder key={node.id} node={node} depth={0} />
          ) : null,
        )}
      </ExplorerSection>
    </div>
  );
}
