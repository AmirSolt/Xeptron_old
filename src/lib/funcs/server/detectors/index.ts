export const detectors:Detector[] = [
    {
        pfpSrc:"",
        name:"Detector 1",
        url:"",
        id:"",
    },
    {
        pfpSrc:"",
        name:"Detector 2",
        url:"",
        id:"",
    },
    {
        pfpSrc:"",
        name:"Detector 2",
        url:"",
        id:"",
    },
    {
        pfpSrc:"",
        name:"Detector 2",
        url:"",
        id:"",
    },
]

export const meDetector = detectors[0]




export function detectText(id:string, text:string){

    const detector = detectors.filter(d=>d["id"] === id)

}