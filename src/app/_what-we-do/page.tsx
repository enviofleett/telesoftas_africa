import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatWeDoHero from "@/components/WhatWeDoHero/WhatWeDoHero";
import InstitutionalSection from "@/components/InstitutionalSection/InstitutionalSection";
import TalentSection from "@/components/TalentSection/TalentSection";
import ContactContent from "@/components/ContactContent/ContactContent";
import styles from "../page.module.css";

export default function WhatWeDoPage() {
    return (
        <main className={styles.main} style={{ background: '#ffffff' }}>
            <Navbar />
            <WhatWeDoHero />
            <InstitutionalSection />
            <TalentSection />
            <ContactContent />
            <Footer />
        </main>
    );
}
