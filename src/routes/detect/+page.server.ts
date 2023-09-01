import { wallet } from '$lib/funcs/server/database/index.js';
import { meDetector } from '$lib/funcs/server/detectors/index.js';


export async function load() {

    return {
        meDetector,
        wallet,
    }
}


