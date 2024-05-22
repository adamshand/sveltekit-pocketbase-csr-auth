<script lang="ts">
	export let data;
</script>

<h2>Profile: {data?.user?.name}</h2>
<ul>
	{#each Object.keys(data?.user) as fields}
		<li><b>{fields}:</b> {data?.user[fields]}</li>
	{/each}
</ul>
