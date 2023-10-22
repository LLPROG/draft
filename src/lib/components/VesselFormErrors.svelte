<script>
	export let errors = [''];
</script>

<div class="w-full p-2 flex flex-col gap-2 items-center">
	{#each errors as error}
		<p class="text-red-500 text-sm">{error}</p>
	{/each}
</div>
