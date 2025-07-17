<script>
	let { children } = $props();
</script>

<svelte:boundary>
	{@render children()}

	{#snippet pending()}{/snippet}
</svelte:boundary>
