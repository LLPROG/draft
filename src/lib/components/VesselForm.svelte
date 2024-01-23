<script lang="ts">
	import Input from '@components/ui/Input.svelte';
	import { createEventDispatcher } from 'svelte';
	import VesselFormErrors from './VesselFormErrors.svelte';
	const dispatch = createEventDispatcher();

	export let start_value = [
		{ name: 'light-ship', value: NaN, wasfocusedCount: false },
		{ name: 'd-fwd-pp', value: NaN, wasfocusedCount: false },
		{ name: 'lbp', value: NaN, wasfocusedCount: false },
		{ name: 'd-mid-pp', value: NaN, wasfocusedCount: false },
		{ name: 'lbm', value: NaN, wasfocusedCount: false },
		{ name: 'd-aft-pp', value: NaN, wasfocusedCount: false },
		{ name: 'keel-thk', value: NaN, wasfocusedCount: false }
	];
	export let vesselName = '';
	export let isError = false;
	export let isErrorName = false;
	export let wasNameFocused = false;
	export let disabled = false;
	export let errors = [''];
</script>

<form class="w-full p-4" on:submit|preventDefault>
	<Input
		id="name"
		label="Vessel"
		type="text"
		{disabled}
		bind:wasfocused={wasNameFocused}
		bind:isError={isErrorName}
		bind:valueT={vesselName}
		on:focus={() => {
			isError = false;
			isErrorName = false;
		}}
	/>
	<div class="relative grid grid-cols-2 gap-4 pt-2">
		{#each start_value as { name, value, wasfocusedCount }}
			<Input
				id={name}
				label={name}
				type="number"
				{disabled}
				isError={!wasfocusedCount && isError}
				bind:wasfocused={wasfocusedCount}
				bind:valueN={value}
				on:focus={() => {
					isError = false;
					isErrorName = false;
				}}
			/>
		{/each}

		<div class="w-full relative">
			<slot />
		</div>
	</div>

	{#if isError || isErrorName}
		<VesselFormErrors bind:errors />
	{/if}
</form>
