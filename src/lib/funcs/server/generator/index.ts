import { getChatStream } from '../openai/index.js'

export async function getGenerateChatStream(personality: Personality, prompt: string) {


    let systemPrompt = ""
    if (personality.name != null)
        systemPrompt += "My name is: " + personality.name
    if (personality.use_case != null)
        systemPrompt += "The contextual use case is: " + personality.use_case
    if (personality.writing_style != null) {
        systemPrompt += " Example of my writing style: " + personality.writing_style
    } else {
        systemPrompt += "Make the writing style more human like."
    }
    let userPrompt = "Use my writing style to: " + prompt


    return await getChatStream(systemPrompt, userPrompt)
}


