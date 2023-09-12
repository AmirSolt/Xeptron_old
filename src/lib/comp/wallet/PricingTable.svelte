<script lang="ts">
    import {packages} from '$lib/utils/config'
    import PricePackage from '$lib/comp/wallet/PricePackage.svelte';

    export let form:any
    export let enhance:any

</script>



<div class="flex flex-col justify-center gap-8">
    
    <div class="flex flex-col justify-center text-center gap-4">
        <h2 class="text-4xl md:text-5xl font-extrabold ">
            Designed for business teams like yours
        </h2>
        <p class="text-lg">
            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
            long-term value and drive economic growth.
        </p>
    </div>


    <div class="flex flex-wrap justify-center items-center gap-8">

        <PricePackage mpackage={packages[0]} {enhance} {form}/>

        
            <PricePackage mpackage={packages[1]} {enhance} {form} isPopular={true}/>

        <PricePackage mpackage={packages[2]} {enhance} {form}/>

    </div>

</div>