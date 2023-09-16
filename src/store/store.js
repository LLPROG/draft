import { writable } from 'svelte/store';
import { persistent } from '@furudean/svelte-persistent-store';
import { browser } from '$app/environment';

export let storage = '';

const defaultValue = {
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
	]
};
export const Vessel = writable(defaultValue);
export const Vessels = writable([defaultValue]);
export const isStorage = writable(false);

if (browser) {
	const storage = localStorage.getItem('vessels') || '[]';
	console.log(storage);
	if (storage?.length > 1) {
		Vessels.set(JSON.parse(storage));
		console.log('Vessels', Vessels);
	}
}

export const VesselsStorage = persistent({
	start_value: [defaultValue],
	key: 'Vessels', // key to save as in Storage
	storage_type: 'sessionStorage' // Storage object to use
});

VesselsStorage.subscribe((value) => {
	console.log('VesselsStorage', value);
});
