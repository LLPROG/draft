<script>
	import Mean from '@components/Mean.svelte';
	import ResultCard from '@components/ResultCard.svelte';
	import Button from '@components/ui/Button.svelte';
	import Input from '@components/ui/Input.svelte';
	import LogoBigSheep from '@components/ui/LogoBigSheep.svelte';
	import { calc } from '@lib/utils/calculation';
	import { VesselsStorage, defaultValue } from '../../../../store/store';
	import { page } from '$app/stores';
	import InitSurvey from '@components/InitSurvey.svelte';
	import { browser } from '$app/environment';

	let waterDensityValue = 0;
	let openMean = false;
	let selectedOption = 'Quarter Mean';

	const calculation = () => {
		let result = calc(
			draftsA[0].value,
			draftsA[1].value,
			draftsA[2].value,
			draftsB[0].value,
			draftsB[1].value,
			draftsB[2].value,
			D,
			vessel?.start_value[4]?.value
		);

		if (vessel) {
			$VesselsStorage[$VesselsStorage.findIndex((v) => v.name === vesselName)] = {
				...vessel,
				categories,
				draftsA,
				draftsB,
				weight,
				waterDensityValue
			};

			console.log('result', result);
			console.log('storage', $VesselsStorage);
			console.log('vessel', vessel);
		}
	};

	let vesselName = $page.params.name;
	$: vessel = $VesselsStorage.find((v) => v.name === vesselName) || undefined;

	let isNew = vessel?.isNew || defaultValue.isNew;

	$: D = [
		vessel?.start_value[1]?.value, //Dfwd
		vessel?.start_value[3]?.value, // Dmid
		vessel?.start_value[5]?.value // Daft
	];

	$: categories = vessel?.categories || defaultValue.categories;
	$: draftsA = vessel?.draftsA || defaultValue.draftsA;
	$: draftsB = vessel?.draftsB || defaultValue.draftsB;
	$: weight = vessel?.weight || defaultValue.weight;
	$: waterDensityValue = defaultValue.waterDensityValue || 0;
	$: if (vessel) isNew = vessel.isNew;

	const handleNext = () => {
		isNew = false;
		console.log('isNew', isNew);
	};
</script>

{#if isNew}
	<InitSurvey on:click:next={() => handleNext()} />
{:else}
	<div class="w-full text-center text-whitePrimary bg-blackPrimary px-4 pb-56">
		<button
			on:click={calculation}
			class="w-[6rem] py-1 font-bold bg-white rounded-xl text-black text-[1.5rem]"
		>
			calc
		</button>
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
				className="w-[8rem] "
				disabled={false}
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
				<Input label={w.name} bind:valueN={w.value} className="w-[8rem]" id="name" type="number" />
			{/each}
		</div>

		<!-- HIDRO -->
		<h2 class="text-[2em] py-8">HYDROSTATIC TABLE INTERPOLATOR</h2>

		<Mean {openMean} {selectedOption} />

		<div class="w-full py-4">
			{#each categories as category}
				<div class="w-full">
					<div class="w-full pt-6 pb-1 text-greenAccent m-auto">{category.name}</div>
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
{/if}
