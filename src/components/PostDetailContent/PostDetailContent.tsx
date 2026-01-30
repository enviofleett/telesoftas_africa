import styles from "./PostDetailContent.module.css";

interface PostDetailContentProps {
    content: string;
}

export default function PostDetailContent({ content }: PostDetailContentProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </section>
    );
}
