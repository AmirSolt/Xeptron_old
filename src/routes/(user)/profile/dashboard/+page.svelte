<script lang="ts">
    import DetectionProfile from '$lib/comp/detector/DetectionProfile.svelte';
	import SampleWarning from '$lib/comp/sample/SampleWarning.svelte';
    import {getSSE} from '$lib/funcs/generatorSSE/index.js';

    export let data;
    const {personality, detectors, wallet} = data;

    let problem:string;

    let answer:string;
    let isGenerationOver:boolean=false;


    // =====================================
    function newContentCallback(newContent:string){
        comparisonBody += newContent;
        isStreaming = true;
    }
    function overCallback(){
        isStreaming=false
        console.log(comparisonBody)
    }
    function errorCallback<T>(err: T){
        throw error(400, "Something went wrong!")
    }
    const eventSource = getSSE(problem, personality.sampleText, newContentCallback, overCallback, errorCallback)
    if(eventSource){
        eventSource.stream()
    }
    // =====================================



</script>

<div class="flex justify-start text-center items-center gap-4">
    <h1>
        Credits:
    </h1>
    <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-filled">{wallet.credits}</a>
</div>

<br>


<form method="POST" action="?/generateText">

    {#if personality.sampleText==null}
        <SampleWarning />
        <input type="text" class="opacity-0 w-50 h-0" name="" value="" required>
    {:else}
        <p>- Personalized text has been complete</p>
        <input type="hidden" name="" value="{personality.sampleText}" required>
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
            <textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." required />
        </label>
	</label>
    <br>
    <button type="submit" class="btn variant-filled">
        Submit
    </button>

</form>


<br>
<br>

<div class="flex flex-wrap justify-start items-center gap-8">
    {#each detectors as detector}
        <DetectionProfile {detector} text={answer} {isGenerationOver} />
    {/each}
</div>

<br>


<label class="label">
    <h1>
        Answer
    </h1>
    <textarea class="textarea" rows="4" placeholder="" disabled/>
</label>