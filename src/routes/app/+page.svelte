<script lang="ts">
	import { pbUser } from '$lib/pocketbase';
</script>

<h1>Welcome {$pbUser?.name || ''}</h1>
{#if $pbUser}
	<div>
		Your account has
		{#if $pbUser?.verified}
			been
		{:else}
			not been
		{/if}
		verified.
	</div>
	<p>Any routes from here down require authentication.</p>
	<p>If an unauthenticated user tries to access, they will be redirected to <code>/login</code>.</p>
{:else}
	<h2>
		This page requires authentication. You shouldn't see this and should be redirected automatically
		to <code>/login</code>.
	</h2>
{/if}

<style>
	div {
		outline: 2px dashed crimson;
		padding: 0.5rem;
		font-weight: bold;
	}
</style>
