import styles from "./ProofThemes.module.css";

export default function ProofThemes() {
    return (
        <section className={styles.section}>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <div className={styles.themes}>
                    <h3 className={styles.title}>Key Themes</h3>
                    <ul className={styles.list}>
                        <li>National-scale architecture</li>
                        <li>Security and reliability</li>
                        <li>Long-term maintainability</li>
                        <li>Cross-institution integration</li>
                        <li>Citizen-centric service design</li>
                        <li>Systems and Data interoperability</li>
                    </ul>
                </div>

                <p className={styles.description}>
                    This experience informs how we approach complex digital transformation challenges in emerging
                    and global markets. Additional case studies and pilots can follow this section.
                </p>
            </div>
        </section>
    );
}
