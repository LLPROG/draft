<script>
	import '../../app.css';
	import { Vessels } from '../../store/store';
	import Button from '../components/ui/Button.svelte';
	import LogoMain from '../components/ui/LogoMain.svelte';

	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import Popup from '../components/Popup.svelte';

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
</script>

<div class="w-full text-green max-h-[90vh]">
	<!-- top-logo -->
	<div class="top-section flex justify-center items-center py-14">
		<LogoMain />
	</div>

	<Button
		href="/create-vessel"
		classProp="flex w-full"
		message="My Fleet"
		chooseType="primary"
		icon="plus"
		size="lg"
	/>

	<div
		class="w-full overflow-y-scroll max-h-[37vh] px-5 flex flex-col justify-start shadow-inner shadow-gray-500"
	>
		{#each $Vessels as vessel}
			{#if vessel.name !== 'defaultValue'}
				<Button
					href={`/vessel/${vessel.name}`}
					isButton={false}
					chooseType="primary"
					icon="star"
					size="md"
					message={vessel.name}
					classProp="border-b border-b-white w-full"
				/>
			{/if}
		{/each}
	</div>

	{#if openPopup}
		<Popup />
	{/if}
	<a href="/home">Back</a>
</div>
