<script lang="ts">
	import Steps from '$lib/comp/steps/Steps.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { deleteUserSchema } from '$lib/utils/schema';
	import { toastError } from '$lib/utils/toastHelper.js';
	import { deletePromptConst } from '$lib/utils/config';
	import LoadingButton from '$lib/comp/tools/LoadingButton.svelte';
	import SuperTextInput from '$lib/comp/superForms/SuperTextInput.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore();

	export let data;

	const { form, errors, constraints, enhance } = superForm(data.form, {
		validators: deleteUserSchema,
		onError: (result) => {
			toastError(result.result.error.message, toastStore);
		},
	});
</script>

<SuperDebug data={$form} />

<Steps needsPersonality={false} session={data.session} />

<h1>Settings</h1>

<LoadingButton url="/auth/signout" color="variant-filled-error" text="Sign Out" />

<a href="/auth/resetPassword/update" class="btn variant-filled-warning"> Reset Password </a>

<div class="card m-auto mt-16 max-w-md p-8">
	<h1>Delete Account</h1>

	<form method="POST" class="mt-8 space-y-8" use:enhance >
		
		<SuperTextInput 
			session={data.session} 
			formAttrName="deletePrompt"
			form={form}
			constraints={constraints}
			errors={errors}
			autocomplete="off"
			isSessionOnly={true}
		>
			<div slot="head">

				<h1>
					Type this text in the field:
					<br />
					<b>{deletePromptConst}</b>
				</h1>
			</div>
		</SuperTextInput>
			

		<button class="btn variant-filled" type="submit">Submit</button>
	</form>
</div>
