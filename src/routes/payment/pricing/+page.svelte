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
	const { form } = superForm(data.form, {
		validators:pricingSchema,
		onError: (result)=>{toastError(result.result.error.message, toastStore)},
		taintedMessage:null
	})

</script>

<div class="space-y-24">

	<PricingTable  {form} packages={data.packages}/>
	
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
						<th>Estimated Credit</th>
				
					</tr>
				</thead>
				<tbody>
						<tr>
							<td>Input Text (Prompt)</td>
							<td>≈{(data.gpt4InputMultiPerChar*1000).toFixed(2)} credit/1k char</td>
						</tr>
						<tr>
							<td>Output Text</td>
							<td>≈{(data.gpt4OutputMultiPerChar*1000).toFixed(2)} credit/1k char</td>
						</tr>
						<tr>
							<td>Detector</td>
							<td>≈{(data.detectorMultiPerChar*1000).toFixed(2)} credit/1k char</td>
						</tr>
						<tr>
							<td>Generating 1000 characters + detection check </td>
							<td>≈{(data.gpt4InputMultiPerChar*200 + (1000*data.gpt4OutputMultiPerChar) + (1000*data.detectorMultiPerChar)).toFixed(2)} credit</td>
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
			<AccordionItem>
				<svelte:fragment slot="lead"><HelpCircle /></svelte:fragment>
				<svelte:fragment slot="summary">
					Do you store my generated content?
				</svelte:fragment>
				<svelte:fragment slot="content">
					No, we do not store any input or output content. This is done to maximize privacy. 
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead"><HelpCircle /></svelte:fragment>
				<svelte:fragment slot="summary">
					What makes Xeptron different from other AI apps?
				</svelte:fragment>
				<svelte:fragment slot="content">
					The primary objective of Xeptron is to create unparalleled quality content.
					 If both AI detectors and humans perceive the generated content as indistinguishable from human work, then we would have fulfilled our goal.
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead"><HelpCircle /></svelte:fragment>
				<svelte:fragment slot="summary">
					What is your refund policy?
				</svelte:fragment>
				<svelte:fragment slot="content">
					You can request a refund within 60 days of purchase.
					Email our support: <span class="badge variant-ghost">support@xeptron.com</span>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
</div>

