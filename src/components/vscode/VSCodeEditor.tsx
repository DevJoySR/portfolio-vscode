'use client';

import { useAppSelector } from "@/lib/redux/hooks";
import Editor from "@monaco-editor/react";

export default function VSCodeEditor() {
  const selectedFile = useAppSelector((state) => state.explorer.selectedFile);

  return (
    <div className="h-full w-full overflow-hidden">
      {!selectedFile && (
        <div className="text-gray-500 text-sm italic p-4">
          No file selected.
          <br />
          Select a file from the Explorer to display its content.
        </div>
      )}

      {selectedFile && (
        <Editor
          height="100%"
          defaultLanguage="typescript"
          defaultValue={`// ${selectedFile}\n// Your code here...`}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            smoothScrolling: true,
            scrollBeyondLastLine: false,
          }}
        />
      )}
    </div>
  );
}
