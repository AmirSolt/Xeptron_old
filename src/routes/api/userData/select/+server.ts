import {fetchProfile} from '$lib/funcs/server/database/index.js'
import type { Session } from "@supabase/supabase-js";
import { json } from '@sveltejs/kit';

export const GET = async ({locals:{getSession}}) => {
    
    const session:Session|null = await getSession()

    const profile = await fetchProfile(session)

    return json({profile})
};