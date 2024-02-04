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
		'flex items-center justify-between z-20 outline-none': true,
		'w-full': spaceAll,
		'w-full text-whitePrimary py-6 uppercase px-4': chooseType === 'primary',
		'text-whitePrimary secondary bg-blackPrimary py-8 px-4': chooseType === 'secondary',
		'text-blackPrimary font-[700] border-b border-b-black py-6 px-4': chooseType === 'tertiary',
		'h-[56px] w-full absolute bottom-0 p-9 text-center text-text-blackPrimary for-form ':
			chooseType === 'for-form',
		'w-fit': chooseType === 'only-icon',
		'text-[1em]': size === 'sm',
		'text-[1.5em]': size === 'md',
		'text-[2.5em]': size === 'lg',
		'pointer-events-none': disabled
	};
</script>

{#if isButton}
	<button {disabled} class={clsx(classProp, style)} on:click={() => dispatch('click')}>
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
		border-radius: 12px;
		box-shadow: 0px 0px 10px 1px rgba(67, 186, 138, 0.25);
	}

	.for-form {
		border-radius: 12px;
		background: linear-gradient(95deg, #85e96c 0%, #3dba6f 100%);
		box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
		font-weight: 600;
	}
</style>
