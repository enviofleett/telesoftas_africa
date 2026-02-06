import React from 'react';
import styles from './Partnerships.module.css';

const Partnerships = () => {
    const partnershipCards = [
        {
            image: "/partner1.png",
            title: "Strategic Revenue Partnerships",
            description: "These partnerships focus on delivering high-value commercial opportunities for enterprises, international firms, and organizations serving premium clients, through co-developed, accountable, and results-driven engagements."
        },
        {
            image: "/partner2.png",
            title: "Institutional & Development Partnerships",
            description: "These partnerships help governments, public institutions, and development ecosystems build long-term digital capability through structured, funded, and sustainable delivery models."
        },
        {
            image: "/partner3.png",
            title: "Advisory & Proposal Partnerships",
            description: "These partnerships support experts and organizations in shaping fundable ideas through technical advisory, solution framing, and proposal and pitch support without premature execution."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Partnerships</h2>
                    <p className={styles.headerDescription}>
                        We partner with organizations that bring access, credibility, or funding — and who value
                        structured, execution-focused collaboration. Our partnerships are designed to unlock growth
                        at scale, not to create activity for its own sake.
                    </p>
                </div>

                <div className={styles.cardsGrid}>
                    {partnershipCards.map((card, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src={card.image} alt={card.title} className={styles.cardImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDescription}>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partnerships;
