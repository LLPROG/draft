<script>
	// @ts-nocheck

	export let options;
	export let unit;

	const addCaracter = (value) => {
		let precise = value?.toPrecision(4); //"6.123"
		var precValue = parseFloat(precise);
		let result = `${precValue} ${unit}`;
		return result;
	};
</script>

<div class="w-full rounded-2xl result py-4">
	<ul class="w-full">
		{#each options as option}
			<li class="w-full grid grid-cols-2 gap-2 text-[rgba(235,255,229,0.8)]">
				<label class="text-end w-full max-w-[11rem] truncate" for="name">{`${option.label}:`}</label
				>
				<input
					value={addCaracter(option.value)}
					class="text-start bg-transparent"
					id="name"
					type="text"
					disabled={true}
				/>
			</li>
		{/each}
	</ul>
</div>

<style>
	.result {
		background: rgba(224, 231, 241, 0.02);
		box-shadow: 0px 0px 4px 3px rgba(255, 255, 255, 0.05);
	}
</style>
