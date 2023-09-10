<script lang="ts">
	import CreditCounter from '$lib/comp/wallet/CreditCounter.svelte';
	import Detectors from '$lib/comp/detector/Detectors.svelte';
	import Steps from '$lib/comp/steps/Steps.svelte';
	import { toastError } from '$lib/utils/toastHelper.js';
	import LoadingButton from '$lib/comp/tools/LoadingButton.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { updateOnUsage } from '$lib/funcs/updateOnUsage/index.js';
	let toastStore = getToastStore();

	export let data;
	const { detectors, session, profile } = data;
	export let detectorsComponent: any;
	let text: string;

	function detectAll() {
        console.log("detect all")

		if (detectorsComponent != null) {
			detectorsComponent.callDetectors().then(() => {
				console.log("detectors were called")
			})
		}
		updateOnUsage()
			.then((wallet) => {
				console.log("wallet was updated")
				profile.wallet = wallet;
			})
			.catch((err) => {
				console.error(err);
			});
	}
</script>

<CreditCounter {profile} />

<br />

<h1 class="text-6xl">🤖🗒️ 🆚 👨🗒️</h1>

<br />

<Steps {profile} needsPersonality={false} session={data.session} />

<!-- =================================================================== -->

<Detectors  {detectors} {text} bind:this={detectorsComponent}/>

<div>
	<br />
	<div>
		<h1>Text</h1>
		<small> Detect AI text </small>
		{#if session}
			<textarea
				class="textarea"
				name="text"
				bind:value={text}
				rows="4"
				placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
				autocomplete="off"
			/>
		{:else}
			<textarea
				class="textarea"
				name="text"
				bind:value={text}
				rows="4"
				placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
				autocomplete="off"
				on:focus={() => toastError('Please Sign in', toastStore)}
			/>
		{/if}
	</div>
	<br />

	<LoadingButton text="Detect" buttonType="button" clickCallback={detectAll} />
</div>
