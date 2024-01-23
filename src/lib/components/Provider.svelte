<script>
	import BgVectorGreen from './ui/icons/BgVectorGreen.svelte';

	import BgVectorViolet from './ui/icons/BgVectorViolet.svelte';
</script>

<div class="bg-blackPrimary min-h-[100svh] relative pt-[10svh] z-50">
	<BgVectorViolet className="absolute top-[20%] left-[20%] z-0 blur-[120px]" />
	<BgVectorGreen className="absolute bottom-[20%] right-[20%] z-0 blur-[120px]" />
	<slot />
</div>
