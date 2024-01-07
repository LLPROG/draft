<script lang="ts">
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import VesselForm from '@components/VesselForm.svelte';
	import Button from '@components/ui/Button.svelte';
	import { VesselsStorage, defaultValue } from '../../../store/store';

	let vesselId = $page.params.id;
	let isError = false;
	let isErrorName = false;
	let errors = [''];

	$: vessel = $VesselsStorage.find((v) => v.id === vesselId) || defaultValue;
</script>

<div class="w-full h-fit bg-blackPrimary">
	{#if browser}
		<VesselForm
			bind:start_value={vessel.start_value}
			bind:isError
			bind:isErrorName
			bind:vesselName={vessel.name}
			bind:errors
			isCreate={true}
		/>
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
