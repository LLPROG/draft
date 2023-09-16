<script>
	import Input from '../components/ui/Input.svelte';
	import Button from './ui/Button.svelte';
	import { createEventDispatcher } from 'svelte';
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

		{#if isCreate}
			<Button
				classProp="absolute right-0 bottom-0"
				chooseType="secondary"
				message="save"
				icon=""
				isButton={true}
				on:button:click={() => dispatch('click')}
			/>
		{/if}

		{#if redirect}
			<Button
				classProp="absolute right-0 bottom-0"
				href={redirect}
				chooseType="secondary"
				message="go back"
				icon=""
				isButton={false}
				on:button:click={() => dispatch('click')}
			/>
		{/if}
	</div>
</form>
