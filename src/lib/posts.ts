import fs from 'fs';
import path from 'path';

export interface Post {
    id: string;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    content?: string;
    author?: string;
    readTime?: string;
}

const dataFile = path.join(process.cwd(), 'src', 'data', 'posts.json');

export function getPosts(): Post[] {
    try {
        if (!fs.existsSync(dataFile)) {
            return [];
        }
        const fileContents = fs.readFileSync(dataFile, 'utf8');
        return JSON.parse(fileContents);
    } catch (error) {
        console.error('Error reading posts:', error);
        return [];
    }
}

export function savePost(post: Post) {
    const posts = getPosts();
    posts.push(post);
    fs.writeFileSync(dataFile, JSON.stringify(posts, null, 2));
}

export function updatePost(id: string, updatedPost: Partial<Post>) {
    const posts = getPosts();
    const index = posts.findIndex(p => p.id === id);
    if (index !== -1) {
        posts[index] = { ...posts[index], ...updatedPost };
        fs.writeFileSync(dataFile, JSON.stringify(posts, null, 2));
        return posts[index];
    }
    return null;
}

export function deletePost(id: string) {
    const posts = getPosts();
    const filteredPosts = posts.filter(p => p.id !== id);
    if (posts.length !== filteredPosts.length) {
        fs.writeFileSync(dataFile, JSON.stringify(filteredPosts, null, 2));
        return true;
    }
    return false;
}

export function getPostById(id: string): Post | undefined {
    const posts = getPosts();
    return posts.find((post) => post.id === id);
}
