<script lang="ts">
        import NoGo from "$lib/comp/tools/NoGo.svelte";
    import {Wallet} from 'lucide-svelte'
    import Steps from '$lib/comp/steps/Steps.svelte';
    
    export let data;
    let {profile} = data
    $: ({ profile } = data);

    let credits:number|null=null
    credits = profile!=null? profile.wallet.pos_credit - profile.wallet.neg_credit : null
    if(credits!=null)
        credits = parseFloat(credits.toFixed(2))
</script>




{#if profile==null}
<NoGo />
{:else}


<Steps {profile} needsPersonality={false} session={data.session} />


<div class="card flex flex-col justify-center items-center gap-4 p-4 text-center w-full">


    <div class="flex flex-col justify-center items-center gap-4 w-full">
        <Wallet color="#15CE48" size={150} />
    
        <div >
            <h1>
                Credits: <span class="text-4xl text-secondary-500">{credits}</span>
            </h1>
        </div>
        
    
        <a class="btn variant-filled-primary w-full md:w-1/2" href="/payment/pricing">
            <h2>
                Add Credit
            </h2>
        </a>
        
    </div>


    <a class="btn variant-ringed" href="/payment/pricing">
        <p>
            Ask for a refund
        </p>
    </a>
    
</div>

<br>  

<div class="flex justify-center gap-2 text-center">
    <p>
        Customer Service Email:
        name@email.com
    </p>
    
</div>



{/if}
