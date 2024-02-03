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

	let isFocus = false;

	$: style = {
		input: true,
		isNotDisabled: !disabled,
		'outline outline-[2px] outline-red-400': isError || isErrorName,
		'disabled-custom': disabled
	};
</script>

<div class={clsx('relative pt-6 flex flex-col gap-0 justify-start text-whitePrimary', className)}>
	{#if label}
		<label
			class={clsx(
				'animate-label-static w-fit z-20 transition absolute top-[0%] left-[0%] whitespace-nowrap',
				{
					'animate-label text-[#e0e7f180]': isNaN(valueN) && valueT === '' && !isFocus,
					'text-[#85e96c]': isFocus,
					'text-red-400': isError || isErrorName
				}
			)}
			for={id}>{label}</label
		>
	{/if}
	{#if type === 'text'}
		<input
			placeholder=""
			{id}
			name={id}
			{disabled}
			on:focus={() => {
				wasfocused = true;
				isFocus = true;
				isError = false;
				isErrorName = false;
				dispatch('focus');
			}}
			on:change={(e) => {
				valueT = e.currentTarget.value;
				dispatch('change', valueT);
			}}
			on:blur={() => {
				isFocus = false;
			}}
			bind:value={valueT}
			class={clsx(style)}
			type="text"
		/>
	{:else}
		<input
			step="0.0001"
			placeholder=""
			{id}
			name={id}
			{disabled}
			on:focus={(e) => {
				wasfocused = true;
				isError = false;
				isFocus = true;
				dispatch('focus');
			}}
			on:change={(e) => {
				const value = e.currentTarget.value.replace(',', '.');
				const decimals = e.currentTarget.value.slice(e.currentTarget.value.indexOf('.') + 1);
				if (decimals.length > 3) {
					valueN = parseFloat(value.slice(0, value.indexOf('.') + 5));
					return;
				}
				valueN = parseFloat(value);
				dispatch('change', valueN);
				isFocus = false;
			}}
			on:blur={() => {
				isFocus = false;
			}}
			bind:value={valueN}
			class={clsx(style)}
			type="number"
		/>
	{/if}
</div>

<style>
	.input {
		border-inline: none;
		border-radius: 12px;
		border: 1px solid rgba(237, 234, 234, 0.5);
		background: rgba(237, 234, 234, 0.03);
		backdrop-filter: blur(10px);
		border-radius: 12px;
		backdrop-filter: blur(10px);
		padding: 16px 16px;
		text-align: center;
		font-size: 20px;
	}

	.input:focus {
		outline: none;
		border: 1px solid #85e96c;
		background: rgba(224, 231, 241, 0.03);
		backdrop-filter: blur(10px);
		color: #85e96c;
	}

	.animate-label-static {
		font-size: 0.9em;
		top: 0%;
		left: 0%;
		transition: all 0.1s ease-in-out;
		transform: translate(0%, 0%);
	}

	.animate-label {
		font-size: 1.2em;
		top: 50%;
		left: 50%;
		transition: all 0.1s ease-in-out;
		transform: translate(-50%, -15%);
	}

	.disabled-custom {
		border: none;
		opacity: 0.8;
	}
</style>
