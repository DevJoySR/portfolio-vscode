"use client";

export default function VSCodeStatusBar() {
  return (
    <div className="flex items-center justify-between w-full h-full text-white text-xs select-none">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>LF</span>
        <span>TypeScript React</span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <span>Prettier</span>
        <span>Go Live</span>
      </div>
    </div>
  );
}
