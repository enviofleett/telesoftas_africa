import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import GrowthLabHero from "@/components/GrowthLabHero/GrowthLabHero";
import GrowthLabContent from "@/components/GrowthLabContent/GrowthLabContent";
import ContactContent from "@/components/ContactContent/ContactContent";
import styles from "../page.module.css";

export default function GrowthLabsPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <GrowthLabHero />
            <GrowthLabContent />
            <ContactContent />
            <Footer />
        </main>
    );
}
