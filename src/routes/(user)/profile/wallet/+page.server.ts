import { wallet } from '$lib/server/database/index.js';


export async function load({ cookies }) {
    
    return {
        wallet
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    generateText: async ({ cookies, request }) => {
        console.log("test")
        return { success: true };
    },
};