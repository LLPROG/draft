<script>
	import { base } from '$app/paths';
	import BotPlanCard from '@components/BotPlanCard.svelte';
	let features = [
		{
			title: '3rd MATE PLAN',
			price: '10$',
			isSecondActive: false,
			isThirdActive: false
		},
		{
			title: '2rd MATE PLAN',
			price: '30$',
			isSecondActive: true,
			isThirdActive: true,
			limitation: 'only for 3 vessels'
		},
		{
			title: 'CH. MATE PLAN',
			price: '50$',
			isSecondActive: true,
			isThirdActive: true,
			limitation: 'UNLIMITED'
		}
	];
</script>

<div
	class="w-full flex flex-col justify-center items-center gap-4 text-grayPrimary text-center px-12 bg-blackPrimary"
>
	<h1>Surveyor Plans</h1>
	<img src={`${base}/images/bot-icon.png`} alt="bot-icon" />
	<p>Enter the hydrostatic tables datas and calculate any draft survey quickly and easily.</p>
	<h2>Plans</h2>
	<div class="w-full flex flex-col gap-10 py-6 mb-20">
		{#each features as feature, index}
			<BotPlanCard
				title={feature.title}
				price={feature.price}
				isSecondActive={feature.isSecondActive}
				isThirdActive={feature.isThirdActive}
				limitation={feature.limitation}
				isActive={index === 1}
				on:click={() => {}}
			/>
		{/each}
	</div>
</div>
