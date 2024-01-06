<script>
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';
	import IconsRender from '@components/IconsRender.svelte';
	export let message = '';
	/** @types {(primary | secondary | tertiary | for-form | only-icon)} */
	export let chooseType = 'primary';
	export let classProp = '';
	export let icon = '';
	export let size = 'sm';
	export let disabled = false;

	export let isButton = true;
	export let href = '';
	export let spaceAll = true;
	const dispatch = createEventDispatcher();

	const style = {
		'px-4 flex justify-center items-center z-20': true,
		'w-full': spaceAll,
		'text-grayPrimary rounded-[12px] py-8': chooseType == 'primary',
		'text-white secondary rounded-[12px] py-8': chooseType == 'secondary',
		'text-black border-b border-b-black py-8': chooseType == 'tertiary',
		'h-[56px] w-full absolute bottom-0 p-4 rounded-md bg-green bg-opacity-[10%] shadoww text-center text-white for-form':
			chooseType == 'for-form',
		'w-fit': chooseType == 'only-icon',
		'text-[1em]': size == 'sm',
		'text-[1.5em]': size == 'md',
		'text-[2.5em]': size == 'lg',
		'pointer-events-none': disabled,
		[classProp]: true
	};
</script>

{#if isButton}
	<button {disabled} class={clsx(style)} on:click={() => dispatch('click')}>
		<span class={clsx({ hidden: chooseType == 'only-icon' })}>{message}</span>
		<IconsRender {icon} />
	</button>
{:else}
	<a {href} class={clsx(style)} on:click={() => dispatch('click')}>
		<span class={clsx({ hidden: chooseType == 'only-icon' })}>{message}</span>
		<IconsRender {icon} />
	</a>
{/if}

<style>
	.secondary {
		background: linear-gradient(
			95.14deg,
			rgba(133, 233, 108, 0.1) 0%,
			rgba(61, 186, 111, 0.1) 100%
		);
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
	}

	.for-form {
		background: linear-gradient(
			95.14deg,
			rgba(133, 233, 108, 0.7) 0%,
			rgba(61, 186, 111, 0.7) 100%
		);
		/* vetro */
		backdrop-filter: blur(10px);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset -4px -4px 4px rgba(0, 0, 0, 0.25),
			inset 4px 4px 4px rgba(255, 255, 255, 0.25);
	}
</style>
