<script>
	import ArrowIcon from './ui/ArrowIcon.svelte';
	import ArrowIconBlack from './ui/ArrowIconBlack.svelte';
	import LessIcon from './ui/LessIcon.svelte';
	import PlusIcon from './ui/PlusIcon.svelte';
	import StarIcon from './ui/StarIcon.svelte';

	export let icon = 'plus';
</script>

{#if icon === 'plus'}
	<span class="ms-auto"><PlusIcon /></span>
{/if}
{#if icon === 'star'}
	<span class="ms-auto"><StarIcon /></span>
{/if}
{#if icon === 'arrow'}
	<span class="ms-auto"><ArrowIcon /></span>
{/if}
{#if icon === 'arrowBlack'}
	<span class="ms-auto"><ArrowIconBlack /></span>
{/if}
{#if icon === 'less'}
	<span class="ms-auto"><LessIcon /></span>
{/if}
