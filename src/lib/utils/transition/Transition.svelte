<script lang="ts">
	import BgVectorGreen from '@components/ui/BgVectorGreen.svelte';
	import BgVectorViolet from '@components/ui/BgVectorViolet.svelte';
	import { fly } from 'svelte/transition';

	export let key: string;
</script>

{#key key}
	<main class="bg-blackPrimary h-fit min-h-[100svh] relative" transition:fly={{ duration: 150 }}>
		<BgVectorViolet className="absolute top-[20%] left-[20%] z-0 blur-[120px]" />
		<BgVectorGreen className="absolute bottom-[20%] right-[20%] z-0 blur-[120px]" />
		<slot />
	</main>
{/key}

<style>
	:blobal(.box) {
		filter: blur(10px);
	}
</style>
