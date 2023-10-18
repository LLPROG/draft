<script>
	import clsx from 'clsx';

	export let options = [''];
	export let selectedOption = options[0];
</script>

<div class="w-full flex flex-col gap-3 py-2">
	{#each options as option (option)}
		<button
			on:click={() => {
				selectedOption = option;
			}}
			class="w-full flex justify-start items-center gap-2"
		>
			<div
				class={clsx(
					'radio w-5 h-5 rounded-full border-[4px] border-gray-300 bg-[#485544] outline-none text-transparent',
					{
						'bg-greenAccent': selectedOption === option
					}
				)}
				id={option}
			/>
			<div
				class={clsx({
					'text-greenAccent': selectedOption === option
				})}
			>
				{option}
			</div>
		</button>
	{/each}
</div>

<style>
	.radio {
		border: 5px solid #485544;
		box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
</style>
