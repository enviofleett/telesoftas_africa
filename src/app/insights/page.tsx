import Navbar from "@/components/Navbar/Navbar";
import InsightsHero from "@/components/InsightsHero/InsightsHero";
import PopularPosts from "@/components/PopularPosts/PopularPosts";
import NewInsights from "@/components/NewInsights/NewInsights";
import ReadyToWork from "@/components/ReadyToWork/ReadyToWork";
import Footer from "@/components/Footer/Footer";
import styles from "../page.module.css";

export default function InsightsPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <InsightsHero />
            <PopularPosts />
            <NewInsights />
            <ReadyToWork />
            <Footer />
        </main>
    );
}
