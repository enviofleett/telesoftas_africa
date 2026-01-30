"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Insights.module.css';

const Insights = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollProgress = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            checkScrollProgress();
            currentRef.addEventListener('scroll', checkScrollProgress);
        }
        return () => currentRef?.removeEventListener('scroll', checkScrollProgress);
    }, []);

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
        },
        {
            title: "Digital Strategies",
            description: "Navigating the complexities of modern digital landscapes.",
            image: "/d3fe501ef82249b73841bee084dbf7ee1065d9c7.jpg"
        },
        {
            title: "Systems at Scale",
            description: "Engineering reliability and performance for national infrastructure.",
            image: "/c66a9e5615fa8077db3e51c5fb56c7f3f597e16a.jpg"
        }
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const card = container.querySelector(`.${styles.card}`);
            if (card) {
                const cardWidth = card.clientWidth;
                const gap = 40; // Matches CSS gap
                const scrollAmount = cardWidth + gap;

                container.scrollBy({
                    left: direction === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    };

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

                <div className={styles.scrollWrapper}>
                    <div
                        className={styles.cardsScroll}
                        ref={scrollRef}
                        onScroll={checkScrollProgress}
                    >
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

                    <div className={styles.navigation}>
                        <button
                            className={styles.navBtn}
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            aria-label="Previous"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className={styles.navBtn}
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            aria-label="Next"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Insights;
