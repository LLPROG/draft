<script>
	import Button from './ui/Button.svelte';
	import { clickOutside } from '@lib/utils/clickOutside';
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let href = '';
	export let vessel = { name: 'defaultValue' };
	export let isOpen = false;

	const clickOutsideHandler = () => {
		isOpen = false;
	};
</script>

<div
	transition:fly={{ duration: 300, y: 500 }}
	class="fixed p-4 w-full min-h-[50vh] bottom-0 left-0 rounded-t-3xl bg-greenAccent z-50"
	use:clickOutside
	on:click_outside|stopPropagation={clickOutsideHandler}
>
	<h2>
		{vessel.name}
	</h2>

	<Button
		on:button:click={clickOutsideHandler}
		bind:href
		classProp="w-full text-black border-b border-b-black"
		chooseType="secondary"
		message="open"
		icon="arrow"
		size="md"
		isButton={false}
	/>
	<Button
		classProp="w-full text-black border-b border-b-black"
		chooseType="secondary"
		message="delete"
		icon="arrow"
		size="md"
		isButton={true}
		on:button:click={() => dispatch('delete')}
	/>
</div>
