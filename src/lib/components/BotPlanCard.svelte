<script>
	import clsx from 'clsx';
	import IconsRender from './IconsRender.svelte';
	import ButtonPlan from './ui/ButtonPlan.svelte';
	export let title = '3rd MATE PLAN';
	export let price = '10$';
	export let isSecondActive = false;
	export let isThirdActive = false;
	export let limitation = '';
	export let isActive = false;

	$: iconSecond = isSecondActive ? 'check' : 'uncheck';
	$: iconThird = isThirdActive ? 'check' : 'uncheck';
</script>

<ButtonPlan bind:isActive on:click>
	<div class="w-full" slot="content">
		<div class="w-full flex items-center">
			<h3 class="pl-16">{title}</h3>
			<p class="ml-auto text-[1.875em] font-bold">{price}</p>
		</div>
		<div class="flex flex-col gap-4">
			<div class="flex items-center gap-2 text-[0.8125em]">
				<IconsRender icon="check" />
				<p>Unlimited manual data entries</p>
			</div>
			<div
				class={clsx('flex items-center gap-2 text-[0.8125em]', {
					'opacity-50': !isSecondActive
				})}
			>
				<IconsRender icon={iconSecond} />
				<p>Share Draft Survey results</p>
			</div>
			<div
				class={clsx('flex items-center gap-2 text-[0.8125em]', {
					'opacity-50': !isThirdActive
				})}
			>
				<IconsRender icon={iconThird} />
				<div class="w-full text-start">
					<p>Upload CSV files for quick entry</p>
					{#if limitation !== ''}<p class="text-[0.5em]">{`(${limitation})`}</p>{/if}
				</div>
			</div>
		</div>
	</div>
</ButtonPlan>
