<script>
	import ArrowIcon from './ui/ArrowIcon.svelte';
	import ArrowIconBlack from './ui/ArrowIconBlack.svelte';
	import LessIcon from './ui/LessIcon.svelte';
	import PlusIcon from './ui/PlusIcon.svelte';
	import ModifyIcon from './ui/ModifyIcon.svelte';
	import StarIcon from './ui/StarIcon.svelte';
	import SaveIcon from './ui/SaveIcon.svelte';
	import HambIcon from './ui/HambIcon.svelte';

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
{#if icon === 'modify'}
	<span class="ms-auto"><ModifyIcon /></span>
{/if}
{#if icon === 'save'}
	<span class="ms-auto"><SaveIcon /></span>
{/if}
{#if icon === 'hamb'}
	<span class="ms-auto"><HambIcon /></span>
{/if}
