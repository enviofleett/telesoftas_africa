"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './NewInsights.module.css';
import { Post } from '@/lib/posts';

export default function NewInsights() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch('/api/posts', { cache: 'no-store' });
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        }
        fetchPosts();
    }, []);

    if (posts.length === 0) {
        return null;
    }

    // Double the posts to fill the grid for demo purposes if needed, or just map them
    // The design shows at least 4 items. We'll map what we have.

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.titleContainer}>
                        <div className={styles.accentBar}></div>
                        <h2 className={styles.title}>New Insight</h2>
                    </div>
                    <Link href="/insights" className={styles.showAllBtn}>Show All</Link>
                </div>

                <div className={styles.grid}>
                    {posts.map((post) => (
                        <a href={`/insights/${post.id}`} key={post.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                <p className={styles.cardDescription}>{post.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
