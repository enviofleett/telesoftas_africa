import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HowWeWorkHero from "@/components/HowWeWorkHero/HowWeWorkHero";
import ReadyToWork from "@/components/ReadyToWork/ReadyToWork";
import styles from "../page.module.css";

export default function HowWeWorkPage() {
    return (
        <main className={styles.main} style={{ background: '#ffffff' }}>
            <Navbar />
            <HowWeWorkHero />
            <ReadyToWork />
            <Footer />
        </main>
    );
}
