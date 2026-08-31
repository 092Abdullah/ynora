import { createFileRoute } from "@tanstack/react-router";
import { Cta } from "@/components/landing/cta";
import { SiteFooter } from "@/components/landing/footer";
import { SiteHeader } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { WhoWeAre } from "@/components/landing/who-we-are";
import { WhyChooseUs } from "@/components/landing/why-choose-us";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <SiteHeader />
      <Hero />
      <WhoWeAre />
      <WhyChooseUs />
      <Pricing />
      <Cta />
      <SiteFooter />
    </main>
  );
}
