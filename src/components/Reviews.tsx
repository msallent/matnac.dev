import { Carousel, CarouselItem } from "./Carousel";

const REVIEWS = [
  {
    date: "2/26/23",
    author: "Todd Stuarts",
    position: "Lead Engineer at MyCompany",
    message:
      "Matías Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    date: "2/26/23",
    author: "Todd Stuarts",
    position: "Lead Engineer at MyCompany",
    message:
      "Matías Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    date: "2/26/23",
    author: "Todd Stuarts",
    position: "Lead Engineer at MyCompany",
    message:
      "Matías Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export function Reviews() {
  return (
    <section className="flex h-svh flex-col justify-between p-5">
      <h1 className="flex justify-end">
        <span className="mt-[2.5px] text-lg">(04)</span>
        <span className="text-xl">Reviews</span>
      </h1>

      <div className="flex flex-col font-secondary text-sm">
        <span className="mb-4 border-b border-secondary pb-4">
          <p>What people say</p>
          <p>about me</p>
        </span>

        <Carousel>
          {REVIEWS.map((review, index) => (
            <CarouselItem key={index}>
              <div className="flex h-60 flex-col justify-between border-r border-secondary">
                <p>{review.date}</p>

                <span className="flex flex-col gap-2">
                  <p>{review.author}</p>
                  <p className="text-secondary">{review.position}</p>
                  <p className="text-base normal-case">{review.message}</p>
                </span>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>

      <div className="flex items-end justify-between font-secondary">
        <div className="flex gap-8 text-xs">
          <span>
            <p>&gt;&gt;</p>
            <p>&gt;&gt;</p>
          </span>

          <p>&gt;&gt;</p>
        </div>

        <p className="text-sm">matias@matnac.dev</p>
      </div>
    </section>
  );
}
