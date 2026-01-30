import styles from "./WhatWeDoHero.module.css";

export default function WhatWeDoHero() {
    return (
        <section className={styles.section}>
            {/* Decorative Squares */}
            <div className={`${styles.square} ${styles.square1}`}></div>
            <div className={`${styles.square} ${styles.square2}`}></div>
            <div className={`${styles.square} ${styles.square3}`}></div>
            <div className={`${styles.square} ${styles.square4}`}></div>
            <div className={`${styles.square} ${styles.square5}`}></div>

            {/* Accent Bar */}
            <div className={styles.accentBar}></div>

            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <span className={styles.label}>What we do</span>

                    <p className={styles.intro}>
                        We work with organizations facing complex growth, scale,
                        and transformation challenges — where clarity, execution,
                        and trust matter. Our engagements are typically multi-month,
                        outcome-driven, and designed for long-term impact.
                    </p>

                    <div className={styles.serviceSection}>
                        <h3 className={styles.serviceTitle}>Digital Products & Platforms</h3>
                        <ul className={styles.serviceList}>
                            <li>Enterprise and platform software</li>
                            <li>Data, automation, and AI-enabled systems</li>
                            <li>Secure, scalable architectures</li>
                        </ul>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.serviceSection}>
                        <h3 className={styles.serviceTitle}>Growth & Digital Transformation</h3>
                        <ul className={styles.serviceList}>
                            <li>Digital transformation programs</li>
                            <li>Growth strategy design and execution</li>
                            <li>Process optimization and automation</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/mimss.jpg"
                            alt="Team member presenting"
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
