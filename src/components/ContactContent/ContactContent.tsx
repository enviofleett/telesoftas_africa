import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./ContactContent.module.css";

export default function ContactContent() {
    return (
        <section className={styles.section}>
            {/* Decorative Squares */}
            <div className={`${styles.square} ${styles.square1}`}></div>
            <div className={`${styles.square} ${styles.square2}`}></div>
            <div className={`${styles.square} ${styles.square3}`}></div>
            <div className={`${styles.square} ${styles.square4}`}></div>
            <div className={`${styles.square} ${styles.square5}`}></div>
            <div className={`${styles.square} ${styles.square6}`}></div>

            <div className={styles.container}>
                {/* Left Column: Text & Info */}
                <div className={styles.leftColumn}>
                    <div className={styles.heroText}>
                        <h2>Ready for impact?</h2>
                        <p>
                            Tell us about your organisation, your challenges,<br />
                            or the outcomes you want to achieve<br />
                            Our team will connect with you within 24 hours to<br />
                            explore how we can help.
                        </p>
                    </div>

                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <FaEnvelope className={styles.contactIcon} />
                            <span>hello@telesoftas.africa</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FaMapMarkerAlt className={styles.contactIcon} />
                            <span>
                                57 Ebitu Ukiwe Street Jabi Abuja, Nigeria
                            </span>
                        </div>
                        <div className={styles.contactItem}>
                            <FaPhoneAlt className={styles.contactIcon} />
                            <span>+2349046712457</span>
                        </div>
                    </div>

                    <div className={styles.leftFooter}>
                        <p>
                            Part of the Helmes Group.<br />
                            Trusted across Europe.<br />
                            Now building from Africa.
                        </p>
                    </div>
                </div>

                {/* Right Column: Form & Socials */}
                <div className={styles.rightColumn}>
                    <ContactForm />

                    <div className={styles.followUsSection}>
                        <span className={styles.label}>Follow Us</span>
                        <div className={styles.socialGrid}>
                            <Link href="https://ng.linkedin.com/company/telesoftas-africa" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </Link>
                            <Link href="https://www.instagram.com/telesoftas.africa/" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
