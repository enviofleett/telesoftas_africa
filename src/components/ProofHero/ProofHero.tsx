import styles from "./ProofHero.module.css";

export default function ProofHero() {
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
                <span className={styles.label}>Proof</span>
                <p className={styles.description}>
                    Estonia is widely regarded as one of the most digitally advanced nations in the world.
                    As part of the Helmes Group, our teams have contributed to the design, development, and maintenance of
                    multiple core systems that power Estonia's digital state — spanning identity, public services, and data
                    exchange infrastructure. These systems support millions of secure transactions annually and have been
                    operational for decades.
                </p>
            </div>
        </section>
    );
}
