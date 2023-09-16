<script>
	import VesselForm from '../../components/VesselForm.svelte';
	import { page } from '$app/stores';
	import { VesselsStorage } from '../../../store/store';

	let vesselName = $page.url.pathname.split('/')[2];

	let vessel = $VesselsStorage.find((v) => v.name === vesselName);
</script>

<div>
	<VesselForm bind:vesselName bind:vessel redirect="/home" disabled={true} />
</div>
