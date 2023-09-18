<script lang="ts">
	import Steps from '$lib/comp/steps/Steps.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import { personalizationSchema } from '$lib/utils/schema';
	import { Occupations } from '$lib/utils/config';
	import { toastError, toastSuccess } from '$lib/utils/toastHelper.js';
	import SuperTextInput from '$lib/comp/superForms/SuperTextInput.svelte';
	import SuperOptions from '$lib/comp/superForms/SuperOptions.svelte';
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
			$form.occupation = profile.personality.occupation ?? undefined;
			if ($tainted != null) {
				$tainted.first_name = false;
				$tainted.last_name = false;
				$tainted.occupation = false;
			}
		}
	});
</script>


<div class="space-y-8">
	<Steps {profile} {session} />
	
	
	<form method="POST" use:enhance>
		<div class="flex flex-col justify-center items-start gap-12 w-full">
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
		
		

				<SuperOptions
					options={Object.values(Occupations)}
					session={data.session}
					formAttrName="occupation"
					isSessionOnly={true}
					{form}
					{constraints}
					{errors}
				>
					<div slot="head">
						<h2>Occupation</h2>
						<small
							>What is your occupation?</small>
					</div>
				</SuperOptions>

		
			</div>
	
			<button type="submit" class="btn variant-filled-primary w-full"> Save </button>
		</div>
	</form>

</div>

