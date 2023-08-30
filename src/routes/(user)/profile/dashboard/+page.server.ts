import { personality } from '$lib/funcs/server/database/index.js';
import { detectors } from '$lib/funcs/server/database/index.js';
import { wallet } from '$lib/funcs/server/database/index.js';


export async function load() {
    
    return {
        personality,
        detectors,
        wallet
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    generateText: async ({ request }) => {
        console.log("?/generateText")

        // generateText
        // let streamFunction = await AI.createComparisonStream(products, selectedFeatures)
        // if(!streamFunction){
        //     return new Response("AI response Failed",{status:400})
        // }
        // let response = await streamFunction()
        
        // return new Response(response.body, {
        //     headers: {
        //         'Content-Type': 'text/event-stream'
        //     }
        // });

        return { success: true };
    },
};