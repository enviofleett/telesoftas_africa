import styles from "./GrowthLabHero.module.css";

export default function GrowthLabHero() {
    return (
        <section className={styles.section}>
            {/* Decorative Squares */}
            <div className={`${styles.square} ${styles.square1}`}></div>
            <div className={`${styles.square} ${styles.square2}`}></div>

            {/* Accent Bar */}
            <div className={styles.accentBar}></div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.label}>Growth Lab</span>

                    <p className={styles.intro}>
                        We believe the best partners for growth test their ideas
                        before recommending them.
                    </p>

                    <p className={styles.description}>
                        Growth Lab is where we validate strategies, tools, and
                        frameworks in real market conditions.
                    </p>
                </div>
            </div>
        </section>
    );
}
