import { getPageContent } from "@/lib/content";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import WhyWeExist from "@/components/WhyWeExist/WhyWeExist";
import ShowcaseImage from "@/components/ShowcaseImage/ShowcaseImage";
import ScaleSection from "@/components/ScaleSection/ScaleSection";
import DigitalBackbone from "@/components/DigitalBackbone/DigitalBackbone";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import Insights from "@/components/Insights/Insights";
import EventsEcosystem from "@/components/EventsEcosystem/EventsEcosystem";
import ReadyToWork from "@/components/ReadyToWork/ReadyToWork";
import Footer from "@/components/Footer/Footer";
import WatermarkSection from "@/components/WatermarkSection/WatermarkSection";
import styles from "./page.module.css";

// Revalidate page every 60 seconds (Incremental Static Regeneration)
export const revalidate = 60;

export default async function Home() {
  const content = await getPageContent('home');
  const heroData = content?.hero || {};
  const whyData = content?.whyWeExist || {};

  return (
    <main className={styles.main}>
      <Navbar />
      <Hero 
        title={heroData.title}
        subtext={heroData.subtext}
        buttonText={heroData.buttonText}
        buttonLink={heroData.buttonLink}
      />
      <WhyWeExist 
        title={whyData.title}
        subtext={whyData.subtext}
        description={whyData.description}
      />
      <ShowcaseImage />
      <ScaleSection />
      <DigitalBackbone />
      <WhatWeDo />
      <WatermarkSection />
      <HowWeWork />
      <Insights />
      <EventsEcosystem />
      <ReadyToWork />
      <Footer />
    </main>
  );
}
