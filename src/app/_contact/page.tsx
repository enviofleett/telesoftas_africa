import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactContent from "@/components/ContactContent/ContactContent";
import styles from "../page.module.css";

export default function ContactPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <ContactContent />
            <Footer />
        </main>
    );
}
