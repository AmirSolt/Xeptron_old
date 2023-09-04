<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
    import { resetPassSchema } from '$lib/utils/schema'
    import {toastError} from '$lib/utils/toast'


	export let data
	const { form, errors, constraints, enhance, message } = superForm(data.form, {
		validators:resetPassSchema,
		onError: (result)=>{toastError(result.result.error.message, false)},
		taintedMessage:null
	})
</script>


<SuperDebug data={$form}/>

<div class="card m-auto mt-16 max-w-md p-8">
	<h1>Sign in</h1>

	<form method="POST" class="mt-8 space-y-8" use:enhance>


		<label class="label" for="newPassword">
			<span class="block">New Password</span>
			<input
				class="input"
				type="password"
				name="newPassword"
				id="newPassword"
				class:input-error={$errors.newPassword}
				data-invalid={$errors.newPassword}
				bind:value={$form.newPassword}
				{...$constraints.newPassword}
			/>
		</label>
		{#if $errors.newPassword}
			<span class="text-red-400">{$errors.newPassword}</span>
        {:else}
            <span></span>
		{/if}


		<label class="label" for="confirmPassword">
			<span class="block">Confirm Password</span>
			<input
				class="input"
				type="password"
				name="confirmPassword"
				id="confirmPassword"
				class:input-error={$errors.confirmPassword}
				data-invalid={$errors.confirmPassword}
				bind:value={$form.confirmPassword}
				{...$constraints.confirmPassword}
			/>
		</label>
		{#if $errors.confirmPassword}
			<span class="text-red-400">{$errors.confirmPassword}</span>
        {:else}
            <span></span>
		{/if}

		<button class="btn variant-filled" type="submit">Submit</button>

	</form>
</div>