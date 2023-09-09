
<script lang="ts">
    import CreditCounter from '$lib/comp/wallet/CreditCounter.svelte';
    import DetectionProfile from '$lib/comp/detector/DetectorProfile.svelte';
    import Steps from '$lib/comp/steps/Steps.svelte';
	import { toastError } from '$lib/utils/toastHelper.js';
    import LoadingButton from '$lib/comp/tools/LoadingButton.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore()

    export let data;
    const {detectors, wallet, session} = data;
    let detectorComps:any[] = []
    let text:string;

    function detectAll(){
        detectorComps.forEach(detectorComp => {
            detectorComp.startDetection()
        });
        fetch('/api/usageCounter/update', {method: 'GET'})
    }

</script>


<CreditCounter />

<br>

<h1 class="text-6xl">
    🤖🗒️ 🆚 👨🗒️
</h1>

<br>



<Steps needsPersonality={false} session={data.session} />

<!-- =================================================================== -->


<div>
    <h1>Detectors</h1>
    <div class="flex flex-wrap justify-start items-center gap-8">
        {#each detectors as detector, i}
            <DetectionProfile {detector} {text} bind:this={detectorComps[i]} />
        {/each}
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
            {#if session}
            <textarea class="textarea" name="text" bind:value={text} rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."  autocomplete="off" />
            {:else}
            <textarea class="textarea" name="text" bind:value={text} rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."  autocomplete="off" on:focus={()=>toastError("Please Sign in", toastStore)} />
            {/if}
    </div>
    <br>

    <LoadingButton text="Detect" buttonType="button" on:click={()=>detectAll}/>
</div>
