<script lang="ts">
	import clsx from 'clsx';
	import { onMount } from 'svelte';

	let init = false;

	onMount(() => {
		setTimeout(() => {
			init = true;
		}, 300);
	});
</script>

<main
	class={clsx('opacity-0 transition-opacity duration-500 relative', {
		'opacity-100': init
	})}
>
	<slot />
</main>

<style>
	:blobal(.box) {
		filter: blur(10px);
	}
</style>
