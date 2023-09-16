<script>
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';
	import PlusIcon from './PlusIcon.svelte';
	import StarIcon from './StarIcon.svelte';
	import ArrowIcon from './ArrowIcon.svelte';
	import LessIcon from './LessIcon.svelte';
	export let message = '';
	export let chooseType = '';
	export let classProp = '';
	export let href = '';
	export let icon = '';
	export let size = 'sm';
	export let isButton = false;
	export let disabled = false;
	const dispatch = createEventDispatcher();
</script>

<div>
	{#if !isButton}
		<a
			on:click={() => dispatch('button:click')}
			{href}
			class={clsx('px-4 rounded-[12px] flex items-center py-3', classProp, {
				'text-grayPrimary ': chooseType == 'primary',
				'bg-greenAccent text-black': chooseType == 'secondary',
				'text-[1.5em]': size == 'md',
				'text-[2.5em]': size == 'lg',
				'pointer-events-none': disabled
			})}
		>
			<span>{message}</span>
			{#if icon === 'plus'}
				<span class="ms-auto"><PlusIcon /></span>
			{/if}
			{#if icon === 'star'}
				<span class="ms-auto"><StarIcon /></span>
			{/if}
			{#if icon === 'arrow'}
				<span class="ms-auto"><ArrowIcon /></span>
			{/if}
			{#if icon === 'less'}
				<span class="ms-auto"><LessIcon /></span>
			{/if}
		</a>
	{:else}
		<button
			on:click|stopPropagation={() => dispatch('button:click')}
			class={clsx('px-4 rounded-[12px] flex items-center py-3', classProp, {
				'text-grayPrimary ': chooseType == 'primary',
				'bg-greenAccent text-black': chooseType == 'secondary',
				'text-[1.5em]': size == 'md',
				'text-[2.5em]': size == 'lg'
			})}
		>
			<span>{message}</span>
			{#if icon === 'plus'}
				<span class="ms-auto"><PlusIcon /></span>
			{/if}
			{#if icon === 'star'}
				<span class="ms-auto"><StarIcon /></span>
			{/if}
			{#if icon === 'arrow'}
				<span class="ms-auto"><ArrowIcon /></span>
			{/if}
			{#if icon === 'less'}
				<span class="ms-auto"><LessIcon /></span>
			{/if}
		</button>
	{/if}
</div>
