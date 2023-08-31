
<script lang="ts">
    import Completion from '$lib/comp/completion/Completion.svelte';
    import CreditCounter from '$lib/comp/wallet/CreditCounter.svelte';

    export let data;
    const {detectors, personality, wallet} = data;
</script>


<CreditCounter {wallet} />

<br>

<Completion {detectors} {personality} />
