<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';


	export let detector: Detector;
	export let text: string;

	let hasDetectorStarted:boolean=false;
    let hasDetectorFinished:boolean=false;
	let isDetectorResponseValid:boolean=true;
	let detectorResult:number;

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
        return detectorResponse.humanPerc
	}
    async function updateState(detector: Detector, text:string){
		hasDetectorFinished = false
		hasDetectorStarted = true
        detectorResult = await detectText(detector, text)
		hasDetectorFinished = true
    }

	export function startDetection(){
		updateState(detector, text)
	}

 
</script>

<div class="flex flex-col justify-center items-center">
	<Avatar src={detector.pfpSrc} width="w-24" rounded="rounded-full" />

	<div class="text-center">
		<h2>{detector.name}</h2>

		{#if !hasDetectorStarted && !hasDetectorFinished}
			<p>Waiting to Start</p>
		{:else if hasDetectorStarted && !hasDetectorFinished}
			<p>Loading</p>
		{:else if hasDetectorFinished && !isDetectorResponseValid}
			<span class="text-yellow-400">Error</span>
		{:else if hasDetectorFinished && isDetectorResponseValid && detectorResult}
			<p>%{detectorResult}</p>
		{:else}
			<span class="text-yellow-400">Error</span>
		{/if}
	</div>
</div>
