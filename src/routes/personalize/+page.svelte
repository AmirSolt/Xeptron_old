<script lang="ts">
    import PersonalizeCompletion from '$lib/comp/personalization/PersonalizeCompletion.svelte';


    export let data;
    const {personality} = data;

</script>


<form method="POST" action="?/saveSample">

    <PersonalizeCompletion {personality} />


    <br>
	<label>
        <label class="label">
            <h1>
                Use Case
            </h1>
            <small>
                What is your usecase and what level of sophistication are you expecting.
                e.g. Blog about food, Student grade 12, Marketing, better SEO
            </small>
            <input class="input" type="text" placeholder="e.g. Blog about food" name="level" value={personality.level??""} required/>
        </label>
	</label>
    <br>


    <br>
	<label>
        <label class="label">
            <h1>
                Writting Style
            </h1>
            <small>
                Write a short paragraph.
                The purpose of this is for the AI to understand and follow your writting style.
            </small>
            <textarea class="textarea" rows="6" placeholder="Write a paragraph about your favourite movie" name="sampleText" value={personality.sampleText??""} required/>
        </label>
	</label>
    <br>
    
    <button type="submit" class="btn variant-filled">
        Submit
    </button>

</form>
