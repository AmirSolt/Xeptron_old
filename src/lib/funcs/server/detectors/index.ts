
import { originalityMultiPerChar, saplingMultiPerChar, zerogptMultiPerChar } from '$lib/utils/config.server.js'
import { decrementCredit } from '$lib/funcs/server/database/index'
import type { Session } from '@supabase/supabase-js'
import {PRIVATE_ORIGINALITY_KEY, PRIVATE_SAPLING_KEY, PRIVATE_ZEROGPT_KEY} from '$env/static/private'

class DetectorModule {
    creditMulti: number = 0
    detector: Detector = {
        pfpSrc: "",
        name: "name",
        url: "",
        id: "id",
    }
    async getHumanPerc(text: string): Promise<number|null> {
        return -1
    }
    getUsedCredit(text: string) {
        return text.length * this.creditMulti
    }
}

class Originality extends DetectorModule {
    detector: Detector = {
        pfpSrc: "/originality.png",
        name: "Originality",
        url: "",
        id: "Originality",
    }
    creditMulti: number = originalityMultiPerChar
    async getHumanPerc(text: string): Promise<number|null> {


        // let myHeaders = new Headers();
        // myHeaders.append("X-OAI-API-KEY", PRIVATE_ORIGINALITY_KEY);
        // myHeaders.append("Accept", "application/json");
        // myHeaders.append("Content-Type", "application/json");

        // let raw = JSON.stringify({
        //     "content": text,
        //     "title": "",
        //     "aiModelVersion": "1",
        //     "storeScan": "\"false\""
        // });

        // let requestOptions:RequestInit  = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };

        // let response = await fetch("https://api.originality.ai/api/v1/scan/ai", requestOptions)
        // let data = await response.json()
        // if(!response.ok){
        //     return null
        // }else{
        //     return data.score
        // }
 
        return 90
    }
}

class Sapling extends DetectorModule {
    creditMulti: number = saplingMultiPerChar
    detector: Detector = {
        pfpSrc: "/sapling.png",
        name: "Sapling",
        url: "",
        id: "Sapling",
    }
    async getHumanPerc(text: string): Promise<number|null> {

        // let myHeaders = new Headers();
        // myHeaders.append("Accept", "application/json");
        // myHeaders.append("Content-Type", "application/json");

        // let raw = JSON.stringify({
        //     "text": text,
        //     "key": PRIVATE_SAPLING_KEY,
        // });

        // let requestOptions:RequestInit  = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };

        // let response = await fetch('https://api.sapling.ai/api/v1/aidetect', requestOptions)
        // let data = await response.json()
        // if(!response.ok){
        //     return null
        // }else{
        //     return data.score
        // }
 

        return 90
    }
}

class ZeroGPT extends DetectorModule {
    creditMulti: number = zerogptMultiPerChar
    detector: Detector = {
        pfpSrc: "/zerogpt.png",
        name: "ZeroGPT",
        url: "",
        id: "ZeroGPT",
    }
    async getHumanPerc(text: string): Promise<number|null> {
        // let myHeaders = new Headers();
        // myHeaders.append("ApiKey", PRIVATE_ZEROGPT_KEY);
        // myHeaders.append("Accept", "application/json");
        // myHeaders.append("Content-Type", "application/json");

        // let raw = JSON.stringify({
        //     "input_text": text
        // });

        // let requestOptions:RequestInit  = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };


        // let response = await fetch('https://api.zerogpt.com/api/detect/detectText', requestOptions)
        // let data = await response.json()
        // if(!response.ok){
        //     return null
        // }else{
        //     console.log("======== ZEROGPT ==============")
        //     console.log(data)
        //     console.log("======== ZEROGPT ==============")
        //     return data.score
        // }

        return 90
    }
}

const detectorModules: DetectorModule[] = [
    new Originality(),
    new Sapling(),
    new ZeroGPT(),
]

export const detectors: Detector[] = detectorModules.map(detectorModule => detectorModule.detector)




export async function detectText(session: Session, id: string, text: string): Promise<DetectorResponse> {

    const detectorModule = detectorModules.find(detectorModule => detectorModule.detector.id === id)
    if (detectorModule == null) {
        return {
            errorMessage: "Detector Id is wrong",
            humanPerc: -1,
        }
    }

    let humanPerc:number|null = null
    try{
        humanPerc = await detectorModule.getHumanPerc(text)
    }catch (err) {
        console.log(">> Detector Processing Error:",err);
    }
    if (humanPerc == null || humanPerc < 0) {
        return {
            errorMessage: "Detector has failed",
            humanPerc: -1,
        }
    }

    const usedCredit: number = detectorModule.getUsedCredit(text)
    await decrementCredit(session, usedCredit)

    return {
        errorMessage: null,
        humanPerc: humanPerc,
    }
}


