<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import {User, PenLine, PersonStanding, Search, UserSquare, Wallet, Settings} from 'lucide-svelte'

	import { Toast, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore();



	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { userInfo } from 'os';
	export let data;
	let { supabaseAuthClient, session } = data;
	$: ({ supabaseAuthClient, session } = data);
	onMount(() => {
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
	<title>Xeptron</title>
	<link rel="icon" href="/logo.png" />
</svelte:head>
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar >
			<svelte:fragment slot="lead">
				<a href="/">
					<p class="text-3xl md:text-4xl font-bold"> Xeptron</p>
				</a>

			</svelte:fragment>
			
			<svelte:fragment  slot="trail">
				<a class="btn btn-sm md:btn-md variant-ringed" href="/payment/pricing">
					 Pricing 
				</a>
				

				{#if session?.user}
					<a class="btn-icon variant-ringed" href="/profile/settings"> <User/> </a>
				{:else}
					<a class="btn btn-sm md:btn-md variant-filled" href="/auth/signin"> Log in </a>
					<a class="btn btn-sm md:btn-md variant-filled-primary" href="/auth/signup"> Sign up </a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="pageHeader">
		
		<div class="flex justify-end items-start p-2">
				<LightSwitch />
		</div>
	</svelte:fragment>



	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor href="/profile/generate" selected={$page.url.pathname === '/profile/generate'}>
				<svelte:fragment slot="lead"><PenLine/></svelte:fragment>
				<span>Generate</span>
			</AppRailAnchor>
			<AppRailAnchor href="/profile/humanize" selected={$page.url.pathname === '/profile/humanize'}>
				<svelte:fragment slot="lead"><PersonStanding/></svelte:fragment>
				<span>Humanize</span>
			</AppRailAnchor>
			<AppRailAnchor href="/profile/detect" selected={$page.url.pathname === '/profile/detect'}>
				<svelte:fragment slot="lead"><Search/></svelte:fragment>
				<span>Detect AI</span>
			</AppRailAnchor>
			<AppRailAnchor
				href="/profile/personalize"
				selected={$page.url.pathname === '/profile/personalize'}
			>
				<svelte:fragment slot="lead"><UserSquare/></svelte:fragment>
				<span>Personalize</span>
			</AppRailAnchor>
			<AppRailAnchor href="/profile/wallet" selected={$page.url.pathname === '/profile/wallet'}>
				<svelte:fragment slot="lead"><Wallet/></svelte:fragment>
				<span>Wallet</span>
			</AppRailAnchor>
			<AppRailAnchor href="/profile/settings" selected={$page.url.pathname === '/profile/settings'}>
				<svelte:fragment slot="lead"><Settings/></svelte:fragment>
				<span>Settings</span>
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>

	<Toast position="t" />
	<div class="flex justify-center w-full p-4 pt-2">
			<slot />
	</div>
</AppShell>
