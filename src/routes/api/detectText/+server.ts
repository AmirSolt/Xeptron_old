

// import * as AI from '$lib/funcs/server/AI/index'

import { json } from '@sveltejs/kit';


export const POST = async ({request}) => {

    let input = await request.json()
    const text:string = input.detector
    const detector:Detector = input.detector

	// check validness


    const response:DetectorResponse = {
        errorMessage:null,
        hasSucceeded:true
    }
    return json(response)
};
