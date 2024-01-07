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
			'min-h-[50vh] bottom-0 left-0 ': variant === 'classic',
			'min-h-[90svh] bottom-0 left-5': variant === 'menu'
		})}
		use:clickOutside={() => (isOpen = false)}
	>
		<div class="w-full py-4">
			<slot name="header" />
		</div>
		<div class="w-full py-2">
			<slot name="body" />
		</div>
	</div>
</div>

<style>
	.popup {
		border-radius: 12px 0px 0px 0px;
		background: linear-gradient(95deg, rgba(133, 233, 108, 0.9) 0%, rgba(61, 186, 111, 0.8) 100%);

		/* vetro */
		backdrop-filter: blur(20px);
	}
</style>
