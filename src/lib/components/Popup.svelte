<script>
	import { clickOutside } from '@lib/utils/clickOutside';
	import { fly } from 'svelte/transition';

	export let isOpen = false;
</script>

<div class="w-full fixed top-0 right-0 left-0 bottom-0">
	<div
		transition:fly={{ duration: 300, y: 500 }}
		class="fixed px-4 w-full min-h-[50vh] bottom-0 left-0 rounded-t-3xl bg-greenAccent z-100"
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
