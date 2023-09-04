import { getToastStore } from '@skeletonlabs/skeleton';
import type { ToastSettings } from '@skeletonlabs/skeleton';
import { error } from '@sveltejs/kit';


export function toastError(message:string="Something went wrong!", isErr:boolean=false){
    const toastStore = getToastStore();

    const t: ToastSettings = {
        message: message,
    };
    toastStore.trigger(t);
    if(isErr)
		throw error(400, message);
}


export function toastSuccess(message:string){
    const toastStore = getToastStore();

    const t: ToastSettings = {
        message: message,
        background: 'variant-filled-success',
    };
    toastStore.trigger(t);
}