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
						<th>Estimated Credit Per 1000 Char</th>
				
					</tr>
				</thead>
				<tbody>
						<tr>
							<td>Input Text (System)</td>
							<td>≈{data.gpt4InputMultiPerChar*1000} credit</td>
						</tr>
						<tr>
							<td>Input Text (Prompt)</td>
							<td>≈{data.gpt4InputMultiPerChar*1000} credit</td>
						</tr>
						<tr>
							<td>Output Text</td>
							<td>≈{data.gpt4OutputMultiPerChar*1000} credit</td>
						</tr>
						<tr>
							<td>Detector</td>
							<td>≈{data.detectorMultiPerChar*1000} credit</td>
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
				<svelte:fragment slot="summary">
					How can I get a refund?
				</svelte:fragment>
				<svelte:fragment slot="content">
					
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead"><HelpCircle /></svelte:fragment>
				<svelte:fragment slot="summary">
					What is your refund policy?
				</svelte:fragment>
				<svelte:fragment slot="content">
					You can get a refund within 60 days of purchase or if the generated text is detected by a credible AI text detector.
					Email our support: support@xeptron.com
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead"><HelpCircle /></svelte:fragment>
				<svelte:fragment slot="summary">
					What is your refund policy?
				</svelte:fragment>
				<svelte:fragment slot="content">
					You can get a refund within 60 days of purchase or if the generated text is detected by a credible AI text detector.
					Email our support: support@xeptron.com
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead"><HelpCircle /></svelte:fragment>
				<svelte:fragment slot="summary">
					What is your refund policy?
				</svelte:fragment>
				<svelte:fragment slot="content">
					You can get a refund within 60 days of purchase or if the generated text is detected by a credible AI text detector.
					Email our support: <span class="badge variant-ghost">support@xeptron.com</span>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</div>
</div>

