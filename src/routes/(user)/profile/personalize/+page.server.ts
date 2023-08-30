import { personality } from '$lib/server/funcs/database/index.js';

export async function load({ cookies }) {

    return {
        personality
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    test: async ({ cookies, request }) => {
        console.log("test")
        return { success: true };
    },
};