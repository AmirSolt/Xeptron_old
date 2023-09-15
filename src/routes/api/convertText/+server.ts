export const config = {
    runtime: 'edge'
};

// import * as AI from '$lib/funcs/server/AI/index'
import {getSystemPrompt} from '$lib/funcs/server/convertor/index.js'
import {getChatStream} from '$lib/funcs/server/openai/index.js'
import { json, error } from '@sveltejs/kit';
import { StreamingTextResponse } from 'ai';
import {hasCredit} from '$lib/funcs/server/database/index.js'
import {creditControl} from '$lib/funcs/server/streamControler/index.js'

export const POST = async ({request, locals:{getSession}}) => {
    const req = await request.json();
    const userPrompt = req.prompt
    const personality:Personality|null = req.personality
    if(prompt == null || personality==null){
        throw error(400, {
            message: "Something is missing",
        })
    }
    
	const session = await getSession()
	if (!session || personality==null) {
		throw error(400, {
            message: "You are not logged in!",
        })
	}

    const hasCreditC = await hasCredit(session)
    if(hasCreditC==null || !hasCreditC){
        throw error(400, {
            message: "Do not have enough credit!",
        })
    }

    

    const systemPrompt = await getSystemPrompt(personality)
    let stream = await getChatStream(systemPrompt, userPrompt)

    if(stream == null){
        return json({success:false, errorMessage:"Generation has failed"})
    }
    stream = creditControl(session, stream, systemPrompt, userPrompt)
    return new StreamingTextResponse(stream);
}
