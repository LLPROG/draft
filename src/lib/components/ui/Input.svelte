<script>
	import { createEventDispatcher } from 'svelte';
	import clsx from 'clsx';
	const dispatch = createEventDispatcher();
	export let label = '';
	export let className = '';
	export let id = '';
	export let valueN = NaN;
	export let valueT = '';
	export let disabled = false;
	export let type = 'text';
	export let isError = false;
	export let wasfocused = false;

	let style = {
		'p-4 rounded-md bg-green bg-opacity-[10%] shadoww text-center border-0 focus:outline focus:outline-[1px]': true,
		'border-2 border-red-400': isError && !wasfocused,
		'fix-value': disabled
	};
</script>

<div class={clsx('flex flex-col gap-0 justify-start text-whitePrimary', className)}>
	{#if label}
		<label for={id}>{label}</label>
	{/if}
	{#if type === 'text'}
		<input
			placeholder=""
			{disabled}
			on:focus={() => dispatch('focus')}
			on:change={(e) => {
				valueT = e.currentTarget.value;
				dispatch('change', valueT);
				console.log(valueT);
			}}
			{id}
			name={id}
			class={clsx(style)}
			bind:value={valueT}
			type="text"
		/>
	{:else}
		<input
			pattern="[0-9]+"
			placeholder=""
			{disabled}
			on:focus={() => dispatch('focus')}
			on:change={(e) => {
				valueN = parseInt(e.currentTarget.value);
				dispatch('change', valueN);
				console.log(valueN);
			}}
			{id}
			name={id}
			class={clsx(style)}
			bind:value={valueN}
			type="number"
		/>
	{/if}
</div>

<style>
	.fix-value {
		background: #e0e7f108;
		backdrop-filter: blur(10px);
	}
</style>
