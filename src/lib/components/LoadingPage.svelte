<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import LogoBigSheep from '@components/ui/LogoBigSheep.svelte';
	import clsx from 'clsx';
	import { onMount } from 'svelte';

	let logoRef: Element;

	onMount(() => {
		setTimeout(() => {
			logoRef.classList.remove('animate-in');
			logoRef.classList.add('animate-out');
		}, 2000);

		setTimeout(() => {
			goto(`${base}/home`);
		}, 4000);
	});
</script>

<div class={clsx('w-full h-[100vh] relative')}>
	<div bind:this={logoRef} class="animate-in absolute origin-center left-[40%] top-[20%] z-50">
		<LogoBigSheep />
	</div>
</div>

<style>
	@keyframes in {
		0% {
			transform: translateY(200%);
			animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}
		65% {
			transform: translateY(-30%);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}

		100% {
			transform: translateY(0%);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
	}

	@keyframes out {
		100% {
			transform: translateY(-200%);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
		35% {
			transform: translateY(30%);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}

		0% {
			transform: translateY(0%);
			animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}
	.animate-in {
		animation: in 1s forwards;
	}

	.animate-out {
		animation: out 1s forwards;
	}
</style>
