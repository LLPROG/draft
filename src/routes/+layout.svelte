<script>
	import './../global.css';
	import Navbar from '@components/Navbar.svelte';
	import { page } from '$app/stores';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let indexVelles = writable(0);
	let selectedVessel = writable({ name: 'defaultValue' });
	setContext('indexVelles', indexVelles);
	setContext('selectedVessel', selectedVessel);
</script>

<div class="bg-blackPrimary h-[100vh]">
	{#if $page.url.pathname !== '/'}
		<Navbar />
	{/if}
	<slot />
</div>
