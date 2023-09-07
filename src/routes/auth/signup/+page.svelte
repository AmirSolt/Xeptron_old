<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
    import { signupSchema } from '$lib/utils/schema'
    import {toastError} from '$lib/utils/toastHelper.js'
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore()

	export let data
	const { form, errors, constraints, enhance } = superForm(data.form, {
		validators:signupSchema,
		onError: (result)=>{toastError(result.result.error.message, toastStore)},
		taintedMessage:null
	})


</script>




<SuperDebug data={$form}/>

<div class="card m-auto mt-16 max-w-md p-8">
	<h1>Sign up</h1>

	<form method="POST" class="mt-8 space-y-8" use:enhance>


		<div class="flex justify-evenly items-center">
			<div>
				<label class="label" for="first_name">
					<span class="block">First Name</span>
					<input
						class="input"
						type="text"
						name="first_name"
						placeholder="(optional)"
						id="first_name"
						class:input-error={$errors.first_name}
						data-invalid={$errors.first_name}
						bind:value={$form.first_name}
						{...$constraints.first_name}
						autocomplete="given-name"
					/>
				</label>
				{#if $errors.first_name}
					<span class="text-red-400">{$errors.first_name}</span>
				{:else}
					<span></span>
				{/if}
			</div>
			<div>
				<label class="label" for="last_name">
					<span class="block">Last Name</span>
					<input
						class="input"
						type="text"
						name="last_name"
						placeholder="(optional)"
						id="last_name"
						class:input-error={$errors.last_name}
						data-invalid={$errors.last_name}
						bind:value={$form.last_name}
						{...$constraints.last_name}
						autocomplete="family-name"
					/>
				</label>
				{#if $errors.last_name}
					<span class="text-red-400">{$errors.last_name}</span>
				{:else}
					<span></span>
				{/if}
			</div>
		</div>
	
        




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
				autocomplete="new-password" 
			/>
		</label>
		{#if $errors.password}
			<span class="text-red-400">{$errors.password}</span>
        {:else}
            <span></span>
		{/if}
		<br>

		<button class="btn variant-filled" type="submit">Sign up</button>	
			
	</form>
</div>

<br>

<p class="text-center">
	Have an account?
	<a href="/auth/signin" class="underline ">Sign in</a>
</p>