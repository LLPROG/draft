<script>
	import { Vessels, VesselsStorage } from '../../store/store';
	import Button from '@components/ui/Button.svelte';
	import LogoMain from '@components/ui/LogoMain.svelte';
	import { browser } from '$app/environment';
	import Popup from '@components/Popup.svelte';
	import { onMount, getContext } from 'svelte';

	export let openPopup = false;

	let indexVelles = getContext('indexVelles');
	let selectedVessel = getContext('selectedVessel');

	const handleDelete = () => {
		$Vessels.splice($indexVelles, 1);
		$Vessels = $Vessels;
		$VesselsStorage = $Vessels;
		openPopup = false;
	};

	onMount(() => {
		if (browser) {
			const storage = sessionStorage.getItem('Vessels') || '[]';
			if (storage?.length > 1) {
				$Vessels = [...JSON.parse(storage)];
			}
		}

		console.log($Vessels);
	});
</script>

<div class="w-full text-green">
	<!-- top-logo -->
	<div class="top-section flex justify-center items-center py-12">
		<LogoMain />
	</div>

	<Button
		disabled={openPopup}
		href="/create-vessel"
		classProp="flex w-full"
		message="My Vessel"
		chooseType="primary"
		icon="plus"
		size="lg"
		isButton={false}
	/>

	<div class="w-full overflow-y-scroll max-h-[40vh] py-6 gap-2 px-5 flex flex-col justify-start">
		{#each $Vessels as vessel, i}
			{#if vessel.name !== 'defaultValue'}
				<Button
					on:click={() => {
						$indexVelles = i;
						$selectedVessel = vessel;
						console.log($selectedVessel);
						openPopup = true;
					}}
					chooseType="secondary"
					icon="arrow"
					size="md"
					message={vessel?.name}
				/>
			{/if}
		{/each}
	</div>

	{#if openPopup && selectedVessel}
		<Popup bind:isOpen={openPopup}>
			<div class="w-full" slot="body">
				<Button
					href={`/vessel/${$selectedVessel?.name}`}
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
