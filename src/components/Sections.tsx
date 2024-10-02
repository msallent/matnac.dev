import { clsx } from "clsx";

const SECTIONS = ["who", "dev", "showcase", "reviews", "contact"] as const;

type SectionsProps = {
  current: (typeof SECTIONS)[number];
};

export function Sections({ current }: SectionsProps) {
  return (
    <nav className="hidden lg:block">
      <ol className="font-secondary text-sm">
        {SECTIONS.map((section, index) => (
          <li key={index} className={clsx("flex gap-2", { "font-bold": section === current })}>
            <span className="w-[16px]">{`0${index + 1}`}</span>
            <a className="hover:underline" href={`#${section}`}>
              {section}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
