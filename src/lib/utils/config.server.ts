

// in USD
const multiplierProfitMargin = 22
const creditValue = 0.12 
const newUserBonusDollars = 20
export const charPerCredit = 100

export const chatInputCreditPerChar = multiplierProfitMargin*0.008/1000/creditValue
export const chatOutCreditPerChar = multiplierProfitMargin*0.015/1000/creditValue
export const saplingCreditPerChar = multiplierProfitMargin*0.005/1000/creditValue
export const originalityCreditPerChar = multiplierProfitMargin*0.025/1000/creditValue
export const zerogptCreditPerChar = multiplierProfitMargin*0.0085/1000/creditValue
export const detectorCreditPerChar = (saplingCreditPerChar+originalityCreditPerChar+zerogptCreditPerChar)


export const packages:Package[]=[
    {
        priceId:"1Nod3JJjINJkyPqosxgKgB1s",
        name:"Basic",
        credits:100,
        pricePerCredit:creditValue,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            `Estimated 10,000 char`,
            "Cheapest overall option",
            "Best for beginners",
        ]
    },
    {
        priceId:"213d12e12e12esdas",
        name:"Pro",
        credits:250,
        pricePerCredit:creditValue*0.8,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            `Estimated 25,000 char`,
            "Most popular with solo writer",
            "Best for new professionals",
        ]
    },
    {
        priceId:"1Nod3qw1212eqw12eqwdsKgB1s",
        name:"Business",
        credits:1200,
        pricePerCredit:creditValue*0.73,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            `Estimated 120,000 char`,
            "Economy option",
            "Best for small businesses",
        ]
    },
    {
        priceId:"1Nod3JJjd12ed12ePqosxgKgB1s",
        name:"Enterprise",
        credits:5000,
        pricePerCredit:creditValue*0.6,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            `Estimated 500,000 char`,
            "Best value per credit",
            "Best for enterprise",
        ]
    },
]



export const newUserBonusCredit:number = newUserBonusDollars / packages[0].pricePerCredit;
