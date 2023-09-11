<script lang="ts">

    import Detectors from '$lib/comp/detector/Detectors.svelte';
    import Steps from '$lib/comp/steps/Steps.svelte';
    import CreditCounter from '$lib/comp/wallet/CreditCounter.svelte';
    import AiForm from '$lib/comp/aiForms/AIForm.svelte';
    import AiAnswer from '$lib/comp/aiForms/AIAnswer.svelte';

    export let data;
    let {detectors, session, profile} = data;
    let detectorsComponent:any;

    let aiTextForm:AITextForm = {
        url:"/api/convertText",
        title:"Humanize",
        explanation:"Paste your text and AI will make it like you wrote it.",
        placeholder:"*paste*",
        isStreamingOver:false,
        input:"",
        response:"",
        formRows:6
    }
    // =====================================



</script>


<CreditCounter  {profile} />


<br>

<h1 class="text-6xl">
    🤖🗒️ ➡️ 👨🗒️
</h1>

<br>


<!-- =================================================================== -->
<Steps {profile} {session} />


<!-- =================================================================== -->
<AiForm bind:profile={profile} bind:aiTextForm={aiTextForm} {session} {detectorsComponent} />



<!-- =================================================================== -->
<br>
<br>
<Detectors  {detectors} text={aiTextForm.response} bind:this={detectorsComponent}/>


<!-- =================================================================== -->
<br>
<br>
<AiAnswer input={aiTextForm.input} response={aiTextForm.response} isStreamingOver={aiTextForm.isStreamingOver} />
