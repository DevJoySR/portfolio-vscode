'use client';

import { FolderRegular, FolderOpenRegular } from "@fluentui/react-icons";

interface Props {
  name: string;
  depth: number;
  open: boolean;
  onClick: () => void;
}

export default function ExplorerFolder({ name, depth, open, onClick }: Props) {
  return (
    <div
      className="flex items-center cursor-pointer hover:bg-[#2a2d2e] py-0.5"
      style={{ paddingLeft: depth * 12 }}
      onClick={onClick}
    >
      <span className="text-gray-400 mr-1">
        {open ? "▼" : "▶"}
      </span>

      {open ? (
        <FolderOpenRegular className="text-yellow-400 mr-1" />
      ) : (
        <FolderRegular className="text-yellow-400 mr-1" />
      )}

      <span>{name}</span>
    </div>
  );
}
