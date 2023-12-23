import Papa from 'papaparse';

export const uploadCVS = (event, storage, indexStorage) => {
	let csvData = null;

	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			const csvContent = e?.target?.result;

			Papa.parse(csvContent, {
				complete: function (results) {
					// CHANGE TYPE OF DATA TO NUMBER
					csvData = results.data.map((r) => r.map((c) => Number(c)));

					storage[indexStorage].tables = csvData;
				}
			});
		};

		reader.readAsText(file);
	}
};
