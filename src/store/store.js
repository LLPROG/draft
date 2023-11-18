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

export let defaultDraftsA = [
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

export let defaultDraftsB = [
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
	draftsA: [...defaultDraftsA],
	draftsB: [...defaultDraftsB],
	weight: [...defaultWeight],
	waterDensityValue: 0
};

export const VesselsStorage = persistent({
	start_value: [],
	key: 'Vessels', // key to save as in Storage
	storage_type: 'sessionStorage' // Storage object to use
});
