<script>
	import BgVectorGreen from './ui/icons/BgVectorGreen.svelte';
	import BgVectorViolet from './ui/icons/BgVectorViolet.svelte';
</script>

<main class="bg-blackPrimary h-[100svh] overflow-y-hidden relative pt-[8svh] pb-2 z-50 px-5">
	<BgVectorGreen className="absolute top-[15%] left-[20%] z-0 blur-[70px]" />
	<BgVectorViolet className="absolute bottom-[40%] right-[20%] z-0 blur-[70px]" />
	<div class="w-full h-[100svh] overflow-y-scroll hide-scroll">
		<slot />
	</div>
</main>

<style>
	.hide-scroll::-webkit-scrollbar {
		display: none;
	}

	.hide-scroll {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
