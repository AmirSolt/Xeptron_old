<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
    import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { Toast, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();


	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	export let data
	let { supabaseAuthClient, session } = data
	$: ({ supabaseAuthClient, session } = data)
	onMount(() => {
		const {
		data: { subscription },
		} = supabaseAuthClient.auth.onAuthStateChange((event, _session) => {
		if (_session?.expires_at !== session?.expires_at) {
			invalidate('supabase:auth')
		}
		})

		return () => subscription.unsubscribe()
	});


	// Highlight JS
	// import hljs from 'highlight.js';
	// import 'highlight.js/styles/github-dark.css';
	// import { storeHighlightJs } from '@skeletonlabs/skeleton';
	// storeHighlightJs.set(hljs);

	// // Floating UI for Popups
	// import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	// import { storePopup } from '@skeletonlabs/skeleton';
	// storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });


</script>



<svelte:head>
	<title>Enterprise</title>
	<link rel="icon" href="https://fav.farm/🔥" />
</svelte:head>



<!-- App Shell -->
<AppShell>

	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<strong class="text-xl uppercase">
						Skeleton
					</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />

				{#if session?.user}
					<a
						class="btn btn-sm variant-ghost-surface"
						href="/profile/dashboard"
					>
						Profile
					</a>
				{:else}
					<a
						class="btn btn-sm variant-filled"
						href="/auth/signin"
					>
						Log in
					</a>
					<a
						class="btn btn-sm variant-filled-primary"
						href="/auth/signup"
					>
						Sign up
					</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Generate</span>
			</AppRailAnchor>
			<AppRailAnchor href="/humanize" selected={$page.url.pathname === '/humanize'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Humanize</span>
			</AppRailAnchor>
			<AppRailAnchor href="/detect" selected={$page.url.pathname === '/detect'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Detect AI</span>
			</AppRailAnchor>
			<AppRailAnchor href="/personalize" selected={$page.url.pathname === '/personalize'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Personalize</span>
			</AppRailAnchor>
			<AppRailAnchor href="/wallet" selected={$page.url.pathname === '/wallet'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Wallet</span>
			</AppRailAnchor>
			<AppRailAnchor href="/settings" selected={$page.url.pathname === '/settings'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Settings</span>
			</AppRailAnchor>
		
		
		</AppRail>
	</svelte:fragment>

	<Toast position='t' background='variant-filled-error' />
    <div class="p-5">

        <slot/>
    </div>
	


</AppShell>
