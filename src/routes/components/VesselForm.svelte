<script>
	import Input from '../components/ui/Input.svelte';
	import Button from './ui/Button.svelte';
	import { Vessel, Vessels, VesselsStorage } from '../../store/store';
	import { goto } from '$app/navigation';

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

	let homeRoute = '/home';
	let isError = false;

	const handleClick = () => {
		let print = vessel.start_value.every((v) => v.wasfocusedCount === true);

		if (!print) {
			isError = true;
			console.log(isError);
			return;
		}

		console.log(vessel);
		Vessel.set(vessel);
		VesselsStorage.update((old) => {
			return [...old, vessel];
		});

		goto(homeRoute);
	};
</script>

<form class="w-full p-4" on:submit|preventDefault>
	<Input
		bind:wasfocused={$Vessel.wasNameFocused}
		bind:isError
		id="name"
		label="Vessel Name"
		type="text"
		bind:valueT={$Vessel.name}
		on:focus={() => {
			$Vessel.wasNameFocused = true;
		}}
	/>
	<div class="relative grid grid-cols-2 gap-4 pt-2">
		{#each vessel.start_value as { name, value, wasfocusedCount }}
			<Input
				bind:wasfocused={wasfocusedCount}
				bind:isError
				type="number"
				id={name}
				label={name}
				bind:valueN={value}
				on:focus={() => {
					wasfocusedCount = true;
				}}
			/>
		{/each}

		<Button
			classProp="absolute right-0 bottom-0"
			chooseType="secondary"
			message="save"
			icon=""
			isButton={true}
			on:button:click={handleClick}
		/>
	</div>
</form>
