import { OpenAIStream, StreamingTextResponse } from 'ai';
import {createChat} from '../openai/index.js'


export async function getConvertorStream(personality:Personality, prompt:string){


    let systemPrompt = "The contextual use case is: "+personality.useCase
    systemPrompt += " Example of my writting style: "+personality.sampleText
    let userPrompt = "Convert this text to my style of writting: "+prompt


    let response = await createChat(systemPrompt, userPrompt)
    if(response==null) return null
    return OpenAIStream(response);
}