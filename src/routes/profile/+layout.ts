import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import {PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY} from '$env/static/public';


export const load = async ({ depends, data }) => {
	depends('data:profile');
	
    return { 
        profile: data.profile
    };
};