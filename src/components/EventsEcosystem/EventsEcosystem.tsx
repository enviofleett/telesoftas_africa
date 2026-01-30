import React from 'react';
import Link from 'next/link';
import styles from './EventsEcosystem.module.css';

const EventsEcosystem = () => {
    const steps = [
        {
            number: 1,
            title: "Speaking & Facilitation",
            description: "Contributing perspectives on growth, digital transformation, and execution."
        },
        {
            number: 2,
            title: "Curated Conversations",
            description: "Private roundtables, workshops, and focused gatherings for leaders facing similar challenges."
        },
        {
            number: 3,
            title: "Curated Conversations",
            description: "Active involvement in communities where long-term partnerships form. We don't attend every event. We attend — or create — the right ones."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.backgroundLayer}></div>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <span className={styles.label}>Purpose</span>
                    <h2 className={styles.title}>Event and Ecosystem</h2>
                    <div className={styles.description}>
                        <p>Demonstrate intentional presence and access.</p>
                        <p>We engage through carefully selected events and ecosystem initiatives designed to build meaningful relationships — not surface-level exposure. Events are not about visibility. They are about access, dialogue, and trust.</p>
                    </div>
                    <Link href="/contact" className={styles.ctaButton}>
                        Partner With Us on an Event
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div className={styles.rightContent}>
                    <div className={styles.timeline}>
                        <div className={styles.verticalLine}></div>
                        {steps.map((step, index) => (
                            <div key={index} className={styles.step}>
                                <div className={styles.numberCircle}>{step.number}</div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDescription}>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsEcosystem;
