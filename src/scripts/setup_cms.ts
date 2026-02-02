import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !serviceRoleKey) {
    console.error('Supabase credentials missing in .env.local');
    process.exit(1);
}

// Use Service Role Key to bypass RLS for table creation
const supabase = createClient(supabaseUrl, serviceRoleKey);

async function setupDatabase() {
    console.log('Starting database setup...');

    // 1. Create 'pages' table (using a raw SQL query via a function if available, or just log intent)
    // Note: Supabase JS client cannot CREATE TABLE directly unless using the RPC interface or raw SQL extension.
    // However, since we are in a dev environment pair-programming, we will assume the user might need to run SQL manually
    // OR we can try to use the REST API to insert a row, which sometimes works if table exists.
    // BUT, the best way for a "setup" script without direct SQL access is to guide the user or use a workaround if enabled.
    
    // WORKAROUND: We will try to invoke a SQL query if the 'pg' extension is enabled, otherwise we will guide the user.
    // Actually, for this specific request, I will create a SQL file that the user can run in the Supabase Dashboard,
    // AND I will try to inspect if the table exists.

    // Let's create a row in 'pages' for the Home page. If table doesn't exist, this will fail, confirming we need to create it.
    
    const homeContent = {
        hero: {
            title: "We are the <br /> best partner for <br /> <span class=\"highlight\">growth</span>",
            subtext: "We partner with ambitious organizations to design, build, and scale digital capabilities that drive real, sustainable growth.",
            buttonText: "Start a conversation",
            buttonLink: "/contact"
        }
    };

    // Check if table exists by trying to select
    const { error: selectError } = await supabase.from('pages').select('id').limit(1);

    if (selectError && selectError.code === '42P01') { // undefined_table
        console.error("Table 'pages' does not exist.");
        console.log("\nPLEASE RUN THIS SQL IN YOUR SUPABASE DASHBOARD (SQL EDITOR):\n");
        console.log(`
        create table if not exists pages (
            id uuid default gen_random_uuid() primary key,
            slug text unique not null,
            content jsonb not null default '{}'::jsonb,
            created_at timestamp with time zone default timezone('utc'::text, now()) not null,
            updated_at timestamp with time zone default timezone('utc'::text, now()) not null
        );

        -- Enable Row Level Security
        alter table pages enable row level security;

        -- Create Policy: Allow public read access
        create policy "Public pages are viewable by everyone"
        on pages for select
        to public
        using (true);

        -- Create Policy: Allow admin write access (service role bypasses this, but good for future auth)
        create policy "Admins can insert/update pages"
        on pages for all
        to authenticated
        using (true);
        `);
        return;
    } else if (selectError) {
        console.error('Error checking table:', selectError);
        return;
    }

    console.log("Table 'pages' exists. Upserting Home page content...");

    const { error: upsertError } = await supabase
        .from('pages')
        .upsert({ 
            slug: 'home', 
            content: homeContent 
        }, { onConflict: 'slug' });

    if (upsertError) {
        console.error('Error upserting home page:', upsertError);
    } else {
        console.log('Successfully initialized Home page content!');
    }
}

setupDatabase();
