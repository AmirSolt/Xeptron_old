
<script lang="ts">
    import Completion from '$lib/comp/completion/Completion.svelte';

    export let data;
    const {detectors, personality, wallet} = data;
</script>


<div class="flex justify-start text-center items-center gap-4">
    <h1>
        Credits:
    </h1>
    <a href="/profile/wallet" class="btn-icon btn-icon-xl variant-filled">{wallet.credits}</a>
</div>

<br>

<Completion {detectors} {personality} />
