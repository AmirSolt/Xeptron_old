<script lang="ts">
	import Steps from '$lib/comp/steps/Steps.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { personalizationSchema } from '$lib/utils/schema';
	import { toastError, toastSuccess } from '$lib/utils/toastHelper.js';
	import SuperTextInput from '$lib/comp/superForms/SuperTextInput.svelte';
	import SuperTextarea from '$lib/comp/superForms/SuperTextarea.svelte';
	import { onMount } from 'svelte';

	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore();

	export let data;
	let { session, profile } = data;
	$: ({ profile } = data);

	const { form, errors, constraints, enhance, tainted } = superForm(data.form, {
		taintedMessage: 'Make sure to save your progress!!!',
		validators: personalizationSchema,
		onError: (result) => {
			toastError(result.result.error.message, toastStore);
		},
		onSubmit: (result) => {
			toastSuccess('Saved', toastStore);
		}
	});

	onMount(() => {
		/*
		Setting the initial values of the form and removing the tainted fields

		*/
		if(profile!=null){
			$form.first_name = profile.personality.first_name ?? undefined;
			$form.last_name = profile.personality.last_name ?? undefined;
			$form.use_case = profile.personality.use_case ?? undefined;
			$form.writing_style = profile.personality.writing_style ?? undefined;
			if ($tainted != null) {
				$tainted.first_name = false;
				$tainted.last_name = false;
				$tainted.use_case = false;
				$tainted.writing_style = false;
			}
		}
	});
</script>

<div class="space-y-8">
	<Steps {profile} needsPersonality={false} {session} />
	
	
	<form method="POST" use:enhance>
		<div class="flex flex-col justify-center items-start gap-4 w-full">
			<div class="flex flex-col justify-center items-start gap-6 w-full">
				<SuperTextInput
					session={data.session}
					isSessionOnly={true}
					formAttrName="first_name"
					{form}
					{constraints}
					{errors}
					placeholder="(optional)"
					autocomplete="given-name"
				>
					<div slot="head">
						<h2>First Name</h2>
					</div>
				</SuperTextInput>
				<SuperTextInput
					session={data.session}
					isSessionOnly={true}
					formAttrName="last_name"
					{form}
					{constraints}
					{errors}
					placeholder="(optional)"
					autocomplete="family-name"
				>
					<div slot="head">
						<h2>Last Name</h2>
					</div>
				</SuperTextInput>
		
				<SuperTextInput
					session={data.session}
					isSessionOnly={true}
					formAttrName="use_case"
					{form}
					{constraints}
					{errors}
					placeholder="e.g. Blog about food"
				>
					<div slot="head">
						<h2>Use Case</h2>
						<small
							>What is your usecase and what level of sophistication are you expecting. e.g. Blog about
							food, Student grade 12, Marketing, better SEO</small
						>
					</div>
				</SuperTextInput>
		
				<SuperTextarea
					session={data.session}
					isSessionOnly={true}
					formAttrName="writing_style"
					{form}
					{constraints}
					{errors}
				>
					<div slot="head">
						<h2>Writing Style</h2>
						<small
							>Write a short paragraph. The purpose of this is for the AI to understand and follow your
							writing style.</small
						>
					</div>
				</SuperTextarea>
			</div>
	
			<button type="submit" class="btn variant-filled-primary w-full"> Save </button>
		</div>
	</form>

</div>

