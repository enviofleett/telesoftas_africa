import styles from "./EventsCards.module.css";

export default function EventsCards() {
    const cards = [
        {
            title: "Digital Products & Platforms",
            description: "Scalable software and systems built to last.",
            className: styles.card1,
        },
        {
            title: "Growth & Digital Transformation",
            description: "Strategy-led initiatives that unlock efficiency and new growth pathways.",
            className: styles.card2,
        },
        {
            title: "Talent & Delivery Partnerships",
            description: "High-performing teams embedded to deliver outcomes.",
            className: styles.card3,
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
            <div className={styles.cardsGrid}>
                {cards.map((card, index) => (
                    <div key={index} className={`${styles.card} ${card.className}`}>
                        <div className={styles.decorativeSquare}></div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.type}>{card.title}</h3>
                            <p className={styles.description}>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <a href="/contact" className={styles.partnerButton}>
                Partner With Us on an Event
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
            </div>
        </section>
    );
}
