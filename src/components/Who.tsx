import { Clock, Pin } from "@/icons";
import { Sections } from "./Sections";

export function Who() {
  return (
    <section id="who" className="section">
      <div className="flex flex-1 justify-between">
        <p className="font-secondary text-xs xl:hidden">00101</p>
        <Sections current="who" />

        <h1 className="flex justify-end text-secondary">
          <span className="mt-[2.5px] text-lg">(01)</span>
          <span className="text-2xl">Who</span>
        </h1>
      </div>

      <span className="flex flex-col text-2xl">
        <p>Matias Sallent</p>
        <p className="text-right">(Tech Lead Engineer)</p>
      </span>

      <div className="flex flex-1 flex-col justify-end gap-8 xl:gap-16">
        <span className="flex items-end justify-between font-secondary">
          <span className="xl:flex xl:flex-col xl:gap-8">
            <span className="text-xs normal-case">
              <p>=</p>
              <p>0x9FDC</p>
            </span>

            <p className="hidden xl:flex xl:text-xs">{`//_`}</p>
          </span>

          <p className="text-sm xl:hidden">matias@matnac.dev</p>
        </span>

        <span className="flex justify-between font-secondary text-xs xl:hidden">
          <p>{`//_`}</p>
          <p>&lt;&lt;</p>
        </span>

        <div className="xl:flex xl:justify-between">
          <span className="flex flex-col gap-2 xl:flex-row xl:gap-0">
            <p className="flex items-center justify-end gap-1 font-secondary text-sm text-secondary xl:order-1 xl:items-start">
              <Clock aria-hidden className="h-3 w-3 xl:mt-px" />

              <span className="flex gap-0.5 xl:flex-col xl:gap-0">
                <span>Buenos Aires,</span> <span>7:34 (GMT-3)</span>
              </span>
            </p>

            <p className="flex items-baseline justify-end gap-1 text-2xl">
              <Pin aria-hidden className="h-auto w-7 sm:w-8 xl:w-11" /> Argentina
            </p>
          </span>

          <span className="hidden xl:flex xl:flex-col xl:items-end xl:justify-between xl:font-secondary xl:text-sm">
            <p>&lt;&lt;</p>
            <p>matias@matnac.dev</p>
          </span>
        </div>
      </div>
    </section>
  );
}
