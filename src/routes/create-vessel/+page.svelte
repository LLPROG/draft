<script>
	import VesselForm from '@components/VesselForm.svelte';
	import { VesselsStorage, defaultValue } from '../../store/store';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	let vesselName = '';
	let isError = false;
	let isErrorName = false;
	let errors = [''];

	let error1 = 'please fill all fields';
	let errorName = 'please fill vessel name';

	let vessel = defaultValue;

	$: pass = vessel.start_value.every((v) => v.wasfocusedCount === true);

	const handleClick = () => {
		resetErrors();

		if (!pass || vesselName === '') {
			chechErrors();
			return;
		} else {
			resetErrors();
		}

		vessel.name = vesselName;
		$VesselsStorage = [...$VesselsStorage, vessel];

		resetData();
		goto(`${base}/home`);
	};

	function chechErrors() {
		if (!pass) {
			errors = [...errors, error1];
			isError = true;
		} else {
			errors.splice(errors.indexOf(error1), 1);
			errors = errors;
			isError = false;
		}

		if (vesselName === '') {
			errors = [...errors, errorName];
			isErrorName = true;
		} else {
			errors.splice(errors.indexOf(errorName), 1);
			errors = errors;
			isErrorName = false;
		}
	}

	function resetData() {
		vessel.start_value.forEach((v) => {
			v.value = 0;
			v.wasfocusedCount = false;
		});
		vessel = vessel;
		vesselName = '';
		console.log('vessel', vessel);
	}

	function resetErrors() {
		isError = false;
		isErrorName = false;
		errors = [''];
	}
</script>

<VesselForm
	on:click={() => handleClick()}
	bind:isError
	bind:isErrorName
	bind:vesselName
	bind:vessel
	bind:errors
	isCreate={true}
/>
