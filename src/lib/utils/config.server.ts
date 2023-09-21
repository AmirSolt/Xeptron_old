

// in USD
const newUserBonusDollars = 20
const creditValue = 0.12 
export const charPerCredit = 200


// per 1k char
const chatInputCost = 0.008
const chatOutCost = 0.015
const saplingCost = 0.005
const originalityCost = 0.025
const zerogptCost = 0.0085
const detectorCost = (saplingCost+originalityCost+zerogptCost)
const perCharCost = (chatInputCost*0.1 + chatOutCost + detectorCost)/1000
const costPerCredit = (perCharCost*charPerCredit)
const profitMargin = (creditValue - costPerCredit ) /creditValue
const profitMulti = 1/(1-profitMargin)

export const chatInputCreditPerChar = ((chatInputCost/creditValue)/1000)*profitMulti
export const chatOutCreditPerChar = ((chatOutCost/creditValue)/1000)*profitMulti
export const saplingCreditPerChar = ((saplingCost/creditValue)/1000)*profitMulti
export const originalityCreditPerChar = ((originalityCost/creditValue)/1000)*profitMulti
export const zerogptCreditPerChar = ((zerogptCost/creditValue)/1000)*profitMulti
export const detectorCreditPerChar = (saplingCreditPerChar+originalityCreditPerChar+zerogptCreditPerChar)



export const packages:Package[]=[
    {
        priceId:"0",
        name:"Basic",
        credits:100,
        pricePerCredit:creditValue,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            `Estimated ${100*charPerCredit} char`,
            "Cheapest overall option",
            "Best for beginners",
        ]
    },
    {
        priceId:"1",
        name:"Pro",
        credits:250,
        pricePerCredit:creditValue*0.8,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            `Estimated ${250*charPerCredit} char`,
            "Most popular with solo writer",
            "Best for new professionals",
        ]
    },
    {
        priceId:"2",
        name:"Business",
        credits:1200,
        pricePerCredit:creditValue*0.73,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            `Estimated ${1200*charPerCredit} char`,
            "Economy option",
            "Best for small businesses",
        ]
    },
    {
        priceId:"3",
        name:"Enterprise",
        credits:5000,
        pricePerCredit:creditValue*0.6,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            `Estimated ${5000*charPerCredit} char`,
            "Best value per credit",
            "Best for enterprise",
        ]
    },
]



export const newUserBonusCredit:number = newUserBonusDollars / packages[0].pricePerCredit;
