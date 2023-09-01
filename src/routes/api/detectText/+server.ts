

// import * as AI from '$lib/funcs/server/AI/index'

import { json } from '@sveltejs/kit';

import { setTimeout } from "timers/promises";

export const POST = async ({request}) => {

    let input = await request.json()
    const text:string = input.text
    const detector:Detector = input.detector

	// check validness
    await setTimeout(5000);


    const response:DetectorResponse = {
        errorMessage:null,
        hasSucceeded:true
    }
    return json(response)
};
