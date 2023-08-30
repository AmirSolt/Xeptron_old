<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';
    export let detectionProfile:DetectionProfileData;
    let state:"start"|"loading"|"success"|"fail" = "start"
</script>

<div class="flex flex-col justify-center items-center">

    <Avatar src="{detectionProfile.pfpSrc}" width="w-32" rounded="rounded-full" />
        
    <div class="text-center">
        <h2>{detectionProfile.name}</h2>
        
        {#if state === "start"}
            <p>Start</p>
        {:else if state === "loading"}
            <p>Loading</p>
        {:else if state === "success"}
            <p>Success</p>
        {:else if state === "fail"}
            <p>Failed</p>
        {:else}
            <p>Error</p>
        {/if}
    
    </div>
</div>