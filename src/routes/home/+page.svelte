<script>
	import { Vessels, VesselsStorage } from '../../store/store';
	import Button from '@components/ui/Button.svelte';
	import LogoMain from '@components/ui/LogoMain.svelte';
	import { browser } from '$app/environment';
	import Popup from '@components/Popup.svelte';
	import Link from '@components/ui/Link.svelte';
	import { onMount } from 'svelte';
	import clsx from 'clsx';

	export let openPopup = false;

	let selectedVessel = {
		name: 'defaultValue'
	};

	const handleDelete = () => {
		$Vessels = $Vessels.filter((v) => v.name !== selectedVessel.name);
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

	<Link
		disabled={openPopup}
		href="/create-vessel"
		classProp="flex w-full"
		message="My Vessel"
		chooseType="primary"
		icon="plus"
		size="lg"
	/>

	<div
		class="w-full overflow-y-scroll max-h-[40vh] px-5 flex flex-col justify-start shadow-inner shadow-gray-500"
	>
		{#each $Vessels as vessel}
			{#if vessel.name !== 'defaultValue'}
				<Button
					on:click={() => {
						selectedVessel = vessel;
						console.log(selectedVessel);
						openPopup = true;
					}}
					chooseType="primary"
					icon="arrow"
					size="md"
					message={vessel?.name}
					classProp="border-b border-b-white w-full"
				/>
			{/if}
		{/each}
	</div>

	{#if openPopup && selectedVessel}
		<Popup bind:isOpen={openPopup}>
			<div class="w-full" slot="body">
				<Link
					href={`/vessel/${selectedVessel?.name}`}
					chooseType="secondary"
					icon="arrowBlack"
					size="md"
					message="Open"
					classProp={clsx('border-b border-b-black w-full')}
				/>
				<Button
					on:click={() => handleDelete()}
					chooseType="secondary"
					icon="arrowBlack"
					size="md"
					message="Delete"
					classProp="border-b border-b-black w-full"
				/>
			</div>
		</Popup>
	{/if}
</div>
