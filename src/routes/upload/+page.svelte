<script>
	import Papa from 'papaparse';

	let csvData = null;

	function handleFileUpload(event) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = function (e) {
				const csvContent = e?.target?.result;

				Papa.parse(csvContent, {
					complete: function (results) {
						csvData = results.data;
						console.log('Finished:', results.data);
					}
				});
			};

			reader.readAsText(file);
		}
	}
</script>

<input type="file" accept=".csv" on:change={handleFileUpload} />
<!-- Visualizza i dati CSV nell'interfaccia utente come desiderato -->
