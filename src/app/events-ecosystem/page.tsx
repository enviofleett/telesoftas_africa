import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import EventsHero from "@/components/EventsHero/EventsHero";
import EventsCards from "@/components/EventsCards/EventsCards";
import ReadyToWork from "@/components/ReadyToWork/ReadyToWork";
import styles from "../page.module.css";

export default function EventsEcosystemPage() {
    return (
        <main className={styles.main} style={{ background: '#ffffff' }}>
            <Navbar />
            <EventsHero />
            <EventsCards />
            <ReadyToWork />
            <Footer />
        </main>
    );
}
