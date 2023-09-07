import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { toastError } from '$lib/utils/toastHelper.js';
// import { getToastStore } from '@skeletonlabs/skeleton';
// let toastStore = getToastStore();



export const profile: Writable<Profile|null> = writable(null);

export async function syncUserData(ifNull:boolean, toastStore:any|null=null){
    if(ifNull){
        let isNull = false
        profile.subscribe(value=>{
            isNull = value==null
        })
        if(isNull){
            profile.set(await fetchUserData(toastStore))
        }
    }else{
        profile.set(await fetchUserData(toastStore))
    }
}



async function fetchUserData(toastStore:any|null):Promise<Profile|null> {
    console.log("...fetching user data")
    const response = await fetch('/api/userData/select', {method: 'GET'})
    const data = await response.json()
    if (!response.ok) {
        if(toastStore!=null){
            toastError(data.message, toastStore)
        }
        console.log(`Error ${data.message}`)
        return null
    }
    return data.profile
}