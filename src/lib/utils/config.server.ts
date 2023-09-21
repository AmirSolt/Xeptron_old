

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
        id:"kS5I772QQqxr0K8hPt9Bc6ji",
        name:"TEST",
        credits:100,
        pricePerCredit:0.02,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            `Estimated ${100*charPerCredit} char`,
            "Cheapest overall option",
            "Best for beginners",
        ]
    },
    {
        id:"yTRNEz6XdChWCy2kx3Z8pI45",
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
        id:"8HA6OksqeXk0plvpMIo7S2Ss",
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
        id:"c6pomq4n66tledMhgiza97af",
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
        id:"G1y0YM37zPX1fUeHP2XGEVmD",
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
