import { persistent } from '@furudean/svelte-persistent-store';

export let defaultInitialData = {
	voy: NaN,
	year: NaN,
	Port: ''
};

export let defaultCategories = [
	{
		name: 'Mean Corrected',
		total: 0,
		left: NaN,
		right: NaN
	},
	{
		name: 'Displacement',
		total: 0,
		left: NaN,
		right: NaN
	},
	{
		name: 'TPC',
		total: 0,
		left: NaN,
		right: NaN
	},
	{
		name: 'LCF',
		total: 0,
		left: NaN,
		right: NaN
	},
	{
		name: 'Mean Corrected',
		total: 0,
		left: NaN,
		right: NaN
	},
	{
		name: '1° MTC (Mean + 0.5m)',
		total: 0,
		left: NaN,
		right: NaN
	},
	{
		name: 'Mean Corrected',
		total: 0,
		left: NaN,
		right: NaN
	},
	{
		name: '2° MTC (Mean - 0.5m)',
		total: 0,
		left: NaN,
		right: NaN
	}
];

export let defaultDraftsLeft = [
	{
		name: 'Fwd',
		value: NaN
	},
	{
		name: 'Mid',
		value: NaN
	},
	{
		name: 'Aft',
		value: NaN
	}
];

export let defaultDraftsRight = [
	{
		name: 'Fwd',
		value: NaN
	},
	{
		name: 'Mid',
		value: NaN
	},
	{
		name: 'Aft',
		value: NaN
	}
];

export let defaultWeight = [
	{
		name: 'Ballast',
		value: NaN
	},
	{
		name: 'Fresh water',
		value: NaN
	},
	{
		name: 'Fuel Oil',
		value: NaN
	},
	{
		name: 'Diesel Oil',
		value: NaN
	},
	{
		name: 'Lube Oil',
		value: NaN
	},
	{
		name: 'Other',
		value: NaN
	},
	{
		name: 'Other Cargo',
		value: NaN
	},
	{
		name: 'Constant',
		value: NaN
	}
];

export let trimR = [
	{ label: 'True Trim', value: 0 },
	{ label: 'Hoggin', value: 0 },
	{ label: 'Mean', value: 0 },
	{ label: 'Keel THK', value: 0 },
	{ label: 'Mean Corrected', value: 0 }
];

export let displacementR = [
	{ label: 'Displacement', value: 0 },
	{ label: 'TPC', value: 0 },
	{ label: 'LCF', value: 0 },
	{ label: '1°MTC', value: 0 },
	{ label: '2°MTC', value: 0 },
	{ label: 'Mean Corrected', value: 0 }
];

export let correctionsR = [
	{ label: '1° Trim Correction', value: 0 },
	{ label: '2° Trim Correction', value: 0 },
	{ label: 'Density Correction', value: 0 }
];

export let finalDisplacementR = [
	{ label: 'Final Displacement', value: 0 },
	{ label: 'Light Ship', value: 0 },
	{ label: 'DWT', value: 0 }
];

export let weigthR = [
	{ label: 'Ballast', value: 0 },
	{ label: 'Fresh Water', value: 0 },
	{ label: 'Fuel Oil', value: 0 },
	{ label: 'Diesel Oil', value: 0 },
	{ label: 'Lube Oil', value: 0 },
	{ label: 'Other Tanks', value: 0 },
	{ label: 'Other Cargo', value: 0 },
	{ label: 'Deductions', value: 0 }
];

export const defaultValue = {
	id: 0,
	name: 'defaultValue',
	wasNameFocused: false,
	start_value: [
		{ name: 'light-ship', value: 0, wasfocusedCount: false },
		{ name: 'd-fwd-pp', value: 0, wasfocusedCount: false },
		{ name: 'lbp', value: 0, wasfocusedCount: false },
		{ name: 'd-mid-pp', value: 0, wasfocusedCount: false },
		{ name: 'lbm', value: 0, wasfocusedCount: false },
		{ name: 'd-aft-pp', value: 0, wasfocusedCount: false },
		{ name: 'keel-thk', value: 0, wasfocusedCount: false }
	],
	status: 'undefined',
	initialData: { ...defaultInitialData },
	categories: [...defaultCategories],
	draftLeft: [...defaultDraftsLeft],
	draftsRight: [...defaultDraftsRight],
	weight: [...defaultWeight],
	waterDensityValue: 0,
	tables: [],
	results: {
		trimResult: [...trimR],
		displacementResult: [...displacementR],
		correctionsResult: [...correctionsR],
		finalDisplacementResult: [...finalDisplacementR],
		weightResult: [...weigthR],
		constantR: [{ label: 'Costant', value: 0 }]
	}
};

export const VesselsStorage = persistent({
	start_value: [],
	key: 'Vessels', // key to save as in Storage
	storage_type: 'sessionStorage' // Storage object to use
});
