import { Matnac, Plus } from "@/icons";

export function Hero() {
  return (
    <section className="section">
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
            <div className="h-[5px] w-[5px] rounded-full bg-primary" />
          </div>
        </div>

        <div className="flex justify-between">
          <span className="leading-[1.4]">
            <p className="normal-case">2xF9D3</p>
            <p>{`//_`}</p>
          </span>
        </div>
      </div>

      <Matnac role="img" aria-labelledby="title" />

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
