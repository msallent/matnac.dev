"use client";

import { Contact, Dev, Hero, Reviews, Showcase, Who } from "@/components";

export default function Home() {
  return (
    <main className="scrollbar-none flex h-svh snap-y snap-mandatory flex-col gap-16 overflow-y-auto font-primary uppercase text-primary">
      <Hero />
      <Who />
      <Dev />
      <Showcase />
      <Reviews />
      <Contact />
    </main>
  );
}
