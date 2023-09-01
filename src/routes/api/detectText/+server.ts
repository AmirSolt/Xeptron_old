

// import * as AI from '$lib/funcs/server/AI/index'
import {detectText} from '$lib/funcs/server/detectors/index.js'
import { json } from '@sveltejs/kit';


export const POST = async ({request}) => {

    let input = await request.json()
    const text:string = input.text
    const detector:Detector = input.detector
    const response:DetectorResponse = detectText(detector.id, text)
    return json(response)
};
