<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let detector: Detector;
	export let text: string;
	export let isStreamingOver:boolean;

	let isDetectorResponseValid:boolean=false;
	let hasDetectorSucceeded:boolean=false;

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
				isDetectorResponseValid=false
        }else{
			isDetectorResponseValid=true
		}
        return detectorResponse.hasSucceeded
	}
    async function updateState(detector: Detector, text:string){
        hasDetectorSucceeded = await detectText(detector, text)
    }
	$:if(isStreamingOver){
		updateState(detector, text)
	}
 
</script>

<div class="flex flex-col justify-center items-center">
	<Avatar src={detector.pfpSrc} width="w-24" rounded="rounded-full" />

	<div class="text-center">
		<h2>{detector.name}</h2>

		{#if text.length==0 && !isStreamingOver}
			<p>Start</p>
		{:else if text.length>0 && !isStreamingOver }
			<p>Loading</p>
		{:else if isStreamingOver && !isDetectorResponseValid}
			<p>Error</p>
		{:else if isStreamingOver && isDetectorResponseValid && hasDetectorSucceeded}
			<p>Success</p>
		{:else if isStreamingOver && isDetectorResponseValid && !hasDetectorSucceeded}
			<p>Failed</p>
		{:else}
			<p>Error</p>
		{/if}
	</div>
</div>
