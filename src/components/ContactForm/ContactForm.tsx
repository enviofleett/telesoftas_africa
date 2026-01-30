"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: ""
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setMessage({ text: "Thank you! We will get back to you within 24 hours.", type: "success" });
                setFormData({ name: "", email: "", phone: "", service: "" });
            } else {
                setMessage({ text: "Something went wrong. Please try again.", type: "error" });
            }
        } catch (error) {
            setMessage({ text: "Error sending message. Please check your connection.", type: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className={styles.formCard} onSubmit={handleSubmit}>
            {message && (
                <div className={`${styles.statusMessage} ${styles[message.type]}`}>
                    {message.text}
                </div>
            )}

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="i.e. John Doe"
                    className={styles.input}
                />
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="i.e. john@mail.com"
                    className={styles.input}
                />
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Phone</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="i.e. 123-456-7890"
                    className={styles.input}
                />
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Which service do you need?</label>
                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={styles.select}
                >
                    <option value="" disabled>Select a service</option>
                    <option value="Software Development">Software Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Consulting">Consulting</option>
                </select>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? "Sending..." : "Get Free Consultancy"}
            </button>
        </form>
    );
}
