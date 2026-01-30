import styles from "./ScaleSection.module.css";

export default function ScaleSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <h2 className={styles.title}>
                        Built for system.<br />
                        Proven at National<br />
                        scale.
                    </h2>
                </div>
                <div className={styles.rightContent}>
                    <p className={styles.description}>
                        Our approach to growth is informed by experience building and
                        supporting large-scale digital systems including national digital
                        infrastructure. As part of the Helmes Group, our teams have
                        contributed to core systems that power Estonia's globally
                        recognised digital society, often referred to as e-Estonia. This
                        experience shapes how we think about scale, resilience,
                        governance, and long-term impact.
                    </p>
                </div>
            </div>
        </section>
    );
}
