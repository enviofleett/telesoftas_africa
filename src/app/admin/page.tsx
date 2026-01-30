"use client";

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from './admin.module.css';
import { Post } from '@/lib/posts';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [authLoading, setAuthLoading] = useState(true);
    const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);
    const [view, setView] = useState<'list' | 'form'>('list');
    const [editingPost, setEditingPost] = useState<Post | null>(null);
    const router = useRouter();

    useEffect(() => {
        checkUser();
    }, []);

    async function checkUser() {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            router.push('/admin/login');
        } else {
            setAuthLoading(false);
            fetchPosts();
        }
    }

    async function handleLogout() {
        await supabase.auth.signOut();
        router.push('/admin/login');
    }

    async function fetchPosts() {
        try {
            setLoading(true);
            const res = await fetch('/api/posts');
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.error('Failed to fetch posts:', error);
        } finally {
            setLoading(false);
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setMessage(null);

        const formData = new FormData(event.currentTarget);
        const url = editingPost ? `/api/posts/${editingPost.id}` : '/api/posts';
        const method = editingPost ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method,
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                setMessage({ text: editingPost ? 'Post updated successfully!' : 'Post created successfully!', type: 'success' });
                fetchPosts();
                setTimeout(() => {
                    setView('list');
                    setEditingPost(null);
                    setMessage(null);
                }, 1500);
            } else {
                setMessage({ text: `Error: ${result.error}`, type: 'error' });
            }
        } catch (error) {
            setMessage({ text: 'Something went wrong. Please try again.', type: 'error' });
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id: string) {
        if (!confirm('Are you sure you want to delete this post?')) return;

        try {
            const response = await fetch(`/api/posts/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setPosts(posts.filter(p => p.id !== id));
            } else {
                alert('Failed to delete post');
            }
        } catch (error) {
            console.error('Delete error:', error);
        }
    }

    const startEdit = (post: Post) => {
        setEditingPost(post);
        setView('form');
    };

    const startAdd = () => {
        setEditingPost(null);
        setView('form');
    };

    if (authLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a0a', color: 'white' }}>Loading...</div>;
    }

    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Blog Management</h1>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {view === 'list' && (
                            <button onClick={startAdd} className={styles.addBtn}>+ New Post</button>
                        )}
                        <button onClick={handleLogout} className={styles.cancelBtn} style={{ border: '1px solid #333' }}>Logout</button>
                    </div>
                </div>

                {message && (
                    <div className={`${styles.message} ${styles[message.type]}`}>
                        {message.text}
                    </div>
                )}

                {view === 'list' ? (
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Post</th>
                                    <th>Category</th>
                                    <th>Created At</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map(post => (
                                    <tr key={post.id}>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <img src={post.imageUrl} className={styles.postThumbnail} alt="" />
                                                <span className={styles.postTitle}>{post.title}</span>
                                            </div>
                                        </td>
                                        <td><span className={styles.category}>{post.category}</span></td>
                                        <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <div className={styles.actions}>
                                                <button onClick={() => startEdit(post)} className={styles.editBtn}>Edit</button>
                                                <button onClick={() => handleDelete(post.id)} className={styles.deleteBtn}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {posts.length === 0 && (
                                    <tr>
                                        <td colSpan={4} style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                                            No posts found. Create your first post!
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className={styles.formCard}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Post Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    defaultValue={editingPost?.title}
                                    placeholder="Enter post title"
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div className={styles.formGroup}>
                                    <label>Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        required
                                        defaultValue={editingPost?.category}
                                        placeholder="e.g. Technology"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Read Time</label>
                                    <input
                                        type="text"
                                        name="readTime"
                                        defaultValue={editingPost?.readTime}
                                        placeholder="e.g. 5 min read"
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Author</label>
                                <input
                                    type="text"
                                    name="author"
                                    defaultValue={editingPost?.author}
                                    placeholder="Author name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Featured Image</label>
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    required={!editingPost}
                                />
                                {editingPost && <p style={{ fontSize: '0.8rem', color: '#666' }}>Leave blank to keep current image</p>}
                            </div>

                            <div className={styles.formGroup}>
                                <label>Short Description</label>
                                <textarea
                                    name="description"
                                    rows={3}
                                    required
                                    defaultValue={editingPost?.description}
                                    placeholder="A brief summary of the post"
                                ></textarea>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Full Content (HTML support)</label>
                                <textarea
                                    name="content"
                                    rows={10}
                                    required
                                    defaultValue={editingPost?.content}
                                    placeholder="The full article content..."
                                ></textarea>
                            </div>

                            <div className={styles.submitActions}>
                                <button type="button" onClick={() => setView('list')} className={styles.cancelBtn}>Cancel</button>
                                <button type="submit" className={styles.submitBtn} disabled={loading}>
                                    {loading ? 'Saving...' : (editingPost ? 'Update Post' : 'Create Post')}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
}
