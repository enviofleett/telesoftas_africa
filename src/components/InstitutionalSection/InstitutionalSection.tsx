import styles from "./InstitutionalSection.module.css";

export default function InstitutionalSection() {
    return (
        <section className={styles.section}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Institutional & Public Sector Transformation
                </h2>
                <p className={styles.description}>
                    Governments and public institutions face some of the most complex growth challenges: scale,
                    legacy systems, accountability, and citizen trust. We support institutional partners in designing and
                    implementing digital systems that improve efficiency, transparency, and service delivery — drawing
                    from experience in national-scale platforms and long-term digital transformation programs. Our
                    work emphasizes clarity of mandate, phased execution, and sustainability beyond political cycles.
                </p>
            </div>
        </section>
    );
}
