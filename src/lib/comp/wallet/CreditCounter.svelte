
<script lang="ts">
    export let profile:Profile|null

    let credits:number|null=null
    $: if(profile!=null) {
        credits = profile.wallet.pos_credit - profile.wallet.neg_credit;
        credits = parseFloat(credits.toFixed(2)) 
    }


</script>

{#if credits!=null}


<div class="flex justify-start text-center items-center gap-4">
    <h2>
        Credits:
    </h2>

    {#if credits>3}
        <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-ringed">{credits}</a>
    {:else if credits<=3 && credits>0}
        <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-ringed-warning">{credits}</a>
    {:else if credits==0}
        <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-ringed-error">{credits}</a>
    {:else}
        <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-ringed">{credits}</a>
    {/if}

</div>

{:else}

<div></div>


{/if}
