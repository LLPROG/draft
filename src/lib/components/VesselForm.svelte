<script>
	import Input from '@components/ui/Input.svelte';
	import { createEventDispatcher } from 'svelte';
	import Button from './ui/Button.svelte';
	import { defaultValue } from '../../store/store';
	import VesselFormErrors from './VesselFormErrors.svelte';
	const dispatch = createEventDispatcher();

	export let vessel = defaultValue;

	export let isError = false;
	export let isErrorName = false;
	export let vesselName = '';
	export let wasNameFocused = false;
	export let isCreate = false;
	export let redirect = '';
	export let disabled = false;
	export let errors = [''];
</script>

<form class="w-full p-4" on:submit|preventDefault>
	<Input
		bind:wasfocused={wasNameFocused}
		bind:isError
		bind:isErrorName
		bind:valueT={vesselName}
		{disabled}
		id="name"
		label="Vessel"
		type="text"
	/>
	<div class="relative grid grid-cols-2 gap-4 pt-2">
		{#each vessel.start_value as { name, value, wasfocusedCount }}
			<Input
				bind:wasfocused={wasfocusedCount}
				bind:isError
				bind:valueN={value}
				{disabled}
				type="number"
				id={name}
				label={name}
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

	{#if isError}
		<VesselFormErrors bind:errors />
	{/if}
</form>
