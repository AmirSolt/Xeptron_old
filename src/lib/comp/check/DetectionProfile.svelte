<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';
    export let detectionProfile:DetectionProfileData;

</script>

<div class="flex flex-col justify-center items-center">

    <Avatar src="{detectionProfile.pfpSrc}" width="w-32" rounded="rounded-full" />
        
    <div class="text-center">
        <h2>{detectionProfile.name}</h2>
        
        {#if detectionProfile.state === "loading"}
        
            <p>Loading</p>
        
        {:else if detectionProfile.state === "success"}
        
            <p>Success</p>
        
        {:else if detectionProfile.state === "fail"}
        
            <p>Failed</p>
        
        {:else}
        
            <p>Error</p>
        
        {/if}
    
    </div>
</div>