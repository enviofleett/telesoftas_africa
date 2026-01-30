"use client";

import { useEffect, useState } from 'react';
import styles from './PopularPosts.module.css';
import { Post } from '@/lib/posts';

export default function PopularPosts() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch('/api/posts');
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        }
        fetchPosts();
    }, []);

    if (posts.length === 0) {
        return null; // Don't render empty section
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.accentBar}></div>
                    <h2 className={styles.title}>Popular Insights</h2>
                </div>

                <div className={styles.grid}>
                    {posts.slice(0, 4).map((post) => (
                        <a href={`/insights/${post.id}`} key={post.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                {/* Note: In a real app we'd use Next.js Image component, but regular img is fine for uploads/local dev */}
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
