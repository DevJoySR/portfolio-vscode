'use client';

import { useAppDispatch } from "@/lib/redux/hooks";
import { selectFile } from "@/lib/redux/slices/explorerSlice";
import { DocumentRegular } from "@fluentui/react-icons";

interface Props {
  name: string;
  depth: number;
}

export default function ExplorerFile({ name, depth }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div
      className="flex items-center cursor-pointer hover:bg-[#2a2d2e] py-0.5"
      style={{ paddingLeft: depth * 12 }}
      onClick={() => dispatch(selectFile(name))}
    >
      <DocumentRegular className="text-gray-400 mr-1" />
      <span>{name}</span>
    </div>
  );
}
