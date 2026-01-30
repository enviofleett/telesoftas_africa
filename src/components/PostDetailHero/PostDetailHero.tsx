import styles from "./PostDetailHero.module.css";

interface PostDetailHeroProps {
    title: string;
    date: string;
    category: string;
    author?: string;
    readTime?: string;
    comments?: number;
}

export default function PostDetailHero({ title, date, category, author, readTime, comments }: PostDetailHeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>

                <div className={styles.metadata}>
                    <span className={styles.metaItem}>{date}</span>
                    {author && <span className={styles.metaItem}>By {author}</span>}
                    {readTime && <span className={styles.metaItem}>{readTime}</span>}
                    <span className={styles.metaItem}>Category {category}</span>
                </div>
            </div>
        </section>
    );
}
