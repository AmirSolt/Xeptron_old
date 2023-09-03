<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
    import { signupSchema } from '$lib/utils/schema'
    import {toastError} from '$lib/utils/toast'

	export let data

	const { form, errors, constraints, enhance, message } = superForm(data.form, {
		validators:signupSchema,
		onError: (result)=>{toastError(result.result.error.message, false)},
		taintedMessage:null
	})
</script>


<SuperDebug data={$form}/>

<div class="card m-auto mt-16 max-w-md p-8">
	<h1>Sign up</h1>

	<form method="POST" class="mt-8 space-y-8" use:enhance>

        <label class="label" for="name">
			<span class="block">Name</span>
			<input
				class="input"
				type="text"
				name="name"
                placeholder="(optional)"
				id="name"
				class:input-error={$errors.name}
				data-invalid={$errors.name}
				bind:value={$form.name}
				{...$constraints.name}
			/>
		</label>
		{#if $errors.name}
			<span class="text-red-400">{$errors.name}</span>
        {:else}
            <span></span>
		{/if}



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

		<label class="label" for="password">
			<span class="block">Password</span>
			<input
				class="input"
				type="password"
				name="password"
				id="password"
				class:input-error={$errors.password}
				data-invalid={$errors.password}
				bind:value={$form.password}
				{...$constraints.password}
			/>
		</label>
		{#if $errors.password}
			<span class="text-red-400">{$errors.password}</span>
        {:else}
            <span></span>
		{/if}

		<div class="flex justify-between items-center">

			<button class="btn variant-filled" type="submit">Sign up</button>
	
			<p class="text-center">
				Have an account?
				<a href="/auth/signin" class="underline ">Sign in</a>
			</p>
		</div>
	</form>
</div>