import styles from "./ContactForm.module.css";

export default function ContactForm() {
    return (
        <div className={styles.formCard}>
            <div className={styles.fieldGroup}>
                <label className={styles.label}>Name</label>
                <input
                    type="text"
                    placeholder="i.e. John Doe"
                    className={styles.input}
                />
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Email</label>
                <input
                    type="email"
                    placeholder="i.e. john@mail.com"
                    className={styles.input}
                />
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Phone</label>
                <input
                    type="tel"
                    placeholder="i.e. 123-456-7890"
                    className={styles.input}
                />
            </div>

            <div className={styles.fieldGroup}>
                <label className={styles.label}>Which service do you need?</label>
                <select className={styles.select} defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option value="development">Software Development</option>
                    <option value="design">UI/UX Design</option>
                    <option value="consulting">Consulting</option>
                </select>
            </div>

            <button className={styles.submitBtn}>
                Get Free Consultancy
            </button>
        </div>
    );
}
