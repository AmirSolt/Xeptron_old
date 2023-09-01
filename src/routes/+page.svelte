
<script lang="ts">
    import Generator from '$lib/comp/mvps/Generator.svelte';
    import CreditCounter from '$lib/comp/wallet/CreditCounter.svelte';

    export let data;
    const {detectors, personality, wallet} = data;
</script>


<CreditCounter {wallet} />

<br>

<Generator {detectors} {personality} />
