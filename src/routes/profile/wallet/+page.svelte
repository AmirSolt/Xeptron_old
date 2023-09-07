<script lang="ts">
    import {profile} from '$lib/funcs/userData/index'
    import Steps from '$lib/comp/steps/Steps.svelte';
    export let data;

    let credits:number|null=null
    $:if($profile!=null){
        credits = $profile.wallet.pos_credit - $profile.wallet.neg_credit
        credits = parseFloat(credits.toFixed(2))
    }else{
        credits = null
    }

</script>


<Steps needsPersonality={false} session={data.session} />


<div class="flex justify-start text-center items-center gap-4">
    <h1>
        Credits: {credits}
    </h1>
</div>

<br>

<div>
    <h1>
        Add
    </h1>
</div>

<div>
    <h1>
        Payment method
    </h1>
</div>



<div>
    <h1>
        Request for a refund
    </h1>
</div>