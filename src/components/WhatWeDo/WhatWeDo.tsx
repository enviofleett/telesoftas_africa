import React from 'react';
import Link from 'next/link';
import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
    const cards = [
        {
            title: "Digital Products & Platforms",
            description: "Scalable software and systems built to last.",
            className: styles.card1,
            btnClass: styles.btnDark
        },
        {
            title: "Growth & Digital Transformation",
            description: "Strategy-led initiatives that unlock efficiency and new growth pathways.",
            className: styles.card2,
            btnClass: styles.btnLight
        },
        {
            title: "Talent & Delivery Partnerships",
            description: "High-performing teams embedded to deliver outcomes.",
            className: styles.card3,
            btnClass: styles.btnLight
        }
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>What We Do</h2>
            <div className={styles.subtitle}>
                <p>Everything we do is anchored on one promise:</p>
                <p>to be the best long-term partner for our clients&apos; growth.</p>
            </div>

            <div className={styles.cardsGrid}>
                {cards.map((card, index) => (
                    <div key={index} className={`${styles.card} ${card.className}`}>
                        <div className={styles.decorativeSquare}></div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.type}>{card.title}</h3>
                            <p className={styles.description}>{card.description}</p>
                            <Link href="/what-we-do" className={`${styles.button} ${card.btnClass}`}>
                                Explore What We Do
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatWeDo;
