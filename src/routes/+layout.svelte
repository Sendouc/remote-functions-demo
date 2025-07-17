<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/blog">blog</a>
</nav>

<svelte:boundary>
	{@render children()}

	{#snippet pending()}{/snippet}

	{#snippet failed(error)}
		<p>something went horribly wrong: {(error as Error).message}</p>
	{/snippet}
</svelte:boundary>
