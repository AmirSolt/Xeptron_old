import OpenAI from 'openai';
import { PRIVATE_OPENAI_KEY } from '$env/static/private';

const openai = new OpenAI({
  apiKey: PRIVATE_OPENAI_KEY,
});









export async function createChat(systemPrompt: string, userPrompt: string, model: string = "gpt-3.5-turbo", temperature: number = 0.6, max_tokens: number = 300){
  let messages: OpenAI.Chat.Completions.CreateChatCompletionRequestMessage[] = []
  messages.push({ role: "system", content: systemPrompt })
  messages.push({ role: "user", content: userPrompt })

  if (!await getOpenAIModeration(messages)) return null

  const completion = openai.chat.completions.create({
    messages: messages,
    model: model,
    temperature: temperature,
    max_tokens: max_tokens,
    stream: true,
  });

  return completion
}



async function getOpenAIModeration(messages: OpenAI.Chat.Completions.CreateChatCompletionRequestMessage[]): Promise<boolean> {
  // =================== OpenAI Moderation ===================

  const moderationRes = await fetch('https://api.openai.com/v1/moderations', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${PRIVATE_OPENAI_KEY}`
    },
    method: 'POST',
    body: JSON.stringify({
      input: JSON.stringify(messages)
    })
  })
  if (!moderationRes.ok) {
    const err = await moderationRes.json()
    console.log(`Moderation req failed ${err.error.message}`)
    return false
  }

  const moderationData = await moderationRes.json()
  const [results] = moderationData.results

  if (results.flagged) {
    console.log('Query flagged by openai')
    return false
  }

  return true

}