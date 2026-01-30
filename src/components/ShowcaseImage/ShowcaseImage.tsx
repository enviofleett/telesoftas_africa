import Image from "next/image";
import styles from "./ShowcaseImage.module.css";

export default function ShowcaseImage() {
    return (
        <section className={styles.section}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/div.png"
                    alt="Showcase"
                    width={1450}
                    height={752}
                    className={styles.image}
                    priority
                />
            </div>
        </section>
    );
}
