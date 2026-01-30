import styles from "./TalentSection.module.css";

export default function TalentSection() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <h2 className={styles.title}>Talent & Delivery Partnerships</h2>
                <ul className={styles.list}>
                    <li>Embedded engineering teams</li>
                    <li>Capability building</li>
                    <li>Long-term delivery partnerships</li>
                </ul>
                <p className={styles.subtext}>
                    We engage where ambition, scope, and impact justify a serious partnership.
                </p>
            </div>
        </section>
    );
}
