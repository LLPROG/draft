<script>
	import VesselForm from '@components/VesselForm.svelte';
	import { VesselsStorage } from '../../store/store';
	import { goto } from '$app/navigation';

	let vesselName = '';
	let isError = false;
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

	$: vessel = {
		name: 'defaultValue',
		wasNameFocused: false,
		start_value: [
			{ name: 'light-ship', value: 0, wasfocusedCount: false },
			{ name: 'd-fwd-pp', value: 0, wasfocusedCount: false },
			{ name: 'lbp', value: 0, wasfocusedCount: false },
			{ name: 'd-mid-pp', value: 0, wasfocusedCount: false },
			{ name: 'lbm', value: 0, wasfocusedCount: false },
			{ name: 'd-aft-pp', value: 0, wasfocusedCount: false },
			{ name: 'keel-thk', value: 0, wasfocusedCount: false }
		],
		categories: [...categories],
		draftsA: [...draftsA],
		draftsB: [...draftsB],
		weight: [...weight],
		waterDensityValue: 0
	};

	const handleClick = () => {
		let print = vessel.start_value.every((v) => v.wasfocusedCount === true);

		if (!print) {
			isError = true;
			console.log(isError);
			return;
		}

		vessel.name = vesselName;
		$VesselsStorage = [...$VesselsStorage, vessel];

		goto('/home');

		console.log('save');
	};
</script>

<VesselForm on:click={handleClick} bind:isError bind:vesselName bind:vessel isCreate={true} />
