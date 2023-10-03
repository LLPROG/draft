<script>
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';
	import PlusIcon from './PlusIcon.svelte';
	import StarIcon from './StarIcon.svelte';
	import ArrowIcon from './ArrowIcon.svelte';
	import LessIcon from './LessIcon.svelte';
	import ArrowIconBlack from './ArrowIconBlack.svelte';
	export let message = '';
	export let chooseType = '';
	export let classProp = '';
	export let icon = '';
	export let size = 'sm';
	export let disabled = false;
	const dispatch = createEventDispatcher();
</script>

<button
	{disabled}
	class={clsx('px-4 rounded-[12px] flex items-center py-6 font-semibold', classProp, {
		'text-grayPrimary ': chooseType == 'primary',
		'bg-greenAccent text-black': chooseType == 'secondary',
		'text-[1.5em]': size == 'md',
		'text-[2.5em]': size == 'lg',
		'pointer-events-none': disabled
	})}
	on:click={() => dispatch('click')}
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
	{#if icon === 'arrowBlack'}
		<span class="ms-auto"><ArrowIconBlack /></span>
	{/if}
	{#if icon === 'less'}
		<span class="ms-auto"><LessIcon /></span>
	{/if}
</button>
