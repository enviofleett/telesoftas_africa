import styles from "./WhyWeExist.module.css";

export default function WhyWeExist({
    title = "Why we exist",
    subtext = [
        "Part of the Helmes Group.",
        "Trusted across Europe.",
        "Now building from Africa."
    ],
    description = "We exist to help organizations grow in a way that is deliberate, sustainable, and built to last. Too many growth efforts fail not because of lack of ambition, but because strategy, execution, and long-term thinking are disconnected. Our role is to close that gap by partnering with organizations to design and execute growth with clarity and discipline."
}: {
    title?: string;
    subtext?: string[];
    description?: string;
}) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.subtext}>
                        {subtext.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <p className={styles.description}>
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}
