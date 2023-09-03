import { OpenAIStream, StreamingTextResponse } from 'ai';
import {createChat} from '../openai/index.js'


export async function getGenerateStream(personality:Personality, prompt:string){


    let systemPrompt = "The contextual use case is: "+personality.useCase
    systemPrompt += " Example of my writing style: "+personality.sampleText
    let userPrompt = "Use my writing style to: "+prompt


    let response = await createChat(systemPrompt, userPrompt)
    if(response==null) return null
    return OpenAIStream(response);
}