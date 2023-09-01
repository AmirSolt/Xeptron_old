<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

    export let detector:Detector;

    let hasDetectorStarted:boolean=false;
    let hasDetectorFinished:boolean=false;
	let isDetectorResponseValid:boolean=false;
	let hasDetectorSucceeded:boolean=false;
    let text:string

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
        isDetectorResponseValid = false
        hasDetectorSucceeded = false
        hasDetectorFinished = false
        hasDetectorStarted = true
        hasDetectorSucceeded = await detectText(detector, text)
        hasDetectorFinished = true
    }
    

</script>


<!-- =================================================================== -->



<div class="flex flex-col justify-center items-center">
	<Avatar src={detector.pfpSrc} width="w-32" rounded="rounded-full" />

	<div class="text-center">
		<h2>{detector.name}</h2>

		{#if !hasDetectorStarted && !hasDetectorFinished}
			<p>Start</p>
		{:else if hasDetectorStarted && !hasDetectorFinished}
			<p>Loading</p>
		{:else if hasDetectorFinished && !isDetectorResponseValid}
			<p>Error</p>
		{:else if hasDetectorFinished && isDetectorResponseValid && hasDetectorSucceeded}
			<p>Success</p>
		{:else if hasDetectorFinished && isDetectorResponseValid && !hasDetectorSucceeded}
			<p>Failed</p>
		{:else}
			<p>Error</p>
		{/if}
	</div>
</div>



<div >
    <br>
    <div>
        <h1>
            Text
        </h1>
        <small>
            Detect AI text
        </small>
        <textarea class="textarea" name="text" bind:value={text} rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
    </div>
    <br>
    <button type="button" class="btn variant-filled" on:click={()=>updateState(detector, text)} >
        Submit
    </button>
</div>



