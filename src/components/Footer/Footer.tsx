import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Brand Section */}
                <div className={styles.brandSection}>
                    <div className={styles.logoAndGroup}>
                        <div className={styles.logoContainer}>
                            <Image
                                src="/png 2.svg"
                                alt="TeleSoftas Logo"
                                width={180}
                                height={44}
                                className={styles.logo}
                            />
                        </div>
                        <span className={styles.groupName}>Helmes Group</span>
                    </div>
                    <p className={styles.description}>
                        We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.
                    </p>
                    <div className={styles.socialLinks}>
                        <Link href="#" className={styles.socialIcon} aria-label="Facebook">
                            <FaFacebookF />
                        </Link>
                        <Link href="#" className={styles.socialIcon} aria-label="Twitter">
                            <FaTwitter />
                        </Link>
                        <Link href="#" className={styles.socialIcon} aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </Link>
                        <Link href="#" className={styles.socialIcon} aria-label="Instagram">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>

                {/* Navigation Section */}
                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Navigation</h3>
                    <div className={styles.linkList}>
                        <Link href="/#about" className={styles.link}>About Us</Link>
                        <Link href="/#proof" className={styles.link}>Proofs</Link>
                        <Link href="/insights" className={styles.link}>Insight</Link>
                        <Link href="#" className={styles.link}>Careers</Link>
                        <Link href="/#contact" className={styles.link}>Contact Us</Link>
                    </div>
                </div>

                {/* Contact Section */}
                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Contact</h3>
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
                    </div>
                </div>
            </div>
        </footer>
    );
}
