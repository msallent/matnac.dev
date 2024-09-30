import { Carousel, CarouselItem } from "./Carousel";

const REVIEWS = [
  {
    date: "2/26/24",
    author: "Jeffrey Peltzman",
    position: "Lead Designer at Formula.Monks",
    message:
      "Not even sure if I can fully describe how nice it has been to work with Matias since he joined our team. The product, UX, and design work we do is only as good as its implementation, and there was a long stretch pre-Matias where we consistently fell short. I have been designing and helping build for the web for a really long time and have rarely come across a dev with such attention for detail to the degree that Matias has. His work is impeccable.",
  },
  {
    date: "2/14/24",
    author: "Sara Taillon",
    position: "Managing Partner at Formula.Monks",
    message:
      "Matias is a super talented engineer who takes an interest in making things better, not just on the frontend, but in processes and ways of working within the team and beyond. He's one of the top FE engineers I've ever met. I'm grateful for all the work we've done together and I hope our paths cross again someday.",
  },
  {
    date: "8/19/22",
    author: "Nicolas Ferrucci",
    position: "Product Owner at TheoremOne",
    message:
      "Matias consistently brings a positive attitude and a solution-oriented mindset, making it easy to collaborate and innovate. I appreciate his ability to mentor others, and it's clear that his contributions have made a lasting impact on our product and team dynamics.",
  },
  {
    date: "8/30/24",
    author: "Simon Hunter",
    position: "Director of Engineering at ReflexAI",
    message:
      "Matias' leadership around this release has been exceptional - he's been checking in on all the issues regularly and has a solid understanding of the status of everything at each moment. This has an enormous impact on the entire company.",
  },
  {
    date: "6/10/21",
    author: "Danielle Krieger",
    position: "Software Engineer at MediaMonks",
    message:
      "Technically, he surpasses himself day by day. He's also very good at communicating, both internally and with clients. His English level is excellent and he's very correct and respectful. In my opinion, he has a lot of potential to be a lead.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="section">
      <h1 className="flex justify-end">
        <span className="mt-[2.5px] text-lg">(04)</span>
        <span className="text-2xl">Reviews</span>
      </h1>

      <div className="flex flex-col font-secondary text-sm">
        <span className="mb-4 border-b border-secondary pb-4">
          <p>What people say</p>
          <p>about me</p>
        </span>

        <Carousel>
          {REVIEWS.map((review, index) => (
            <CarouselItem key={index}>
              <div className="flex h-60 flex-col justify-between gap-0.5 md:h-64">
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
