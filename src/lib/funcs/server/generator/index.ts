import { OpenAIStream, StreamingTextResponse } from 'ai';
import {createChat} from './openai/index.js'


export async function getGenerateStream(systemPrompt:string, userPrompt:string){
    let response = await createChat(systemPrompt, userPrompt)
    if(response==null) return null
    return OpenAIStream(response);
}