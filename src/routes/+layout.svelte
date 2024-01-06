<script lang="ts">
	import './../global.css';
	import Navbar from '@components/Navbar.svelte';
	import { page } from '$app/stores';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import Transition from '@lib/utils/transition/Transition.svelte';
	import type { PageData } from './$types';
	import { base } from '$app/paths';
	import type { Vessel } from '../types/types';

	let indexVelles = writable(0);
	let selectedVessel = writable({ name: 'defaultValue' });

	setContext('indexVelles', indexVelles);
	setContext('selectedVessel', selectedVessel);

	export let data: PageData;
</script>

<Transition key={data.url}>
	{#if $page.url.pathname !== `${base}/`}
		<Navbar />
	{/if}
	<slot />
</Transition>
