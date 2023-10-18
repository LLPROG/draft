<script>
	import LogoNavbar from './ui/LogoNavbar.svelte';
	import { page } from '$app/stores';
	import Button from './ui/Button.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let route = $page.url.pathname;

	console.log('route', route);
</script>

<nav class="w-full h-[12vh] p-4 text-grayPrimary">
	<div class="flex border-b-[1px] border-green border-opacity-40 py-2">
		<LogoNavbar />
		{#if route.includes('/survey')}
			<Button
				on:click={() => dispatch('save')}
				spaceAll={false}
				chooseType="only-icon"
				icon="save"
				size="md"
				classProp="ml-auto"
			/>
		{/if}
	</div>
</nav>
