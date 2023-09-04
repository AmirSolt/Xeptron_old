import { OpenAIStream, StreamingTextResponse } from 'ai';
import {createChat} from '../openai/index.js'


export async function getConvertorStream(personality:Personality, prompt:string){

    let systemPrompt = ""
    if(personality.name!=null)
        systemPrompt += "My name is: "+personality.name
    if(personality.useCase!=null)
        systemPrompt += "The contextual use case is: "+personality.useCase
    if(personality.writingStyle!=null){
        systemPrompt += " Example of my writing style: "+personality.writingStyle
    }else{
        systemPrompt += "Make the writing style more human like."
    }

    let userPrompt = "Convert this text to my style of writing: "+prompt


    let response = await createChat(systemPrompt, userPrompt)
    if(response==null) return null
    return OpenAIStream(response);
}