<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import VesselForm from '@components/VesselForm.svelte';
	import Button from '@components/ui/Button.svelte';
	import { getContext, onMount } from 'svelte';
	import { VesselsStorage, defaultValue } from '../../../store/store';
	import Wrapper from '@components/Wrapper.svelte';
	import Transition from '@lib/utils/transition/Transition.svelte';

	let disabled = getContext('disabled');

	const vesselId = $page.params.id;
	let isError = false;
	let isErrorName = false;
	let errors = [''];

	$: vessel = $VesselsStorage.find((v) => v.id === vesselId) || defaultValue;

	onMount(() => {
		$disabled = true;
	});
</script>

<Transition>
	<div class="w-full flex flex-col space-y-5">
		<Wrapper wrapperClass={'w-full'} title="ship details" disabled={false}>
			<div slot="content">
				<VesselForm
					bind:start_value={vessel.start_value}
					bind:isError
					bind:isErrorName
					bind:vesselName={vessel.name}
					bind:errors
					bind:disabled={$disabled}
				/>
			</div>
		</Wrapper>
		<Wrapper
			wrapperClass={'w-full'}
			title="survey"
			disabled={false}
			hasTitleAction={true}
			icon="plus"
			href={`${base}/vessel/${vesselId}/survey`}
		>
			<div slot="content">no content</div>
		</Wrapper>
	</div>
</Transition>
