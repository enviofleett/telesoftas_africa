import React from 'react';
import Image from 'next/image';
import styles from './WhatWeDo.module.css';

const WhatWeDo = () => {
    const cards = [
        {
            title: "Digital Products & Platforms",
            description: "Scalable software and systems built to last.",
            image: "/analy.png",
        },
        {
            title: "Growth & Digital Transformation",
            description: "Strategy-led initiatives that unlock efficiency and new growth pathways.",
            image: "/growanl.png",
        },
        {
            title: "Talent & Delivery Partnerships",
            description: "High-performing teams embedded to deliver outcomes.",
            image: "/growth.png",
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
                                width={300}
                                height={250}
                                className={styles.cardImage}
                            />
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
