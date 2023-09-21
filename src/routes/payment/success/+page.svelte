<script lang="ts">
    import {CheckCircle} from 'lucide-svelte'

</script>

<div class="card flex flex-col justify-center items-center gap-4">

    <CheckCircle color="#15CE48" size={200} />

    <div class="flex flex-col justify-center items-center gap-2">
        <h1 class="text-4xl">
            Thank You!
        </h1>
        <p>
            Please make sure that you have recieved the credits.
        </p>
    </div>

    <a href="/profile/wallet" class="btn variant-ringed" >
        ← Wallet
    </a>	
</div>