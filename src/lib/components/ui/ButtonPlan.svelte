<script>
	import IconsRender from '@components/IconsRender.svelte';
	import { createEventDispatcher } from 'svelte';
	import BotPlanIcon from './BotPlanIcon.svelte';
	import clsx from 'clsx';
	export let isActive = false;
	const dispatch = createEventDispatcher();
</script>

<button
	class={clsx('w-full flex items-center px-4 py-2 relative', {
		'plan-active': isActive,
		plan: !isActive
	})}
	on:click={() => {
		dispatch('click');
	}}
>
	<div class="absolute left-4 -top-5">
		<BotPlanIcon />
	</div>
	<div class="w-full">
		<slot name="content" />
	</div>
	<IconsRender icon="arrow" />
</button>

<style>
	.plan {
		border-radius: 0.75rem;
		background: linear-gradient(95deg, rgba(133, 233, 108, 0.1) 0%, rgba(61, 186, 111, 0.1) 100%);
	}
	.plan-active {
		border-radius: 0.75rem;
		color: black;
		background: linear-gradient(
			95.14deg,
			rgba(133, 233, 108, 0.7) 0%,
			rgba(61, 186, 111, 0.7) 100%
		);
		/* vetro */
		backdrop-filter: blur(10px);
		scale: 1.08;
	}
</style>
