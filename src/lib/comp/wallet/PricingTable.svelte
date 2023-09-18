<script lang="ts">
    import PricePackage from '$lib/comp/wallet/PricePackage.svelte';

    export let form:any
    export let packages:Package[]

</script>



<div class="flex flex-col justify-center gap-8">
    
    <div class="flex flex-col justify-center text-center gap-4">
        <h2 class="text-4xl md:text-5xl font-extrabold ">
            Xeptron is your persnal writer
        </h2>
        <p class="text-lg">
            For the amount of time you save, Xeptron is worth it.
        </p>
        
    </div>

    <p class="text-md">
        * These are rough estimations: <span class="badge variant-ghost">1 credit ≈ 1000 char</span>   
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <PricePackage mpackage={packages[0]} {form}/>
        
        <PricePackage mpackage={packages[1]} {form}  specialText="Most Popular" specialColor="primary"/>

        <PricePackage mpackage={packages[2]} {form}/>

        <PricePackage mpackage={packages[3]} {form} specialText="Best Value" specialColor="secondary"/>

    </div>

    
</div>