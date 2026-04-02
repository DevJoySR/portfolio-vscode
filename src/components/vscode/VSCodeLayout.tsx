'use client';

import VSCodeTopBar from "./VSCodeTopBar";
import VSCodeActivityBar from "./VSCodeActivityBar";
import VSCodeSideBar from "./VSCodeSideBar";
import VSCodeEditor from "./VSCodeEditor";
import VSCodeStatusBar from "./VSCodeStatusBar";

export default function VSCodeLayout() {
  return (
    <div className="flex flex-col h-screen w-full bg-[#1e1e1e] text-gray-200 overflow-hidden">

      {/* Top Bar */}
      <div className="h-8 border-b border-[#3c3c3c]">
        <VSCodeTopBar />
      </div>

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden">

        {/* Activity Bar */}
        <div className="w-12 bg-[#333333] border-r border-[#3c3c3c]">
          <VSCodeActivityBar />
        </div>

        {/* Side Bar */}
        <VSCodeSideBar />

        {/* Editor */}
        <div className="flex-1 bg-[#1e1e1e] overflow-hidden">
          <VSCodeEditor />
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] text-white text-xs flex items-center px-3">
        <VSCodeStatusBar />
      </div>
    </div>
  );
}
