<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Navbar from '@components/Navbar.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import './../global.css';
	import Provider from '@components/Provider.svelte';

	let indexVelles = writable(0);
	let selectedVessel = writable({ name: 'defaultValue' });

	setContext('indexVelles', indexVelles);
	setContext('selectedVessel', selectedVessel);
</script>

<Provider>
	{#if $page.url.pathname !== `${base}/`}
		<Navbar />
	{/if}
	<slot />
</Provider>
