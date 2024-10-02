"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

type CarouselProps = {
  children: React.ReactNode;
};

export function Carousel({ children }: CarouselProps) {
  const [carouselRef, embla] = useEmblaCarousel({ loop: true, align: "start" });

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
        <button onClick={scrollPrev} className="uppercase disabled:text-secondary">
          &lt; Previous
        </button>

        <button onClick={scrollNext} className="uppercase disabled:text-secondary">
          Next &gt;
        </button>
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
      className="min-w-0 shrink-0 grow-0 basis-full border-r border-secondary px-4 md:basis-1/2 xl:basis-1/3"
    >
      {children}
    </div>
  );
}
