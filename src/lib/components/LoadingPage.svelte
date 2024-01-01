<script>
	import { goto } from '$app/navigation';
	import LogoBigSheep from '@components/ui/LogoBigSheep.svelte';
	import LogoMain from '@components/ui/LogoMain.svelte';
	import clsx from 'clsx';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			goto('/home');
		}, 6000);
	});
</script>

<div class={clsx('z-50 w-full h-[100vh] relative bg-blackPrimary')}>
	<div
		class={clsx(
			'w-fit absolute left-[50%] duration-600 translate-x-[-50%] transition-all top-[10%]'
		)}
	>
		<LogoBigSheep />
		<LogoMain />
	</div>
</div>
