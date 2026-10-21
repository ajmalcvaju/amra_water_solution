import React from "react";
import { HeroSlider } from "@/components/home/HeroSlider";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { PrestigiousClients } from "@/components/home/PrestigiousClients";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { BniTrustBanner } from "@/components/home/BniTrustBanner";
import { HomeCta } from "@/components/home/HomeCta";

export default function HomePage() {
  return (
    <>
      {/* 1. Full-width sliding hero section */}
      <HeroSlider />

      {/* 2. Trust and company highlights */}
      <TrustStrip />

      {/* 3. Featured product catalog */}
      <FeaturedProducts />

      {/* 4. Solutions overview */}
      <SolutionsPreview />

      {/* 5. Prestigious Clients slidable section */}
      <PrestigiousClients />

      {/* 6. Why choose Amra Water Solution? */}
      <WhyChooseUs />

      {/* 6. How it works (4-step process) */}
      <HowItWorks />

      {/* 7. Authentic BNI & Kerala branches trust banner */}
      <BniTrustBanner />

      {/* 8. Final CTA */}
      <HomeCta />
    </>
  );
}
