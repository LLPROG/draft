<script lang="ts">
	import VesselForm from '@components/VesselForm.svelte';
	import { page } from '$app/stores';
	import { VesselsStorage, defaultValue } from '../../../store/store';
	import { browser } from '$app/environment';
	import Button from '@components/ui/Button.svelte';
	import { base } from '$app/paths';
	import Transition from '@lib/utils/transition/Transition.svelte';
	import type { PageData } from './$types';

	let vesselId = $page.params.id;
	type Vessel = typeof defaultValue;

	let vessel = $VesselsStorage.find((v: Vessel) => v.id === vesselId);
</script>

<div class="w-full h-fit bg-blackPrimary">
	{#if browser && $page}
		<VesselForm bind:vesselName={vessel.name} bind:vessel isCreate={true} />
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
