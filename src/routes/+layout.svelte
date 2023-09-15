<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import {User, PenLine, PersonStanding, Search, UserSquare, Wallet, Settings} from 'lucide-svelte'

	import { Toast, initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
	import { getToastStore } from '@skeletonlabs/skeleton';
	let toastStore = getToastStore();

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
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
	<svelte:fragment  slot="header">
		<AppBar gap="gap-1" padding="p-3" slotTrail="space-x-2">
			<svelte:fragment slot="lead">
				<a href="/">
					<p class="text-3xl md:text-4xl font-bold"> Xeptron</p>
				</a>

			</svelte:fragment>
			
			<svelte:fragment  slot="trail" >
				<div class="flex-none flex items-center space-x-2">

					<a class="btn btn-sm md:btn-md variant-ringed" href="/payment/pricing">
						 Pricing 
					</a>
					
	
					{#if session?.user}
						<a class="btn-icon variant-ringed" href="/profile/settings"> <User/> </a>
					{:else}
						<a class="btn btn-sm md:btn-md variant-filled" href="/auth/signin"> Log in </a>
						<a class="btn btn-sm md:btn-md variant-filled-primary" href="/auth/signup"> Sign up </a>
					{/if}
				</div>
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


	<div class="px-4 md:px-24 pt-52 md:pt-96 pb-8">
		<hr>
	</div>

	<svelte:fragment slot="pageFooter">
		<div class="flex flex-wrap justify-evenly items-center px-4 md:px-24 py-8 gap-4">

			<div class="flex flex-col justify-center items-start">
				<img src="/logo.png" alt="Logo" width="80" height="80">
				<p class="text-xl font-bold"> Xeptron</p>
				<p>
					Our goal is to enhance human abilities using AI
				</p>
				<p>
					support@xeptron.com
				</p>
			</div>
			<div class="flex flex-wrap justify-center items-center gap-8">
				<div class="flex flex-col justify-center items-start">
					<h3>Features</h3>
					<ul>
						<li>
							<a href="/profile/personalize">
								Personalization
							</a>
						</li>
						<li>
							<a href="/profile/generate">
								Generate
							</a>
						</li>
						<li>
							<a href="/profile/humanize">
								Humanize
							</a>
						</li>
						<li>
							<a href="/profile/detect">
								Detect
							</a>
						</li>
					</ul>
				</div>
				<div class="flex flex-col justify-center items-start">
					<h3>Website</h3>
					<ul>
						<li>
							<a href="/payment/pricing">
								Pricing
							</a>
						</li>
						<li>
							<a href="/auth/signup">
								Sign up
							</a>
						</li>
						<li>
							<a href="/auth/signin">
								Sign in
							</a>
						</li>
						<li>
							<a href="/auth/resetPassword/init">
								Reset Passowrd
							</a>
						</li>
					</ul>
				</div>
			
			</div>

		</div>
	</svelte:fragment>


</AppShell>
