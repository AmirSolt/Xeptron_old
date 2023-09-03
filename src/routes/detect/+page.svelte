
<script lang="ts">
    import CreditCounter from '$lib/comp/wallet/CreditCounter.svelte';
    import DetectionProfile from '$lib/comp/detector/DetectorProfile.svelte';

    export let data;
    const {detectors, wallet} = data;
    let detectorComps:any[] = []
    let text:string;

    function detectAll(){
        detectorComps.forEach(detectorComp => {
            detectorComp.startDetection()
        });
    }

</script>


<CreditCounter {wallet} />

<br>

<h1 class="text-6xl">
    🤖🗒️ 🆚 👨🗒️
</h1>

<br>




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
        <textarea class="textarea" name="text" bind:value={text} rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
    </div>
    <br>
    <button type="button" class="btn variant-filled" on:click={()=>detectAll} >
        Submit
    </button>
</div>
