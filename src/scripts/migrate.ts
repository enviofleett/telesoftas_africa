import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase credentials missing in .env.local');
    process.exit(1);
}

// Use Service Role Key if available to bypass RLS during migration
const supabase = createClient(supabaseUrl, serviceRoleKey || supabaseAnonKey);

async function migrate() {
    const dataFile = path.join(process.cwd(), 'src', 'data', 'posts.json');

    if (!fs.existsSync(dataFile)) {
        console.error('Data file not found at:', dataFile);
        return;
    }

    const posts = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

    for (const post of posts) {
        const { error } = await supabase
            .from('posts')
            .upsert({
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
            console.error(`Error migrating post ${post.id}:`, error);
        } else {
            console.log(`Successfully migrated post ${post.id}`);
        }
    }
}

migrate();
