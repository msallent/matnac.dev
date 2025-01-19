import { motion } from "framer-motion";
import { Matnac, Plus, TracedM } from "@/icons";

const defaultAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut", delay: 2.7 },
};

export function Hero() {
  return (
    <section id="hero" className="section">
      <motion.div
        className="flex flex-1 flex-col gap-10 font-secondary text-xs"
        {...defaultAnimation}
      >
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
      </motion.div>

      <div className="flex items-center justify-between font-secondary text-xs">
        <motion.p className="hidden xl:block" {...defaultAnimation}>
          ==
        </motion.p>

        <div className="relative flex w-full justify-center">
          <Matnac
            role="img"
            aria-labelledby="title"
            className="w-full max-w-[30rem] sm:max-w-[32.5rem] md:max-w-[37.5rem] lg:max-w-[40rem] xl:max-w-[42.5rem] 2xl:max-w-[50rem]"
          />
          <TracedM
            className="absolute max-h-14 sm:max-h-[5.4rem] md:max-h-[6.25rem] lg:max-h-[6.65rem] xl:max-h-[7.1rem] 2xl:max-h-[8.33rem]"
            aria-hidden
          />
        </div>

        <motion.span className="hidden xl:block" {...defaultAnimation}>
          <p>=</p>
          <p className="normal-case">0xF9DC</p>
        </motion.span>
      </div>

      <motion.div className="flex flex-1 flex-col justify-end gap-4" {...defaultAnimation}>
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
      </motion.div>
    </section>
  );
}
