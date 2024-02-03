<script>
	import { base } from '$app/paths';
	import Menu from '@components/Menu.svelte';
	import Navbar from '@components/Navbar.svelte';
	import Popup from '@components/Popup.svelte';
	import Wrapper from '@components/Wrapper.svelte';
	import Button from '@components/ui/Button.svelte';
	import LogoMain from '@components/ui/LogoMain.svelte';
	import Transition from '@lib/utils/transition/Transition.svelte';
	import { getContext, onMount } from 'svelte';
	import { VesselsStorage, mockData } from '../../store/store';

	export let openPopup = false;

	let indexVelles = getContext('indexVelles');
	let selectedVessel = getContext('selectedVessel');
	let openMenu = false;

	const handleDelete = () => {
		$VesselsStorage.splice($indexVelles, 1);
		$VesselsStorage = $VesselsStorage;
		openPopup = false;
	};

	onMount(() => {
		if ($VesselsStorage.length === 0) {
			$VesselsStorage.push(mockData);
			$VesselsStorage = $VesselsStorage;
		}
	});
</script>

<Transition>
	<div class="flex flex-col">
		<Navbar>
			<div slot="action">
				<Button chooseType="only-icon" icon="hamb" size="md" on:click={() => (openMenu = true)} />
			</div>
		</Navbar>
		<div class="top-section flex justify-center items-center py-[12svh]">
			<LogoMain />
		</div>
		<Wrapper
			wrapperClass={'w-full flex-1'}
			title="fleet"
			disabled={false}
			hasTitleAction={true}
			icon="plus"
			href={`${base}/create-vessel`}
		>
			<div
				slot="content"
				class="w-full overflow-y-scroll max-h-[35svh] py-1 max-h-100 gap-2 px-5 flex flex-col justfy-start"
			>
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
		</Wrapper>
	</div>
	<!-- top-logo -->

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
</Transition>

<Menu bind:openPopup={openMenu} />
