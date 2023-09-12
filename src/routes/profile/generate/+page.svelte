
<script lang="ts">

    import Detectors from '$lib/comp/detector/Detectors.svelte';
    import Steps from '$lib/comp/steps/Steps.svelte';
    import CreditCounter from '$lib/comp/wallet/CreditCounter.svelte';
    import AiForm from '$lib/comp/aiForms/AIForm.svelte';
    import AiAnswer from '$lib/comp/aiForms/AIAnswer.svelte';


    export let data;
    let {detectors, session, profile} = data;
	$: ({ profile } = data);
    let detectorsComponent:any;


    let aiTextForm:AITextForm = {
        url:"/api/generateText",
        title:"Instructions",
        explanation:"Tell AI what you want it to do. Try to be detailed and descreptive.",
        placeholder:"e.g. Write an essay about air polution...",
        isStreamingOver:false,
        input:"",
        response:"",
        formRows:4
    }
    // =====================================
</script>


<CreditCounter {profile} />

<br>

<h1 class="text-6xl">
    👨 ➡️ 🗒️
</h1>

<br>

<!-- =================================================================== -->
<Steps {session} {profile} />



<!-- =================================================================== -->
<AiForm bind:aiTextForm={aiTextForm} {session} {detectorsComponent} bind:profile={profile} />



<!-- =================================================================== -->
<br>
<br>
<Detectors  {detectors} text={aiTextForm.response} bind:this={detectorsComponent}/>


<!-- =================================================================== -->
<br>
<br>
<AiAnswer input={aiTextForm.input} response={aiTextForm.response} isStreamingOver={aiTextForm.isStreamingOver} />
