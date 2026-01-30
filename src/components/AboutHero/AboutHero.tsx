import styles from "./AboutHero.module.css";

export default function AboutHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.overlay}></div>
        </section>
    );
}
