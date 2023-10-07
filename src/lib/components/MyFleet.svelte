<script>
	import Button from './ui/Button.svelte';
</script>

<div>
	<Button
		isButton={false}
		href="/create-fleet"
		classProp="flex w-full"
		message="My Fleet"
		chooseType="primary"
		icon="plus"
		size="lg"
	/>
</div>
