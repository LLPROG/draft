<script>
	import VesselForm from '@components/VesselForm.svelte';
	import { VesselsStorage, defaultValue } from '../../store/store';
	import { goto } from '$app/navigation';
	import { afterUpdate } from 'svelte';

	let vesselName = '';
	let isError = false;
	let isErrorName = false;
	let errors = [''];

	let error1 = 'please fill all fields';
	let errorName = 'please fill vessel name';

	let vessel = defaultValue;

	const handleClick = () => {
		errors = [''];
		isError = false;
		isErrorName = false;

		let print = vessel.start_value.every((v) => v.wasfocusedCount === true);

		if (!print || vesselName === '') {
			errors = [...errors, error1];

			if (vesselName === '') {
				errors = [...errors, errorName];
				isErrorName = true;
			}

			isError = true;
			return;
		}

		vessel.name = vesselName;
		$VesselsStorage = [...$VesselsStorage, vessel];

		goto('/home');
	};

	afterUpdate(() => {
		//reset values
		vessel = defaultValue;
		vesselName = '';
	});
</script>

<VesselForm
	on:click={handleClick}
	bind:isError
	bind:isErrorName
	bind:vesselName
	bind:vessel
	bind:errors
	isCreate={true}
/>
