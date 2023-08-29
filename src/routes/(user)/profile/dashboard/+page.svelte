<script lang="ts">
</script>

<form method="POST" action="?/test">

    <div>
        <aside class="alert variant-ghost-warning">
            <i class="fa-solid fa-triangle-exclamation text-4xl" />
            <div class="alert-message" data-toc-ignore>
                <h2 class="h3" data-toc-ignore>Warning</h2>
                <h3>Sample Text is incomplete</h3>
                <p>Please, complete Sample Text, AI needs to know your writting style for best results.</p>
            </div>
            <div class="alert-actions">
                <a href="/profile/sample" class="btn variant-filled">Go to Sample</a>
            </div>
        </aside>
        <input type="text" class="opacity-0 w-50 h-0" name="" value="" required>
    </div>

    <!-- <input type="text" class="opacity-0 w-50 h-0" name="" value="{sampleText}" required> -->

    <br>
	<label>
        <label class="label">
            <h1>
                Problem
            </h1>
            <small>
                Explain what you want to be generated
            </small>
            <textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." required />
        </label>
	</label>
    <br>
    <button type="submit" class="btn variant-filled">
        Submit
    </button>

</form>


<br>
<br>

<label class="label">
    <h1>
        Answer
    </h1>
    <textarea class="textarea" rows="4" placeholder="" disabled/>
</label>