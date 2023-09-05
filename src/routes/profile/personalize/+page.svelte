<script lang="ts">
    import Steps from '$lib/comp/steps/Steps.svelte';
    import { superForm } from 'sveltekit-superforms/client'
    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
    import { personalizationSchema } from '$lib/utils/schema'
    import {toastError, toastSuccess} from '$lib/utils/toastHelper.js'
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore()

    export let data;
    const {personality, session} = data;


    const { form, errors, constraints, enhance, message  } = superForm(data.form, {
        taintedMessage:"Make sure to save your progress!!!",
		validators:personalizationSchema,
		onError: (result)=>{toastError(result.result.error.message, toastStore)},
        onSubmit:(result)=>{toastSuccess("Saved", toastStore)},
	})


</script>

<SuperDebug data={$form}/>

<Steps {personality} session={data.session} />

<br>


<form method="POST" use:enhance>

    <label class="label" for="name">
        <h1>
            Name
        </h1>
        <small>
            Name is optional 
        </small>
        {#if session}
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
                autocomplete="off"
            />
        {:else}
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
                autocomplete="off"
                on:focus={()=>toastError("Please Sign in", toastStore)} 
                />
        {/if}

    </label>
    {#if $errors.name}
        <span class="text-red-400">{$errors.name}</span>
    {:else}
        <span></span>
    {/if}

    <label class="label" for="use_case">
        <h1>
            Use Case
        </h1>
        <small>
            What is your usecase and what level of sophistication are you expecting.
            e.g. Blog about food, Student grade 12, Marketing, better SEO
        </small>
        {#if session}
            <input
                class="input"
                type="text"
                name="use_case"
                placeholder="e.g. Blog about food"
                id="use_case"
                class:input-error={$errors.use_case}
                data-invalid={$errors.use_case}
                bind:value={$form.use_case}
                {...$constraints.use_case}
                autocomplete="off"
            />
        {:else}
            <input
                class="input"
                type="text"
                name="use_case"
                placeholder="e.g. Blog about food"
                id="use_case"
                class:input-error={$errors.use_case}
                data-invalid={$errors.use_case}
                bind:value={$form.use_case}
                {...$constraints.use_case}
                autocomplete="off"
                on:focus={()=>toastError("Please Sign in", toastStore)} 
                />
        {/if}

    </label>
    {#if $errors.use_case}
        <span class="text-red-400">{$errors.use_case}</span>
    {:else}
        <span></span>
    {/if}

    <br>


    <label class="label" for="writing_style">
        <h1>
            writing Style
        </h1>
        <small>
            Write a short paragraph.
            The purpose of this is for the AI to understand and follow your writing style.
        </small>
        {#if session}
            <textarea
                class="textarea"
                rows="6" 
                name="writing_style"
                placeholder="e.g. Write a paragraph about your favourite movie"
                id="writing_style"
                class:input-error={$errors.writing_style}
                data-invalid={$errors.writing_style}
                bind:value={$form.writing_style}
                {...$constraints.writing_style}
                autocomplete="off"
            />
        {:else}
            <textarea
            class="textarea"
            rows="6" 
            name="writing_style"
            placeholder="e.g. Write a paragraph about your favourite movie"
            id="writing_style"
            class:input-error={$errors.writing_style}
            data-invalid={$errors.writing_style}
            bind:value={$form.writing_style}
            {...$constraints.writing_style}
            autocomplete="off"
            on:focus={()=>toastError("Please Sign in", toastStore)} 
            />
        {/if}


    </label>
    {#if $errors.writing_style}
        <span class="text-red-400">{$errors.writing_style}</span>
    {:else}
        <span></span>
    {/if}


    <button type="submit" class="btn variant-filled">
        Save
    </button>

</form>
