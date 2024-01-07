<script>
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';
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
		input: true,
		'outline outline-[2px] outline-red-400': isError || isErrorName,
		'disabled-custom': disabled
	};
</script>

<div class={clsx('flex flex-col gap-0 justify-start text-whitePrimary input-class', className)}>
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
			value={valueT}
			class={clsx(style)}
			type="text"
		/>
	{:else}
		<input
			step="0.0001"
			pattern={'d{(1, 10)}(?:.d{(1, 3)})?$'}
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
				let value = e.currentTarget.value.replace(',', '.');
				valueN = parseFloat(value);
				dispatch('change', valueN);
			}}
			value={valueN}
			class={clsx(style)}
			type="number"
		/>
	{/if}
</div>

<style>
	.input {
		border-radius: 12px;
		border: 1px solid #e0e7f1;
		background: rgba(224, 231, 241, 0.03);
		backdrop-filter: blur(10px);
		padding: 20px 20px;
		text-align: center;
		font-size: 20px;
	}

	.disabled-custom {
		border: none;
		outline: none;
		opacity: 0.8;
	}
</style>
