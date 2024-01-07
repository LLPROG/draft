<script>
	import { VesselsStorage, mockData } from '../../store/store';
	import Button from '@components/ui/Button.svelte';
	import LogoMain from '@components/ui/LogoMain.svelte';
	import Popup from '@components/Popup.svelte';
	import { getContext } from 'svelte';
	import { base } from '$app/paths';

	export let openPopup = false;

	let indexVelles = getContext('indexVelles');
	let selectedVessel = getContext('selectedVessel');

	const handleDelete = () => {
		$VesselsStorage.splice($indexVelles, 1);
		$VesselsStorage = $VesselsStorage;
		openPopup = false;
	};

	const addMock = () => {
		$VesselsStorage.push(mockData);
		$VesselsStorage = $VesselsStorage;
	};
</script>

<div class="w-full text-green px-10">
	<!-- top-logo -->
	<div class="top-section flex justify-center items-center py-7">
		<LogoMain />
	</div>

	<Button
		disabled={openPopup}
		href={`${base}/create-vessel`}
		classProp="flex w-full"
		message="My Fleet"
		chooseType="primary"
		icon="plus"
		size="md"
		isButton={false}
	/>

	<Button
		classProp="flex w-full"
		message="ADD MOCK"
		chooseType="secondary"
		icon=""
		size="md"
		isButton={true}
		on:click={() => addMock()}
	/>

	<div class="w-full overflow-y-scroll max-h-[40vh] py-6 gap-2 px-5 flex flex-col justify-start">
		{#each $VesselsStorage as vessel, i}
			<Button
				on:click={() => {
					$indexVelles = i;
					$selectedVessel = vessel;
					console.log('selectedVessel', $selectedVessel);
					openPopup = true;
				}}
				chooseType="secondary"
				icon="arrow"
				size="md"
				message={vessel?.name}
			/>
		{/each}
	</div>

	{#if openPopup && selectedVessel}
		<Popup bind:isOpen={openPopup}>
			<div class="w-full" slot="body">
				<Button
					href={`${base}/vessel/${$selectedVessel?.id}`}
					isButton={false}
					chooseType="tertiary"
					icon="arrowBlack"
					size="md"
					message="Open"
				/>
				<Button
					on:click={() => handleDelete()}
					chooseType="tertiary"
					icon="arrowBlack"
					size="md"
					message="Delete"
				/>
			</div>
		</Popup>
	{/if}
</div>
