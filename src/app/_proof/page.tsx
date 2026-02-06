import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProofHero from "@/components/ProofHero/ProofHero";
import ProofThemes from "@/components/ProofThemes/ProofThemes";
import ContactContent from "@/components/ContactContent/ContactContent";
import styles from "../page.module.css";

export default function ProofPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <ProofHero />
            <ProofThemes />
            <ContactContent />
            <Footer />
        </main>
    );
}
