<script>
	import '../app.css';
	import LogoBigSheep from './components/ui/LogoBigSheep.svelte';
	import LogoMain from './components/ui/LogoMain.svelte';
</script>

<div class="w-full h-full flex flex-col items-center justify-center gap-2">
	<a data-sveltekit-preload-data="tap" href="/home" class="z-50 flex flex-col gap-2 items-center">
		<LogoBigSheep />
		<LogoMain />
	</a>
</div>
