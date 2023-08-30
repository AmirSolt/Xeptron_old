<script lang="ts">
    import DetectionProfile from '$lib/comp/detector/DetectionProfile.svelte';
	import SampleWarning from '$lib/comp/sample/SampleWarning.svelte';
    import {getSSE} from '$lib/funcs/generatorSSE/index.js';

    export let data;
    const {personality, detectors, wallet} = data;

    let problem:string|null=null;

    let answer:string;
    let isStreamingOver:boolean=false;


    // =====================================
    function newContentCallback(newContent:string){
        answer += newContent;
    }
    function overCallback(){
        isStreamingOver=true
        console.log(">>answer",answer)
    }
    function errorCallback<T>(err: T){
        // throw error(400, "Something went wrong!")
        console.log(">>>> Something went wrong!",err)
    }

    function getAnswer(problem:string|null, sampleText:string|null){
        const eventSource = getSSE(problem, sampleText, newContentCallback, overCallback, errorCallback)
        if(eventSource){
            eventSource.stream()
        }
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


<div>

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
            <textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." bind:value={problem}/>
        </label>
	</label>
    <br>
    <button class="btn variant-filled" on:click={()=>getAnswer(problem, personality.sampleText)}>
        Submit
    </button>
</div>



<br>
<br>

<div class="flex flex-wrap justify-start items-center gap-8">
    {#each detectors as detector}
        <DetectionProfile {detector} text={answer} {isStreamingOver} />
    {/each}
</div>

<br>


<label class="label">
    <h1>
        Answer
    </h1>
    <textarea class="textarea" rows="4" placeholder="" disabled/>
</label>