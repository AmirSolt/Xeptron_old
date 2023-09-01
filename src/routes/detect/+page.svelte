
<script lang="ts">
    import Detector from '$lib/comp/mvps/Detector.svelte';
    import CreditCounter from '$lib/comp/wallet/CreditCounter.svelte';

    export let data;
    const {detectors, personality, wallet} = data;
</script>


<CreditCounter {wallet} />

<br>

<Detector {detectors} {personality} />
