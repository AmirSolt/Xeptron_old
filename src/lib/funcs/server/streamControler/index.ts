import { decrementCredit } from '$lib/funcs/server/database/index'
import { gpt4InputMultiPerChar, gpt4OutputMultiPerChar } from '$lib/utils/config.server.js'
import type { Session } from '@supabase/supabase-js';



export function creditControl(session: Session, stream: ReadableStream, inputPrompt:string): ReadableStream {
    const teedOff = stream.tee();
    creditCounter(session, teedOff[0], inputPrompt)
    return teedOff[1]
}


function creditCounter(session: Session, stream: ReadableStream, inputPrompt:string) {
    const reader = stream.getReader();
    let charsReceived = 0;
    reader.read().then(
        function processText({ done, value }): any {
            if (done) {
                let usedCredit: number = charsReceived * gpt4OutputMultiPerChar
                usedCredit += inputPrompt.length * gpt4InputMultiPerChar
                decrementCredit(session, usedCredit)
                return;
            }
            charsReceived += value.length;
            return reader.read().then(processText);
        });
}
