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

	const {profile} = data

	const { form, errors, constraints, enhance } = superForm(data.form, {
		validators: deleteUserSchema,
		onError: (result) => {
			toastError(result.result.error.message, toastStore);
		},
	});
</script>

<SuperDebug data={$form} />

<Steps {profile} needsPersonality={false} session={data.session} />




<div class="card flex flex-col justify-center items-start gap-6 m-auto mt-16  p-8 text-center">
	<h1 class="text-3xl mb-4">Settings</h1>

	<LoadingButton url="/auth/signout" color="variant-filled-error" text="Sign Out" />

	<a href="/auth/resetPassword/update" class="btn variant-filled-warning"> Reset Password </a>

	
    
</div>




<div class="card m-auto mt-16  p-8">
	<h1 class="text-3xl">Delete Account</h1>

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
				<p>
					<b class="text-error-500 text-lg" >Warrning:</b> This action is not reversible.
				</p>
				<p>
					If you want to delete your account, type the bold text into the field.
				</p>
				<br />
				<b class="text-lg">{deletePromptConst}</b>
			</div>
		</SuperTextInput>
			

		<button class="btn variant-filled" type="submit">Submit</button>
	</form>
</div>
