import { personality } from '$lib/funcs/server/database/index.js';

export async function load() {

    return {
        personality
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    saveSample: async ({ cookies, request }) => {
        console.log("test")
        return { success: true };
    },
};