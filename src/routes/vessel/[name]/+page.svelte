<script>
	import VesselForm from '@components/VesselForm.svelte';
	import { page } from '$app/stores';
	import { VesselsStorage } from '../../../store/store';
	import { browser } from '$app/environment';
	import MyFleet from '@components/MyFleet.svelte';

	let vesselName = $page.url.pathname.split('/')[2];
	let vessel = $VesselsStorage.find((v) => v.name === vesselName);
</script>

<div class="w-full h-fit bg-blackPrimary">
	{#if browser && $page}
		<VesselForm bind:vesselName bind:vessel redirect="/home" disabled={true} />
		<MyFleet />
	{:else}
		<p>Loading...</p>
	{/if}
</div>
