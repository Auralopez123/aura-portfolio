import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-8">
        <Hero />
      </div>
    </main>
  );
}