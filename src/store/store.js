// import { writable } from 'svelte/store';
import { persistent } from '@furudean/svelte-persistent-store';
// import { browser } from '$app/environment';

// export let storage = '';

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
		name: '1° MTC (Mean + 0.5m)',
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
	name: 'defaultValue',
	wasNameFocused: false,
	start_value: [
		{ name: 'light-ship', value: NaN, wasfocusedCount: false },
		{ name: 'd-fwd-pp', value: NaN, wasfocusedCount: false },
		{ name: 'lbp', value: NaN, wasfocusedCount: false },
		{ name: 'd-mid-pp', value: NaN, wasfocusedCount: false },
		{ name: 'lbm', value: NaN, wasfocusedCount: false },
		{ name: 'd-aft-pp', value: NaN, wasfocusedCount: false },
		{ name: 'keel-thk', value: NaN, wasfocusedCount: false }
	],
	status: 'Initial',
	stage: 'new',
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
