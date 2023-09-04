import { fetchProfileData } from '$lib/funcs/server/database/index.js';
import { detectors } from '$lib/funcs/server/detectors/index.js';


export async function load({ locals: { getSession } }) {
    const session = await getSession()

    const profileData = await fetchProfileData(session,
        `
        wallets(credits),
        personalities(writingStyle, useCase, name)
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
