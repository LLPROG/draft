<script lang="ts">
	import VesselForm from '@components/VesselForm.svelte';
	import { VesselsStorage, defaultValue } from '../../store/store';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { v4 as uuidv4 } from 'uuid';
	import { onMount } from 'svelte';
	import type { Vessel } from '../../types/types';

	let isError = false;
	let isErrorName = false;
	let errors = [''];
	let pass = false;

	let error1 = 'please fill all fields';
	let errorName = 'please fill vessel name';
	let errorDuplicateName = 'vessel name already exists';

	let vessel: Vessel = defaultValue;
	let vesselName = '';
	let start_value = [
		{ name: 'light-ship', value: 0, wasfocusedCount: false },
		{ name: 'd-fwd-pp', value: 0, wasfocusedCount: false },
		{ name: 'lbp', value: 0, wasfocusedCount: false },
		{ name: 'd-mid-pp', value: 0, wasfocusedCount: false },
		{ name: 'lbm', value: 0, wasfocusedCount: false },
		{ name: 'd-aft-pp', value: 0, wasfocusedCount: false },
		{ name: 'keel-thk', value: 0, wasfocusedCount: false }
	];

	$: pass = start_value.every((v) => v.wasfocusedCount === true);

	const handleClick = () => {
		resetErrors();
		let error = chechErrors();
		if (error) return;

		vessel = {
			...vessel,
			id: uuidv4(),
			name: vesselName,
			start_value: start_value
		};

		$VesselsStorage = [vessel, ...$VesselsStorage];

		console.log('vessel:', vessel);

		goto(`${base}/home`);
	};

	function chechErrors() {
		if (!pass) {
			errors = [...errors, error1];
			isError = true;
		}

		if (vesselName === '') {
			errors = [...errors, errorName];
			isErrorName = true;
		}

		if ($VesselsStorage.some((v) => v.name === vesselName)) {
			errors = [...errors, errorDuplicateName];
			isErrorName = true;
		}

		if (isError || isErrorName) return true;
	}

	function resetData() {
		start_value.forEach((v) => {
			v.value = 0;
			v.wasfocusedCount = false;
		});
		vesselName = '';
	}

	function resetErrors() {
		isError = false;
		isErrorName = false;
		errors = [''];
	}

	onMount(() => {
		resetData();
	});
</script>

{#key vessel.id}
	<VesselForm
		on:click={() => handleClick()}
		bind:isError
		bind:isErrorName
		bind:vesselName
		bind:start_value
		bind:errors
		isCreate={true}
	/>
{/key}
