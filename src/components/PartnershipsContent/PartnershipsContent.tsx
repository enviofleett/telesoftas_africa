import styles from "./PartnershipsContent.module.css";

export default function PartnershipsContent() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <span className={styles.label}>Partnerships</span>
                    <p className={styles.heroText}>
                        We partner with organizations that bring access, credibility, or funding — and who value structured, execution-focused collaboration.
                        <br /><br />
                        Our partnerships are designed to unlock growth at scale, not to create activity for its own sake.
                    </p>
                </div>
            </section>

            {/* Section 1: Strategic Revenue Partnerships - Dark */}
            <section className={styles.darkSection}>
                <div className={styles.leftContent}>
                    <span className={styles.labelSmall}>Types of partnership</span>
                    <h2 className={styles.sectionTitle}>1. Strategic Revenue Partnerships</h2>
                    <p className={styles.description}>
                        These partnerships are focused on delivering high-value, commercial engagements specifically for,
                    </p>
                    <ul className={styles.bulletList}>
                        <li>enterprises</li>
                        <li>international firms</li>
                        <li>organizations with access to premium clients</li>
                    </ul>
                    <h4 className={styles.subheading}>How we work</h4>
                    <ul className={styles.bulletList}>
                        <li>co-develop opportunities</li>
                        <li>align on delivery and accountability</li>
                        <li>execute funded, outcome-driven engagements</li>
                    </ul>
                </div>
                <div className={styles.rightImage}>
                    <img src="/mimss.jpg" alt="Strategic partnerships" className={styles.image} />
                </div>
            </section>

            {/* Section 2: Institutional & Development Partnerships - Light */}
            <section className={styles.lightSection}>
                <div className={styles.leftImage}>
                    <img src="/picturesss.jpg" alt="Institutional partnerships" className={styles.image} />
                </div>
                <div className={styles.rightContent}>
                    <h2 className={styles.sectionTitleDark}>2. Institutional & Development Partnerships</h2>
                    <p className={styles.descriptionDark}>
                        These partnerships support governments, public institutions, and ecosystems in building long-term digital capability specifically for,
                    </p>
                    <ul className={styles.bulletListDark}>
                        <li>governments</li>
                        <li>development agencies</li>
                        <li>multilateral and donor-backed programs</li>
                    </ul>
                    <h4 className={styles.subheadingDark}>How we work</h4>
                    <ul className={styles.bulletListDark}>
                        <li>partnership-led access</li>
                        <li>clearly defined mandates</li>
                        <li>funded execution only</li>
                        <li>phased, sustainable delivery models</li>
                    </ul>
                </div>
            </section>

            {/* Section 3: Advisory & Proposal Partnerships - Gray */}
            <section className={styles.graySection}>
                <div className={styles.leftContent}>
                    <h2 className={styles.sectionTitleDark}>3. Advisory & Proposal Partnerships</h2>
                    <p className={styles.descriptionDark}>
                        These partnerships focus on shaping fundable ideas and proposals without premature execution specifically for,
                    </p>
                    <ul className={styles.bulletListDark}>
                        <li>senior domain experts</li>
                        <li>ecosystem leaders</li>
                        <li>organizations with strong sector knowledge but limited technical depth</li>
                    </ul>
                    <h4 className={styles.subheadingDark}>How we work</h4>
                    <ul className={styles.bulletListDark}>
                        <li>technical advisory</li>
                        <li>solution framing and scoping</li>
                        <li>proposal and pitch support</li>
                    </ul>
                    <a href="/contact" className={styles.conversationButton}>
                        If you believe there is a strong alignment, we welcome a conversation.
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
                <div className={styles.rightImage}>
                    <img src="/manb.jpg" alt="Advisory partnerships" className={styles.image} />
                </div>
            </section>
        </>
    );
}
