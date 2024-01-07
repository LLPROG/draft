<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import clsx from 'clsx';
	import { createEventDispatcher, onMount } from 'svelte';
	import Menu from './Menu.svelte';
	import Button from './ui/Button.svelte';
	import LogoNavbar from './ui/LogoNavbar.svelte';
	const dispatch = createEventDispatcher();

	export let isEditable = false;
	let init = false;
	let openMenu = false;

	$: route = $page.url.pathname;

	const goBackPage = () => {
		if (route.includes('/survey')) {
			goto(`${base}/vessel/${$page.params.id}`);
			return;
		}
		goto(`${base}/home`);
	};

	onMount(() => {
		setTimeout(() => {
			init = true;
		}, 100);
	});
</script>

<nav
	class={clsx(
		'w-full px-4 text-grayPrimary bg-blackPrimary bg-opacity-60 backdrop-blur-md z-50 opacity-0 fixed top-0 left-0',
		{
			'opacity-100': init
		}
	)}
>
	<div class="flex border-b-[1px] border-green border-opacity-40 py-4">
		<button on:click={() => goBackPage()}>
			<LogoNavbar />
		</button>

		{#if route.includes('/home')}
			<Button
				on:click={() => (openMenu = true)}
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

<Menu bind:openPopup={openMenu} />
