<script>
	import VesselForm from '@components/VesselForm.svelte';
	import { VesselsStorage, defaultValue } from '../../store/store';
	import { goto } from '$app/navigation';

	let vesselName = '';
	let isError = false;

	let vessel = defaultValue;

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
