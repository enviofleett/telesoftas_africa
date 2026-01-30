import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundImage} />
            <div className={styles.overlay} />

            <div className={styles.content}>
                <h1 className={styles.title}>
                    We are <br />
                    the Best <br />
                    Partner for <br />
                    <span className={styles.pinkText}>Growth</span>
                </h1>

                <Link href="/contact" className={styles.convButton}>
                    Start a conversation
                    <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>
            </div>

            <p className={styles.footerSubtext}>
                We partner with ambitious organizations to design, build, and scale digital capabilities that drive real, sustainable growth.
            </p>
        </section>
    );
}
