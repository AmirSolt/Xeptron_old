<script lang="ts">
	import CreditCounter from '$lib/comp/wallet/CreditCounter.svelte';
	import Detectors from '$lib/comp/detector/Detectors.svelte';
	import Steps from '$lib/comp/steps/Steps.svelte';
	import { toastError } from '$lib/utils/toastHelper.js';
	import LoadingButton from '$lib/comp/tools/LoadingButton.svelte';
	import { invalidate } from '$app/navigation';
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore();

	export let data;
	let { detectors, session, profile } = data;
	$: ({ profile } = data);
	export let detectorsComponent: any;
	let text: string="";

	function detectAll() {
		if (detectorsComponent != null) {
			detectorsComponent.callDetectors().then(() => {
				console.log("detectors were called")
				invalidate("data:profile")
				console.log("data:profile invalidated")
			})
		}
	}
</script>




<div class="space-y-8">

	<CreditCounter {profile} />
	<Steps {profile} needsPersonality={false} session={data.session} />
	
	<div>
		<div class="flex flex-col justify-center items-start gap-2 w-full">
	
	
			<label class="w-full">
				
				<div class="flex justify-between items-end w-full p-2">
					<div>
						<h1>Detect</h1>
						<small>AI text detector</small>
					</div>
		
					<span class="text-xl badge p-3 variant-soft">
						{text.length} char
					</span>
				</div>
	
				{#if session}
					<textarea
						class="textarea"
						name="text"
						bind:value={text}
						rows="4"
						placeholder="*paste*"
						autocomplete="off"
						required
					/>
				{:else}
					<textarea
						class="textarea"
						name="text"
						bind:value={text}
						rows="4"
						placeholder="*paste*"
						autocomplete="off"
						on:focus={() => toastError('Please Sign in', toastStore)}
						required
					/>
				{/if}
	
			</label>
		
			<LoadingButton color="variant-filled-primary" text="Detect" buttonType="button" clickCallback={detectAll} />
		</div>
	</div>
	
	
	<Detectors  {detectors} {text} bind:this={detectorsComponent}/>
</div>







