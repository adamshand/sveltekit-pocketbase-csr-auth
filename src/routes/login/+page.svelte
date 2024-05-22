<script lang="ts">
	import { dev } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { PUBLIC_DEVPASS, PUBLIC_DEVUSER } from '$env/static/public';
	import { pb } from '$lib/pocketbase';
	import { pbUser } from '$lib/pocketbase';

	let username: string;
	let password: string;
	let message = $page.url.searchParams.get('message');

	$: if (dev) {
		username = PUBLIC_DEVUSER;
		password = PUBLIC_DEVPASS;
	}

	async function handleLogin() {
		try {
			await pb.collection('users').authWithPassword(username, password);
			username = '';
			password = '';
			goto('/app?message="logged in successfully"');
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			dev && console.error('(dev) /login: ', error.message);
			message = error.message;
		}
	}
</script>

{#if $pbUser}
	<h2>You are already logged in</h2>
{:else}
	<form on:submit|preventDefault={handleLogin}>
		<h2>Login to Pocketbase</h2>
		<label for="username"
			>Username or Email
			<input
				autocomplete="on"
				bind:value={username}
				id="username"
				name="username"
				type="text"
			/></label
		>
		<label for="password"
			>Password
			<input
				autocomplete="on"
				bind:value={password}
				id="password"
				name="password"
				type="password"
			/></label
		>
		<button type="submit">Login</button>

		{#if message}
			<div id="error">
				<span>{message}</span>
			</div>
		{/if}
	</form>
{/if}

<style>
	form {
		display: flex;
		flex-direction: column;
		margin: auto;
		width: 32ch;
		gap: 1rem;
	}
	input {
		margin-top: 0.5rem;
		width: 100%;
	}
	#error {
		outline: 2px dashed;
		padding: 0.5rem;
		font-style: italic;
		color: crimson;
	}
</style>
