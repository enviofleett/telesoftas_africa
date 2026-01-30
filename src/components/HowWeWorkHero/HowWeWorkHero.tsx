import styles from "./HowWeWorkHero.module.css";

export default function HowWeWorkHero() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left column */}
                <div className={styles.leftColumn}>
                    <span className={styles.label}>How we work</span>

                    <p className={styles.description}>
                        Being the best partner for growth requires more than capability. It requires clarity, discipline, and shared responsibility. Our approach ensures growth is not accidental, but engineered.
                    </p>

                    <div className={styles.imageWrapper}>
                        <img
                            src="/picturesss.jpg"
                            alt="Team meeting"
                            className={styles.image}
                        />
                    </div>

                    <p className={styles.description}>
                        Being the best partner for growth requires more than capability. It requires clarity, discipline, and shared responsibility. Our approach ensures growth is not accidental, but engineered.
                    </p>
                </div>

                {/* Right column */}
                <div className={styles.rightColumn}>
                    <div className={styles.item}>
                        <h3 className={styles.itemTitle}>01 Clarity First</h3>
                        <p className={styles.itemText}>
                            We define goals, constraints, and success metrics together.
                        </p>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.item}>
                        <h3 className={styles.itemTitle}>02 . Designed Strategy</h3>
                        <p className={styles.itemText}>
                            We identify what must be true for success and focus on the few strategies that matter.
                        </p>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.item}>
                        <h3 className={styles.itemTitle}>03 . Disciplined Execution</h3>
                        <p className={styles.itemText}>
                            Phased delivery, continuous feedback, and transparent communication.
                        </p>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.item}>
                        <h3 className={styles.itemTitle}>04 . Sustainable Scale</h3>
                        <p className={styles.itemText}>
                            Systems, teams, and processes designed to outlive the engagement.
                        </p>
                    </div>

                    <div className={styles.divider}></div>
                </div>
            </div>
        </section>
    );
}
