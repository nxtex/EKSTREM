import { NavBarDemo } from "@/components/demos/navbar-demo";
import { SplineSceneBasic } from "@/components/demos/spline-demo";
import { DisplayCardsDemo } from "@/components/demos/display-cards-demo";
import { RadialOrbitalTimelineDemo } from "@/components/demos/radial-orbital-demo";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavBarDemo />

      {/* Hero / Spline Section */}
      <section className="pt-24 px-6">
        <SplineSceneBasic />
      </section>

      {/* Display Cards Section */}
      <section className="px-6 py-20">
        <h2 className="text-center text-2xl font-bold text-foreground mb-10">Display Cards</h2>
        <DisplayCardsDemo />
      </section>

      {/* Radial Orbital Timeline Section */}
      <section>
        <RadialOrbitalTimelineDemo />
      </section>
    </main>
  );
}
