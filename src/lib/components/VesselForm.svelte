<script>
	import Input from '@components/ui/Input.svelte';
	import { createEventDispatcher } from 'svelte';
	import Button from './ui/Button.svelte';
	import VesselFormErrors from './VesselFormErrors.svelte';
	import { defaultValue } from '../../store/store';
	const dispatch = createEventDispatcher();

	export let vessel = defaultValue;
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
		bind:valueT={vessel.name}
		on:focus={() => (wasNameFocused = true)}
	/>
	<div class="relative grid grid-cols-2 gap-4 pt-2">
		{#each vessel.start_value as { name, value, wasfocusedCount }}
			<Input
				id={name}
				label={name}
				type="number"
				{disabled}
				bind:wasfocused={wasfocusedCount}
				bind:isError
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
