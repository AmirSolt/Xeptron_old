<script lang="ts">
    import DetectionProfile from '$lib/comp/detector/DetectionProfile.svelte';
	import SampleWarning from '$lib/comp/sample/SampleWarning.svelte';
    import { useCompletion } from 'ai/svelte';
    import CopyClipboard from '../tools/CopyClipboard.svelte';
    export let personality:Personality;
    export let detectors:Detector[];
    

    let isStreamingOver:boolean=false;


    // =====================================
    // function newContentCallback(newContent:string){
    //     answer += newContent;
    // }
    function overCallback(){
        isStreamingOver=true
    }
    function errorCallback<T>(err: T){
        // throw error(400, "Something went wrong!")
        console.log(">>>> Something went wrong!",err)
    }


    const { input, handleSubmit, completion } = useCompletion({
        api: '/api/generateText',
        onFinish: overCallback,
        onError: errorCallback,
        body: {
            sampleText:personality.sampleText
        }
    });
    // =====================================



</script>


<!-- =================================================================== -->
<form on:submit={handleSubmit}>

    {#if personality.sampleText==null}
        <SampleWarning />
    {:else}
        <p>- Personalized text has been completed</p>
    {/if}

    <br>
	<label>
        <label class="label">
            <h1>
                Problem
            </h1>
            <small>
                Explain what you want to be generated
            </small>
            <textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." bind:value={$input}/>
        </label>
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
        {#each detectors as detector}
            <DetectionProfile {detector} text={$completion} {isStreamingOver} />
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