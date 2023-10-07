<script>
	import Mean from '@components/Mean.svelte';
	import ResultCard from '@components/ResultCard.svelte';
	import Button from '@components/ui/Button.svelte';
	import Input from '@components/ui/Input.svelte';
	import LogoBigSheep from '@components/ui/LogoBigSheep.svelte';
	// import { getContext } from 'svelte';

	// let selectedVessel = getContext('selectedVessel');

	let waterDensityValue = 0;
	let openMean = false;
	let selectedOption = 'Quarter Mean';
	let categories = [
		{
			name: 'Mean Corrected',
			total: 0,
			left: NaN,
			right: NaN
		},
		{
			name: 'Displacement',
			total: 0,
			left: NaN,
			right: NaN
		},
		{
			name: 'TPC',
			total: 0,
			left: NaN,
			right: NaN
		},
		{
			name: 'LCF',
			total: 0,
			left: NaN,
			right: NaN
		},
		{
			name: '1° MTC (Mean + 0.5m)',
			total: 0,
			left: NaN,
			right: NaN
		},
		{
			name: '2° MTC (Mean - 0.5m)',
			total: 0,
			left: NaN,
			right: NaN
		}
	];
	let draftsA = [
		{
			name: 'Fwd',
			value: NaN
		},
		{
			name: 'Mid',
			value: NaN
		},
		{
			name: 'Aft',
			value: NaN
		}
	];

	let draftsB = [
		{
			name: 'Fwd',
			value: NaN
		},
		{
			name: 'Mid',
			value: NaN
		},
		{
			name: 'Aft',
			value: NaN
		}
	];

	let weight = [
		{
			name: 'Ballast',
			value: NaN
		},
		{
			name: 'Fresh water',
			value: NaN
		},
		{
			name: 'Fuel Oil',
			value: NaN
		},
		{
			name: 'Diesel Oil',
			value: NaN
		},
		{
			name: 'Lube Oil',
			value: NaN
		},
		{
			name: 'Other',
			value: NaN
		},
		{
			name: 'Other Cargo',
			value: NaN
		},
		{
			name: 'Constant',
			value: NaN
		}
	];
</script>

<div class="w-full text-center text-whitePrimary bg-blackPrimary px-4 pb-56">
	<!-- DRAFTS -->
	<h2 class="text-[2em] py-4">Drafts</h2>
	<div class="w-full flex justify-around">
		<div class="flex flex-col gap-4">
			{#each draftsA as A}
				<Input bind:valueN={A.value} className="w-[6rem]" id="name" type="number" />
			{/each}
		</div>

		<div>
			<LogoBigSheep divisor={2} />
		</div>

		<div class="flex flex-col gap-4">
			{#each draftsB as B}
				<Input bind:valueN={B.value} className="w-[6rem]" id="name" type="number" />
			{/each}
		</div>
	</div>

	<!-- WATER DENSITY -->
	<h2 class="text-[2em] py-4">Water Density</h2>
	<div class="w-full flex justify-center items-center gap-4">
		<Button
			spaceAll={false}
			on:click={() => waterDensityValue--}
			chooseType="only-icon"
			icon="less"
			size="md"
		/>
		<Input
			className="w-[8rem]"
			disabled={true}
			id="name"
			type="number"
			bind:valueN={waterDensityValue}
		/>
		<Button
			spaceAll={false}
			on:click={() => waterDensityValue++}
			chooseType="only-icon"
			icon="plus"
			size="md"
		/>
	</div>

	<!-- WEIGHT -->
	<h2 class="text-[2em] py-4">Weight</h2>
	<div class="w-full grid grid-cols-2 gap-4 place-items-center">
		{#each weight as w}
			<Input label={w.name} className="w-[8rem]" id="name" type="number" />
		{/each}
	</div>

	<!-- HIDRO -->
	<h2 class="text-[2em] py-8">HYDROSTATIC TABLE INTERPOLATOR</h2>

	<Mean {openMean} {selectedOption} />

	<div class="w-full py-4">
		{#each categories as category}
			<div class="w-full">
				<div class="w-full pt-3 pb-1 text-greenAccent m-auto">{category.name}</div>
				<div class="w-full flex justify-between items-center gap-1">
					<Input
						className="min-w-[6rem] max-w-[9rem]"
						bind:valueN={category.left}
						id="name"
						type="number"
					/>
					<Input
						className="min-w-[6rem] max-w-[9rem]"
						bind:valueN={category.total}
						disabled={true}
						id="name"
						type="number"
					/>
					<Input
						className="min-w-[6rem] max-w-[9rem]"
						bind:valueN={category.right}
						id="name"
						type="number"
					/>
				</div>
			</div>
		{/each}
	</div>

	<!-- SURVEY -->
	<h2 class="text-[2em] py-8">SURVEY</h2>

	<Mean {openMean} {selectedOption} />

	<div class="w-full py-6 text-greenAccent">
		<h1 class="text-[1.3em]">SURVEY</h1>
		<p>(detailed)</p>
	</div>

	<!-- RESULT -->
	<div class="w-full flex flex-col justify-center items-center gap-4">
		<ResultCard isOption={1} />
		<ResultCard isOption={2} />
		<ResultCard isOption={3} />
		<ResultCard isOption={4} />
		<ResultCard isOption={5} />
		<ResultCard isOption={6} />
	</div>
</div>
