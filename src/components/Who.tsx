import { Navbar, Time } from "@/components";
import { Clock, Pin } from "@/icons";

export function Who() {
  return (
    <section id="who" className="section">
      <div className="flex flex-1 justify-between">
        <p className="font-secondary text-xs lg:hidden">00101</p>
        <Navbar current="who" />

        <h1 className="flex justify-end text-secondary">
          <span className="mt-[2.5px] text-lg">(01)</span>
          <span className="text-2xl">Who</span>
        </h1>
      </div>

      <span className="flex flex-col text-2xl">
        <p>Matias Sallent</p>
        <p className="text-right">(Engineer Manager)</p>
      </span>

      <div className="flex flex-1 flex-col justify-end gap-8 sm:gap-10 lg:gap-16">
        <span className="flex items-end justify-between font-secondary">
          <span className="lg:flex lg:flex-col lg:gap-8">
            <span className="text-xs normal-case">
              <p>=</p>
              <p>0x9FDC</p>
            </span>

            <p className="hidden lg:flex lg:text-xs">{`//_`}</p>
          </span>

          <p className="text-sm lg:hidden">matias@matnac.dev</p>
        </span>

        <span className="flex justify-between font-secondary text-xs lg:hidden">
          <p>{`//_`}</p>
          <p>&lt;&lt;</p>
        </span>

        <div className="lg:flex lg:justify-between">
          <span className="flex flex-col gap-2 lg:flex-row lg:gap-0">
            <p className="flex items-center justify-end gap-1 font-secondary text-sm text-secondary lg:order-1 lg:items-start">
              <Clock aria-hidden className="h-3 w-3 lg:mt-px" />

              <span className="flex gap-0.5 lg:flex-col lg:gap-0">
                <span>Buenos Aires,</span> <Time />
              </span>
            </p>

            <p className="flex items-baseline justify-end gap-1 text-2xl">
              <Pin aria-hidden className="h-auto w-7 sm:w-9 lg:w-10 xl:w-11 2xl:w-14" /> Argentina
            </p>
          </span>

          <span className="hidden lg:flex lg:flex-col lg:items-end lg:justify-between lg:font-secondary lg:text-sm">
            <p>&lt;&lt;</p>
            <p>matias@matnac.dev</p>
          </span>
        </div>
      </div>
    </section>
  );
}
