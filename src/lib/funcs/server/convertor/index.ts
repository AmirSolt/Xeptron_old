import {getChatStream} from '../openai/index.js'


export async function getConvertorChatStream(personality:Personality, prompt:string){

    

    let systemPrompt = ""
    if(personality.first_name!=null)
        systemPrompt += "My first name is: "+personality.first_name
    if(personality.last_name!=null)
        systemPrompt += "My last name is: "+personality.last_name
    if(personality.use_case!=null)
        systemPrompt += "The contextual use case is: "+personality.use_case
    if(personality.writing_style!=null){
        systemPrompt += " Example of my writing style: "+personality.writing_style
    }else{
        systemPrompt += "Make the writing style more human like."
    }

    let userPrompt = "Convert this text to my style of writing: "+prompt


    return await getChatStream(systemPrompt, userPrompt)

}



    
