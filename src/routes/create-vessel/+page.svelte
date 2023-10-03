<script>
	import VesselForm from '@components/VesselForm.svelte';
	import { VesselsStorage, Vessel } from '../../store/store';
	import { goto } from '$app/navigation';

	let vesselName = '';
	let isError = false;
	$: vessel = {
		name: '',
		wasNameFocused: false,
		start_value: [
			{ name: 'light-ship', value: 0, wasfocusedCount: false },
			{ name: 'd-fwd-pp', value: 0, wasfocusedCount: false },
			{ name: 'lbp', value: 0, wasfocusedCount: false },
			{ name: 'd-mid-pp', value: 0, wasfocusedCount: false },
			{ name: 'lbm', value: 0, wasfocusedCount: false },
			{ name: 'd-aft-pp', value: 0, wasfocusedCount: false },
			{ name: 'keel-thk', value: 0, wasfocusedCount: false }
		]
	};

	const handleClick = () => {
		let print = vessel.start_value.every((v) => v.wasfocusedCount === true);

		if (!print) {
			isError = true;
			console.log(isError);
			return;
		}

		vessel.name = vesselName;
		$Vessel = vessel;
		$VesselsStorage = [...$VesselsStorage, vessel];

		goto('/home');

		console.log('save');
	};
</script>

<VesselForm on:click={handleClick} bind:isError bind:vesselName bind:vessel isCreate={true} />
