
import {originalityMultiPerChar, saplingMultiPerChar, zerogptMultiPerChar} from '$lib/utils/config.server.js'
import {decrementCredit} from '$lib/funcs/server/database/index'
import type { Session } from '@supabase/supabase-js'


class DetectorModule{
    creditMulti:number=0
    detector:Detector={
        pfpSrc:"",
        name:"name",
        url:"",
        id:"id",
    }
    getHumanPerc(text:string):number{
        return -1
    }
    getUsedCredit(text:string){
        return text.length*this.creditMulti
    }
}

class Originality extends DetectorModule{
    detector:Detector = {
        pfpSrc:"",
        name:"Originality",
        url:"",
        id:"Originality",
    }
    creditMulti:number=originalityMultiPerChar
    getHumanPerc(text:string):number{
        return 90
    }
}

class Sapling extends DetectorModule{
    creditMulti:number=saplingMultiPerChar
    detector:Detector = {
        pfpSrc:"",
        name:"Sapling",
        url:"",
        id:"Sapling",
    }
    getHumanPerc(text:string):number{
        return 90
    }
}

class ZeroGPT extends DetectorModule{
    creditMulti:number=zerogptMultiPerChar
    detector:Detector = {
        pfpSrc:"",
        name:"ZeroGPT",
        url:"",
        id:"ZeroGPT",
    }
    getHumanPerc(text:string):number{
        return 90
    }
}

const detectorModules:DetectorModule[] = [
    new Originality(),
    new Sapling(),
    new ZeroGPT(),
]

export const detectors:Detector[] = detectorModules.map(detectorModule=>detectorModule.detector)




export async function detectText(session:Session, id:string, text:string):Promise<DetectorResponse>{

    const detectorModule = detectorModules.find(detectorModule=>detectorModule.detector.id === id)
    if(detectorModule==null){
        return {
            errorMessage:"Detector Id is wrong",
            humanPerc:-1,
        }
    }

    const humanPerc = detectorModule.getHumanPerc(text)
    if(humanPerc==null || humanPerc<0){
        return {
            errorMessage:"Detector has failed",
            humanPerc:-1,
        }
    }

    const usedCredit:number = detectorModule.getUsedCredit(text)
    await decrementCredit(session, usedCredit)

    return {
        errorMessage:null,
        humanPerc:humanPerc,
    }
}


