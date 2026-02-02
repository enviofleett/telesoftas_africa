import { supabase } from './supabase';

export async function getPageContent(slug: string) {
    try {
        const { data, error } = await supabase
            .from('pages')
            .select('content')
            .eq('slug', slug)
            .single();

        if (error) {
            console.error(`Error fetching page content for ${slug}:`, error);
            return null;
        }

        return data?.content || null;
    } catch (error) {
        console.error(`Unexpected error fetching page content for ${slug}:`, error);
        return null;
    }
}

export async function updatePageContent(slug: string, content: any) {
    try {
        const { error } = await supabase
            .from('pages')
            .upsert({ slug, content }, { onConflict: 'slug' });

        if (error) {
            console.error(`Error updating page content for ${slug}:`, error);
            return false;
        }

        return true;
    } catch (error) {
        console.error(`Unexpected error updating page content for ${slug}:`, error);
        return false;
    }
}
