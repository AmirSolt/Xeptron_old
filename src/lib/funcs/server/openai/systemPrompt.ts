

const mainPrompt = `Act as if you are a writer working for weblog and have to submit your work tonight. Your text sounds professional because you have been writing for a long time, but it has some awakard grammar and vocabulary because you didn't have time to proof read your text. You left very few small spelling and grammar mistakes in the middle of your writing, a casual reader wouldn't be able to notice it. Your text has a lot of perplexity and Burstiness.`

export async function getSystemPromptGenerator(personality: Personality) {


    let systemPrompt = mainPrompt

    return systemPrompt
}


export async function getSystemPromptConvertor(personality: Personality) {


    let systemPrompt = mainPrompt
    systemPrompt += "\n Completely deconstruct  the given text and write it in your own wods."

    return systemPrompt
}

