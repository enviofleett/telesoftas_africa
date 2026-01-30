import { supabase } from './supabase';

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

export async function getPosts(): Promise<Post[]> {
    try {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;

        return (data || []).map(post => ({
            id: post.id,
            title: post.title,
            category: post.category,
            description: post.description,
            imageUrl: post.image_url,
            createdAt: post.created_at,
            content: post.content,
            author: post.author,
            readTime: post.read_time
        }));
    } catch (error) {
        console.error('Error reading posts:', error);
        return [];
    }
}

export async function savePost(post: Post) {
    const { error } = await supabase
        .from('posts')
        .insert({
            id: post.id,
            title: post.title,
            category: post.category,
            description: post.description,
            image_url: post.imageUrl,
            content: post.content,
            author: post.author,
            read_time: post.readTime,
            created_at: post.createdAt
        });

    if (error) {
        console.error('Error saving post:', error);
        throw error;
    }
}

export async function updatePost(id: string, updatedPost: Partial<Post>) {
    const updates: any = {};
    if (updatedPost.title) updates.title = updatedPost.title;
    if (updatedPost.category) updates.category = updatedPost.category;
    if (updatedPost.description) updates.description = updatedPost.description;
    if (updatedPost.imageUrl) updates.image_url = updatedPost.imageUrl;
    if (updatedPost.content) updates.content = updatedPost.content;
    if (updatedPost.author) updates.author = updatedPost.author;
    if (updatedPost.readTime) updates.read_time = updatedPost.readTime;

    const { data, error } = await supabase
        .from('posts')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.error('Error updating post:', error);
        throw error;
    }

    return {
        id: data.id,
        title: data.title,
        category: data.category,
        description: data.description,
        imageUrl: data.image_url,
        createdAt: data.created_at,
        content: data.content,
        author: data.author,
        readTime: data.read_time
    };
}

export async function deletePost(id: string) {
    const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting post:', error);
        return false;
    }
    return true;
}

export async function getPostById(id: string): Promise<Post | undefined> {
    try {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;

        return {
            id: data.id,
            title: data.title,
            category: data.category,
            description: data.description,
            imageUrl: data.image_url,
            createdAt: data.created_at,
            content: data.content,
            author: data.author,
            readTime: data.read_time
        };
    } catch (error) {
        console.error('Error fetching post by ID:', error);
        return undefined;
    }
}
