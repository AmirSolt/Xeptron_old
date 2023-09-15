

const multiplier = 10

export const gpt4InputMultiPerChar = multiplier*0.008/1000
export const gpt4OutputMultiPerChar = multiplier*0.015/1000
export const saplingMultiPerChar = multiplier*0.005/1000
export const originalityMultiPerChar = multiplier*0.025/1000
export const zerogptMultiPerChar = multiplier*0.0085/1000


export const packages:Package[]=[
    {
        priceId:"price_1Nod3JJjINJkyPqosxgKgB1s",
        name:"Basic",
        credits:10,
        pricePerCredit:1.20,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            "≈ 2 articles or 10,000 char",
            "Cheapest overall option",
            "Best for beginners",
        ]
    },
    {
        priceId:"price_1Nod3vJjINJkyPqozNqCkdxs",
        name:"Pro",
        credits:25,
        pricePerCredit:0.98,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            "≈ 5 articles or 25,000 char",
            "Most popular with solo writer",
            "Best for new professionals",
        ]
    },
    {
        priceId:"",
        name:"Business",
        credits:120,
        pricePerCredit:0.88,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            "≈ 24 articles or 120,000 char",
            "Economy option",
            "Best for small businesses",
        ]
    },
    {
        priceId:"",
        name:"Enterprise",
        credits:500,
        pricePerCredit:0.72,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            "≈ 100 articles or 500,000 char",
            "Best value per credit",
            "Best for enterprise",
        ]
    },
]