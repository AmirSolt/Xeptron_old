import { decrementCredit } from '$lib/funcs/server/database/index'
import { gpt4MultiPerChar } from '$lib/utils/config.server.js'
import type { Session } from '@supabase/supabase-js';



export function controlStream(session: Session, stream: ReadableStream): ReadableStream {
    const teedOff = stream.tee();
    creditCounter(session, teedOff[0])
    return teedOff[1]
}


function creditCounter(session: Session, stream: ReadableStream) {
    const reader = stream.getReader();
    let charsReceived = 0;
    reader.read().then(
        function processText({ done, value }): any {
            if (done) {
                charsReceived
                const usedCredit: number = charsReceived * gpt4MultiPerChar
                decrementCredit(session, usedCredit)
                return;
            }
            charsReceived += value.length;
            return reader.read().then(processText);
        });
}
