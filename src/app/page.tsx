import { Dev, Hero, Showcase, Who } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 font-primary uppercase text-primary">
      <Hero />
      <Who />
      <Dev />
      <Showcase />
    </main>
  );
}
