<script lang="ts">
	import SampleWarning from '$lib/comp/sample/SampleWarning.svelte';
	import SampleSuccess from '$lib/comp/sample/SampleSuccess.svelte';



    export let data;
    const {personality} = data;

</script>


<form method="POST" action="?/saveSample">

    {#if personality.sampleText!=null}
        <SampleSuccess />
    {/if}

    <br>
	<label>
        <label class="label">
            <h1>
                Sample
            </h1>
            <small>
                The purpose is for the AI to understand and duplicate your writting style
            </small>
            <small class="alert variant-ghost-warning">
                DEV: Pop up on click if personality.sampleText != null
            </small>
            <textarea class="textarea" rows="4" placeholder="Write a paragraph about your favourite movie" name="sampleText" value={personality.sampleText??""} required  />
        </label>
	</label>
    <br>
    
    <button type="submit" class="btn variant-filled">
        Submit
    </button>

</form>
