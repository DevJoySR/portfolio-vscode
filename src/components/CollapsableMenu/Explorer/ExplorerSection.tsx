'use client';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function ExplorerSection({ title, children }: Props) {
  return (
    <div className="mt-2">
      <div className="px-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
        {title}
      </div>

      <div className="border-b border-[#3c3c3c] my-1" />

      <div className="px-1">
        {children}
      </div>
    </div>
  );
}
