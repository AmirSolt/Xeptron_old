
<script lang="ts">
    import CopyClipboard from '$lib/comp/tools/CopyClipboard.svelte';

    export let input:string
    export let response:string
    export let isStreamingOver:boolean


</script>

    
<div class="flex flex-col justify-center items-start gap-4" >

    <h1 class="text-3xl">
        Answer
    </h1>
    
    <div class="flex justify-center items-center gap-4">
        <span class="text-xl badge p-3 variant-soft">
            {input.length+response.length}/10000 char
        </span>
        <CopyClipboard text={response} extraStyle={isStreamingOver? 'variant-filled-primary':'variant-ringed pointer-events-none opacity-50'} />
    
    </div>
    
    

    <p class="card p-4 h-80 w-full">
        {response}
    </p>
</div>