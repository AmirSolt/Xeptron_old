import { json, error } from '@sveltejs/kit';
import {incrementUsageCounter} from '$lib/funcs/server/database/index.js'

export const GET = async ({locals:{getSession}}) => {
	const session = await getSession()
	if (!session) {
		throw error(400, {
            message: "You are not logged in!",
        })
	}
    await incrementUsageCounter(session)
    
    return json({success:true})
}
