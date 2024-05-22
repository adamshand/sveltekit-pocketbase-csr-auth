import { goto, invalidateAll } from '$app/navigation';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import Pocketbase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new Pocketbase(PUBLIC_POCKETBASE_URL);
export const pbUser = writable(pb.authStore.model);

pb.authStore.onChange(() => {
	pbUser.set(pb.authStore.model);
}, true);

export async function logout() {
	pb.authStore.clear();
	await invalidateAll();
	goto('/?message="logged out"');
}
