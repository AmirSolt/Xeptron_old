<script lang="ts">
    import PricePackage from '$lib/comp/wallet/PricePackage.svelte';

    export let form:any
    export let packages:Package[]

</script>




<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    <PricePackage mpackage={packages[0]} {form}/>
    
    <PricePackage mpackage={packages[1]} {form}  specialText="Most Popular" specialColor="primary"/>

    <PricePackage mpackage={packages[2]} {form}/>

    <PricePackage mpackage={packages[3]} {form} specialText="Best Value" specialColor="secondary"/>

</div>


