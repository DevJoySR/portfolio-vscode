"use client";

import Explorer from "@/components/CollapsableMenu/Explorer/Explorer";

export default function VSCodeSideBar() {
  return (
    <div className="w-60 bg-[#252526] border-r border-[#3c3c3c] overflow-auto">
      <Explorer />
    </div>
  );
}
