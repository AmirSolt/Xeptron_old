import { personality } from '$lib/funcs/server/database/index.js';

export async function load() {

    return {
        personality
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    saveSample: async ({ request }) => {
        console.log("?/saveSample")
        const data = await request.formData();
        const sampleText = data.get('sampleText');
        const level = data.get('useCase');
        if(sampleText != null) personality.sampleText = String(sampleText);
        if(level != null) personality.useCase = String(level);
        
        return { success: true };
    },
};