import { fetchProfileData } from '$lib/funcs/server/database/index.js';
import { redirect } from '@sveltejs/kit'


export async function load({locals:{getSession}}) {
    const session = await getSession()
	if (!session) {
		throw redirect(302, '/auth/noGo')
	}

    const profileData = await fetchProfileData(session,
        `
        wallets(pos_credit,neg_credit)
        `
   )
   let wallet:Wallet|null=profileData["wallets"]
    

    return {
        wallet
    }
}
