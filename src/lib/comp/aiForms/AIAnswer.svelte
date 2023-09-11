
<script lang="ts">
    import CopyClipboard from '$lib/comp/tools/CopyClipboard.svelte';

    export let response:string
    export let isStreamingOver:boolean


</script>

    
<div class="flex flex-col justify-center items-start gap-4" >

    <div class="flex justify-center items-center gap-8">
        <h1>
            Answer
        </h1>
    
        <CopyClipboard text={response} extraStyle={isStreamingOver? 'variant-filled-primary':'variant-ringed pointer-events-none opacity-50'} />
    </div>


    <p class="card p-4 h-80 w-full">
        {response}
    </p>
</div>