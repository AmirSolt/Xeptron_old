import { fetchProfileData } from '$lib/funcs/server/database/index.js';
import { detectors } from '$lib/funcs/server/detectors/index.js';


export async function load({ locals: { getSession } }) {
    const session = await getSession()

    const profileData = await fetchProfileData(session,
         `
         wallets(credits)
         `
    )
    let wallet:Wallet|null=profileData["wallets"]

    return {
        detectors,
        wallet,
    }
}


