<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import clsx from 'clsx';
	import { createEventDispatcher, onMount } from 'svelte';
	import Menu from './Menu.svelte';
	import LogoNavbar from './ui/LogoNavbar.svelte';
	const dispatch = createEventDispatcher();

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
		'w-full fixed top-0 left-0 px-5 text-grayPrimary bg-blackPrimary bg-opacity-60 backdrop-blur-md z-50'
	)}
>
	<div class="flex w-full items-center border-b-[2px] border-[#43BA8A] py-4">
		<button class="basis-1/3" on:click={() => goBackPage()}>
			<LogoNavbar />
		</button>
		<div class="basis-1/3 text-center">
			<slot name="content" />
		</div>
		<div class="basis-1/3">
			<slot name="action" />
		</div>
	</div>
</nav>
