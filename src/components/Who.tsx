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

      <div className="flex flex-1 flex-col justify-end gap-8">
        <span className="flex items-end justify-between font-secondary">
          <span className="text-xs normal-case">
            <p>=</p>
            <p>0x9FDC</p>
          </span>

          <p className="text-sm">matias@matnac.dev</p>
        </span>

        <span className="flex justify-between font-secondary text-xs">
          <p>{`//_`}</p>
          <p>&lt;&lt;</p>
        </span>

        <div className="flex flex-col gap-2">
          <p className="flex items-center justify-end gap-1 font-secondary text-sm text-secondary">
            <Clock aria-hidden className="h-3 w-3" /> Buenos Aires, 7:34 (GMT-3)
          </p>

          <p className="flex items-baseline justify-end gap-1 text-2xl">
            <Pin aria-hidden className="h-auto w-7 sm:w-8 xl:w-11" /> Argentina
          </p>
        </div>
      </div>
    </section>
  );
}
