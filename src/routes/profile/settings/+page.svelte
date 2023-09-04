
<script lang="ts">
    import Steps from '$lib/comp/steps/Steps.svelte';
    import { superForm } from 'sveltekit-superforms/client'
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
    import { deleteUserSchema } from '$lib/utils/schema'
    import {toastError} from '$lib/utils/toastHelper.js'
    import {deletePromptConst} from '$lib/utils/config'
    import LoadingButton from '$lib/comp/tools/LoadingButton.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore()

    export let data;


	const { form, errors, constraints, enhance, message } = superForm(data.form, {
		validators:deleteUserSchema,
		onError: (result)=>{toastError(result.result.error.message, toastStore)},
		taintedMessage:null
	})

</script>

<SuperDebug data={$form}/>


<Steps personality={null} session={data.session} />


<h1>
    Settings
</h1>

<LoadingButton url="/auth/signout" color="variant-filled-error" text="Sign Out"/>



<a 
	href="/auth/resetPassword/update"
	class="btn variant-filled-warning">
		Reset Password
</a>


<div class="card m-auto mt-16 max-w-md p-8">
	<h1>Delete Account</h1>

	<form method="POST" class="mt-8 space-y-8" use:enhance>
		<label class="label" for="deletePrompt">
			<span class="block">Type this text in the field: <br> <b>{deletePromptConst}</b></span>
			<input
				class="input"
				type="text"
				name="deletePrompt"
				id="deletePrompt"
				class:input-error={$errors.deletePrompt}
				data-invalid={$errors.deletePrompt}
				bind:value={$form.deletePrompt}
				{...$constraints.deletePrompt}
			/>
		</label>
		{#if $errors.deletePrompt}
			<span class="text-red-400">{$errors.deletePrompt}</span>
        {:else}
            <span></span>
		{/if}

        <button class="btn variant-filled" type="submit">Submit</button>
	</form>
</div>