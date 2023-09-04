
<script lang="ts">
    import { ProgressRadial } from '@skeletonlabs/skeleton';
    import Steps from '$lib/comp/steps/Steps.svelte';
    import { superForm } from 'sveltekit-superforms/client'
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
    import { deleteUserSchema } from '$lib/utils/schema'
    import {toastError} from '$lib/utils/toast'
    import {deletePrompt} from '$lib/utils/config'

    export let data;

    let logoutLoading:boolean=false

	const { form, errors, constraints, enhance, message } = superForm(data.form, {
		validators:deleteUserSchema,
		onError: (result)=>{toastError(result.result.error.message, false)},
		taintedMessage:null
	})

</script>

<SuperDebug data={$form}/>


<Steps personality={null} session={data.session} />


<h1>
    Settings
</h1>


{#if !logoutLoading}
    <a 
        on:click={()=>logoutLoading=true}
        href="/auth/signout"
        class="btn btn-sm variant-filled-error">
            Sign out
            
    </a>
{:else}
<div class="btn btn-sm variant-filled-error">
    <ProgressRadial  width="w-6" stroke={100} />
</div>
{/if}





<div class="card m-auto mt-16 max-w-md p-8">
	<h1>Delete Account</h1>

	<form method="POST" class="mt-8 space-y-8" use:enhance>
		<label class="label" for="deletePrompt">
			<span class="block">Type this text in the field: <b>{deletePrompt}</b></span>
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