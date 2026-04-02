"use client";

export default function VSCodeTopBar() {
  return (
    <div className="flex items-center h-full px-4 bg-[#3c3c3c] text-sm text-gray-200 select-none">
      <span className="mr-4 font-semibold">Portfolio VSCode</span>

      <div className="flex gap-4 text-gray-300">
        <span className="hover:text-white cursor-default">File</span>
        <span className="hover:text-white cursor-default">Edit</span>
        <span className="hover:text-white cursor-default">Selection</span>
        <span className="hover:text-white cursor-default">View</span>
        <span className="hover:text-white cursor-default">Go</span>
        <span className="hover:text-white cursor-default">Run</span>
        <span className="hover:text-white cursor-default">Terminal</span>
        <span className="hover:text-white cursor-default">Help</span>
      </div>
    </div>
  );
}
