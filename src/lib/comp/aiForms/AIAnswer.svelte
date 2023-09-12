
<script lang="ts">
    import CopyClipboard from '$lib/comp/tools/CopyClipboard.svelte';

    export let input:string
    export let response:string
    export let isStreamingOver:boolean


</script>

    
<div class="flex flex-col justify-center items-start gap-2" >

    <h1>
        Answer
    </h1>
    
    <div class="flex justify-between items-center w-full">
        <CopyClipboard text={response} extraStyle={isStreamingOver? 'variant-filled-primary':'variant-ringed pointer-events-none opacity-50'} />
        
        <span class="text-xl badge p-3 variant-soft">
            {input.length+response.length}/10000 char
        </span>
    
    </div>
    
    

    <p class="card h-96 w-full">
        {response}
    </p>
</div>