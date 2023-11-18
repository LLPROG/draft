<script>
	import LogoNavbar from './ui/LogoNavbar.svelte';
	import { page } from '$app/stores';
	import Button from './ui/Button.svelte';
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	const dispatch = createEventDispatcher();

	export let isEditable = false;

	$: route = $page.url.pathname;

	const goBackPage = () => {
		if (route.includes('/survey')) {
			goto(`${base}/vessel/${$page.params.id}`);
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

		{#if route.includes('/home')}
			<Button
				on:click={() => dispatch('modify')}
				spaceAll={false}
				chooseType="only-icon"
				icon="hamb"
				size="md"
				classProp="ml-auto"
			/>
		{/if}

		{#if route.includes('/create-vessel')}
			<Button
				on:click={() => dispatch('modify')}
				spaceAll={false}
				chooseType="only-icon"
				icon="save"
				size="md"
				classProp="ml-auto"
			/>
		{/if}

		{#if route.includes('/vessel')}
			{#if !isEditable}
				<Button
					on:click={() => (isEditable = true)}
					spaceAll={false}
					chooseType="only-icon"
					icon="modify"
					size="md"
					classProp="ml-auto"
				/>
			{:else}
				<Button
					on:click={() => (isEditable = false)}
					spaceAll={false}
					chooseType="only-icon"
					icon="save"
					size="md"
					classProp="ml-auto"
				/>
			{/if}
		{/if}
	</div>
</nav>
