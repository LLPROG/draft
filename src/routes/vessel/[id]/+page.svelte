<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Navbar from '@components/Navbar.svelte';
	import VesselForm from '@components/VesselForm.svelte';
	import Wrapper from '@components/Wrapper.svelte';
	import Button from '@components/ui/Button.svelte';
	import Transition from '@lib/utils/transition/Transition.svelte';
	import { VesselsStorage, defaultValue, mockData } from '../../../store/store';

	type InitialSurvey = {
		voy: number;
		year: number;
		Port: string;
	};

	type Vessel = typeof mockData;

	const vesselId = $page.params.id;
	const surveyId = 1;

	let isError = false;
	let isErrorName = false;
	let errors = [''];
	let disabled = true;

	let vessel: Vessel = $VesselsStorage.find((v) => v.id === vesselId) || defaultValue;

	const surveyName = (survey: InitialSurvey) => {
		return `${survey.year} - ${survey.Port} - ${survey.voy}`;
	};

	const onSave = () => {
		$VesselsStorage = $VesselsStorage.map((v) => (v.id === vesselId ? vessel : v));
		disabled = true;
	};
</script>

<Transition>
	<div class="w-full flex flex-col space-y-5">
		<Navbar>
			<div slot="content">
				<p>{vessel.name}</p>
			</div>
			<div slot="action">
				{#if disabled}
					<Button
						classProp=""
						chooseType="only-icon"
						icon="modify"
						size="md"
						on:click={() => (disabled = false)}
					/>
				{:else}
					<Button classProp="" chooseType="only-icon" icon="save" size="md" on:click={onSave} />
				{/if}
			</div>
		</Navbar>
		<Wrapper wrapperClass={'w-full'} title="ship details" disabled={false}>
			<div slot="content">
				<VesselForm
					bind:start_value={vessel.start_value}
					bind:isError
					bind:isErrorName
					bind:vesselName={vessel.name}
					bind:errors
					bind:disabled
				/>
			</div>
		</Wrapper>
		<Wrapper
			wrapperClass={'w-full'}
			title="survey"
			disabled={false}
			hasTitleAction={true}
			icon="plus"
			href={`${base}/vessel/${vesselId}/survey/${surveyId}`}
		>
			<div
				slot="content"
				class="w-full overflow-y-scroll max-h-[35svh] py-1 max-h-100 gap-2 px-5 flex flex-col justfy-start"
			>
				{#each vessel.surveys as survey, i}
					{#if survey.initialData}
						<Button
							on:click
							chooseType="secondary"
							icon="arrow"
							size="md"
							message={surveyName(survey.initialData)}
						/>
					{/if}
				{/each}
			</div>
		</Wrapper>
	</div>
</Transition>
