import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ReadyToWork from "@/components/ReadyToWork/ReadyToWork";
import ContactContent from "@/components/ContactContent/ContactContent";
import styles from "../page.module.css";

export default function ContactPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <ContactContent />
            <ReadyToWork />
            <Footer />
        </main>
    );
}
