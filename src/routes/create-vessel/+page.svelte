<script lang="ts">
	import VesselForm from '@components/VesselForm.svelte';
	import { VesselsStorage } from '../../store/store';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { v4 as uuidv4 } from 'uuid';
	import type { Vessel } from '../../types/types';

	let isError = false;
	let isErrorName = false;
	let errors = [''];

	let error1 = 'please fill all fields';
	let errorName = 'please fill vessel name';
	let errorDuplicateName = 'vessel name already exists';

	let vessel: Vessel;
	$: pass = vessel.start_value.every((v) => v.wasfocusedCount === true);

	const handleClick = () => {
		resetErrors();
		let error = chechErrors();
		if (error) return;

		vessel = {
			...vessel,
			id: uuidv4(),
			name: vessel.name
		};

		$VesselsStorage = [vessel, ...$VesselsStorage] as Vessel[];

		resetData();
		goto(`${base}/home`);
	};

	function chechErrors() {
		if (!pass) {
			errors = [...errors, error1];
			isError = true;
		}

		if (vessel.name === '') {
			errors = [...errors, errorName];
			isErrorName = true;
		}

		if ($VesselsStorage.some((v) => v.name === vessel.name)) {
			errors = [...errors, errorDuplicateName];
			isErrorName = true;
		}

		if (isError || isErrorName) return true;
	}

	function resetData() {
		vessel.start_value.forEach((v) => {
			v.value = 0;
			v.wasfocusedCount = false;
		});
		vessel = vessel;
		vessel.name = '';
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
	bind:vessel
	bind:errors
	isCreate={true}
/>
