import Image from "next/image";
import { Arrow, Stars } from "@/icons";

export function Showcase() {
  return (
    <section id="showcase" className="section">
      <div className="flex justify-between font-secondary text-xs">
        <div className="flex flex-1 gap-8">
          <span>
            <p>&gt;&gt;</p>
            <p>&gt;&gt;</p>
          </span>

          <p>&gt;&gt;</p>
        </div>

        <p className="text-right font-secondary text-sm">matias@matnac.dev</p>
      </div>

      <div className="flex flex-col items-center pt-11">
        <h1 className="flex flex-col items-center gap-1">
          <span className="relative w-fit">
            <p className="text-lg">(03)</p>
            <Stars aria-hidden className="absolute -right-[70%] bottom-1/2 w-12" />
          </span>

          <p className="text-2xl">Showcase</p>
        </h1>

        <div className="relative">
          <a href="https://casayen.com" target="_blank" rel="noreferrer">
            <Image
              src="/yen-home.png"
              width={536}
              height={334}
              quality={100}
              alt="Screenshot of Casa Yen's website"
              className="-my-1.5 w-[268px] sm:w-[310px]"
            />
          </a>

          <Arrow aria-hidden className="absolute -right-4 top-1/2 h-9 w-9 -translate-y-1/2" />
        </div>

        <span className="text-center text-2xl">
          <p>CasaYen</p>
          <p>.com</p>
        </span>
      </div>

      <p className="font-secondary text-xs">00101</p>
    </section>
  );
}
