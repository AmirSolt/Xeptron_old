
<script lang="ts">
    import Humanizer from '$lib/comp/mvps/Humanizer.svelte';
    import CreditCounter from '$lib/comp/wallet/CreditCounter.svelte';

    export let data;
    const {detectors, personality, wallet} = data;
</script>


<CreditCounter {wallet} />

<br>

<Humanizer {detectors} {personality} />
