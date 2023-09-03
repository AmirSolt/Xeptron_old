
<script lang="ts">
    import Steps from '$lib/comp/steps/Steps.svelte';
    export let data;

    let logoutLoading:boolean=false

</script>



<Steps personality={null} session={data.session} />


<h1>
    Settings
</h1>



<a 
    on:click={()=>logoutLoading=true}
    href="/auth/signout"
    class="btn btn-sm variant-filled-error">
    {#if !logoutLoading}
        Logout
    {:else}
        <!-- <ProgressRadial  width="w-12" stroke={100} /> -->
        Loading...
    {/if}
</a>