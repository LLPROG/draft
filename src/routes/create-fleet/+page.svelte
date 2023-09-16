<script>
	import Button from '@components/ui/Button.svelte';
	import Input from '@components/ui/Input.svelte';
	import LogoBigSheep from '@components/ui/LogoBigSheep.svelte';
	let valueN = 0;
	let waterDensityValue = 0;
	let openMean = false;
</script>

<div class="w-full text-center text-whitePrimary bg-blackPrimary px-4">
	<!-- DRAFTS -->
	<h2 class="text-[2em] py-4">Drafts</h2>
	<div class="w-full flex justify-around">
		<div class="flex flex-col gap-4">
			<Input className="w-[6rem]" disabled={true} id="name" type="number" />
			<Input className="w-[6rem]" disabled={true} id="name" type="number" />
			<Input className="w-[6rem]" disabled={true} id="name" type="number" />
		</div>

		<div>
			<LogoBigSheep divisor={2} />
		</div>

		<div class="flex flex-col gap-4">
			<Input className="w-[6rem]" disabled={true} id="name" type="number" />
			<Input className="w-[6rem]" disabled={true} id="name" type="number" />
			<Input className="w-[6rem]" disabled={true} id="name" type="number" />
		</div>
	</div>

	<!-- WATER DENSITY -->
	<h2 class="text-[2em] py-4">Water Density</h2>
	<div class="w-full flex justify-around items-center">
		<Button
			on:button:click={() => waterDensityValue--}
			isButton={true}
			chooseType="primary"
			icon="less"
			size="md"
		/>
		<Input
			className="w-[8rem]"
			disabled={true}
			id="name"
			type="number"
			bind:valueN={waterDensityValue}
		/>
		<Button
			on:button:click={() => waterDensityValue++}
			isButton={true}
			chooseType="primary"
			icon="plus"
			size="md"
		/>
	</div>

	<!-- WEIGHT -->
	<h2 class="text-[2em] py-4">Weight</h2>
	<div class="w-full grid grid-cols-2 gap-4 place-items-center">
		<Input label="Ballast" className="w-[8rem]" disabled={true} id="name" type="number" />
		<Input label="Fresh water" className="w-[8rem]" disabled={true} id="name" type="number" />
		<Input label="Fuel Oil" className="w-[8rem]" disabled={true} id="name" type="number" />
		<Input label="Diesel Oil" className="w-[8rem]" disabled={true} id="name" type="number" />
		<Input label="Lube Oil" className="w-[8rem]" disabled={true} id="name" type="number" />
		<Input label="Other" className="w-[8rem]" disabled={true} id="name" type="number" />
		<Input label="Other Cargo" className="w-[8rem]" disabled={true} id="name" type="number" />
		<Input label="Costant" className="w-[8rem]" disabled={true} id="name" type="number" />
	</div>

	<!-- SURVEY -->
	<h2 class="text-[2em] py-4">Survey</h2>

	<Button
		on:button:click={() => (openMean = true)}
		message="Quarter Mean"
		isButton={true}
		chooseType="primary"
		icon="arrow"
		size="md"
		classProp="w-full"
	/>
</div>
