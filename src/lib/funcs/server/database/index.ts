

import { error } from '@sveltejs/kit'
import { PUBLIC_SUPABASE_URL } from '$env/static/public'
import { PRIVATE_SERVICE_ROLE_KEY_SUPABASE } from '$env/static/private'
import { createClient, type Session } from '@supabase/supabase-js'



// Create a single supabase client for interacting with your database
export const supabaseAdmin = createClient(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SERVICE_ROLE_KEY_SUPABASE,
    {
        auth: { persistSession: false },
    }
)




export async function fetchProfile(session:Session|null):Promise<Profile|null>{
    let profile:Profile
    if (session) {
        const { data, error: err } = await supabaseAdmin
            .from('profiles')
            .select(`
                wallets(pos_credit,neg_credit,usage_counter),
                personalities(occupation, first_name, last_name)
            `)
            .eq('id', session?.user.id)
            .single()
            
        if (err != null) {
            throw error(400, {
                message: err.message,
            })
        }else{
            const wallet:Wallet=data["wallets"]
            const personality:Personality=data["personalities"]
            profile = {
                wallet,
                personality
            }
        }
        return profile
    }
    return null
}
export async function fetchWallet(session:Session|null):Promise<Wallet>{
    if (session) {
        const { data, error: err } = await supabaseAdmin
            .from('wallets')
            .select(`pos_credit,neg_credit,usage_counter`)
            .eq('id', session?.user.id)
            .single()
            
        if (err != null) {
            
            throw error(400, {
                message: err.message,
            })
        }
        const wallet:Wallet=data
        if(wallet==null){
            throw error(400, {
                message: "Could not fetch wallet",
            })
        }
        return wallet
    }
    throw error(400, {
        message: "Could not load profile data!",
    })
}



export async function updatePersonality(session:Session, personality:Personality){
    if (session) {
        const { data, error: err } = await supabaseAdmin
            .from('personalities')
            .update(personality)
            .eq('id', session?.user.id)
            .single()
            
        if (err != null) {
            throw error(400, {
                message: err.message,
            })
        }
    }
}





// =========================== WALLET ======================================

export async function createCustomerId(session:Session, customer_id:string):Promise<boolean>{
    if (session) {
        const { data, error: err } = await supabaseAdmin
            .from('wallets')
            .update({customer_id})
            .eq('id', session?.user.id)
            .single()
        if (err != null) {
            // throw error(400, {
            //     message: err.message,
            // })
            return false
        }
        return true
    }
    return false
}


export async function hasCredit(session:Session):Promise<boolean|null>{
    let hasCredit:boolean|null=null
    if (session) {
        // DB fetch
        const { data, error: err } = await supabaseAdmin
            .from('profiles')
            .select("wallets(pos_credit,neg_credit)")
            .eq('id', session?.user.id)
            .single()
        if (err != null) {
            throw error(400, {
                message: err.message,
            })
        }
        const wallet:Wallet|null= data["wallets"]
        if(wallet==null){
            throw error(400, {
                message: "Could not fetch wallet",
            })
        }
        
        return wallet.pos_credit > wallet.neg_credit

    }

    throw error(400, {
        message: "You are not logged in",
    })
}
 


export async function incrementUsage(session:Session){
    if (session) {
        const { data, error:err } = await supabaseAdmin
            .rpc('increment_usage', {row_id: session?.user.id })
    }
}

export async function incrementCredit(session:Session, amount:number){
    if (session) {
        const { data, error:err } = await supabaseAdmin
            .rpc('increment_credit', { amount: amount, row_id: session?.user.id })

        if (err != null) {
            throw error(400, {
                message: err.message,
            })
        }
    }
}
export async function incrementCustomerCredit(customerId:string, amount:number){
    const { data, error:err } = await supabaseAdmin
        .rpc('increment_customer_credit', { amount: amount, customer_id:customerId })

    if (err != null) {
        throw error(400, {
            message: err.message,
        })
    }
}


export async function decrementCredit(session:Session, amount:number){
    if (session) {
        const { data, error:err } = await supabaseAdmin
            .rpc('decrement_credit', { amount: amount, row_id: session?.user.id })

        if (err != null) {
            
            throw error(400, {
                message: err.message,
            })
        }
    }
}