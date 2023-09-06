import { fetchProfileData } from '$lib/funcs/server/database/index.js';
import { detectors } from '$lib/funcs/server/detectors/index.js';
import { error } from '@sveltejs/kit';

export async function load({ locals: { getSession } }) {
    const session = await getSession()

    const profileData = await fetchProfileData(session,
         `
         wallets(pos_credit,neg_credit)
         `
    )
    let wallet:Wallet=profileData["wallets"]
    if (wallet == null) {
		throw error(400, {
            message: "Sorry, there was a problem loading your profile",
        })
    }

    return {
        detectors,
        wallet,
    }
}


