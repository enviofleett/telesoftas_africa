import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AboutHero from "@/components/AboutHero/AboutHero";
import AboutIntro from "@/components/AboutIntro/AboutIntro";
import ReadyToWork from "@/components/ReadyToWork/ReadyToWork";
import styles from "../page.module.css";

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <AboutHero />
            <AboutIntro />
            <ReadyToWork />
            <Footer />
        </main>
    );
}
