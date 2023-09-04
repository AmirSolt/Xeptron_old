export const config = {
    runtime: 'edge'
};

// import * as AI from '$lib/funcs/server/AI/index'
import {getGenerateStream} from '$lib/funcs/server/generator/index.js'
import { json, error } from '@sveltejs/kit';
import { StreamingTextResponse } from 'ai';


export const POST = async ({request, locals:{getSession}}) => {

	const session = await getSession()
	if (!session) {
		throw error(400, {
            message: "You are not logged in!",
        })
	}


    const req = await request.json();
    const prompt = req.prompt
    const personality:Personality = req.personality
    // const {prompt, personality} = await request.json();


    

    if(prompt == null || personality==null){
        // return new Response(JSON.stringify({errorMessage: "There was a problem with input"}), { status: 500 });
        throw new Error("There was a problem with input")
    }
    
    
    let stream = await getGenerateStream(personality, prompt)
    if(stream == null){
        return json({success:false, errorMessage:"Generation has failed"})
    }
    return new StreamingTextResponse(stream);
}
