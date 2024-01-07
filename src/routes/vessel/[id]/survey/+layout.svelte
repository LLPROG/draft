<script>
	import clsx from 'clsx';
	import { onMount } from 'svelte';
	let init = false;

	onMount(() => {
		setTimeout(() => {
			init = true;
		}, 200);
	});
</script>

<div
	class={clsx('translate-y-[100%] transition-transform duration-300 -z-50', {
		'translate-y-[0%]': init
	})}
>
	<slot />
</div>
