
<script lang="ts">
    import Generator from '$lib/comp/mvps/Generator.svelte';
    import CreditCounter from '$lib/comp/wallet/CreditCounter.svelte';

    export let data;
    const {detectors, personality, wallet} = data;
</script>


<CreditCounter {wallet} />

<br>

<h1 class="text-6xl">
    👨 ➡️ 🗒️
</h1>

<br>

<Generator {detectors} {personality} />
