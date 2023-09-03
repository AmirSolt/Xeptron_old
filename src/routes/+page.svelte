
<script lang="ts">

    import Detectors from '$lib/comp/detector/Detectors.svelte';
    import Steps from '$lib/comp/steps/Steps.svelte';
    import CreditCounter from '$lib/comp/wallet/CreditCounter.svelte';
    import AiForm from '$lib/comp/aiForms/AIForm.svelte';
    import AiAnswer from '$lib/comp/aiForms/AIAnswer.svelte';

    export let data;
    const {detectors, personality, wallet} = data;

    let aiTextForm:AITextForm = {
        url:"/api/generateText",
        title:"Instructions",
        explanation:"Tell AI what you want it to do. Try to be detailed and descreptive.",
        placeholder:"e.g. Write an essay about air polution...",
        isStreamingOver:false,
        response:"",
        formRows:4
    }
    // =====================================



</script>


<CreditCounter {wallet} />

<br>

<h1 class="text-6xl">
    👨 ➡️ 🗒️
</h1>

<br>

<!-- =================================================================== -->
<Steps {personality} />


<!-- =================================================================== -->
<AiForm bind:aiTextForm={aiTextForm} {personality} />



<!-- =================================================================== -->
<br>
<br>
<Detectors  {detectors} text={aiTextForm.response}/>


<!-- =================================================================== -->
<br>
<br>
<AiAnswer response={aiTextForm.response} isStreamingOver={aiTextForm.isStreamingOver} />
