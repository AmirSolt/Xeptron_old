<script lang="ts">
    import NoGo from "$lib/comp/tools/NoGo.svelte";
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

	let {profile} = data
	$: ({ profile } = data);

	const { form, errors, constraints, enhance } = superForm(data.form, {
		validators: deleteUserSchema,
		onError: (result) => {
			toastError(result.result.error.message, toastStore);
		},
	});
</script>


{#if profile==null}

<NoGo />

{:else}


<div class="space-y-8">

	<Steps {profile} session={data.session} />
	
	
	<div class="card flex flex-col justify-center items-start gap-4 text-center">
		<h1>Settings</h1>

		<div class="flex flex-col justify-center items-start gap-4 text-center">
			<LoadingButton url="/auth/signout" color="variant-filled-error" text="Sign Out" />
			<a href="/auth/resetPassword/update" class="btn variant-filled-warning"> Reset Password </a>
		</div>	
	</div>
	
	
	<div class="card">
		<h1 >Delete Account</h1>
	
		<form method="POST" class="flex flex-col justify-center items-start gap-4 w-full" use:enhance >
			
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
					<b class="text-lg">{deletePromptConst}</b>
				</div>
			</SuperTextInput>
				
	
			<button class="btn variant-filled" type="submit">Submit</button>
		</form>
	</div>
</div>



{/if}