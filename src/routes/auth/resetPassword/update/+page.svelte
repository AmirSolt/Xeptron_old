<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { resetPassSchema } from '$lib/utils/schema';
	import { toastError } from '$lib/utils/toastHelper.js';
	import SuperPassword from '$lib/comp/superForms/SuperPassword.svelte';
	import SuperTextInput from '$lib/comp/superForms/SuperTextInput.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore();

	export let data;
	const { form, errors, constraints, enhance, message } = superForm(data.form, {
		validators: resetPassSchema,
		onError: (result) => {
			toastError(result.result.error.message, toastStore);
		},
		taintedMessage: null
	});
</script>

<SuperDebug data={$form} />

<div class="card m-auto mt-16 max-w-md p-8">
	<h1>Sign in</h1>

	<form method="POST" class="mt-8 space-y-8" use:enhance>
		<SuperPassword
			session={data.session}
			formAttrName="newPassword"
			{form}
			{constraints}
			{errors}
			autocomplete="new-password"
		>
			<div slot="head">
				<span>New Password</span>
			</div>
		</SuperPassword>
		<SuperPassword
			session={data.session}
			formAttrName="confirmPassword"
			{form}
			{constraints}
			{errors}
			autocomplete="new-password"
		>
			<div slot="head">
				<span>Confirm Password</span>
			</div>
		</SuperPassword>



		<button class="btn variant-filled" type="submit">Submit</button>
	</form>
</div>
