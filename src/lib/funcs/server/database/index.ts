

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
    })




export async function fetchProfileData(session:Session|null, query:string){
    let profileData:any|null=null
    if (session) {
        // DB fetch
        const { data, error: err } = await supabaseAdmin
            .from('profiles')
            .select(query)
            .eq('id', session?.user.id)
            .single()
            
        if (err != null) {
            throw error(400, {
                message: err.message,
            })
        }
        profileData = data
    }

    return profileData
}

export async function updatePersonality(session:Session, personality:Personality){
    if (session) {
        // DB fetch
        const { data, error: err } = await supabaseAdmin
            .from('personalities')
            .update({
                name:personality.name,
                writingStyle:personality.writingStyle,
                useCase:personality.useCase,
            })
            .eq('id', session?.user.id)
            .single()
            
        if (err != null) {
            throw error(400, {
                message: err.message,
            })
        }
    }
}

export async function costCredit(session:Session, amount:number){
    if (session) {
        // DB fetch
        // const { data, error: err } = await supabaseAdmin
        //     .from('wallets')
        //     .update({
        //         name:personality.name,
        //         writingStyle:personality.writingStyle,
        //         useCase:personality.useCase,
        //     })
        //     .eq('id', session?.user.id)
        //     .single()

        const { data, error:err } = await supabaseAdmin
            .rpc('costCredit', { x: amount, row_id: session?.user.id })
    
        

        if (err != null) {
            throw error(400, {
                message: err.message,
            })
        }
    }
}