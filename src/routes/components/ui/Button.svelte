<script>
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';
	import PlusIcon from './PlusIcon.svelte';
	import StarIcon from './StarIcon.svelte';
	export let message = '';
	export let chooseType = '';
	export let classProp = '';
	export let href = '';
	export let icon = '';
	export let isButton = false;
	const dispatch = createEventDispatcher();
</script>

<div>
	{#if !isButton}
		<a
			on:click={() => dispatch('button:click')}
			{href}
			class={clsx(
				'py-2 px-4 rounded-[12px] text-[2.5rem] text-grayPrimary flex items-center',
				classProp,
				{
					'primary-btn': chooseType == 'primary',
					'secondary-btn': chooseType == 'secondary'
				}
			)}
		>
			<span>{message}</span>
			{#if icon === 'plus'}
				<span class="ms-auto"><PlusIcon /></span>
			{/if}
			{#if icon === 'star'}
				<span class="ms-auto"><StarIcon /></span>
			{/if}
		</a>
	{:else}
		<button
			on:click={() => dispatch('button:click')}
			class={clsx('px-4 rounded-[12px] text-[2.5rem] flex items-center', classProp, {
				'text-grayPrimary ': chooseType == 'primary',
				'bg-greenAccent text-black': chooseType == 'secondary'
			})}
		>
			<span>{message}</span>
			{#if icon}
				<span class="ms-auto"><PlusIcon /></span>
			{/if}
		</button>
	{/if}
</div>
