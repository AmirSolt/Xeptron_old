<script lang="ts">
	import { page } from '$app/stores';
	import type { Session } from '@supabase/supabase-js';
	import { AlertTriangle } from 'lucide-svelte';
	export let profile: Profile | null;
	export let session: Session | null;
</script>



{#if session?.user == null}

<div class="space-y-4">
	{#if session?.user == null}
		<div>
			<aside class="alert variant-filled-primary">
				<AlertTriangle  size="50" />

				<div class="alert-message" data-toc-ignore>
					<h2  data-toc-ignore>Sign up and Get 50 Free Credits</h2>
					<span> Only registered users can use the tools.</span>
				</div>
				<div class="alert-actions">
					<a href="/auth/signup" class="btn variant-filled-warning">Sign up</a>
				</div>
			</aside>

		</div>
	{/if}
</div>


{/if}