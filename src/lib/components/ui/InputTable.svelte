<script>
	import clsx from 'clsx';

	export let value = NaN;
	export let disabled = true;
</script>

<li class="w-full">
	<input
		class={clsx('bg-transparent w-16 px-2 py-1', {
			'pointer-events-none': disabled
		})}
		type="number"
		{value}
	/>
</li>
