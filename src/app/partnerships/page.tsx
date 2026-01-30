import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PartnershipsContent from "@/components/PartnershipsContent/PartnershipsContent";
import ReadyToWork from "@/components/ReadyToWork/ReadyToWork";
import styles from "../page.module.css";

export default function PartnershipsPage() {
    return (
        <main className={styles.main} style={{ background: '#ffffff' }}>
            <Navbar />
            <PartnershipsContent />
            <ReadyToWork />
            <Footer />
        </main>
    );
}
