<script>
	import clsx from 'clsx';
	import InputTable from './ui/InputTable.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let row = {
		draft: NaN,
		displ: NaN,
		tpc: NaN,
		mtc: NaN,
		lcf: NaN
	};
	export let rowContainer = [row];
	export let disabled = true;
	export let selectedRow = 0;
	export let editable = false;
</script>

<div class="p-4">
	<div class="header">
		<ul class="flex justify-between">
			<li class="w-full border-2 px-2 py-1 border-greenAccent">Draft</li>
			<li class="w-full border-2 px-2 py-1 border-greenAccent">Displ.</li>
			<li class="w-full border-2 px-2 py-1 border-greenAccent">TPC</li>
			<li class="w-full border-2 px-2 py-1 border-greenAccent">MTC</li>
			<li class="w-full border-2 px-2 py-1 border-greenAccent">LCF</li>
		</ul>
	</div>
	<div class="py-4 space-y-2 max-h-[60vh] overflow-y-scroll">
		{#each rowContainer as row, index}
			<button on:click={() => dispatch('select:row', { index })} class="w-full">
				<ul
					class={clsx('flex justify-between', {
						'border border-greenAccent': selectedRow === index,
						'border-red-500': editable && selectedRow === index
					})}
				>
					<InputTable bind:disabled bind:value={row.draft} />
					<InputTable bind:disabled bind:value={row.displ} />
					<InputTable bind:disabled bind:value={row.tpc} />
					<InputTable bind:disabled bind:value={row.mtc} />
					<InputTable bind:disabled bind:value={row.lcf} />
				</ul>
			</button>
		{/each}
	</div>
</div>
