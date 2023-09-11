<script lang="ts">
    import {Wallet} from 'lucide-svelte'
    import Steps from '$lib/comp/steps/Steps.svelte';
    export let data;

    const {profile} = data

    let credits:number|null=null
    credits = profile.wallet.pos_credit - profile.wallet.neg_credit
    credits = parseFloat(credits.toFixed(2))
</script>








<Steps {profile} needsPersonality={false} session={data.session} />


<div class="card flex flex-col justify-center items-center gap-8 p-4 text-center w-full">


    <div class="flex flex-col justify-center items-center gap-4 w-full">
        <Wallet color="#15CE48" size={150} />
    
    
        <div >
            <h1 class="text-2xl">
                Credits: <span class="text-4xl text-secondary-500">{credits}</span>
            </h1>
        </div>
        
    
        <a class="btn variant-filled-primary w-full" href="/payment/pricing">
            <h1>
                Add Credit
            </h1>
        </a>
        
    </div>


    <a class="btn variant-ghost-warning" href="/payment/pricing">
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