<script lang="ts">
	import Steps from '$lib/comp/steps/Steps.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { personalizationSchema } from '$lib/utils/schema';
	import { toastError, toastSuccess } from '$lib/utils/toastHelper.js';
	import SuperTextInput from '$lib/comp/superForms/SuperTextInput.svelte';
    import SuperTextarea from '$lib/comp/superForms/SuperTextarea.svelte';

	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore();

	export let data;
	const { personality, session } = data;

	const { form, errors, constraints, enhance, message } = superForm(data.form, {
		taintedMessage: 'Make sure to save your progress!!!',
		validators: personalizationSchema,
		onError: (result) => {
			toastError(result.result.error.message, toastStore);
		},
		onSubmit: (result) => {
			toastSuccess('Saved', toastStore);
		}
	});
</script>

<SuperDebug data={$form} />

<Steps {personality} session={data.session} />

<br />

<form method="POST" use:enhance>

	


	<div class="flex justify-evenly items-center">
		<div>
			<SuperTextInput 
				session={data.session} 
				isSessionOnly={true}
				formAttrName="first_name"
				form={form}
				constraints={constraints}
				errors={errors}
				placeholder="(optional)"
				autocomplete="given-name"
			>
				<div slot="head">
					<h1>First Name</h1>
				</div>
			</SuperTextInput>
		</div>
		<div>
			<SuperTextInput 
				session={data.session} 
				isSessionOnly={true}
				formAttrName="last_name"
				form={form}
				constraints={constraints}
				errors={errors}
				placeholder="(optional)"
				autocomplete="family-name"
			>
				<div slot="head">
					<h1>Last Name</h1>
				</div>
			</SuperTextInput>
		</div>
	</div>


	<SuperTextInput 
		session={data.session} 
		isSessionOnly={true}
		formAttrName="use_case"
		form={form}
		constraints={constraints}
		errors={errors}
		placeholder="e.g. Blog about food"
	>
		<div slot="head">
			<h1>Use Case</h1>
			<small>What is your usecase and what level of sophistication are you expecting. e.g. Blog about food,
				Student grade 12, Marketing, better SEO</small>
		</div>
	</SuperTextInput>


	<br />

	

	<SuperTextarea 
		session={data.session} 
		isSessionOnly={true}
		formAttrName="writing_style"
		form={form}
		constraints={constraints}
		errors={errors}
	>
		<div slot="head">
			<h1>Writing Style</h1>
			<small>Write a short paragraph. The purpose of this is for the AI to understand and follow your
		writing style.</small>
		</div>
	</SuperTextarea>
	

	<button type="submit" class="btn variant-filled"> Save </button>
</form>
