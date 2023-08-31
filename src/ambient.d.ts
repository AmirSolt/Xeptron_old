
interface User{
    email:string
}

interface Personality{
    sampleText:string|null
    level:string|null
}

interface Wallet{
    credits:number
    paymentMethod:PaymentMethod|null
}
interface PaymentMethod{
    
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


