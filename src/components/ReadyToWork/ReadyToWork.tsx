import styles from "./ReadyToWork.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ReadyToWork() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <div className={styles.contentWrap}>
                        <span className={styles.label}>Book a call</span>
                        <h2 className={styles.title}>Ready to work <br /> with us ?</h2>

                        <div className={styles.description}>
                            <p>Pick a moment <b>that</b> works for you . Together we will uncover</p>
                        </div>

                        <ul className={styles.checklist}>
                            <li className={styles.checkItem}>
                                <span className={styles.checkIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                How we are the best partner for growth
                            </li>
                            <li className={styles.checkItem}>
                                <span className={styles.checkIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                We engineer growth, not just deliver projects.
                            </li>
                            <li className={styles.checkItem}>
                                <span className={styles.checkIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                We focus on systems that make execution work
                            </li>
                            <li className={styles.checkItem}>
                                <span className={styles.checkIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                We understand complexity across critical sectors
                            </li>
                            <li className={styles.checkItem}>
                                <span className={styles.checkIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                We work as long-term partners, not vendors.
                            </li>
                        </ul>

                        <div className={styles.profileCard}>
                            <div className={styles.avatarWrapper}>
                                <Image
                                    src="/19840a3a7e830f73854002aeaf2c37bb5bf99cc2.jpg"
                                    alt="Mimshach Emmanuel Obioha"
                                    width={70}
                                    height={70}
                                    className={styles.avatar}
                                />
                            </div>
                            <div className={styles.profileInfo}>
                                <h4>Mimshach Emmanuel</h4>
                                <p>Obioha , CEO</p>
                            </div>
                        </div>

                        <Link href="/contact" className={styles.startButton}>
                            Start a conversation
                            <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <Image
                        src="/TeleSoftasLagos-139 1.png"
                        alt="Ready to work with TeleSoftas"
                        fill
                        className={styles.ctaImage}
                    />
                </div>
            </div>
        </section>
    );
}
