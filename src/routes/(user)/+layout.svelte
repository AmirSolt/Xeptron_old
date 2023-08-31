<script lang="ts">
	import '../../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
    import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });


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

				<a
					class="btn btn-sm variant-ghost-surface"
					href="/profile/dashboard"
				>
					Profile
				</a>
				<!-- <a
					class="btn btn-sm variant-ghost-surface"
					href="/login"
				>
					Login
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/sign-up"
				>
					Sign up
				</a> -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor href="/profile/dashboard" selected={$page.url.pathname === '/profile/dashboard'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Dashboard</span>
			</AppRailAnchor>
			<AppRailAnchor href="/profile/personalize" selected={$page.url.pathname === '/profile/personalize'}>
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


    <div class="p-5">

        <slot/>
    </div>
	


</AppShell>
