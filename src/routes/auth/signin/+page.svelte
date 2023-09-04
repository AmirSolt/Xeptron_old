<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
    import { signinSchema } from '$lib/utils/schema'
    import {toastError} from '$lib/utils/toastHelper.js'
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore()


	export let data
	const { form, errors, constraints, enhance } = superForm(data.form, {
		validators:signinSchema,
		onError: (result)=>{toastError(result.result.error.message, toastStore)},
		taintedMessage:null
	})
</script>


<SuperDebug data={$form}/>

<div class="card m-auto mt-16 max-w-md p-8">
	<h1>Sign in</h1>

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
				autocomplete="email"
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
				autocomplete="current-password"
			/>
		</label>
		{#if $errors.password}
			<span class="text-red-400">{$errors.password}</span>
        {:else}
            <span></span>
		{/if}
		<br>
		<button class="btn variant-filled" type="submit">Sign in</button>

	</form>
</div>

<br>

<div class="flex flex-col justify-center items-center">
	<p class="text-center">
		Forgot password?
		<a href="/auth/resetPassword/init" class="underline ">Reset Password</a>
	</p>

	<p class="text-center">
		Or
	</p>

	<p class="text-center">
		Don't have an account?
		<a href="/auth/signup" class="underline ">Sign up</a>
	</p>
</div>