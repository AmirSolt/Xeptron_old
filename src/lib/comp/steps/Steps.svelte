
<script lang="ts">

    // user
    // get $20
    export let personality:Personality;

    


</script>


{#if personality.sampleText==null || personality.useCase==null}
    <div>
        <aside class="alert variant-ghost-error">
            <i class="fa-solid fa-triangle-exclamation text-4xl" />
            <div class="alert-message" data-toc-ignore>
                <h2 class="h3" data-toc-ignore>Warning</h2>
                <h3>Personalization is incomplete</h3>
                <p>Please, complete personalization questions, for best results.</p>
            </div>
            <div class="alert-actions">
                <a href="/profile/personalize" class="btn variant-filled">Go to Sample</a>
            </div>
        </aside>
    </div>

{:else}
    <p>✅ Personalization has been completed</p>
{/if}



