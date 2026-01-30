import styles from "./WhyWeExist.module.css";

export default function WhyWeExist() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <h2 className={styles.title}>Why we exist</h2>
                    <div className={styles.subtext}>
                        <p>Part of the Helmes Group.</p>
                        <p>Trusted across Europe.</p>
                        <p>Now building from Africa.</p>
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <p className={styles.description}>
                        We exist to help organizations grow in a way that is deliberate,
                        sustainable, and built to last. Too many growth efforts fail not
                        because of lack of ambition, but because strategy, execution, and
                        long-term thinking are disconnected. Our role is to close that gap
                        by partnering with organizations to design and execute growth with
                        clarity and discipline.
                    </p>
                </div>
            </div>
        </section>
    );
}
