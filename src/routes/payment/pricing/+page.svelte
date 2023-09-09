<script lang="ts">
    import {packages} from '$lib/utils/config'
	import { superForm } from 'sveltekit-superforms/client'
    import { pricingSchema } from '$lib/utils/schema'
    import {toastError} from '$lib/utils/toastHelper.js'
	import { getToastStore } from '@skeletonlabs/skeleton';
    import PricePackage from '$lib/comp/wallet/PricePackage.svelte';

	let toastStore = getToastStore()
    export let data
	const { form } = superForm(data.form, {
		validators:pricingSchema,
		onError: (result)=>{toastError(result.result.error.message, toastStore)},
		taintedMessage:null
	})

</script>

<PricePackage mpackage={packages[0]} />
<PricePackage mpackage={packages[1]} />