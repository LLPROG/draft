<script>
	import ArrowIcon from './ui/ArrowIcon.svelte';
	import ArrowIconBlack from './ui/ArrowIconBlack.svelte';
	import LessIcon from './ui/LessIcon.svelte';
	import PlusIcon from './ui/PlusIcon.svelte';
	import ModifyIcon from './ui/ModifyIcon.svelte';
	import StarIcon from './ui/StarIcon.svelte';
	import SaveIcon from './ui/SaveIcon.svelte';
	import HambIcon from './ui/HambIcon.svelte';
	import UncheckIcon from './ui/UncheckIcon.svelte';
	import CheckIcon from './ui/CheckIcon.svelte';
	import EditRowIcon from './ui/EditRowIcon.svelte';
	import DeleteRowIcon from './ui/DeleteRowIcon.svelte';
	import LoadCsvIcon from './ui/LoadCsvIcon.svelte';
	import AddRowIcon from './ui/AddRowIcon.svelte';
	import CloseIcon from './ui/CloseIcon.svelte';

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
