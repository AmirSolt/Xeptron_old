
<script lang="ts">
    import CopyClipboard from '$lib/comp/tools/CopyClipboard.svelte';

    export let response:string
    export let isStreamingOver:boolean


</script>


<div >
    <h1>
        Answer
    </h1>

    <CopyClipboard text={response} extraStyle={isStreamingOver? '':'pointer-events-none opacity-50'} />
    <p class="card p-4 h-80">
        {response}
    </p>
</div>