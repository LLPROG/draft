<script>
	import { page } from '$app/stores';
	import InitSurvey from '@components/InitSurvey.svelte';
	import Mean from '@components/Mean.svelte';
	import ResultCard from '@components/ResultCard.svelte';
	import Button from '@components/ui/Button.svelte';
	import Input from '@components/ui/Input.svelte';
	import LogoBigSheep from '@components/ui/LogoBigSheep.svelte';
	import {
		calc,
		getFinals,
		getFinalsFormule,
		getMean,
		getMeanCorrected,
		getTableResult
	} from '@lib/utils/calculation';
	import { uploadCVS } from '@lib/utils/uploadCSV';
	import { VesselsStorage, defaultValue } from '../../../../../store/store';

	let waterDensityValue = 0;
	let openMean = false;
	let selectedMean = 'Quarter Mean';
	let COSTANT_USER = 0;

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

		const LIGHTSHIP = vessel.start_value[0].value;
		const LBP = vessel.start_value[2].value;
		const KILL_THK = vessel.start_value[6].value;

		const MEAN_VARIABLE_DELTA = 0.5;

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

		const meanCorrected = getMeanCorrected(result.mean, selectedMean, KILL_THK);
		const meanCorrectedMajor = meanCorrected + MEAN_VARIABLE_DELTA;
		const meanCorrectedMinor = meanCorrected - MEAN_VARIABLE_DELTA;

		const TABLE = getTableResult(vessel, meanCorrected, false);
		const MTC1 = getTableResult(vessel, meanCorrectedMajor, true);
		const MTC2 = getTableResult(vessel, meanCorrectedMinor, true);

		const { DENSITY_CORRECTION, FINAL_DISPLACEMENT, TRIM_CORRECTION_1, TRIM_CORRECTION_2 } =
			getFinalsFormule(
				result.trim,
				TABLE.TPC,
				TABLE.LCF,
				LBP,
				MTC1,
				MTC2,
				TABLE.DISPLACEMENT,
				waterDensityValue
			);

		const { CARGO, COSTANT, DWT, DEDUCTIONS } = getFinals(
			FINAL_DISPLACEMENT,
			LIGHTSHIP,
			COSTANT_USER,
			weight
		);

		console.log('TABLE', TABLE);
		console.log('MTC1', MTC1);
		console.log('MTC2', MTC2);

		console.log('DENSITY_CORRECTION', DENSITY_CORRECTION);
		console.log('FINAL_DISPLACEMENT', FINAL_DISPLACEMENT);
		console.log('TRIM_CORRECTION_1', TRIM_CORRECTION_1);
		console.log('TRIM_CORRECTION_2', TRIM_CORRECTION_2);

		console.log('CARGO', CARGO);
		console.log('COSTANT', COSTANT);
		console.log('DWT', DWT);

		// TRIM
		trimResult[0].value = result.trim;
		trimResult[1].value = 0; // TODO: Hogging
		trimResult[2].value = getMean(selectedMean, result.mean);
		trimResult[3].value = KILL_THK;
		trimResult[4].value = meanCorrected;

		// DISPLACEMENT
		displacementResult[0].value = TABLE.DIS;
		displacementResult[1].value = TABLE.TPC;
		displacementResult[2].value = TABLE.LCF;
		displacementResult[3].value = MTC1;
		displacementResult[4].value = MTC2;
		displacementResult[5].value = meanCorrected;

		// CORRECTIONS
		correctionsResult[0].value = TRIM_CORRECTION_1;
		correctionsResult[1].value = TRIM_CORRECTION_2;
		correctionsResult[2].value = DENSITY_CORRECTION;

		// FINAL DISPLACEMENT
		finalDisplacementResult[0].value = FINAL_DISPLACEMENT;
		finalDisplacementResult[1].value = LIGHTSHIP;
		finalDisplacementResult[2].value = DWT;

		// WEIGHT
		weightResult[0].value = weight[0].value;
		weightResult[1].value = weight[1].value;
		weightResult[2].value = weight[2].value;
		weightResult[3].value = weight[3].value;
		weightResult[4].value = weight[4].value;
		weightResult[5].value = weight[5].value;
		weightResult[6].value = weight[6].value;
		weightResult[7].value = DEDUCTIONS;

		//salvo i dati su localstorage
		$VesselsStorage[vesselIndex] = {
			...vessel,
			results: {
				trimResult,
				displacementResult,
				correctionsResult,
				finalDisplacementResult,
				weightResult: weightResult,
				constantR: [{ label: 'Costant', value: COSTANT_USER }]
			}
		};

		vessel = $VesselsStorage[vesselIndex];
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
	$: draftRight = vessel?.draftRight || defaultValue.draftRight;
	$: weight = vessel?.weight || defaultValue.weight;
	$: waterDensityValue = defaultValue.waterDensityValue || 0;
	$: vesselStatus = vessel?.status || 'undefined';

	$: trimResult = vessel?.results?.trimResult || defaultValue.results.trimResult;
	$: displacementResult =
		vessel?.results?.displacementResult || defaultValue.results.displacementResult;
	$: correctionsResult =
		vessel?.results?.correctionsResult || defaultValue.results.correctionsResult;
	$: finalDisplacementResult =
		vessel?.results?.finalDisplacementResult || defaultValue.results.finalDisplacementResult;
	$: weightResult = vessel?.results?.weightResult || defaultValue.results.weightResult;
	$: constantR = vessel?.results?.constantR || defaultValue.results.constantR;
</script>

{#if vesselStatus === 'undefined'}
	<InitSurvey />
{:else}
	<div class="w-full text-center text-whitePrimary px-4 pb-56">
		<!-- FOR TESTING -->
		<div class="w-full flex justify-around items-center">
			<button
				on:click={calculation}
				class="w-[6rem] py-1 font-bold bg-white rounded-xl text-black text-[1.5rem]"
			>
				calc
			</button>
			<input
				placeholder=""
				type="file"
				accept=".csv"
				on:change={(e) => uploadCVS(e, $VesselsStorage, vesselIndex)}
			/>
		</div>

		<!-- DRAFTS -->
		<h2 class="text-[2em] font-bold py-4">Drafts</h2>
		<div class="w-full flex justify-around">
			<div class="flex flex-col gap-4">
				{#each draftLeft as A}
					<Input bind:valueN={A.value} className="w-[6rem]" type="number" />
				{/each}
			</div>

			<div>
				<LogoBigSheep divisor={1.5} />
			</div>

			<div class="flex flex-col gap-4">
				{#each draftRight as B}
					<Input bind:valueN={B.value} className="w-[6rem]" type="number" />
				{/each}
			</div>
		</div>

		<!-- WATER DENSITY -->
		<h2 class="text-[2em] font-bold py-4">Water Density</h2>
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
		<h2 class="text-[2em] font-bold">Weight</h2>
		<div class="w-full grid grid-cols-2 gap-4 place-items-center pb-4">
			{#each weight as w}
				<Input label={w.name} bind:valueN={w.value} className="w-[8rem]" id="name" type="number" />
			{/each}
		</div>

		<!-- HIDRO 
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

		- SURVEY -
		<h2 class="text-[2em] py-8">SURVEY</h2>

		<Mean {openMean} bind:selectedOption />

		<div class="w-full py-6 text-greenAccent">
			<h1 class="text-[1.3em]">SURVEY</h1>
			<p>(detailed)</p>
		</div>

		-->

		<Mean customClass="my-4" {openMean} bind:selectedOption={selectedMean} />

		<!-- RESULT -->
		<div class="w-full flex flex-col justify-center items-center gap-4">
			<ResultCard bind:options={trimResult} unit="m" />
			<ResultCard bind:options={displacementResult} unit="M" />
			<ResultCard bind:options={correctionsResult} unit="M" />
			<ResultCard bind:options={finalDisplacementResult} unit="M" />
			<ResultCard bind:options={weightResult} unit="M" />
			<ResultCard bind:options={constantR} unit="M" />
		</div>
	</div>
{/if}
