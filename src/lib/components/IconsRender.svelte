<script>
	import ArrowIcon from './ui/icons/ArrowIcon.svelte';
	import ArrowIconBlack from './ui/icons/ArrowIconBlack.svelte';
	import LessIcon from './ui/icons/LessIcon.svelte';
	import PlusIcon from './ui/icons/PlusIcon.svelte';
	import ModifyIcon from './ui/icons/ModifyIcon.svelte';
	import StarIcon from './ui/icons/StarIcon.svelte';
	import SaveIcon from './ui/icons/SaveIcon.svelte';
	import HambIcon from './ui/icons/HambIcon.svelte';
	import UncheckIcon from './ui/icons/UncheckIcon.svelte';
	import CheckIcon from './ui/icons/CheckIcon.svelte';
	import EditRowIcon from './ui/icons/EditRowIcon.svelte';
	import DeleteRowIcon from './ui/icons/DeleteRowIcon.svelte';
	import LoadCsvIcon from './ui/icons/LoadCsvIcon.svelte';
	import CloseIcon from './ui/icons/CloseIcon.svelte';
	import AddRowIcon from './ui/icons/AddRowIcon.svelte';
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
{#if icon === 'edit-row'}
	<span class="ms-auto"><EditRowIcon /></span>
{/if}
{#if icon === 'delete-row'}
	<span class="ms-auto"><DeleteRowIcon /></span>
{/if}
{#if icon === 'add-row'}
	<span class="ms-auto"><AddRowIcon /></span>
{/if}
{#if icon === 'load-csv'}
	<span class="ms-auto"><LoadCsvIcon /></span>
{/if}
{#if icon === 'check'}
	<span><CheckIcon /></span>
{/if}
{#if icon === 'uncheck'}
	<span><UncheckIcon /></span>
{/if}
{#if icon === 'close'}
	<span><CloseIcon /></span>
{/if}
