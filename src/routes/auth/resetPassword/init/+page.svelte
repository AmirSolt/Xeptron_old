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
	<h1>Reset Password</h1>

	<form method="POST" class="mt-8 space-y-8" use:enhance>


		<label class="label" for="email">
			<span class="block">Email</span>
			<input
				class="input"
				type="email"
				name="email"
				id="email"
				class:input-error={$errors.email}
				data-invalid={$errors.email}
				bind:value={$form.email}
				{...$constraints.email}
			/>
		</label>
		{#if $errors.email}
			<span class="text-red-400">{$errors.email}</span>
        {:else}
            <span></span>
		{/if}

	

        <button class="btn variant-filled" type="submit">Submit</button>


	
			
	</form>
</div>