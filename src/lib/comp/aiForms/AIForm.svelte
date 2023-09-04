<script lang="ts">
    import { useCompletion } from 'ai/svelte';
    import {toastError} from '$lib/utils/toast'

    export let aiTextForm:AITextForm
    export let personality:Personality

    let detectorsComponent:any;
    // =====================================

    function overCallback(){
        aiTextForm.isStreamingOver = true
        detectorsComponent.callDetectors()
    }
    function errorCallback(error:Error){
        toastError(error.message, false)
        // throw error(400, "Something went wrong!")
    }
    const { input, handleSubmit, completion } = useCompletion({
        api: aiTextForm.url,
        onFinish: overCallback,
        onError: errorCallback,
        body: {
            personality:personality
        }
    });

    $: aiTextForm.response=$completion

</script>




<form on:submit={handleSubmit}>
    <br>
    <label >
        <h1>
            {aiTextForm.title}
        </h1>
        <small>
            {aiTextForm.explanation}
        </small>
        <textarea class="textarea" rows="{aiTextForm.formRows}" placeholder="{aiTextForm.placeholder}" autocomplete="off" bind:value={$input}/>
    </label>
    <br>
    <button  class="btn variant-filled" >
        Submit
    </button>
</form>

