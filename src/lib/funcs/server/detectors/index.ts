

class DetectorModule{
    detector:Detector={
        pfpSrc:"",
        name:"name",
        url:"",
        id:"id",
    }
    getHumanPerc(text:string):number{
        return -1
    }
}

class Originality extends DetectorModule{
    detector:Detector = {
        pfpSrc:"",
        name:"Originality",
        url:"",
        id:"Originality",
    }

    getHumanPerc(text:string):number{
        return 90
    }
}

class Sapling extends DetectorModule{
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




export function detectText(id:string, text:string):DetectorResponse{

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

    return {
        errorMessage:null,
        humanPerc:humanPerc,
    }
}


