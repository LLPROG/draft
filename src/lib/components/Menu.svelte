<script>
	import Popup from './Popup.svelte';
	import Button from './ui/Button.svelte';
	import { base } from '$app/paths';
	export let openPopup = false;
</script>

{#if openPopup}
	<Popup variant="menu" bind:isOpen={openPopup}>
		<div slot="header" class="flex items-center">
			<h2 class="text-blackPrimary text-base font-bold text-center">Menu</h2>
			<Button
				on:click={() => (openPopup = false)}
				chooseType="only-icon"
				icon="close"
				size="sm"
				classProp="ms-auto !w-fit"
			/>
		</div>

		<div class="w-full" slot="body">
			<Button
				href={`${base}/instructons`}
				isButton={false}
				chooseType="tertiary"
				icon="arrowBlack"
				size="md"
				message="Instrunctions"
			/>
			<Button
				href={`${base}/bot-plan`}
				isButton={false}
				chooseType="tertiary"
				icon="arrowBlack"
				size="md"
				message="Get Surveyor-Bot"
			/>
		</div>
	</Popup>
{/if}
