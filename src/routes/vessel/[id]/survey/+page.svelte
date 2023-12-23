<script>
	import Mean from '@components/Mean.svelte';
	import ResultCard from '@components/ResultCard.svelte';
	import Button from '@components/ui/Button.svelte';
	import Input from '@components/ui/Input.svelte';
	import LogoBigSheep from '@components/ui/LogoBigSheep.svelte';
	import { calc, getMeanCorrected, getTableResult, getTableValues } from '@lib/utils/calculation';
	import { VesselsStorage, defaultValue } from '../../../../store/store';
	import { page } from '$app/stores';
	import InitSurvey from '@components/InitSurvey.svelte';

	let waterDensityValue = 0;
	let openMean = false;
	let selectedOption = 'Quarter Mean';

	const calculation = () => {
		if (!vessel) return;

		//salvo i dati su localstorage
		$VesselsStorage[vesselIndex] = {
			...vessel,
			categories,
			draftLeft,
			draftRight,
			weight,
			waterDensityValue
		};

		vessel = $VesselsStorage[vesselIndex];

		let result = calc(
			draftLeft[0].value,
			draftLeft[1].value,
			draftLeft[2].value,
			draftRight[0].value,
			draftRight[1].value,
			draftRight[2].value,
			D,
			vessel.start_value[4].value
		);

		let meanCorrected = getMeanCorrected(
			result.mean,
			selectedOption,
			vessel?.start_value[6]?.value
		);

		let meanCorrectedMajor = meanCorrected + 0.5;
		let meanCorrectedMinor = meanCorrected - 0.5;

		let TABLE = getTableResult(vessel, meanCorrected, false);
		let MTC1 = getTableResult(vessel, meanCorrectedMajor, true);
		let MTC2 = getTableResult(vessel, meanCorrectedMinor, true);

		console.log('TABLE', TABLE);
		console.log('MTC1', MTC1);
		console.log('MTC2', MTC2);
	};

	let vesselId = $page.params.id;
	let vesselIndex = $VesselsStorage.findIndex((v) => v.id === vesselId);

	$: vessel = $VesselsStorage.find((v) => v.id === vesselId) || undefined;

	$: D = [
		vessel?.start_value[1]?.value, //Dfwd
		vessel?.start_value[3]?.value, // Dmid
		vessel?.start_value[5]?.value // Daft
	];

	$: categories = vessel?.categories || defaultValue.categories;
	$: draftLeft = vessel?.draftLeft || defaultValue.draftLeft;
	$: draftRight = vessel?.draftRight || defaultValue.draftsRight;
	$: weight = vessel?.weight || defaultValue.weight;
	$: waterDensityValue = defaultValue.waterDensityValue || 0;
	$: vesselStatus = vessel?.status || 'undefined';
</script>

{#if vesselStatus === 'undefined'}
	<InitSurvey />
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
				{#each draftLeft as A}
					<Input bind:valueN={A.value} className="w-[6rem]" id="name" type="number" />
				{/each}
			</div>

			<div>
				<LogoBigSheep divisor={2} />
			</div>

			<div class="flex flex-col gap-4">
				{#each draftRight as B}
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

		<Mean {openMean} bind:selectedOption />

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

		<Mean {openMean} bind:selectedOption />

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
