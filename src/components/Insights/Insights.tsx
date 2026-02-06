"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Insights.module.css';

const Insights = () => {
    const insightsData = [
        {
            title: "Perspectives on Growth",
            description: "How we think about scaling, systems, and execution in emerging and global markets.",
            image: "/d3fe501ef82249b73841bee084dbf7ee1065d9c7.jpg"
        },
        {
            title: "Frameworks & Models",
            description: "Practical ways to reason about growth, drawn from real work and experiments.",
            image: "/c66a9e5615fa8077db3e51c5fb56c7f3f597e16a.jpg"
        },
        {
            title: "Applied Learning",
            description: "Lessons from delivery, partnerships, and Growth experiments — what worked, what didn't, and why.",
            image: "/19840a3a7e830f73854002aeaf2c37bb5bf99cc2.jpg"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Insight</h2>
                    <div className={styles.description}>
                        <p>Growth conversations should begin long before a proposal is written.</p>
                        <p>Our insights exist to shape how organizations think about growth, technology, and execution, so when conversations start, they start with clarity and trust.</p>
                    </div>
                </div>

                <div className={styles.cardsGrid}>
                    {insightsData.map((insight, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${insight.image})` }}
                        >
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{insight.title}</h3>
                                <p className={styles.cardDescription}>{insight.description}</p>
                                <Link href="/insights" className={styles.exploreBtn}>
                                    Explore Our Insights
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Insights;
