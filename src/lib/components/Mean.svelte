<script>
	import clsx from 'clsx';
	import Button from './ui/Button.svelte';
	import Select from './ui/Select.svelte';

	export let selectedOption = 'Quarter Mean';
	export let openMean = false;
	export let array = ['Quarter Mean', 'Mean of Mean', 'Mean of Mean of mean'];
	export let customClass = '';
</script>

<div class={clsx('w-full relative', customClass)}>
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
			bind:array
			bind:value={selectedOption}
			classProps="absolute top-18 z-50"
			on:click={(e) => {
				selectedOption = e.detail;
				openMean = false;
			}}
		/>
	{/if}
</div>
