import { personality } from '$lib/funcs/server/database/index.js';
import { detectors } from '$lib/funcs/server/database/index.js';
import { wallet } from '$lib/funcs/server/database/index.js';


export async function load() {
    
    return {
        personality,
        detectors,
        wallet,
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    generateText: async ({ request }) => {
        console.log("?/generateText")

        
        

        return { success: true };
    },
};