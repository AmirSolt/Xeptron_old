

interface Personality{
    first_name:string|null
    last_name:string|null
    writing_style:string|null
    use_case:string|null
}

interface Wallet{
    pos_credit:number
    neg_credit:number
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