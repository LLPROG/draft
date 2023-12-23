<script>
	import { fly } from 'svelte/transition';
	import Button from './Button.svelte';
	import { createEventDispatcher } from 'svelte';
	import clsx from 'clsx';
	const dispatch = createEventDispatcher();

	export let classProps = '';
	export let value = '';

	export let array = [''];
</script>

<div
	transition:fly={{ y: -10, duration: 300 }}
	class={clsx(
		'w-full p-1 py-2 flex flex-col gap-2 rounded-xl px-1 bg-[#e0e7f14c] backdrop-blur-sm text-black',
		{
			[classProps]: true
		}
	)}
>
	{#each array as el}
		<Button
			on:click={() => {
				value = el;
				dispatch('click', value);
			}}
			message={el}
			chooseType="secondary"
			icon=""
			size="sm"
			classProp="!py-4 text-white !bg-blackPrimary"
		/>
	{/each}
</div>
