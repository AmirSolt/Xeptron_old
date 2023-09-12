
<script lang="ts">
	import type { Session } from "@supabase/supabase-js";

    export let profile:Profile|null
    export let session:Session|null
    export let needsPersonality:boolean=true


</script>

<div>

    {#if session?.user==null}
        <div>
            <aside class="alert variant-filled-primary">
                <i class="fa-solid fa-triangle-exclamation text-4xl" />
                <div class="alert-message" data-toc-ignore>
                    <h2 class="h3" data-toc-ignore>Sign up and Get $20 in credit</h2>
                    <p>Only registered users can interact with the tools.</p>
                </div>
                <div class="alert-actions">
                    <a href="/auth/signup" class="btn variant-filled">Sign up</a>
                </div>
            </aside>
        </div>
    {/if}
    
    
    <br>
    

    {#if needsPersonality && profile!=null}
        {#if Object.values(profile.personality).includes(null)}
            <div>
                <aside class="alert variant-ghost-warning">
                    <i class="fa-solid fa-triangle-exclamation text-4xl" />
                    <div class="alert-message" data-toc-ignore>
                        <h2 class="h3" data-toc-ignore>Personalization is incomplete</h2>
                        <p>Please, complete personalization questions, for best results.</p>
                    </div>
                    <div class="alert-actions">
                        <a href="/profile/personalize" class="btn variant-filled">Personalize</a>
                    </div>
                </aside>
            </div>
        
        {:else}
            <p>✅ Personalization has been completed</p>
        {/if}
    {/if}
    

</div>    

