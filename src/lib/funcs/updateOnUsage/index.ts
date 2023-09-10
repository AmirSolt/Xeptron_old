import { error } from "@sveltejs/kit"

export async function updateOnUsage():Promise<Wallet> {
    const response = await fetch('/api/onUsage', {method: 'GET'})
    const data = await response.json()
    if(!response.ok){
        throw error(400, `Failed to fetch: ${data.message}`)
    }
    const wallet:Wallet|null = data.wallet
    if(wallet==null){
        throw error(400, "Failed to fetch wallet is null")
    }
    return wallet
}