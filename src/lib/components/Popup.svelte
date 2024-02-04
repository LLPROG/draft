<script lang="ts">
	import { clickOutside } from '@lib/utils/clickOutside';
	import clsx from 'clsx';
	import { fly } from 'svelte/transition';

	type Variant = 'classic' | 'menu';

	export let isOpen = false;
	export let variant: Variant = 'classic';
</script>

<div
	class={clsx('w-full fixed h-[100svh] top-0 right-0 left-0 bottom-0 z-50', {
		'backdrop-blur-sm': isOpen
	})}
>
	<div
		transition:fly={{
			duration: 300,
			y: variant === 'classic' ? 500 : 0,
			x: variant === 'menu' ? 500 : 0
		}}
		class={clsx('fixed px-4 w-full rounded-t-3xl popup z-50', {
			'bottom-0 left-0 ': variant === 'classic',
			'min-h-[90svh] bottom-0 left-5': variant === 'menu'
		})}
		use:clickOutside={() => (isOpen = false)}
	>
		<div class="w-full">
			<slot name="header" />
		</div>
		<div class="w-full">
			<slot name="body" />
		</div>
	</div>
</div>

<style>
	.popup {
		border-radius: 12px 0px 0px 0px;
		background: var(--opacity-primary-g-75, rgba(67, 186, 138, 0.897));
		box-shadow: 0px 4px 1px 0px rgba(255, 255, 255, 0.25) inset,
			4px 0px 1px 0px rgba(255, 255, 255, 0.25) inset;
	}
</style>
