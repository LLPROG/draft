<script>
	import Button from './ui/Button.svelte';
	import Select from './ui/Select.svelte';

	export let selectedOption = 'Quarter Mean';
	export let openMean = false;
</script>

<div class="w-full relative">
	<Button
		on:click={() => (openMean = !openMean)}
		message={selectedOption}
		chooseType="secondary"
		icon="arrow"
		size="sm"
		classProp="w-full !py-4"
	/>

	{#if openMean}
		<Select
			classProps="absolute top-18 z-50"
			on:click={(e) => {
				selectedOption = e.detail;
				openMean = false;
			}}
		/>
	{/if}
</div>
