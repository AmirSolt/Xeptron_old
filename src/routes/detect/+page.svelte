
<script lang="ts">
    import Detectors from '$lib/comp/mvps/Detectors.svelte';
    import CreditCounter from '$lib/comp/wallet/CreditCounter.svelte';

    export let data;
    const {detectors, wallet} = data;
</script>


<CreditCounter {wallet} />

<br>

<h1 class="text-6xl">
    🤖🗒️ 🆚 👨🗒️
</h1>

<br>


<Detectors {detectors}/>
