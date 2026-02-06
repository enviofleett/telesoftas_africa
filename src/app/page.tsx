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
import Partnerships from "@/components/Partnerships/Partnerships";
import ContactContent from "@/components/ContactContent/ContactContent";
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
      <section id="about">
        <WhyWeExist
          title={whyData.title}
          subtext={whyData.subtext}
          description={whyData.description}
        />
      </section>
      <ShowcaseImage />
      <section id="proof">
        <ScaleSection />
      </section>
      <DigitalBackbone />
      <section id="what-we-do">
        <WhatWeDo />
      </section>
      <WatermarkSection />
      <section id="how-we-work">
        <HowWeWork />
      </section>
      <Insights />
      <section id="events-ecosystem">
        <EventsEcosystem />
      </section>
      <section id="partnerships">
        <Partnerships />
      </section>
      <section id="contact">
        <ContactContent />
      </section>
      <Footer />
    </main>
  );
}
