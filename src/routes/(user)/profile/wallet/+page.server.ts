import { wallet } from '$lib/funcs/server/database/index.js';


export async function load() {
    
    return {
        wallet
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    addCredits: async ({ request }) => {
        console.log("test")
        return { success: true };
    },
};