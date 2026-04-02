'use client';

import {
  DocumentFolderRegular,
  SearchRegular,
  BranchForkRegular,
  BugRegular,
  PuzzleCubeRegular,
} from "@fluentui/react-icons";

export default function VSCodeActivityBar() {
  return (
    <div className="flex flex-col items-center py-3 text-gray-400 text-xl select-none">

      <div className="mb-4 cursor-pointer hover:text-white">
        <DocumentFolderRegular fontSize={22} />
      </div>

      <div className="mb-4 cursor-pointer hover:text-white">
        <SearchRegular fontSize={22} />
      </div>

      <div className="mb-4 cursor-pointer hover:text-white">
        <BranchForkRegular fontSize={22} />
      </div>

      <div className="mb-4 cursor-pointer hover:text-white">
        <BugRegular fontSize={22} />
      </div>

      <div className="mb-4 cursor-pointer hover:text-white">
        <PuzzleCubeRegular fontSize={22} />
      </div>

    </div>
  );
}
