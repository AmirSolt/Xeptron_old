<script lang="ts">
    
    import {priceIds} from '$lib/utils/config'
	import { superForm } from 'sveltekit-superforms/client'
    import { pricingSchema } from '$lib/utils/schema'
    import {toastError} from '$lib/utils/toastHelper.js'
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore()
    export let data
	const { form } = superForm(data.form, {
		validators:pricingSchema,
		onError: (result)=>{toastError(result.result.error.message, toastStore)},
		taintedMessage:null
	})

</script>

<div class="card p-4">
    
    <form  method="post">
        <input type="hidden" name="priceId" value="{priceIds.p1}">
        <button class="btn variant-filled" type="submit">
            Plan A
        </button>
    </form>
</div>

<div class="card p-4" >
    
    <form method="post">
        <input type="hidden" name="priceId" value="{priceIds.p2}">
        <button class="btn variant-filled" type="submit">
            Plan B
        </button>
    </form>
    

</div>