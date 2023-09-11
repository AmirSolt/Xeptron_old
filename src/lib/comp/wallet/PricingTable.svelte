<script lang="ts">
    import {packages} from '$lib/utils/config'
    import PricePackage from '$lib/comp/wallet/PricePackage.svelte';

    export let form:any
    export let enhance:any

</script>



<section class="">
	<div class="py-8 px-4 mx-auto  lg:py-16 lg:px-6">
		<div class="mx-auto  text-center mb-8 lg:mb-12">
			<h2 class="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold ">
				Designed for business teams like yours
			</h2>
			<p class="mb-5  md:text-lg">
				Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
				long-term value and drive economic growth.
			</p>
		</div>

        <br>

		<div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

            <PricePackage mpackage={packages[0]} {enhance} {form}/>

            <div class="relative">
                <span class="badge variant-filled-primary absolute -top-5 -right-0 z-10 text-md p-2">
                    Most popular
                </span>
                <PricePackage mpackage={packages[1]} {enhance} {form} isPopular={true}/>
            </div>

            <PricePackage mpackage={packages[2]} {enhance} {form}/>

		</div>

	</div>
</section>