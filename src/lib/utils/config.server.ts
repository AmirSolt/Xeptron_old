


const multiplier = 10

export const gpt4InputMultiPerChar = multiplier*0.008/1000
export const gpt4OutputMultiPerChar = multiplier*0.015/1000
export const saplingMultiPerChar = multiplier*0.005/1000
export const originalityMultiPerChar = multiplier*0.025/1000
export const zerogptMultiPerChar = multiplier*0.0085/1000
export const detectorMultiPerChar = saplingMultiPerChar+originalityMultiPerChar+zerogptMultiPerChar


export const packages:Package[]=[
    {
        priceId:"1Nod3JJjINJkyPqosxgKgB1s",
        name:"Basic",
        credits:10,
        pricePerCredit:1.20,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            "≈2 blog posts or 10,000 char",
            "Cheapest overall option",
            "Best for beginners",
        ]
    },
    {
        priceId:"213d12e12e12esdas",
        name:"Pro",
        credits:25,
        pricePerCredit:0.98,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            "≈5 blog posts or 25,000 char",
            "Most popular with solo writer",
            "Best for new professionals",
        ]
    },
    {
        priceId:"1Nod3qw1212eqw12eqwdsKgB1s",
        name:"Business",
        credits:120,
        pricePerCredit:0.88,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            "≈24 blog posts or 120,000 char",
            "Economy option",
            "Best for small businesses",
        ]
    },
    {
        priceId:"1Nod3JJjd12ed12ePqosxgKgB1s",
        name:"Enterprise",
        credits:500,
        pricePerCredit:0.72,
        currencySymbol:"$",
        currency:"USD",
        bullets:[
            "≈100 blog posts or 500,000 char",
            "Best value per credit",
            "Best for enterprise",
        ]
    },
]



export const newUserBonusCredit:number = 20 / packages[0].pricePerCredit;
