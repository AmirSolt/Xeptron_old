<script lang="ts">
	import PricingTable from '$lib/comp/wallet/PricingTable.svelte';
	import { superForm } from 'sveltekit-superforms/client'
    import { pricingSchema } from '$lib/utils/schema'
    import {toastError} from '$lib/utils/toastHelper.js'
	import { getToastStore } from '@skeletonlabs/skeleton';
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
	let toastStore = getToastStore()


	export let data
	const { form, enhance } = superForm(data.form, {
		validators:pricingSchema,
		onError: (result)=>{toastError(result.result.error.message, toastStore)},
		taintedMessage:null
	})

</script>

<SuperDebug data={$form}/>


<PricingTable {enhance} {form}/>