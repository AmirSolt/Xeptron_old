import { json, error } from '@sveltejs/kit';
import {fetchWallet, incrementUsage} from '$lib/funcs/server/database/index.js'

export const GET = async ({locals:{getSession}}) => {
	const session = await getSession()
	if (!session) {
		throw error(400, {
            message: "You are not logged in!",
        })
	}
    incrementUsage(session)
    const wallet:Wallet = await fetchWallet(session)
    
    return json({
        wallet
    })
}
