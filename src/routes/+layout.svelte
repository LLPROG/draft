<script lang="ts">
	import Provider from '@components/Provider.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import './../global.css';

	let indexVelles = writable(0);
	let selectedVessel = writable({ name: 'defaultValue' });

	setContext('indexVelles', indexVelles);
	setContext('selectedVessel', selectedVessel);
</script>

<Provider>
	<slot />
</Provider>
