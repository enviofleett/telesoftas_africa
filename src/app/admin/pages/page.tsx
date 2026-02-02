"use client";

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from '../admin.module.css';

interface Page {
    id: string;
    slug: string;
    updated_at: string;
}

export default function AdminPagesList() {
    const [pages, setPages] = useState<Page[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPages();
    }, []);

    async function fetchPages() {
        try {
            const { data, error } = await supabase
                .from('pages')
                .select('id, slug, updated_at')
                .order('updated_at', { ascending: false });

            if (error) throw error;
            setPages(data || []);
        } catch (error) {
            console.error('Failed to fetch pages:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Pages Management</h1>
                    <Link href="/admin" className={styles.secondaryBtn}>
                        ← Back to Dashboard
                    </Link>
                </div>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Page Slug</th>
                                    <th>Last Updated</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pages.map((page) => (
                                    <tr key={page.id}>
                                        <td className={styles.postTitle} style={{ textTransform: 'capitalize' }}>
                                            {page.slug}
                                        </td>
                                        <td>{new Date(page.updated_at).toLocaleDateString()}</td>
                                        <td className={styles.actions}>
                                            <Link href={`/admin/pages/${page.slug}`} className={styles.editBtn}>
                                                Edit Content
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {pages.length === 0 && (
                                    <tr>
                                        <td colSpan={3} style={{ textAlign: 'center', padding: '40px' }}>
                                            No pages found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
}
