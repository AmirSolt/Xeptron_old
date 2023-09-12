import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import {PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY} from '$env/static/public';


export const load = async ({ depends, data }) => {
	depends('data:profile');
	console.log("Client Data profile fetched", data.profile?.wallet)
    return { 
        profile: data.profile
    };
};