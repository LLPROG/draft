<script>
	import Navbar from './components/Navbar.svelte';
	import { page } from '$app/stores';
</script>

<div class="bg-blackPrimary h-[100vh]">
	{#if $page.url.pathname !== '/'}
		<Navbar />
	{/if}

	<slot />
</div>
