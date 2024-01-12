<script lang="ts">
	import Input from '@components/ui/Input.svelte';
	import { createEventDispatcher } from 'svelte';
	import VesselFormErrors from './VesselFormErrors.svelte';
	import Button from './ui/Button.svelte';
	const dispatch = createEventDispatcher();

	export let start_value = [
		{ name: 'light-ship', value: 0, wasfocusedCount: false },
		{ name: 'd-fwd-pp', value: 0, wasfocusedCount: false },
		{ name: 'lbp', value: 0, wasfocusedCount: false },
		{ name: 'd-mid-pp', value: 0, wasfocusedCount: false },
		{ name: 'lbm', value: 0, wasfocusedCount: false },
		{ name: 'd-aft-pp', value: 0, wasfocusedCount: false },
		{ name: 'keel-thk', value: 0, wasfocusedCount: false }
	];
	export let vesselName = '';
	export let isError = false;
	export let isErrorName = false;
	export let wasNameFocused = false;
	export let isCreate = false;
	export let redirect = '';
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
		on:focus={() => (wasNameFocused = true)}
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
			/>
		{/each}

		<div class="w-full relative">
			{#if isCreate}
				<Button
					spaceAll={false}
					chooseType="for-form"
					message="Save"
					icon=""
					on:click={() => dispatch('click')}
				/>
			{/if}

			{#if redirect}
				<Button
					isButton={false}
					spaceAll={false}
					href={redirect}
					chooseType="for-form"
					message="Go back"
					icon=""
				/>
			{/if}
		</div>
	</div>

	{#if isError || isErrorName}
		<VesselFormErrors bind:errors />
	{/if}
</form>
