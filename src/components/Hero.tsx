import { Matnac, Plus } from "@/icons";

export function Hero() {
  return (
    <section id="hero" className="section">
      <div className="flex flex-1 flex-col gap-10 font-secondary text-xs">
        <div className="flex justify-between">
          <div className="flex flex-1 gap-8">
            <span>
              <p>&gt;&gt;</p>
              <p>&gt;&gt;</p>
            </span>

            <p>&gt;&gt;</p>
          </div>

          <span className="-mt-[9px] leading-[1.4]">
            <p>_______</p>
            <p>{`//_`}</p>
          </span>

          <div className="flex flex-1 justify-end">
            <div className="h-[5px] w-[5px] rounded-full bg-primary sm:h-1.5 sm:w-1.5 xl:h-2 xl:w-2" />
          </div>
        </div>

        <div className="flex justify-between">
          <span className="leading-[1.4]">
            <p className="normal-case">2xF9D3</p>
            <p>{`//_`}</p>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between font-secondary text-xs">
        <p className="hidden xl:block">==</p>

        <Matnac
          role="img"
          aria-labelledby="title"
          className="mx-auto w-full max-w-[30rem] sm:max-w-[32.5rem] md:max-w-[37.5rem] lg:max-w-[40rem] xl:max-w-[42.5rem] 2xl:max-w-[50rem]"
        />

        <span className="hidden xl:block">
          <p>=</p>
          <p className="normal-case">0xF9DC</p>
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-end gap-4">
        <Plus aria-hidden className="mx-auto h-10 w-10" />

        <div className="flex justify-between font-secondary text-sm">
          <span>
            <p>Scroll</p>
            <p>Down</p>
          </span>

          <span className="text-center">
            <p>Scroll</p>
            <p>Down</p>
          </span>

          <span className="text-right">
            <p>Scroll</p>
            <p>Down</p>
          </span>
        </div>
      </div>
    </section>
  );
}
