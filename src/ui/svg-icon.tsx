export type ToolIconKind = 'SVG_PATH' | 'SVG' | 'IMAGE_URL';

export default function SvgIcon({
  title,
  kind,
  svgPath,
  svgMarkup,
  imageUrl,
  color,
  needsWhiteBg,
}: {
  title: string;
  kind: ToolIconKind;
  svgPath?: string | null;
  svgMarkup?: string | null;
  imageUrl?: string | null;
  color?: string | null;
  needsWhiteBg?: boolean;
}) {
  const hasSvgPath = kind === 'SVG_PATH' && !!svgPath;
  const hasSvgMarkup = kind === 'SVG' && !!svgMarkup;
  const hasImage = kind === 'IMAGE_URL' && !!imageUrl;

  const placeholder = title
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');

  return (
    <div className={`rounded-lg p-2 ${needsWhiteBg ? 'bg-white' : ''}`}>
      {hasSvgPath && (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill={color ?? 'white'}
        >
          <title>{title}</title>
          <path d={svgPath as string} />
        </svg>
      )}

      {hasSvgMarkup && (
        <span
          className="block h-12 w-12"
          role="img"
          aria-label={title}
          dangerouslySetInnerHTML={{ __html: svgMarkup as string }}
        />
      )}

      {hasImage && (
        <img
          src={imageUrl as string}
          alt={title}
          className="h-12 w-12 object-contain"
        />
      )}

      {!hasSvgPath && !hasSvgMarkup && !hasImage && (
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-xs font-bold text-white">
          {placeholder}
        </div>
      )}
    </div>
  );
}
