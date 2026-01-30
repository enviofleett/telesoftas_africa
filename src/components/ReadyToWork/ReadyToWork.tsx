import styles from "./ReadyToWork.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ReadyToWork() {
    return (
        <section className={styles.section}>
            <Image
                src="/Group 427320889.png"
                alt="Decorative Graphics"
                width={944}
                height={944}
                className={styles.polygonAsset}
                priority
            />

            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <span className={styles.label}>Book a call</span>
                    <h2 className={styles.title}>Ready to work <br /> with us ?</h2>

                    <div className={styles.description}>
                        <p>Pick a moment <b>that</b> works for you . Together we will uncover</p>
                    </div>

                    <ul className={styles.checklist}>
                        <li className={styles.checkItem}>
                            <span className={styles.checkIcon}>✓</span>
                            How we are the best partner for growth
                        </li>
                        <li className={styles.checkItem}>
                            <span className={styles.checkIcon}>✓</span>
                            We engineer growth, not just deliver projects.
                        </li>
                        <li className={styles.checkItem}>
                            <span className={styles.checkIcon}>✓</span>
                            We focus on systems that make execution work
                        </li>
                        <li className={styles.checkItem}>
                            <span className={styles.checkIcon}>✓</span>
                            We understand complexity across critical sectors
                        </li>
                        <li className={styles.checkItem}>
                            <span className={styles.checkIcon}>✓</span>
                            We work as long-term partners, not vendors.
                        </li>
                    </ul>

                    <div className={styles.profileCard}>
                        <div className={styles.avatarWrapper}>
                            <Image
                                src="/19840a3a7e830f73854002aeaf2c37bb5bf99cc2.jpg"
                                alt="Mimshach Emmanuel Obioha"
                                width={80}
                                height={80}
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

                <div className={styles.rightContent}>
                    <div className={styles.strategyInfo}>
                        <h3 className={styles.strategyTitle}>30min strategy Call</h3>
                        <div className={styles.widgetDetails}>
                            <div className={styles.detailItem}>
                                <svg className={styles.widgetIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                30min
                            </div>
                            <div className={styles.detailItem}>
                                <Image src="/globe.svg" alt="Meet" width={24} height={24} className={styles.widgetIcon} style={{ filter: 'none' }} />
                                Google meet
                            </div>
                            <div className={styles.detailItem}>
                                <svg className={styles.widgetIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                Africa/Abuja
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
