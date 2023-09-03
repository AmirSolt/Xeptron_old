
<script lang="ts">
    import { ProgressRadial } from '@skeletonlabs/skeleton';
    import Steps from '$lib/comp/steps/Steps.svelte';
    export let data;

    let logoutLoading:boolean=false

</script>



<Steps personality={null} session={data.session} />


<h1>
    Settings
</h1>


{#if !logoutLoading}
    <a 
        on:click={()=>logoutLoading=true}
        href="/auth/signout"
        class="btn btn-sm variant-filled-error">
            Sign out
            
    </a>
{:else}
<div class="btn btn-sm variant-filled-error">
    <ProgressRadial  width="w-6" stroke={100} />
</div>
{/if}