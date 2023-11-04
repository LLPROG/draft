<script>
	import LogoBigSheep from '@components/ui/LogoBigSheep.svelte';
	import LogoMain from '@components/ui/LogoMain.svelte';
	import { base } from '$app/paths';
</script>

<div class="w-full h-full flex flex-col items-center justify-center gap-2">
	<a
		data-sveltekit-preload-data="tap"
		href={`${base}/home`}
		class="z-50 flex flex-col gap-2 items-center"
	>
		<LogoBigSheep />
		<LogoMain />
	</a>
</div>
