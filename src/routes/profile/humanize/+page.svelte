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
        url:"/api/convertText",
        title:"Humanize",
        explanation:"Humanize AI generated content.",
        placeholder:"*paste*",
        isStreamingOver:false,
        input:"",
        response:"",
        formRows:6
    }
    // =====================================



</script>

<div class="space-y-8">
<CreditCounter  {profile} />

<Steps {profile} {session} />

<div>
    <aside class="alert variant-soft">
        <div class="alert-message" data-toc-ignore>
            <span><span class="badge variant-ghost text-lg">Generating</span> from scratch is the preferred method to bypass AI.</span>
        </div>
    </aside>
</div>


<AiForm bind:profile={profile} bind:aiTextForm={aiTextForm} {session} {detectorsComponent} />

<Detectors  {detectors} text={aiTextForm.response} bind:this={detectorsComponent}/>

<AiAnswer input={aiTextForm.input} response={aiTextForm.response} isStreamingOver={aiTextForm.isStreamingOver} />
</div>