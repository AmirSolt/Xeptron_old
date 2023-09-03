<script lang="ts">
    import Steps from '$lib/comp/steps/Steps.svelte';
    export let data;
    const {wallet} = data;

</script>


<Steps personality={null} session={data.session} />


<div class="flex justify-start text-center items-center gap-4">
    <h1>
        Credits: {wallet.credits}
    </h1>
</div>

<br>

<div>
    <h1>
        Add
    </h1>
</div>

<div>
    <h1>
        Payment method
    </h1>
</div>



<div>
    <h1>
        Request for a refund
    </h1>
</div>