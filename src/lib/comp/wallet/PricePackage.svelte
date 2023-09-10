<script lang="ts">
	export let mpackage: Package;
	export let form: any;
	export let enhance: any;
    export let isPopular:boolean=false

	$form.priceId = mpackage.priceId;
</script>

<!-- Pricing Card -->


<div class="card flex flex-col text-center p-4 {isPopular ? 'border-2 border-primary-500' : ''}">

    <div class="card flex flex-col gap-4 p-4">

        <h3 class="text-2xl font-semibold">{mpackage.name}</h3>
        
        <div class="flex justify-center items-baseline">
            <span class="mr-2 text-5xl font-extrabold"
                >{mpackage.currencySymbol}{mpackage.pricePerCredit}</span
            >
            <span class="text-gray-500  dark:text-gray-400">/Credit</span>
        </div>
    
        <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">description</p>

    </div>

    <br>
    
    <ul role="list" class="mb-8 space-y-4 text-left">
        {#each mpackage.bullets as bullet}
            <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                    /></svg
                >
                <span>{bullet}</span>
            </li>
        {/each}
    </ul>

    <div class="flex justify-between items-center  md:px-4">

        <p class="font-light text-lg">
            {mpackage.credits} credits
        </p>
        

        <form method="post" use:enhance>
            <input type="hidden" name="priceId" value={$form.priceId} />
            <button class="btn text-lg md:text-2x p-4 w-24 {isPopular ? 'variant-filled-primary' : 'variant-filled'}" type="submit"> 
                {mpackage.currencySymbol}{mpackage.pricePerCredit * mpackage.credits}    
            </button>
        </form>

    </div>

</div>

