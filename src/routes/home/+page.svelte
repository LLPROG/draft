<script>
	import { Vessels } from '../../store/store';
	import Button from '@components/ui/Button.svelte';
	import LogoMain from '@components/ui/LogoMain.svelte';

	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Popup from '@components/Popup.svelte';

	onMount(() => {
		if (browser) {
			const storage = sessionStorage.getItem('Vessels') || '[]';
			if (storage?.length > 1) {
				Vessels.set(JSON.parse(storage));
			}
		}

		console.log($Vessels);
	});

	export let openPopup = false;
	let selectedVessel = {
		name: 'defaultValue'
	};

	const handleDelete = () => {
		$Vessels = $Vessels.filter((v) => v.name !== selectedVessel.name);
		openPopup = false;
	};
</script>

<div class="w-full text-green max-h-[90vh]">
	<!-- top-logo -->
	<div class="top-section flex justify-center items-center py-12">
		<LogoMain />
	</div>

	<Button
		disabled={openPopup}
		href="/create-vessel"
		classProp="flex w-full"
		message="My Fleet"
		chooseType="primary"
		icon="plus"
		size="lg"
		isButton={false}
	/>

	<div
		class="w-full overflow-y-scroll max-h-[40vh] px-5 flex flex-col justify-start shadow-inner shadow-gray-500"
	>
		{#each $Vessels as vessel}
			{#if vessel.name !== 'defaultValue'}
				<Button
					on:button:click={(e) => {
						selectedVessel = vessel;
						openPopup = true;
					}}
					isButton={true}
					chooseType="primary"
					icon="arrow"
					size="md"
					message={vessel.name}
					classProp="border-b border-b-white w-full"
				/>
			{/if}
		{/each}
	</div>

	{#if openPopup && selectedVessel}
		<Popup
			vessel={selectedVessel}
			bind:isOpen={openPopup}
			href={`vessel/${selectedVessel.name}`}
			on:delete={handleDelete}
		/>
	{/if}
</div>
