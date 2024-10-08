import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import clsx from "clsx";

type CarouselProps = {
  children: React.ReactNode;
};

export function Carousel({ children }: CarouselProps) {
  const [carouselRef, embla] = useEmblaCarousel({ loop: true, align: "start" });

  const [isHoverPrev, setIsHoverPrev] = useState(false);
  const [isHoverNext, setIsHoverNext] = useState(false);

  const scrollPrev = useCallback(() => {
    embla?.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    embla?.scrollNext();
  }, [embla]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  return (
    <div
      onKeyDownCapture={handleKeyDown}
      className="relative"
      role="region"
      aria-roledescription="carousel"
    >
      <div ref={carouselRef} className="overflow-hidden">
        <div className="-ml-4 flex">{children}</div>
      </div>

      <div className="mt-4 flex justify-end gap-4 border-t border-secondary pt-4 text-base">
        <motion.button
          onClick={scrollPrev}
          className="flex gap-0.5 overflow-hidden uppercase disabled:text-secondary"
          onHoverStart={() => setIsHoverPrev(true)}
          onHoverEnd={() => setIsHoverPrev(false)}
        >
          <span>&lt;</span>
          <div className="flex flex-col gap-0.5">
            <span>Previous</span>
            <span
              className={clsx(
                "w-full rounded-xl border-t border-primary transition-transform duration-300 ease-in-out",
                isHoverPrev ? "translate-x-0" : "translate-x-[101%]",
              )}
            />
          </div>
        </motion.button>

        <motion.button
          onClick={scrollNext}
          className="flex gap-0.5 overflow-hidden uppercase disabled:text-secondary"
          onHoverStart={() => setIsHoverNext(true)}
          onHoverEnd={() => setIsHoverNext(false)}
        >
          <div className="flex flex-col gap-0.5">
            <span>Next</span>
            <span
              className={clsx(
                "w-full rounded-xl border-t border-primary transition-transform duration-300 ease-in-out",
                isHoverNext ? "-translate-x-0" : "-translate-x-[101%]",
              )}
            />
          </div>
          <span>&gt;</span>
        </motion.button>
      </div>
    </div>
  );
}

type CarouselItemProps = {
  children: React.ReactNode;
};

export function CarouselItem({ children }: CarouselItemProps) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className="min-w-0 shrink-0 grow-0 basis-full border-r border-secondary px-4 hover:cursor-grab active:cursor-grabbing md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
    >
      {children}
    </div>
  );
}
