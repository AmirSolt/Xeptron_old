<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
    import { signupSchema } from '$lib/utils/schema'
    import {toastError} from '$lib/utils/toastHelper.js'
	import SuperTextInput from '$lib/comp/superForms/SuperTextInput.svelte';
	import SuperEmail from '$lib/comp/superForms/SuperEmail.svelte';
	import SuperPassword from '$lib/comp/superForms/SuperPassword.svelte';
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

<div class="card m-auto mt-16  p-8">
	<h1>Sign up</h1>

	<form method="POST" class="mt-8 space-y-8" use:enhance>


		<div class="flex flex-col justify-center items-start gap-4 w-full">
			<div>
				<SuperTextInput
					session={data.session} 
					formAttrName="first_name"
					form={form}
					constraints={constraints}
					errors={errors}
					placeholder="(optional)"
					autocomplete="given-name"
				>
					<div slot="head">
						<h1>First Name</h1>
					</div>
				</SuperTextInput>
			</div>
			<div>
				<SuperTextInput 
					session={data.session} 
					formAttrName="last_name"
					form={form}
					constraints={constraints}
					errors={errors}
					placeholder="(optional)"
					autocomplete="family-name"
				>
					<div slot="head">
						<h1>Last Name</h1>
					</div>
				</SuperTextInput>
			</div>
		</div>
	
        


		<SuperEmail 
			session={data.session} 
			formAttrName="email"
			form={form}
			constraints={constraints}
			errors={errors}
			autocomplete="email"
		>
			<div slot="head">
				<span>Email</span>
			</div>
		</SuperEmail>
		<SuperPassword 
			session={data.session} 
			formAttrName="password"
			form={form}
			constraints={constraints}
			errors={errors}
			autocomplete="new-password"
		>
			<div slot="head">
				<span>Password</span>
			</div>
		</SuperPassword>



		<button class="btn variant-filled" type="submit">Sign up</button>	
			
	</form>
</div>

<br>

<p class="text-center">
	Have an account?
	<a href="/auth/signin" class="underline ">Sign in</a>
</p>