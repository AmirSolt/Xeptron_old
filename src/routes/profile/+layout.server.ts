import { fetchProfile } from '$lib/funcs/server/database/index.js'
import type { Session } from "@supabase/supabase-js";



export const load = async ({ depends, locals: { getSession } }) => {
	depends('data:profile');

	const session: Session | null = await getSession()
	
	const profile: Profile | null = await fetchProfile(session)
	
	

	return {
		profile,
	}
}