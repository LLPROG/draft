<script>
	import Papa from 'papaparse';
	import { VesselsStorage } from '../../store/store';
	import { page } from '$app/stores';

	let csvData = null;

	function handleFileUpload(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = function (e) {
				const csvContent = e?.target?.result;

				Papa.parse(csvContent, {
					complete: function (results) {
						csvData = results.data.map((r) => r.map((c) => Number(c)));

						// CHANGE TYPE OF DATA TO NUMBER

						console.log(csvData);
						$VesselsStorage[0] = {
							...$VesselsStorage[0],
							tables: csvData
						};
					}
				});
			};

			reader.readAsText(file);
		}
	}
</script>

<input type="file" accept=".csv" on:change={handleFileUpload} />
<!-- Visualizza i dati CSV nell'interfaccia utente come desiderato -->
