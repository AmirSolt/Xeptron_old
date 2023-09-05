import { detectors } from '$lib/funcs/server/detectors/index.js';
import { fetchProfileData } from '$lib/funcs/server/database/index.js';


export async function load({ locals: { getSession } }) {
    const session = await getSession()

    const profileData = await fetchProfileData(session,
        `
        wallets(pos_credit,neg_credit),
        personalities(writing_style, use_case, name)
        `
   )
   let wallet:Wallet|null=profileData["wallets"]
   let personality:Personality|null=profileData["personalities"]
    
    return {
        personality,
        detectors,
        wallet,
    }
}
