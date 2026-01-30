import styles from "./InsightsHero.module.css";

export default function InsightsHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <div className={styles.pill}>Insight</div>
                <h1 className={styles.title}>Shape thinking before selling.</h1>
                <p className={styles.description}>
                    Growth conversations should begin long before a proposal is written.
                    Our insights exist to shape how organizations think about growth, technology, and
                    execution, so when conversations start, they start with clarity and trust.
                </p>
            </div>
        </section>
    );
}
