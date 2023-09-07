<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { Toast, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore();


	import { syncUserData } from '$lib/funcs/userData/index';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	export let data;
	let { supabaseAuthClient, session } = data;
	$: ({ supabaseAuthClient, session } = data);
	onMount(() => {
		syncUserData(true, toastStore)
		const {
			data: { subscription }
		} = supabaseAuthClient.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
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
					<strong class="text-xl uppercase"> Skeleton </strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />

				{#if session?.user}
					<a class="btn btn-sm variant-ghost-surface" href="/profile/settings"> Profile </a>
				{:else}
					<a class="btn btn-sm variant-filled" href="/auth/signin"> Log in </a>
					<a class="btn btn-sm variant-filled-primary" href="/auth/signup"> Sign up </a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Home</span>
			</AppRailAnchor>
			<AppRailAnchor href="/profile/generate" selected={$page.url.pathname === '/profile/generate'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Generate</span>
			</AppRailAnchor>
			<AppRailAnchor href="/profile/humanize" selected={$page.url.pathname === '/profile/humanize'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Humanize</span>
			</AppRailAnchor>
			<AppRailAnchor href="/profile/detect" selected={$page.url.pathname === '/profile/detect'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Detect AI</span>
			</AppRailAnchor>
			<AppRailAnchor
				href="/profile/personalize"
				selected={$page.url.pathname === '/profile/personalize'}
			>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Personalize</span>
			</AppRailAnchor>
			<AppRailAnchor href="/profile/wallet" selected={$page.url.pathname === '/profile/wallet'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Wallet</span>
			</AppRailAnchor>
			<AppRailAnchor href="/profile/settings" selected={$page.url.pathname === '/profile/settings'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Settings</span>
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>

	<Toast position="t" />
	<div class="p-5">
		<slot />
	</div>
</AppShell>
