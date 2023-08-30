<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let detector: Detector;
	export let text: string;
	export let isGenerationOver:boolean = false;
	let state: 'start' | 'loading' | 'success' | 'fail' = 'start';

	async function detectText(detector: Detector, text:string) {
		const response = await fetch("/api/detectText", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                detector,
                text
            })
		});
        const detectorResponse:DetectorResponse = await response.json();
        if(detectorResponse.errorMessage!=null
            && detectorResponse.errorMessage.length > 0){

        }
        return detectorResponse.hasSucceeded
	}
    async function updateState(detector: Detector, text:string){
        const hasSucceeded = await detectText(detector, text)
        state = hasSucceeded? 'success' : 'fail'
    }

    $:if(isGenerationOver){
        updateState(detector, text)
    }
</script>

<div class="flex flex-col justify-center items-center">
	<Avatar src={detector.pfpSrc} width="w-24" rounded="rounded-full" />

	<div class="text-center">
		<h2>{detector.name}</h2>

		{#if state === 'start'}
			<p>Start</p>
		{:else if state === 'loading'}
			<p>Loading</p>
		{:else if state === 'success'}
			<p>Success</p>
		{:else if state === 'fail'}
			<p>Failed</p>
		{:else}
			<p>Error</p>
		{/if}
	</div>
</div>
