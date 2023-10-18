<script>
	import { page } from '$app/stores';
	import { VesselsStorage } from '../../store/store';
	import Button from './ui/Button.svelte';
	import Input from './ui/Input.svelte';
	import LogoBigSheep from './ui/LogoBigSheep.svelte';
	import RadioList from './ui/RadioList.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let options = ['Initial', 'Intermediate', 'Final'];
	export let selectedOption = 'Initial';

	export let data = {
		voy: NaN,
		year: NaN,
		Port: ''
	};

	let vesselName = $page.params.name;
	$: vessel = $VesselsStorage.find((v) => v.name === vesselName) || undefined;

	const handleClick = () => {
		if (vessel) {
			$VesselsStorage[$VesselsStorage.findIndex((v) => v.name === vesselName)] = {
				...vessel,
				status: selectedOption,
				initialData: data
			};
		}
		dispatch('click:next');
	};
</script>

<div class="w-full text-white text-center p-2 relative">
	<h1 class="w-full p-2 py-4 text-[2rem]">NEW SURVEY</h1>

	<div class="w-full p-2 py-4 flex justify-center items-center gap-6">
		<div class="basis-2/3 flex flex-col gap-8">
			<!-- FORM -->
			<div class="form grid grid-cols-2 gap-4 text-start">
				<Input label="Voy Nr" bind:valueN={data.voy} className="w-full" id="name" type="number" />
				<Input label="Year" bind:valueN={data.year} className="w-full" id="name" type="number" />
				<Input
					label="Port"
					bind:valueT={data.Port}
					className="w-full col-span-2"
					id="name"
					type="text"
				/>
			</div>

			<!-- RADIO LIST -->
			<div class="level w-full">
				<RadioList bind:options bind:selectedOption />
			</div>

			<!-- BUTTON -->
			<Button
				spaceAll={false}
				on:click={() => handleClick()}
				chooseType="for-form"
				icon=""
				size="md"
				message="Next"
				classProp="max-w-[10rem] !static"
			/>
		</div>
		<div class="basis-1/3 flex justify-center items-center">
			<LogoBigSheep />
		</div>
	</div>
</div>
