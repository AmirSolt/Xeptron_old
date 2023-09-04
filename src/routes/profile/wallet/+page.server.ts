import { wallet } from '$lib/funcs/server/database/index.js';
import { redirect } from '@sveltejs/kit'


export async function load(event) {
    const session = await event.locals.getSession()
	if (!session) {
		throw redirect(302, '/auth/noGo')
	}
    return {
        wallet
    }
}
