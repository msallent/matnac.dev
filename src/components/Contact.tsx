import { Arrow, GitHub, LinkedIn } from "@/icons";
import { Sections } from "./Sections";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="xl:flex xl:justify-between">
        <Sections current="contact" />

        <h1 className="flex justify-end text-secondary">
          <span className="mt-[2.5px] text-lg">(05)</span>
          <span className="text-2xl">Contact</span>
        </h1>
      </div>

      <div className="flex items-center justify-between">
        <p className="font-secondary text-sm">Drop me a line</p>

        <span className="flex gap-4 xl:hidden">
          <a
            href="https://github.com/msallent"
            target="_blank"
            rel="noreferrer"
            aria-label="Matias' GitHub profile"
          >
            <GitHub className="h-7 w-7 sm:h-8 sm:w-8" />
          </a>

          <a
            href="https://linkedin.com/in/matias-sallent"
            target="_blank"
            rel="noreferrer"
            aria-label="Matias' LinkedIn profile"
          >
            <LinkedIn className="h-7 w-7 sm:h-8 sm:w-8" />
          </a>
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        <div className="flex justify-between">
          <Arrow className="ml-0.5 h-9 w-9 xl:ml-1.5 xl:h-16 xl:w-16" />

          <div className="flex gap-8 font-secondary text-xs">
            <span>
              <p>&lt;&lt;</p>
              <p>&lt;&lt;</p>
            </span>

            <p>&lt;&lt;</p>
          </div>
        </div>

        <div className="xl:flex xl:items-end xl:justify-between">
          <span className="text-xl sm:text-2xl">
            <p>matias</p>
            <p>@matnac.dev</p>
          </span>

          <span className="hidden xl:flex xl:gap-4">
            <a
              href="https://github.com/msallent"
              target="_blank"
              rel="noreferrer"
              aria-label="Matias' GitHub profile"
            >
              <GitHub className="xl:h-10 xl:w-10" />
            </a>

            <a
              href="https://linkedin.com/in/matias-sallent"
              target="_blank"
              rel="noreferrer"
              aria-label="Matias' LinkedIn profile"
            >
              <LinkedIn className="xl:h-10 xl:w-10" />
            </a>
          </span>
        </div>

        <footer className="mt-[1.125rem] text-center sm:text-left">
          <p className="font-secondary text-xs">Matnac LLC, 8 the Green STE B, Dover, DE 19901</p>
        </footer>
      </div>
    </section>
  );
}
