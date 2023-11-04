<script>
	import LogoNavbar from './ui/LogoNavbar.svelte';
	import { page } from '$app/stores';
	import Button from './ui/Button.svelte';
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	const dispatch = createEventDispatcher();

	$: route = $page.url.pathname;

	const goBackPage = () => {
		if (route.includes('/survey')) {
			goto(`${base}/vessel/${$page.params.name}`);
			return;
		}
		goto('/home');
	};
</script>

<nav class="w-full h-[12vh] p-4 text-grayPrimary">
	<div class="flex border-b-[1px] border-green border-opacity-40 py-2">
		<button on:click={() => goBackPage()}>
			<LogoNavbar />
		</button>
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
