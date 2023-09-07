
<script lang="ts">
    import {profile} from '$lib/funcs/userData/index'

    let credits:number|null=null
    $:if($profile!=null){
        credits = $profile.wallet.pos_credit - $profile.wallet.neg_credit
        credits = parseFloat(credits.toFixed(2))
    }else{
        credits = null
    }


</script>



<div class="flex justify-start text-center items-center gap-4">
    <h1>
        Credits:
    </h1>

    {#if credits==null}
        <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-ringed">N/A</a>
    {:else if credits>3}
        <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-filled">{credits}</a>
    {:else if credits<=3 && credits>0}
        <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-filled-warning">{credits}</a>
    {:else if credits==0}
        <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-filled-error">{credits}</a>
    {:else}
        <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-ringed">{credits}</a>
    {/if}

</div>
