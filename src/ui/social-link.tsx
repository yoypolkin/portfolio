import Link from 'next/link';

export default function SocialLink({
  href,
  title,
  svgPath,
}: {
  href: string;
  title: string;
  svgPath: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-white/70 transition hover:text-white"
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
      >
        <title>{title}</title>
        <path d={svgPath} />
      </svg>
    </Link>
  );
}
