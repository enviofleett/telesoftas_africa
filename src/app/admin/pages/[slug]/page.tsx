"use client";

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import styles from '../../admin.module.css';

export default function EditPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;
    
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [content, setContent] = useState<any>(null);
    const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

    useEffect(() => {
        if (slug) fetchPageContent();
    }, [slug]);

    async function fetchPageContent() {
        try {
            const { data, error } = await supabase
                .from('pages')
                .select('content')
                .eq('slug', slug)
                .single();

            if (error) throw error;
            setContent(data?.content || {});
        } catch (error) {
            console.error('Failed to fetch page content:', error);
            setMessage({ text: 'Failed to load page content', type: 'error' });
        } finally {
            setLoading(false);
        }
    }

    async function handleSave(e: React.FormEvent) {
        e.preventDefault();
        setSaving(true);
        setMessage(null);

        try {
            const res = await fetch('/api/pages', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ slug, content }),
            });

            if (!res.ok) throw new Error('Failed to save');

            setMessage({ text: 'Page updated successfully!', type: 'success' });
            router.refresh();
        } catch (error) {
            setMessage({ text: 'Error saving page', type: 'error' });
        } finally {
            setSaving(false);
        }
    }

    // Generic handler for deep nested updates could be complex, 
    // so we will flatten the UI for the specific 'home' structure for now,
    // or provide a JSON editor for flexibility.
    // For a better UX, we'll build specific fields for the Hero section.
    
    const updateHeroField = (field: string, value: string) => {
        setContent((prev: any) => ({
            ...prev,
            hero: {
                ...prev.hero,
                [field]: value
            }
        }));
    };

    const updateWhyField = (field: string, value: string) => {
        setContent((prev: any) => ({
            ...prev,
            whyWeExist: {
                ...prev.whyWeExist,
                [field]: value
            }
        }));
    };
    
    const updateWhySubtext = (index: number, value: string) => {
        setContent((prev: any) => {
            const currentSubtext = prev.whyWeExist?.subtext || ["", "", ""];
            const newSubtext = [...currentSubtext];
            newSubtext[index] = value;
            return {
                ...prev,
                whyWeExist: {
                    ...prev.whyWeExist,
                    subtext: newSubtext
                }
            };
        });
    };

    if (loading) return <div className={styles.main}>Loading...</div>;

    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <Link href="/admin/pages" className={styles.secondaryBtn}>← Back</Link>
                        <h1 className={styles.title} style={{ marginTop: '10px', textTransform: 'capitalize' }}>
                            Edit {slug} Page
                        </h1>
                    </div>
                    <button 
                        onClick={handleSave} 
                        className={styles.addBtn}
                        disabled={saving}
                    >
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>

                {message && (
                    <div style={{ 
                        padding: '12px', 
                        borderRadius: '8px', 
                        marginBottom: '20px',
                        background: message.type === 'success' ? '#d4edda' : '#f8d7da',
                        color: message.type === 'success' ? '#155724' : '#721c24'
                    }}>
                        {message.text}
                    </div>
                )}

                <div className={styles.formContainer} style={{ background: '#fff', padding: '30px', borderRadius: '16px', border: '1px solid #eef0f2' }}>
                    
                    {slug === 'home' && (
                        <>
                            <h2 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Hero Section</h2>
                            
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Title (HTML allowed)</label>
                                <textarea 
                                    value={content.hero?.title || ''}
                                    onChange={(e) => updateHeroField('title', e.target.value)}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', minHeight: '100px' }}
                                />
                                <small style={{ color: '#666' }}>Use &lt;br /&gt; for line breaks. Wrap highlighted text in &lt;span class="highlight"&gt;</small>
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Subtext</label>
                                <textarea 
                                    value={content.hero?.subtext || ''}
                                    onChange={(e) => updateHeroField('subtext', e.target.value)}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', minHeight: '80px' }}
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Button Text</label>
                                    <input 
                                        type="text"
                                        value={content.hero?.buttonText || ''}
                                        onChange={(e) => updateHeroField('buttonText', e.target.value)}
                                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Button Link</label>
                                    <input 
                                        type="text"
                                        value={content.hero?.buttonLink || ''}
                                        onChange={(e) => updateHeroField('buttonLink', e.target.value)}
                                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                    />
                                </div>
                            </div>

                            <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #eee' }} />
                            
                            <h2 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>Why We Exist Section</h2>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Title</label>
                                <input 
                                    type="text"
                                    value={content.whyWeExist?.title || ''}
                                    onChange={(e) => updateWhyField('title', e.target.value)}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Description</label>
                                <textarea 
                                    value={content.whyWeExist?.description || ''}
                                    onChange={(e) => updateWhyField('description', e.target.value)}
                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', minHeight: '100px' }}
                                />
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Key Points (Subtext)</label>
                                {[0, 1, 2].map((index) => (
                                    <div key={index} style={{ marginBottom: '10px' }}>
                                        <input 
                                            type="text"
                                            value={content.whyWeExist?.subtext?.[index] || ''}
                                            onChange={(e) => updateWhySubtext(index, e.target.value)}
                                            placeholder={`Point ${index + 1}`}
                                            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {slug !== 'home' && (
                        <div>
                            <p>Generic JSON Editor coming soon for other pages.</p>
                            <textarea 
                                value={JSON.stringify(content, null, 2)}
                                onChange={(e) => {
                                    try {
                                        setContent(JSON.parse(e.target.value));
                                    } catch (err) {
                                        // invalid json
                                    }
                                }}
                                style={{ width: '100%', height: '400px', fontFamily: 'monospace', padding: '12px' }}
                            />
                        </div>
                    )}

                </div>
            </div>
            <Footer />
        </main>
    );
}
