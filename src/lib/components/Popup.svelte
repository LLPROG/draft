<script>
	import { clickOutside } from '@lib/utils/clickOutside';
	import { fly } from 'svelte/transition';

	export let isOpen = false;
</script>

<div class="w-full fixed top-0 right-0 left-0 bottom-0 z-50">
	<div
		transition:fly={{ duration: 300, y: 500 }}
		class="fixed px-4 w-full min-h-[50vh] bottom-0 left-0 rounded-t-3xl popup"
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
		background: linear-gradient(
			95.14deg,
			rgba(133, 233, 108, 0.7) 0%,
			rgba(61, 186, 111, 0.7) 100%
		);
		/* vetro */
		backdrop-filter: blur(10px);
	}
</style>
