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


<Steps {profile} session={data.session} />


<div class="card flex flex-col justify-center items-start gap-4 text-center">
    <h1>Wallet</h1>

    <div class="flex flex-col justify-center items-start gap-6 text-center">
        <div class="flex flex-col justify-center items-start gap-4 text-center">
            <div >
                <h3>
                    Credits: <span class="text-3xl text-primary-500">{credits}</span>
                </h3>
            </div>
            
        
            <a class="btn variant-filled-primary " href="/payment/pricing">
                <p>
                    Add Credit
                </p>
            </a>
        </div>

        <a class="btn variant-ringed" href="mailto:support@xeptron.com">
            <p>
                Ask for a refund
            </p>
        </a>

    </div>	
</div>

<br>

<div class="flex justify-center gap-2 text-center">
    <p>
        Customer Service Email:
        support@xeptron.com
    </p>
    
</div>






{/if}
