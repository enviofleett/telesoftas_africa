import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey || !supabaseUrl.startsWith('http')) {
    console.error('Supabase credentials are missing or invalid. Please check your .env.local file. Current URL:', supabaseUrl);
}

// Fallback to empty strings to avoid crash during build if envs are missing
export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder'
);
