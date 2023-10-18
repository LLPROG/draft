<script>
	// @ts-nocheck

	export let isOption = 1;

	let options1 = [
		{ label: 'True Trim', value: 1 },
		{ label: 'Hoggin', value: 0 },
		{ label: 'Mean', value: 19 },
		{ label: 'Keel THK', value: 15 },
		{ label: 'Mean Corrected', value: 0 }
	];

	let options2 = [
		{ label: 'Displacement', value: 92 },
		{ label: 'TPC', value: 5 },
		{ label: 'LCF', value: 6 },
		{ label: '1° MTC (Mean + 0.5m)', value: 94 },
		{ label: '2° MTC (Mean - 0.5m)', value: 30 },
		{ label: 'Mean Corrected', value: 0 }
	];

	let options3 = [
		{ label: '1° Trim Correction', value: 4 },
		{ label: '2° Trim Correction', value: 0 },
		{ label: 'Density Correction', value: 20 }
	];

	let options4 = [
		{ label: 'Final Displacement', value: 0 },
		{ label: 'Light Ship', value: 0 },
		{ label: 'DWT', value: 0 }
	];

	let options5 = [
		{ label: 'Ballast', value: 0 },
		{ label: 'Fresh Water', value: 0 },
		{ label: 'Fuel Oil', value: 0 },
		{ label: 'Diesel Oil', value: 2 },
		{ label: 'Lube Oil', value: 22 },
		{ label: 'Other Tanks', value: 0 },
		{ label: 'Other Cargo', value: 18 },
		{ label: 'Deductions', value: 0 }
	];

	let options6 = [{ label: 'Costant', value: 15 }];

	let options = [{ label: 'Displacement', value: 0 }];

	$: {
		if (isOption === 1) options = options1;
		if (isOption === 2) options = options2;
		if (isOption === 3) options = options3;
		if (isOption === 4) options = options4;
		if (isOption === 5) options = options5;
		if (isOption === 6) options = options6;
	}

	const addCaracter = (cha, value) => {
		let result = `${value} ${cha}`;
		return result;
	};
</script>

<div class="w-full rounded-2xl result py-4">
	<ul class="w-full">
		{#each options as option}
			<li class="w-full flex justify-center items-center gap-2 text-[rgba(235,255,229,0.8)]">
				<input
					value={addCaracter(':', option.label)}
					class="text-end bg-transparent"
					id="name"
					type="text"
				/>
				<input
					value={addCaracter(' M', option.value)}
					class="text-start bg-transparent"
					id="name"
					type="text"
				/>
			</li>
		{/each}
	</ul>
</div>

<style>
	.result {
		background: rgba(224, 231, 241, 0.02);
		box-shadow: 0px 0px 4px 3px rgba(255, 255, 255, 0.05);
	}
</style>
