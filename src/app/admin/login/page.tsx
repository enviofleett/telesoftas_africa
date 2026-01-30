"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import adminStyles from '../admin.module.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            router.push('/admin');
        } catch (err: any) {
            setError(err.message || 'Failed to login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className={adminStyles.main}>
            <Navbar />
            <div className={adminStyles.container} style={{ maxWidth: '400px', margin: '100px auto' }}>
                <div className={adminStyles.formCard}>
                    <h1 className={adminStyles.title} style={{ textAlign: 'center', marginBottom: '30px' }}>Admin Login</h1>

                    {error && (
                        <div className={`${adminStyles.message} ${adminStyles.error}`} style={{ marginBottom: '20px' }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className={adminStyles.form}>
                        <div className={adminStyles.formGroup}>
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="admin@example.com"
                            />
                        </div>

                        <div className={adminStyles.formGroup}>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="••••••••"
                            />
                        </div>

                        <div className={adminStyles.submitActions} style={{ marginTop: '20px' }}>
                            <button
                                type="submit"
                                className={adminStyles.submitBtn}
                                style={{ width: '100%' }}
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}
