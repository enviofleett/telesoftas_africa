import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
    const cards = [
        {
            title: "Digital Products & Platforms",
            description: "Scalable software and systems built to last.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: "Growth & Digital Transformation",
            description: "Strategy-led initiatives that unlock efficiency and new growth pathways.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 4 13V5a2 2 0 0 1 2-2h5" />
                    <path d="M13 20a7 7 0 0 0 7-7V5a2 2 0 0 0-2-2h-5" />
                    <path d="M12 20v-8" />
                    <path d="M12 12l-4-4" />
                    <path d="M12 12l4-4" />
                </svg>
            )
        },
        {
            title: "Talent & Delivery Partnerships",
            description: "High-performing teams embedded to deliver outcomes.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
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
                    <div key={index} className={styles.card}>
                        <div className={styles.iconContainer}>
                            {card.icon}
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.type}>{card.title}</h3>
                            <p className={styles.description}>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatWeDo;
