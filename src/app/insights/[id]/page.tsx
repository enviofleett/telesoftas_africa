import { getPostById, getPosts } from "@/lib/posts";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PostDetailHero from "@/components/PostDetailHero/PostDetailHero";
import PostDetailContent from "@/components/PostDetailContent/PostDetailContent";
import ReadyToWork from "@/components/ReadyToWork/ReadyToWork";
import styles from "../../page.module.css"; // Reuse main styles for container if needed, or just layout

// Generate static params for all posts
export async function generateStaticParams() {
    const posts = getPosts();
    return posts.map((post) => ({
        id: post.id,
    }));
}

export default async function PostDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const post = getPostById(id);

    if (!post) {
        return <div>Post not found</div>;
    }

    // Format date nicely
    const date = new Date(post.createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    return (
        <main className={styles.main}>
            <Navbar />
            <PostDetailHero
                title={post.title}
                category={post.category}
                date={date}
                author={post.author}
                readTime={post.readTime}
            />
            {post.content && <PostDetailContent content={post.content} />}
            <ReadyToWork />
            <Footer />
        </main>
    );
}
