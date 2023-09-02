<script lang="ts">
    import DetectionProfile from '$lib/comp/detector/DetectorProfile.svelte';
    import { useCompletion } from 'ai/svelte';
    import CopyClipboard from '../tools/CopyClipboard.svelte';
    import Steps from '../steps/Steps.svelte';
    import {toastError} from '$lib/utils/toast'
    export let personality:Personality;
    export let detectors:Detector[];
    
    let detectorComps:any[] = []
    let isStreamingOver:boolean=false;

    // =====================================
    // function newContentCallback(newContent:string){
    //     answer += newContent;
    // }
    function overCallback(){

        isStreamingOver=true
        detectorComps.forEach(detectorComp => {
            detectorComp.startDetection()
        });
    }
    function errorCallback(error:Error){
        toastError(error.message, false)
        // throw error(400, "Something went wrong!")
    }


    const { input, handleSubmit, completion } = useCompletion({
        api: '/api/generateText',
        onFinish: overCallback,
        onError: errorCallback,
        body: {
            personality:personality
        }
    });
 

    // =====================================



</script>


<!-- =================================================================== -->
<form on:submit={handleSubmit}>

    <Steps {personality} />

    <br>
    <label >
        <h1>
            Problem
        </h1>
        <small>
            Explain what you want to be generated
        </small>
        <textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." bind:value={$input}/>
    </label>
    <br>
    <button  class="btn variant-filled" >
        Submit
    </button>
</form>




<!-- =================================================================== -->
<br>
<br>

<div>
    <h1>Detectors</h1>
    <div class="flex flex-wrap justify-start items-center gap-8">
        {#each detectors as detector, i}
            <DetectionProfile {detector} text={$completion} bind:this={detectorComps[i]} />
        {/each}
    </div>
</div>


<!-- =================================================================== -->
<br>
<br>

<div >
    <h1>
        Answer
    </h1>

    <CopyClipboard text={$completion} extraStyle={isStreamingOver? '':'pointer-events-none opacity-50'} />
    <p class="card p-4 h-80">
        {$completion}
    </p>
</div>