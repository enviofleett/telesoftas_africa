import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Hero({ 
    title = "We are the <br /> best partner for <br /> growth", 
    subtext = "We partner with ambitious organizations to design, build, and scale digital capabilities that drive real, sustainable growth.", 
    buttonText = "Start a conversation", 
    buttonLink = "/contact" 
}: { 
    title?: string; 
    subtext?: string; 
    buttonText?: string; 
    buttonLink?: string; 
}) {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title.replace('highlight', styles.pinkText) }} />

                    <p className={styles.description}>
                        {subtext}
                    </p>

                    <Link href={buttonLink} className={styles.convButton}>
                        {buttonText}
                        <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className={styles.rightContent}>
                <Image
                    src="/telesoftas.jpeg"
                    alt="TeleSoftas Partner for Growth"
                    fill
                    className={styles.heroImage}
                    priority
                />
            </div>
        </section>
    );
}
