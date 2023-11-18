<script>
	import VesselForm from '@components/VesselForm.svelte';
	import { page } from '$app/stores';
	import { VesselsStorage } from '../../../store/store';
	import { browser } from '$app/environment';
	import Button from '@components/ui/Button.svelte';
	import { base } from '$app/paths';

	let vesselId = $page.params.id;
	let vessel = $VesselsStorage.find((v) => v.id === vesselId);
</script>

<div class="w-full h-fit bg-blackPrimary">
	{#if browser && $page}
		<VesselForm bind:vesselName={vessel.name} bind:vessel redirect="/home" disabled={true} />
		<Button
			isButton={false}
			href={`${base}/vessel/${vesselId}/survey`}
			classProp="flex w-full"
			message="Survey"
			chooseType="primary"
			icon="plus"
			size="lg"
		/>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
