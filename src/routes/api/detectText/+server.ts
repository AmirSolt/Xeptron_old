

// import * as AI from '$lib/funcs/server/AI/index'
import {detectText} from '$lib/funcs/server/detectors/index.js'
import { json, error } from '@sveltejs/kit';
import {hasCredit} from '$lib/funcs/server/database/index.js'


export const POST = async ({request, locals:{getSession}}) => {

    const session = await getSession()
	if (!session) {
		throw error(400, {
            message: "You are not logged in!",
        })
	}

    const hasCreditC = await hasCredit(session)
    if(hasCreditC==null || !hasCreditC){
        throw error(400, {
            message: "Do not have enough credit!",
        })
    }

    let input = await request.json()
    const text:string = input.text
    const detector:Detector = input.detector
    const response:DetectorResponse = await detectText(session, detector.id, text)
    return json(response)
};
