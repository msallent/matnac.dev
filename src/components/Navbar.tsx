import { clsx } from "clsx";

const SECTIONS = ["who", "dev", "showcase", "reviews", "contact"] as const;

type NavbarProps = {
  current: (typeof SECTIONS)[number];
};

export function Navbar({ current }: NavbarProps) {
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
