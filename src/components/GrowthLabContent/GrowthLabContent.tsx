import styles from "./GrowthLabContent.module.css";
import Link from "next/link";

export default function GrowthLabContent() {
    return (
        <section className={styles.section}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>What Happens in Growth Lab</h2>

                    <ul className={styles.featureList}>
                        <li>Controlled growth experiments</li>
                        <li>Market-tested frameworks</li>
                        <li>AI and automation tools</li>
                        <li>Documented insights</li>
                    </ul>

                    <p className={styles.description}>
                        Many of the principles we test in Growth Lab — system resilience, adoption, governance, and
                        scale — are the same principles required for successful public sector digital transformation.
                    </p>

                    <Link href="/insights" className={styles.ctaButton}>
                        See What We&apos;re Learning
                        <svg
                            className={styles.arrowIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
