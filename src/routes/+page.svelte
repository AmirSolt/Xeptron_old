<script lang="ts">
    import Steps from '$lib/comp/steps/Steps.svelte';
    export let data;


</script>

<h1>Home</h1>


<Steps personality={null} session={data.session} />



