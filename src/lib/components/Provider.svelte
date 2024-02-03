<script>
	import BgVectorGreen from './ui/icons/BgVectorGreen.svelte';

	import BgVectorViolet from './ui/icons/BgVectorViolet.svelte';
</script>

<main class="bg-blackPrimary min-h-[100svh] overflow-y-auto relative pt-[12svh] z-50 px-5">
	<BgVectorGreen className="absolute top-[15%] left-[20%] z-0 blur-[70px]" />
	<BgVectorViolet className="absolute bottom-[40%] right-[20%] z-0 blur-[70px]" />
	<slot />
</main>
