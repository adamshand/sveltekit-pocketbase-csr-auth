import { dev } from '$app/environment';
import { pb } from '$lib/pocketbase';
import { redirect } from '@sveltejs/kit';

export async function load({ url }) {
	// `pb.authStore.isValid` loosely checks the current status of your AuthStore state (aka. whether it has nonemtpy token with unexpired exp claim). It doesn't perform any server-side calls or validations.
	if (!pb.authStore.isValid) {
		redirect(302, `/login?message=${url.pathname} requires authentation`);
	}

	try {
		// `await pb.collection('users').authRefresh()` refreshes (and validates) the currently stored auth state with the server. It sends a POST /api/collections/users/auth-refresh request.
		await pb.collection('users').authRefresh();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		dev && console.error('(dev) /app/+layout.ts: ', error.message);
		pb.authStore.clear();
		redirect(302, '/login?message=error logging in');
	}
}

export const ssr = false;
