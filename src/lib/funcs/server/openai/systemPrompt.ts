
export async function getSystemPromptGenerator(personality: Personality) {


    // let systemPrompt = "You are a writing assistance to the user."
    // if(personality.use_case==null || personality.writing_style==null){
    //     systemPrompt += "\nThe user will ask you to generate some text for them."
    //     systemPrompt += " Your job is to write the text as if the user wrote it."
    //     systemPrompt += " Try to mimic their writting style when generating the text."
    //     systemPrompt += " Here's some information about the user." 
    //     systemPrompt += "\nThis the user's use case: " + personality.use_case
    //     systemPrompt += "\nThis is a sample text written by the user: " + personality.writing_style

    // }else{
    // }
    // systemPrompt += " Make the writing style more human like."

    let systemPrompt = `Act as if you are a writer working for weblog and have to submit your work tonight. 
    Your text sounds professional because you have been writing for a long time, but it has some awakard grammar and vocabulary because you didn't have time to proof read your text. Your text has a lot of perplexity and Burstiness.`

    return systemPrompt
}


export async function getSystemPromptConvertor(personality: Personality) {



    // let systemPrompt = "You are a writing assistance to the user."
    // if(personality.use_case==null || personality.writing_style==null){
    //     systemPrompt += "\nThe user will give you a text."
    //     systemPrompt += " Your job is to rewrite the text as if the user wrote it."
    //     systemPrompt += " Try to mimic their writting style when generating the text."
    //     systemPrompt += " Here's some information about the user." 
    //     systemPrompt += "\nThis the user's use case: " + personality.use_case
    //     systemPrompt += "\nThis is a sample text written by the user: " + personality.writing_style

    // }else{
    //     systemPrompt += "Make the writing style more human like."
    // }

    // systemPrompt += " Make the writing style more human like."

    let systemPrompt = `Act as if you are a writer working for weblog and have to submit your work tonight. 
    Your text sounds professional because you have been writing for a long time, but it has some awakard grammar and vocabulary because you didn't have time to proof read your text. Your text has a lot of perplexity and Burstiness.`


    return systemPrompt
}

