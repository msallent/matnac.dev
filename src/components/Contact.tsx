import { Arrow, GitHub, LinkedIn } from "@/icons";

export function Contact() {
  return (
    <section className="flex h-svh flex-col justify-between p-5">
      <h1 className="flex justify-end text-secondary">
        <span className="mt-[2.5px] text-lg">(04)</span>
        <span className="text-xl">Contact</span>
      </h1>

      <div className="flex items-center justify-between">
        <p className="font-secondary text-sm">Drop me a line</p>

        <span className="flex gap-4">
          <a href="https://github.com/msallent" target="_blank" rel="noreferrer">
            <GitHub className="h-7 w-7" />
          </a>

          <a href="https://www.linkedin.com/in/matias-sallent" target="_blank" rel="noreferrer">
            <LinkedIn className="h-7 w-7" />
          </a>
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        <div className="flex justify-between">
          <Arrow className="ml-0.5 h-9 w-9" />

          <div className="flex gap-8 font-secondary text-xs">
            <span>
              <p>&lt;&lt;</p>
              <p>&lt;&lt;</p>
            </span>

            <p>&lt;&lt;</p>
          </div>
        </div>

        <span className="!text-[3rem] text-xl">
          <p>matias</p>
          <p>@matnac.dev</p>
        </span>
      </div>
    </section>
  );
}
