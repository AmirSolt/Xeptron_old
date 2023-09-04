<script lang="ts">
    import Steps from '$lib/comp/steps/Steps.svelte';
    import { superForm } from 'sveltekit-superforms/client'
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
    import { personalizationSchema } from '$lib/utils/schema'
    import {toastError} from '$lib/utils/toast'


    export let data;
    const {personality} = data;


    const { form, errors, constraints, enhance, message  } = superForm(data.form, {
        taintedMessage:"Make sure to save your progress!!!",
		validators:personalizationSchema,
		onError: (result)=>{toastError(result.result.error.message, false)}
	})


</script>

<SuperDebug data={$form}/>

<Steps {personality} session={data.session} />

<br>


<form method="POST" use:enhance>

    <label class="label" for="useCase">
        <h1>
            Use Case
        </h1>
        <small>
            What is your usecase and what level of sophistication are you expecting.
            e.g. Blog about food, Student grade 12, Marketing, better SEO
        </small>
        <input
            class="input"
            type="text"
            name="useCase"
            placeholder="e.g. Blog about food"
            id="useCase"
            class:input-error={$errors.useCase}
            data-invalid={$errors.useCase}
            bind:value={$form.useCase}
            {...$constraints.useCase}
            autocomplete="off"
        />
    </label>
    {#if $errors.useCase}
        <span class="text-red-400">{$errors.useCase}</span>
    {:else}
        <span></span>
    {/if}

    <br>


    <label class="label" for="writingStyle">
        <h1>
            writing Style
        </h1>
        <small>
            Write a short paragraph.
            The purpose of this is for the AI to understand and follow your writing style.
        </small>
        <textarea
            class="textarea"
            rows="6" 
            name="writingStyle"
            placeholder="e.g. Write a paragraph about your favourite movie"
            id="writingStyle"
            class:input-error={$errors.writingStyle}
            data-invalid={$errors.writingStyle}
            bind:value={$form.writingStyle}
            {...$constraints.writingStyle}
            autocomplete="off"
        />


    </label>
    {#if $errors.writingStyle}
        <span class="text-red-400">{$errors.writingStyle}</span>
    {:else}
        <span></span>
    {/if}


    
    <button type="submit" class="btn variant-filled">
        Save
    </button>

</form>
