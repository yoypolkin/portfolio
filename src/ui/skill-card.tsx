'use client';

import SvgIcon from './svg-icon';
import { hankenGrotesk } from './fonts';
import { useSearchParams } from 'next/navigation';

type ToolIconKind = 'SVG_PATH' | 'SVG' | 'IMAGE_URL';

type Tool = {
  id: string;
  title: string;
  iconKind: ToolIconKind;
  svgPath: string | null;
  svgMarkup: string | null;
  imageUrl: string | null;
  color: string | null;
  needsWhiteBg: boolean;
  order: number;
};

export default function SkillCards({ tools }: { tools: Tool[] }) {
  const searchValue = useSearchParams().get('s');
  let filteredTools: Tool[] = tools;

  if (searchValue) {
    filteredTools = tools.filter((tool) =>
      tool.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  if (filteredTools.length === 0) {
    return (
      <div className="text-white">
        <p className="mb-2">No results by the given search parameters.</p>
      </div>
    );
  }

  return filteredTools.map((tool) => {
    return (
      <div
        key={tool.title}
        className={`${hankenGrotesk.className} flex flex-col items-center justify-between gap-4 rounded-xl bg-white/5 p-4 transition-all hover:-translate-y-1 hover:scale-105 hover:bg-white/10`}
      >
        <SvgIcon
          title={tool.title}
          kind={tool.iconKind}
          svgPath={tool.svgPath}
          svgMarkup={tool.svgMarkup}
          imageUrl={tool.imageUrl}
          color={tool.color ?? undefined}
          needsWhiteBg={tool.needsWhiteBg}
        />
        <p className="text-white">{tool.title}</p>
      </div>
    );
  });
}
