

interface Personality{
    name:string|null
    writingStyle:string|null
    useCase:string|null
}

interface Wallet{
    credits:number
}

interface Detector{
    pfpSrc:string;
    name:string;
    url:string
    id:string
}
interface DetectorResponse{
    errorMessage:string|null
    humanPerc:number
}


interface AITextForm{
    url:string
    title:string
    explanation:string
    placeholder:string
    isStreamingOver:boolean
    response:string
    formRows:number
}