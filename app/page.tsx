import Hero from "@/app/components/Hero";
import TopSongs from "@/app/components/TopSongs";
import Contact from "@/app/components/Contact";

export default function Page() {
  return (
    <main className="pb-20">
      <Hero />
      <TopSongs />
      <Contact />
    </main>
  );
}
