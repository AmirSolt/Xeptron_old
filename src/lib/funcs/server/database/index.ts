

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
    let profile:Profile|null = null
    if (session) {
        const { data, error: err } = await supabaseAdmin
            .from('profiles')
            .select(`
                wallets(pos_credit,neg_credit),
                personalities(writing_style, use_case, first_name, last_name)
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
    }

    return profile
}



// export async function fetchProfileData(session:Session|null, query:string){
//     let profileData:any|null=null
//     if (session) {
//         // DB fetch
//         const { data, error: err } = await supabaseAdmin
//             .from('profiles')
//             .select(query)
//             .eq('id', session?.user.id)
//             .single()
            
//         if (err != null) {
//             throw error(400, {
//                 message: err.message,
//             })
//         }
//         profileData = data
//     }

//     return profileData
// }

export async function updatePersonality(session:Session, personality:Personality){
    if (session) {
        const { data, error: err } = await supabaseAdmin
            .from('personalities')
            // .update({
            //     first_name:personality.first_name,
            //     last_name:personality.last_name,
            //     writing_style:personality.writing_style,
            //     use_case:personality.use_case,
            // })
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
        if(wallet!=null){
            hasCredit = (wallet?.pos_credit - wallet?.neg_credit) > 0
        }
     
    }

    return hasCredit
}
 

export async function incrementUsageCounter(session:Session){
    if (session) {
        const { data, error:err } = await supabaseAdmin
            .rpc('increment_usage_counter', {row_id: session?.user.id })
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

export async function decrementCredit(session:Session, amount:number){
    if (session) {
        const { data, error:err } = await supabaseAdmin
            .rpc('decrement_credit', { amount: amount, row_id: session?.user.id })

        if (err != null) {
            console.log("===========",err.message)
            throw error(400, {
                message: err.message,
            })
        }
    }
}