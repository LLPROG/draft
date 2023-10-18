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
		'p-4 inner-sh rounded-xl bg-green bg-opacity-[10%] shadoww text-center border-0 focus:outline focus:outline-[1px] outline-white': true,
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
			}}
			{id}
			name={id}
			class={clsx(style)}
			bind:value={valueT}
			type="text"
		/>
	{:else}
		<input
			placeholder=""
			{disabled}
			on:focus={() => dispatch('focus')}
			on:change={(e) => {
				valueN = parseFloat(e.currentTarget.value);
				dispatch('change', valueN);
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

	.inner-sh {
		-webkit-box-shadow: inset 5px 5px 15px -4px #ffffff;
		box-shadow: inset 5px 5px 8px -4px #00000070;
	}
</style>
