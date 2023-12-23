<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './ui/Button.svelte';
	const dispatch = createEventDispatcher();

	let ctas = [
		{
			icon: 'edit-row',
			action: () => dispatch('edit:row')
		},
		{
			icon: 'delete-row',
			action: () => dispatch('delete:row')
		},
		{
			icon: 'add-row',
			action: () => dispatch('add:row')
		},
		{
			icon: 'load-csv',
			action: () => dispatch('load:csv')
		}
	];
</script>

<div class="flex justify-between px-4">
	{#each ctas as cta}
		<Button
			on:click={cta.action}
			spaceAll={false}
			chooseType="only-icon"
			icon={cta.icon}
			size="md"
		/>
	{/each}
</div>
