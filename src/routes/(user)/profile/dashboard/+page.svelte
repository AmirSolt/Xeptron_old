<script lang="ts">
    import DetectionProfile from '$lib/comp/check/DetectionProfile.svelte';
	import SampleWarning from '$lib/comp/sample/SampleWarning.svelte';


    export let data;
    const {personality, wallet} = data;


    const detectionProfile:DetectionProfileData = {pfpSrc:"",name:"yo"}

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

<div class="flex justify-evenly items-center">

    <DetectionProfile detectionProfile={detectionProfile} />
    <DetectionProfile detectionProfile={detectionProfile} />
    <DetectionProfile detectionProfile={detectionProfile} />
    <DetectionProfile detectionProfile={detectionProfile} />
    <DetectionProfile detectionProfile={detectionProfile} />
</div>

<br>


<label class="label">
    <h1>
        Answer
    </h1>
    <textarea class="textarea" rows="4" placeholder="" disabled/>
</label>