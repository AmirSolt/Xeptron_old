export const config = {
    runtime: 'edge'
};

// import * as AI from '$lib/funcs/server/AI/index'
import {getGenerateStream} from '$lib/funcs/server/generator/index.js'
import { json } from '@sveltejs/kit';
import { StreamingTextResponse, experimental_StreamData } from 'ai';


export const POST = async ({request}) => {

    const { prompt, sampleText } = await request.json();
   

    if(prompt == null || sampleText==null){
        // return new Response(JSON.stringify({errorMessage: "There was a problem with input"}), { status: 500 });
        throw new Error("There was a problem with input")
    }
    
    const systemPrompt = "Example of my writting style: "+sampleText
    const userPrompt = "Use my writting style to: "+prompt
    let stream = await getGenerateStream(systemPrompt, userPrompt)
    if(stream == null){
        return json({success:false, errorMessage:"Generation has failed"})
    }
    return new StreamingTextResponse(stream);
}
