import { OpenAIStream, StreamingTextResponse } from 'ai';
import {createChat} from './openai/index.js'


export async function getGenerateStream(personality:Personality, prompt:string){


    let systemPrompt = "The writting level is: "+personality.level
    systemPrompt += " Example of my writting style: "+personality.sampleText
    let userPrompt = "Use my writting style to: "+prompt


    let response = await createChat(systemPrompt, userPrompt)
    if(response==null) return null
    return OpenAIStream(response);
}