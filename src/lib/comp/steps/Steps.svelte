<script lang="ts">
	import type { Session } from '@supabase/supabase-js';
	import { AlertTriangle } from 'lucide-svelte';
	export let profile: Profile | null;
	export let session: Session | null;
	export let needsPersonality: boolean = true;
</script>

<div class="space-y-4">
	{#if session?.user == null}
		<div>
			<aside class="alert variant-filled-primary">
				<AlertTriangle  size="50" />

				<div class="alert-message" data-toc-ignore>
					<h2  data-toc-ignore>Sign up and Get $20 in credit</h2>
					<span> Only registered users can interact with the tools.</span>
				</div>
				<div class="alert-actions">
					<a href="/auth/signup" class="btn variant-filled-warning">Sign up</a>
				</div>
			</aside>

		</div>
	{/if}

	{#if needsPersonality && profile != null}
		{#if Object.values(profile.personality).includes(null)}
			<div>
				<aside class="alert variant-ghost-warning">
                    <AlertTriangle  size="50" />
					<div class="alert-message" data-toc-ignore>
						<h2 class="h3" data-toc-ignore>Personalization is incomplete</h2>
						<p>Please, complete personalization questionnaire, for best results.</p>
					</div>
					<div class="alert-actions">
						<a href="/profile/personalize" class="btn variant-filled-error">Personalize</a>
					</div>
				</aside>
			</div>
		{:else}
			<p>✅ Personalization has been completed</p>
		{/if}
	{/if}
</div>
