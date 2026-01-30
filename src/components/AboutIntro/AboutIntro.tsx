import styles from "./AboutIntro.module.css";

export default function AboutIntro() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.pill}>About us</div>
                <p className={styles.description}>
                    Telesoftas Nigeria was established to bring world-class digital delivery and growth capability into the African market. We combine global experience with local context, guided by the belief that Africa deserves serious, well-executed digital solutions.
                </p>
            </div>
        </section>
    );
}
