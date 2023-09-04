

<script lang="ts">
    import DetectionProfile from '$lib/comp/detector/DetectorProfile.svelte';

    export let detectors:Detector[];
    export let text:string;
    let detectorComps:any[] = []

    export function callDetectors(){
        detectorComps.forEach(detectorComp => {
            detectorComp.startDetection()
        });
    }

</script>


<div>
    <h1>Detectors</h1>
    <div class="flex flex-wrap justify-start items-center gap-8">
        {#each detectors as detector, i}
            <DetectionProfile {detector} text={text} bind:this={detectorComps[i]} />
        {/each}
    </div>
</div>
