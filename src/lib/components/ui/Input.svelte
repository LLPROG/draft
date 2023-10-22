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
	export let isErrorName = false;
	export let wasfocused = false;

	$: style = {
		'p-4 inner-sh rounded-xl bg-green bg-opacity-[10%] shadoww text-center border-0 focus:outline focus:outline-[2px] outline-greenAccent': true,
		'outline outline-[2px] outline-red-400': (isError && !wasfocused) || isErrorName,
		'disabled-custom': disabled
	};
</script>

<div class={clsx('flex flex-col gap-0 justify-start text-whitePrimary', className)}>
	{#if label}
		<label for={id}>{label}</label>
	{/if}
	{#if type === 'text'}
		<input
			placeholder=""
			{id}
			name={id}
			{disabled}
			on:focus={() => {
				wasfocused = true;
				isError = false;
				isErrorName = false;
				dispatch('focus');
			}}
			on:change={(e) => {
				valueT = e.currentTarget.value;
				dispatch('change', valueT);
			}}
			bind:value={valueT}
			class={clsx(style)}
			type="text"
		/>
	{:else}
		<input
			placeholder=""
			{id}
			name={id}
			{disabled}
			on:focus={() => {
				wasfocused = true;
				isError = false;
				dispatch('focus');
			}}
			on:change={(e) => {
				valueN = parseFloat(e.currentTarget.value);
				dispatch('change', valueN);
			}}
			bind:value={valueN}
			class={clsx(style)}
			type="number"
		/>
	{/if}
</div>

<style>
	.disabled-custom {
		background: #e0e7f129;
		backdrop-filter: blur(10px);
	}

	.inner-sh {
		-webkit-box-shadow: inset 5px 5px 15px -4px #ffffff;
		box-shadow: inset 5px 5px 8px -4px #00000070;
	}
</style>
