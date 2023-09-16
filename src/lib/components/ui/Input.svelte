<script>
	import { createEventDispatcher } from 'svelte';
	import clsx from 'clsx';
	const dispatch = createEventDispatcher();
	export let label = '';
	export let className = '';
	export let id = '';
	export let valueN = 0;
	export let valueT = '';
	export let disabled = false;
	export let type = 'text';
	export let isError = false;
	export let wasfocused = false;
</script>

<div class={clsx('flex flex-col gap-0 justify-start text-whitePrimary', className)}>
	<label for={id}>{label}</label>
	{#if type === 'text'}
		<input
			{disabled}
			on:focus={() => dispatch('focus')}
			{id}
			name={id}
			class={clsx('p-4 rounded-md bg-green bg-opacity-[10%] shadoww', {
				'border-2 border-red-400': isError && !wasfocused
			})}
			bind:value={valueT}
			type="text"
		/>
	{:else}
		<input
			{disabled}
			on:focus={() => dispatch('focus')}
			{id}
			name={id}
			class={clsx('p-4 rounded-md bg-green bg-opacity-[10%] shadoww', {
				'border-2 border-red-400': isError && !wasfocused
			})}
			bind:value={valueN}
			type="number"
		/>
	{/if}
</div>

<style>
	.shadoww {
		box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.4);
	}
</style>
