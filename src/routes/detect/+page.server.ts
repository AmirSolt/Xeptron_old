import { wallet } from '$lib/funcs/server/database/index.js';
import { mainDetector } from '$lib/funcs/server/database/index.js';


export async function load() {

    return {
        mainDetector,
        wallet,
    }
}


