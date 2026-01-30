import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandSection}>
                    <div className={styles.logoContainer}>
                        <Image
                            src="/png 2.svg"
                            alt="TeleSoftas Logo"
                            width={150}
                            height={40}
                            className={styles.logo}
                        />
                    </div>
                    <p className={styles.description}>
                        We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.
                    </p>
                    <div className={styles.socialLinks}>
                        <Link href="#" className={styles.socialIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </Link>
                        <Link href="#" className={styles.socialIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </Link>
                        <Link href="#" className={styles.socialIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </Link>
                        <Link href="#" className={styles.socialIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Navigation</h3>
                    <div className={styles.linkList}>
                        <Link href="/about" className={styles.link}>About Us</Link>
                        <Link href="/what-we-do" className={styles.link}>Solutions</Link>
                        <Link href="/insights" className={styles.link}>Insight</Link>
                        <Link href="#" className={styles.link}>Careers</Link>
                        <Link href="/contact" className={styles.link}>Contact Us</Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Licence</h3>
                    <div className={styles.linkList}>
                        <Link href="#" className={styles.link}>Privacy Policy</Link>
                        <Link href="#" className={styles.link}>Copyright</Link>
                        <Link href="#" className={styles.link}>Email Address</Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.columnTitle}>Contact</h3>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            (406) 555-0120
                        </div>
                        <div className={styles.contactItem}>
                            <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Telesoftas@gmail.com
                        </div>
                        <div className={styles.contactItem}>
                            <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            2972 Westheimer Rd. Santa Ana, Illinois 85486
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
