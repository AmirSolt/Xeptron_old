
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
        title:"Prompt",
        explanation:"Prompt AI to generate content.",
        placeholder:"e.g. Write a blog post about air polution...",
        isStreamingOver:false,
        input:"",
        response:"",
        formRows:4
    }
    // =====================================
</script>


<div class="space-y-8">

    <CreditCounter {profile} />

    <Steps {session} {profile} />
    
    <AiForm bind:aiTextForm={aiTextForm} {session} {detectorsComponent} bind:profile={profile} />
    
    <Detectors  {detectors} text={aiTextForm.response} bind:this={detectorsComponent}/>
    
    <AiAnswer input={aiTextForm.input} response={aiTextForm.response} isStreamingOver={aiTextForm.isStreamingOver} />
</div>

