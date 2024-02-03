<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Navbar from '@components/Navbar.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import './../global.css';
	import Provider from '@components/Provider.svelte';
	import type { Vessel } from '../types/types';

	let indexVelles = writable(0);
	let selectedVessel = writable({ name: 'defaultValue' });
	let disabled = writable(false);

	setContext('disabled', disabled);
	setContext('indexVelles', indexVelles);
	setContext('selectedVessel', selectedVessel);
</script>

<Provider>
	{#if $page.url.pathname !== `${base}/`}
		<Navbar
			bind:disabled={$disabled}
			on:modify={() => {
				console.log('modify');
				$disabled = false;
			}}
			on:save={() => {
				console.log('save');
				$disabled = true;
			}}
		/>
	{/if}
	<slot />
</Provider>
