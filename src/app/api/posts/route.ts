import { NextResponse } from 'next/server';
import { savePost, Post } from '@/lib/posts';
import path from 'path';
import { writeFile } from 'fs/promises';
import fs from 'fs';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const title = formData.get('title') as string;
        const category = formData.get('category') as string;
        const description = formData.get('description') as string;
        const content = formData.get('content') as string;
        const author = formData.get('author') as string;
        const readTime = formData.get('readTime') as string;
        const image = formData.get('image') as File;

        let imageUrl = '';
        if (image && typeof image !== 'string') {
            const buffer = Buffer.from(await image.arrayBuffer());
            const verifyName = image.name.replace(/\s/g, '-');
            const filename = Date.now() + '-' + verifyName;
            const uploadDir = path.join(process.cwd(), 'public', 'uploads');

            // Ensure dir exists
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            await writeFile(path.join(uploadDir, filename), buffer);
            imageUrl = `/uploads/${filename}`;
        }

        const newPost: Post = {
            id: Date.now().toString(),
            title,
            category,
            description,
            content,
            author,
            readTime,
            imageUrl,
            createdAt: new Date().toISOString(),
        };

        savePost(newPost);

        return NextResponse.json({ success: true, post: newPost });
    } catch (error) {
        console.error('Error in API:', error);
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}

export async function GET() {
    const { getPosts } = await import('@/lib/posts'); // Dynamic import to avoid build time static gen issues if any
    const posts = getPosts();
    return NextResponse.json(posts);
}
