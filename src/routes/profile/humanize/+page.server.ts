import { detectors } from '$lib/funcs/server/detectors/index.js';
import { fetchProfileData } from '$lib/funcs/server/database/index.js';
import { error } from '@sveltejs/kit';


export async function load({ locals: { getSession } }) {
    const session = await getSession()
    const profileData = await fetchProfileData(session,
        `
        wallets(pos_credit,neg_credit),
        personalities(writing_style, use_case, first_name, last_name)
        `
   )
   let wallet:Wallet=profileData["wallets"]
   let personality:Personality=profileData["personalities"]
   if (wallet == null || personality == null) {
        throw error(400, {
            message: "Sorry, there was a problem loading your profile",
        })
    }

    return {
        personality,
        detectors,
        wallet,
    }
}
