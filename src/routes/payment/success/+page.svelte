<script lang="ts">
    import {CheckCircle} from 'lucide-svelte'

</script>

<div class="card flex flex-col justify-center items-center gap-8 m-auto mt-16 max-w-md p-8">

    <CheckCircle color="#15CE48" size={200} />

    <div class="flex flex-col justify-center items-center gap-2">
        <h1 class="text-4xl">
            Thank You!
        </h1>
        <p>
            Please make sure you recieve the purchased credits.
        </p>
        <p>
            Also, check your inbox for the receipt.
        </p>
    </div>

    <a href="/" class="btn variant-ringed" >
        ← Home
    </a>	
</div>