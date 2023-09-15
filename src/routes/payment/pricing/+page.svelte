<script lang="ts">
	import {HelpCircle} from 'lucide-svelte'
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import PricingTable from '$lib/comp/wallet/PricingTable.svelte';
	import { superForm } from 'sveltekit-superforms/client'
    import { pricingSchema } from '$lib/utils/schema'
    import {toastError} from '$lib/utils/toastHelper.js'
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore()


	export let data
	const { form, enhance } = superForm(data.form, {
		validators:pricingSchema,
		onError: (result)=>{toastError(result.result.error.message, toastStore)},
		taintedMessage:null
	})

</script>

<div class="space-y-24">

	<PricingTable {enhance} {form} packages={data.packages}/>
	
	<div class="space-y-4">
		<h1>
			Credit Usage
		</h1>

		<div class="table-container">
			<!-- Native Table Element -->
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Type</th>
						<th>Credit Per 1000 Char</th>
				
					</tr>
				</thead>
				<tbody>
						<tr>
							<td>System Text</td>
							<td>1 credit</td>
						</tr>

				</tbody>
				
			</table>
		</div>

	</div>
	
	

	<div class="space-y-4">
		<h1>
			FAQ's
		</h1>	
		<Accordion>
			<AccordionItem open>
				<svelte:fragment slot="lead"><HelpCircle /></svelte:fragment>
				<svelte:fragment slot="summary">(summary)</svelte:fragment>
				<svelte:fragment slot="content">(content)</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead"><HelpCircle /></svelte:fragment>
				<svelte:fragment slot="summary">(summary)</svelte:fragment>
				<svelte:fragment slot="content">(content)</svelte:fragment>
			</AccordionItem>
			<!-- ... -->
		</Accordion>
	</div>
</div>

