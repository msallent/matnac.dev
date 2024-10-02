import Image from "next/image";
import { Arrow, Stars } from "@/icons";
import { Sections } from "./Sections";

export function Showcase() {
  return (
    <section id="showcase" className="section">
      <div className="flex flex-1 justify-between font-secondary text-xs">
        <div className="flex flex-1 gap-8 xl:hidden">
          <span>
            <p>&gt;&gt;</p>
            <p>&gt;&gt;</p>
          </span>

          <p>&gt;&gt;</p>
        </div>

        <Sections current="showcase" />

        <p className="text-right font-secondary text-sm">matias@matnac.dev</p>
      </div>

      <div className="flex flex-col items-center pt-11 xl:pt-12">
        <h1 className="flex flex-col items-center gap-1 xl:relative xl:-ml-[3.25rem] xl:flex-row xl:items-start">
          <span className="relative w-fit xl:mt-1">
            <p className="text-lg">(03)</p>
            <Stars aria-hidden className="absolute bottom-1/2 right-[-70%] w-12 xl:hidden" />
          </span>

          <p className="text-2xl">Showcase</p>

          <Stars
            aria-hidden
            className="hidden xl:absolute xl:bottom-[70%] xl:right-[-10%] xl:block xl:w-16"
          />
        </h1>

        <div className="relative">
          <a href="https://casayen.com" target="_blank" rel="noreferrer">
            <Image
              src="/yen-home.png"
              width={536}
              height={334}
              quality={100}
              alt="Screenshot of Casa Yen's website"
              className="-my-1.5 w-[268px] sm:w-[310px] xl:-my-2.5 xl:w-[420px]"
            />
          </a>

          <Arrow
            aria-hidden
            className="absolute -right-4 top-1/2 h-9 w-9 -translate-y-1/2 xl:-right-8 xl:h-14 xl:w-14"
          />
        </div>

        <span className="text-center text-2xl xl:flex">
          <p>CasaYen</p>
          <p>.com</p>
        </span>
      </div>

      <div className="flex flex-1 items-end">
        <p className="font-secondary text-xs">00101</p>
      </div>
    </section>
  );
}
