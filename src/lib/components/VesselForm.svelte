<script>
	import Input from '@components/ui/Input.svelte';
	import { createEventDispatcher } from 'svelte';
	import Button from './ui/Button.svelte';
	const dispatch = createEventDispatcher();

	export let vessel = {
		name: '',
		wasNameFocused: false,
		start_value: [
			{ name: 'light-ship', value: 0, wasfocusedCount: false },
			{ name: 'd-fwd-pp', value: 0, wasfocusedCount: false },
			{ name: 'lbp', value: 0, wasfocusedCount: false },
			{ name: 'd-mid-pp', value: 0, wasfocusedCount: false },
			{ name: 'lbm', value: 0, wasfocusedCount: false },
			{ name: 'd-aft-pp', value: 0, wasfocusedCount: false },
			{ name: 'keel-thk', value: 0, wasfocusedCount: false }
		]
	};

	export let isError = false;
	export let vesselName = '';
	export let wasNameFocused = false;
	export let isCreate = false;
	export let redirect = '';
	export let disabled = false;
</script>

<form class="w-full p-4" on:submit|preventDefault>
	<Input
		{disabled}
		bind:wasfocused={wasNameFocused}
		bind:isError
		id="name"
		label="Vessel Name"
		type="text"
		bind:valueT={vesselName}
		on:focus={() => (wasNameFocused = true)}
	/>
	<div class="relative grid grid-cols-2 gap-4 pt-2">
		{#each vessel.start_value as { name, value, wasfocusedCount }}
			<Input
				{disabled}
				bind:wasfocused={wasfocusedCount}
				bind:isError
				type="number"
				id={name}
				label={name}
				bind:valueN={value}
				on:focus={() => (wasfocusedCount = true)}
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
</form>
