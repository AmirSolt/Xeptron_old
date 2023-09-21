


interface Profile{
    wallet:Wallet
    personality:Personality
}

interface Personality{
    first_name:string|null
    last_name:string|null
    occupation:Occupations|null
}

interface Wallet{
    pos_credit:number
    neg_credit:number
    usage_counter:number
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
    input:string
    response:string
    formRows:number
}

interface Package{
    id:string
    name:string
    credits:number
    pricePerCredit:number
    currencySymbol:string
    currency:string
    bullets:string[]
}

interface TokenConfirmEvent{
    email:string
    redirectPath:string
}