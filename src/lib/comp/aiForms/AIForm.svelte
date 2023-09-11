<script lang="ts">
	import { useCompletion } from 'ai/svelte';
	import { toastError } from '$lib/utils/toastHelper';
	import type { Session } from '@supabase/supabase-js';
	import LoadingButton from '$lib/comp/tools/LoadingButton.svelte';
	import { updateOnUsage } from '$lib/funcs/updateOnUsage/index.js';
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore();

	export let profile: Profile;
	export let session: Session | null;
	export let aiTextForm: AITextForm;
	export let detectorsComponent: any;

	// =====================================
	async function onResponseCallback(res: Response) {
		if (!res.ok) {
			const data = await res.json();
			toastError(data.message, toastStore);
		}
	}
	function overCallback() {
		aiTextForm.isStreamingOver = true;
		if (detectorsComponent != null) {
			detectorsComponent.callDetectors().then(() => {
				console.log("detectors were called")
			})
		}
		setTimeout(function(){
			updateOnUsage()
			.then((wallet) => {
				console.log("wallet was updated")
				profile.wallet = wallet;
			})
			.catch((err) => {
				console.error(err);
			});
		}, 1000);
		
	}
	function errorCallback(error: Error) {
		toastError(error.message, toastStore);
	}
	const { input, handleSubmit, completion } = useCompletion({
		api: aiTextForm.url,
		onFinish: overCallback,
		onError: errorCallback,
		onResponse: onResponseCallback,
		body: {
			personality: profile.personality
		}
	});

	$: aiTextForm.input = $input;
	$: aiTextForm.response = $completion;
</script>


<form on:submit={handleSubmit}>

	<div class="flex flex-col justify-center items-start gap-4">
		<label>
			<h1>
				{aiTextForm.title}
			</h1>
			<small>
				{aiTextForm.explanation}
			</small>

			{#if session}
				<textarea
					class="textarea"
					rows={aiTextForm.formRows}
					placeholder={aiTextForm.placeholder}
					autocomplete="off"
					bind:value={$input}
					required
				/>
			{:else}
				<textarea
					class="textarea"
					rows={aiTextForm.formRows}
					placeholder={aiTextForm.placeholder}
					autocomplete="off"
					bind:value={$input}
					on:focus={() => toastError('Please Sign in', toastStore)}
					required
				/>
			{/if}
		</label>
	
		<LoadingButton text="Submit" />
	</div>
</form>


