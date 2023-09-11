<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
    import { initResetPassSchema } from '$lib/utils/schema'
    import {toastError} from '$lib/utils/toastHelper.js'
	import { getToastStore } from '@skeletonlabs/skeleton';
	import SuperEmail from '$lib/comp/superForms/SuperEmail.svelte';
	let toastStore = getToastStore()

	export let data
	const { form, errors, constraints, enhance, message } = superForm(data.form, {
		validators:initResetPassSchema,
		onError: (result)=>{toastError(result.result.error.message, toastStore)},
		taintedMessage:null
	})
</script>


<SuperDebug data={$form}/>

<div class="card m-auto mt-16  p-8">
	<h1>Reset Password</h1>

	<form method="POST" class="mt-8 space-y-8" use:enhance>


		<SuperEmail
			session={data.session}
			formAttrName="email"
			{form}
			{constraints}
			{errors}
			autocomplete="email"
		>
			<div slot="head">
				<span>Email</span>
			</div>
		</SuperEmail>
	

        <button class="btn variant-filled" type="submit">Submit</button>


	
			
	</form>
</div>