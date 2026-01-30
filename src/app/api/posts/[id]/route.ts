import { NextResponse } from 'next/server';
import { updatePost, deletePost, getPostById, Post } from '@/lib/posts';
import path from 'path';
import { writeFile } from 'fs/promises';
import fs from 'fs';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const post = getPostById(id);
    if (post) {
        return NextResponse.json(post);
    }
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const formData = await request.formData();

        const updates: Partial<Post> = {};

        const title = formData.get('title');
        if (title) updates.title = title as string;

        const category = formData.get('category');
        if (category) updates.category = category as string;

        const description = formData.get('description');
        if (description) updates.description = description as string;

        const content = formData.get('content');
        if (content) updates.content = content as string;

        const author = formData.get('author');
        if (author) updates.author = author as string;

        const readTime = formData.get('readTime');
        if (readTime) updates.readTime = readTime as string;

        const image = formData.get('image');
        if (image && typeof image !== 'string') {
            const imageFile = image as File;
            const buffer = Buffer.from(await imageFile.arrayBuffer());
            const verifyName = imageFile.name.replace(/\s/g, '-');
            const filename = Date.now() + '-' + verifyName;
            const uploadDir = path.join(process.cwd(), 'public', 'uploads');

            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            await writeFile(path.join(uploadDir, filename), buffer);
            updates.imageUrl = `/uploads/${filename}`;
        }

        const updated = updatePost(id, updates);
        if (updated) {
            return NextResponse.json({ success: true, post: updated });
        }
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    } catch (error) {
        console.error('Error updating post:', error);
        return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const deleted = deletePost(id);
        if (deleted) {
            return NextResponse.json({ success: true });
        }
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    } catch (error) {
        console.error('Error deleting post:', error);
        return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
    }
}
