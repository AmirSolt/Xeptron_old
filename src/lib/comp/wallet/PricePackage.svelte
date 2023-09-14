<script lang="ts">
    import DataList from "$lib/comp/tools/DataList.svelte";
	export let mpackage: Package;
	export let form: any;
	export let enhance: any;

    export let specialText:string|null=null
    export let specialColor:string|null=null

	$form.priceId = mpackage.priceId;
</script>

<!-- Pricing Card -->


<div class="card flex flex-col text-center p-4 md:w-1/3 {specialColor ? `border-2 border-${specialColor}-500` : 'border-2 border-slate-400'}">

    <div class="relative w-full">

        {#if specialText!=null}
            <span class="badge absolute -top-8 -right-0 z-10 text-md p-2 {specialColor?`variant-filled-${specialColor}`:"variant-filled"}" >
                {specialText}
            </span>
        {/if}

        <div class="flex flex-col gap-4 p-4">
    
            <h3 class="text-3xl font-semibold">{mpackage.name}</h3>
            
            <div class="flex justify-center items-baseline">
                <span class="mr-2 text-5xl font-extrabold"
                    >{mpackage.currencySymbol}{mpackage.pricePerCredit}</span
                >
                <span class="text-gray-500  dark:text-gray-400">/Credit</span>
            </div>
        
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">One Time Payment</p>
    
        </div>
    
        <br>
        
        
        <DataList list={mpackage.bullets} />

        <div class="flex justify-between items-center ">
    
            <p class="font-light text-lg">
                {mpackage.credits} credits
            </p>
            
    
            <form method="post" use:enhance>
                <input type="hidden" name="priceId" value={$form.priceId} />
                <button class="btn text-lg md:text-2x w-24 {specialColor ? `variant-filled-${specialColor}` : 'variant-filled'}" type="submit"> 
                    {mpackage.currencySymbol}{(mpackage.pricePerCredit * mpackage.credits).toFixed(1)}
                </button>
            </form>
    
        </div>

    </div>



</div>

