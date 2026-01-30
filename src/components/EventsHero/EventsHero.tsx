import styles from "./EventsHero.module.css";

export default function EventsHero() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left - Image */}
                <div className={styles.imageWrapper}>
                    <img
                        src="/picturesss.jpg"
                        alt="Team at event"
                        className={styles.image}
                    />
                </div>

                {/* Right - Text */}
                <div className={styles.content}>
                    <span className={styles.label}>Events & Ecosystem</span>
                    <p className={styles.description}>
                        We engage through carefully selected events and ecosystem initiatives designed to build meaningful relationships — not surface-level exposure. Events are not about visibility. They are about access, dialogue, and trust.
                    </p>
                </div>
            </div>
        </section>
    );
}
