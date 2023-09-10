<script lang="ts">
    import Steps from '$lib/comp/steps/Steps.svelte';
    export let data;
    const {profile} = data

</script>

<h1>Home</h1>


<Steps {profile} needsPersonality={false} session={data.session} />



