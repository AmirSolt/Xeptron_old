import { fail } from '@sveltejs/kit'

export const actions = {
	default: async ({locals}) => {
		const session = await locals.getSession()
		if (!session) return fail(401)



        const { error } = await locals.supabase.auth.signOut()
      
        if (error) {
        return fail(500, { message: 'Server error. Try again later.', success: false })
        }
    
        return {
        message: 'Please check your email for a magic link to log into the website.',
        success: true,
        }
	},
}