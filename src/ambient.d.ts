
interface User{
    email:string
}

interface Personality{
    sampleText:string|null
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
    hasSucceeded:boolean
}