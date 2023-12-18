<script>
	import CtaTable from '@components/CtaTable.svelte';
	import Table from '@components/Table.svelte';

	let selectedRow = 0;
	let editable = false;
	let disabled = true;
	let row = {
		draft: 0,
		displ: 0,
		tpc: 0,
		mtc: 0,
		lcf: 0
	};
	let rowContainer = [row];

	const addRow = () => {
		rowContainer = [row, ...rowContainer];
		selectedRow = 0;
		editable = true;
		disabled = false;
	};
	const deleteRow = () => {
		rowContainer.splice(selectedRow, 1);
		rowContainer = rowContainer;
		disabled = true;
		editable = false;
	};
	const editRow = () => {
		console.log('edit row');
		editable = true;
		disabled = false;
	};

	const loadCsv = () => {
		console.log('load csv');
	};

	const selectRow = (/** @type {{ detail: { index: number; }; } | undefined} */ e) => {
		if (selectedRow === e?.detail.index) return;
		disabled = true;
		editable = false;
		selectedRow = e?.detail.index || 0;
		console.log('select row', e);
	};
</script>

<div class="w-full text-center text-grayPrimary">
	<h1 class="pb-6">Hydrostatic Tables</h1>
	<Table
		on:select:row={(e) => selectRow(e)}
		bind:rowContainer
		bind:selectedRow
		bind:editable
		bind:disabled
	/>
	<div>
		<CtaTable
			on:add:row={addRow}
			on:delete:row={deleteRow}
			on:edit:row={editRow}
			on:load:csv={loadCsv}
		/>
	</div>
</div>
