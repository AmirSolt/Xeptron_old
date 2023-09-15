import { decrementCredit } from '$lib/funcs/server/database/index'
import { gpt4InputMultiPerChar, gpt4OutputMultiPerChar } from '$lib/utils/config.server.js'
import type { Session } from '@supabase/supabase-js';



export function creditControl(session: Session, stream: ReadableStream, systemPrompt:string, userPrompt:string): ReadableStream {
    const teedOff = stream.tee();
    creditCounter(session, teedOff[0], systemPrompt, userPrompt)
    return teedOff[1]
}


function creditCounter(session: Session, stream: ReadableStream, systemPrompt:string, userPrompt:string) {
    const reader = stream.getReader();
    let charsReceived = 0;
    reader.read().then(
        function processText({ done, value }): any {
            if (done) {
                let usedCredit: number = charsReceived * gpt4OutputMultiPerChar
                usedCredit += systemPrompt.length * gpt4InputMultiPerChar
                usedCredit += userPrompt.length * gpt4InputMultiPerChar
                decrementCredit(session, usedCredit)
                return;
            }
            charsReceived += value.length;
            return reader.read().then(processText);
        });
}
