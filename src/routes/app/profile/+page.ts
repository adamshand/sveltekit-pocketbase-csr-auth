import { pb } from '$lib/pocketbase';

export const load = async () => {
	// This is a dumb, but is an exaple of how to query PB as an authenticated user
	const records = await pb.collection('users').getFullList({
		sort: '-created'
	});

	return {
		user: records[0]
	};
};
