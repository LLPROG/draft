<script>
	import LogoNavbar from './ui/LogoNavbar.svelte';
	import Hamb from './ui/Hamb.svelte';
</script>

<nav class="w-full h-[12vh] p-4 text-grayPrimary">
	<div class="flex border-b-[1px] border-green border-opacity-40 py-2">
		<LogoNavbar />
		<button class="ms-auto flex justify-center items-center">
			<Hamb />
		</button>
	</div>
</nav>
