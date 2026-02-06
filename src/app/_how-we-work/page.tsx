import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HowWeWorkHero from "@/components/HowWeWorkHero/HowWeWorkHero";
import ContactContent from "@/components/ContactContent/ContactContent";
import styles from "../page.module.css";

export default function HowWeWorkPage() {
    return (
        <main className={styles.main} style={{ background: '#ffffff' }}>
            <Navbar />
            <HowWeWorkHero />
            <ContactContent />
            <Footer />
        </main>
    );
}
