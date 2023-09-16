<script>
	import VesselForm from '@components/VesselForm.svelte';
	import { page } from '$app/stores';
	import { VesselsStorage } from '../../../store/store';
	import { browser } from '$app/environment';

	let vesselName = $page.url.pathname.split('/')[2];
	let vessel = $VesselsStorage.find((v) => v.name === vesselName);
</script>

<div>
	{#if browser && $page}
		<VesselForm bind:vesselName bind:vessel redirect="/home" disabled={true} />
	{:else}
		<p>Loading...</p>
	{/if}
</div>
