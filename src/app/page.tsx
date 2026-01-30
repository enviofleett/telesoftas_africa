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

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <WhyWeExist />
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
