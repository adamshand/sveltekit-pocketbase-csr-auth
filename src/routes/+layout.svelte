<script>
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { logout, pb } from '$lib/pocketbase';
	import { pbUser } from '$lib/pocketbase';

	$: avatarImage = $pbUser?.avatar
		? pb.getFileUrl($pbUser, $pbUser.avatar, { thumb: '100x100' })
		: null;

	const openmojiBaseUrl = 'https://cdn.jsdelivr.net/gh/hfg-gmuend/openmoji/color/svg/';
</script>

<svelte:head>
	{#if dev}
		<link href={openmojiBaseUrl + '1F534.svg'} rel="icon" />
	{:else}
		<link href={openmojiBaseUrl + '1F342.svg'} rel="icon" />
	{/if}
</svelte:head>

<nav>
	<span>
		{#if $pbUser?.avatar}
			<img alt={$pbUser?.Name} src={avatarImage} title={$pbUser?.Name} />
		{:else}
			<img alt="Emoji of Sunrise" src={openmojiBaseUrl + '1F30F.svg'} />
		{/if}
		<a href="/">Home</a> &middot;
		<a href="/blah">Blah</a> &middot;
		<a href="/app">App</a> &middot;
		<a href="/app/profile">Profile</a>
	</span>
	{#if $pbUser}
		<button on:click={logout}>Logout</button>
	{:else if $page.url.pathname !== '/login'}
		<a href="/login">Login</a>
	{/if}
</nav>

<slot />

<style>
	nav {
		padding: 0.5rem;
		outline: 1px solid silver;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.3rem;
		font-weight: 600;
	}
	nav span {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
	}
	nav img {
		outline: 1px solid silver;
		padding: 3px;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
	}
	nav button {
		font-size: 1.2rem;
	}
</style>
