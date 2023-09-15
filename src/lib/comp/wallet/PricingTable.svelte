<script lang="ts">
    import PricePackage from '$lib/comp/wallet/PricePackage.svelte';

    export let form:any
    export let enhance:any
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
        * These are rough estimations: <span class="badge variant-ghost">1 credit ≈ 1000 char</span> and <span class="badge variant-ghost">article ≈ 5000 char</span>   
    </p>

    <div class="flex flex-wrap justify-center items-center gap-8">

        <PricePackage mpackage={packages[0]} {enhance} {form}/>
        
        <PricePackage mpackage={packages[1]} {enhance} {form}  specialText="Most Popular" specialColor="primary"/>

        <PricePackage mpackage={packages[2]} {enhance} {form}/>

        <PricePackage mpackage={packages[3]} {enhance} {form} specialText="Best Value" specialColor="secondary"/>

    </div>

    
</div>