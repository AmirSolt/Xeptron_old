
<script lang="ts">
    export let wallet:Wallet

</script>



<div class="flex justify-start text-center items-center gap-4">
    <h1>
        Credits:
    </h1>

    {#if wallet.credits>3}
        <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-filled">{wallet.credits}</a>
    {:else if wallet.credits<=3 && wallet.credits>0}
        <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-filled-warning">{wallet.credits}</a>
    {:else if wallet.credits==0}
        <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-filled-error">{wallet.credits}</a>
    {:else}
        <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-ringed">{wallet.credits}</a>
    {/if}

</div>
