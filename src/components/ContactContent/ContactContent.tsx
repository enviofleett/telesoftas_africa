import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
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
                            <span>example@teamwebflow.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FaMapMarkerAlt className={styles.contactIcon} />
                            <span>
                                4074 Ebert Summit Suite 375<br />
                                Lake Leonardchester
                            </span>
                        </div>
                        <div className={styles.contactItem}>
                            <FaPhoneAlt className={styles.contactIcon} />
                            <span>+234 123 654 7890</span>
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
                            <Link href="#" className={styles.socialLink} aria-label="Facebook">
                                <FaFacebookF />
                            </Link>
                            <Link href="#" className={styles.socialLink} aria-label="Twitter">
                                <FaTwitter />
                            </Link>
                            <Link href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </Link>
                            <Link href="#" className={styles.socialLink} aria-label="Instagram">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
