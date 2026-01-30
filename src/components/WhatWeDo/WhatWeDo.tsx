import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
    const cards = [
        {
            title: "Digital Strategy & Transformation",
            description: "We help you navigate the complexities of the digital age with strategy-led initiatives that unlock new growth pathways.",
            image: "/tower.jpg",
            btnClass: styles.btnDark
        },
        {
            title: "Product Design & Engineering",
            description: "From concept to code, we design and build scalable digital products and platforms that drive real, sustainable results.",
            image: "/hands.jpg",
            btnClass: styles.btnLight
        },
        {
            title: "Strategic Delivery Partnerships",
            description: "Our high-performing teams embed with your organization to deliver outcomes and scale your digital capabilities.",
            image: "/tech.jpg",
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
                    <div key={index} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className={styles.cardImage}
                            />
                        </div>
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
