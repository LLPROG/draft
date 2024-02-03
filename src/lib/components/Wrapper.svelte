<script>
	import clsx from 'clsx';
	import Button from './ui/Button.svelte';
	export let title = '';
	export let wrapperClass = '';
	export let titleClass = '';
	export let hasTitleAction = false;
	export let disabled = false;
	export let href = '';
	export let isButton = false;
	export let icon = '';
</script>

<div class={clsx('wrapper pb-4', wrapperClass)}>
	<div class="flex">
		{#if hasTitleAction}
			<Button
				classProp="flex w-full title text-whitePrimary p-8"
				chooseType="primary"
				message={title}
				{href}
				{icon}
				size="md"
				{isButton}
				bind:disabled
				on:click
			/>
		{:else}
			<h2 class={clsx('title text-center w-full text-whitePrimary py-6', titleClass)}>
				{title}
			</h2>
		{/if}
	</div>

	<div>
		<slot name="content" />
	</div>
</div>

<style>
	.wrapper {
		/* menu-default */
		border-radius: 12px;
		background: var(--opacity-primary-w-3, rgba(237, 234, 234, 0.03));
		backdrop-filter: blur(10px);
	}

	.title {
		font-size: 28px;
		font-style: normal;
		font-weight: 400;
		line-height: 23px; /* 82.143% */
		text-transform: uppercase;
	}
</style>
